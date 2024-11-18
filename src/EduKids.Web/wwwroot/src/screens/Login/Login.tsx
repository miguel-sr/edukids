import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/Login.png';
import { useNavigation } from '@react-navigation/native';

// Manter o import do jwt-decode dessa forma, pois o pacote não possui export default
import { jwtDecode } from 'jwt-decode';
import { Login } from '../../services/actions';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backendMessage, setBackendMessage] = useState(''); // Estado para a mensagem do backend
  const navigation: any = useNavigation();

  const fetchLogin = async () => {
    try {
      const response = await Login(username, password);

      if (response) {
        const decodedToken: any = jwtDecode(response);

        console.log('Token decodificado:', decodedToken);

        const userRole = decodedToken.role;

        switch (userRole) {
          case 'Aluno':
            navigation.navigate('TelaInicialAluno');
            break;
          case 'Professor':
            navigation.navigate('TelaInicial');
            break;
          case 'Coordenador':
            navigation.navigate('TelaInicial');
            break;
          default:
            console.error('Role desconhecido:', userRole);
            break;
        }
      }
    } catch (error: any) {
      console.error('Erro no login:', error.response?.data || error.message);
      setBackendMessage(error.response?.data || error.message);
    }
  };

  return (
    <ImageBackground source={logo} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem vindo(a)!</Text>

        {/* Mensagem do backend */}
        {backendMessage ? (
          <Text style={styles.backendMessage}>{backendMessage}</Text>
        ) : null}

        {/* Input para nome de usuário */}
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          value={username}
          onChangeText={setUsername}
        />

        {/* Input para senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Seletor de tipo de usuário */}
        {/* <Picker
          selectedValue={userRole}
          style={styles.picker}
          onValueChange={(itemValue) => setUserRole(itemValue)}
        >
          <Picker.Item label="Aluno" value="Aluno" />
          <Picker.Item label="Professor" value="Professor" />
          <Picker.Item label="Coordenador" value="Coordenador" />
        </Picker> */}

        {/* Botão de login */}
        <TouchableOpacity style={styles.button} onPress={fetchLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    marginTop: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backendMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
