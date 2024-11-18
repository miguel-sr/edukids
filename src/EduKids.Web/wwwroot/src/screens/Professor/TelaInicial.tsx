import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/BackgroundCeu.png';
import { useNavigation } from '@react-navigation/native';
import { ObterTodosProfessores } from '../../services/actions';

export default function TelaInicial() {
  const navigation: any = useNavigation();
  const [professores, setProfessores] = useState([]);

  const fetchProfessores = async () => {
    try {
      const professoresObtidos = await ObterTodosProfessores();
      console.log(professoresObtidos);
      setProfessores(professoresObtidos);
    } catch (error) {
      console.error('teste:', error);
    }
  };

  const handleButtonPress = (menuOption: string) => {
    navigation.navigate(menuOption);
  };

  const handleLogout = () => {
    navigation.navigate('Login'); // Certifique-se de que 'Login' é o nome correto da rota de login
  };

  return (
    <ImageBackground source={logo} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem-vindo(a), Professor!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Turmas')}
        >
          <Text style={styles.buttonText}>Acompanhar Turmas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('GameMateria')}
        >
          <Text style={styles.buttonText}>Gamificar Matéria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('UpdateLoginScreen')}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: '55%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#FF5733',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
