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

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation: any = useNavigation();

  const handleLogin = () => {
    navigation.navigate('TelaInicial'); // "TelaInicial" é o nome da rota, não o componente
  };

  return (
    <ImageBackground source={logo} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem vindo(a)!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaInicialAluno')}
        >
          <Text style={styles.buttonText}>Login Aluno</Text>
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
    marginTop: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
