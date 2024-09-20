import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import logo from '../../assets/BackgroundCeu.png'

export default function TelaInicial() {
  const handleButtonPress = (menuOption: string) => {
    // Adicione aqui a lógica para cada botão
    console.log(`Botão ${menuOption} pressionado`)
  }

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
          onPress={() => handleButtonPress('Gerar Matéria')}
        >
          <Text style={styles.buttonText}>Gamificar Matéria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Configurações')}
        >
          <Text style={styles.buttonText}>Adicionar nova matéria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Relatórios')}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  )
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
})
