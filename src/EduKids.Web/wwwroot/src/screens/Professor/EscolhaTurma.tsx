import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/BackgroundCeu.png';
import { useNavigation } from '@react-navigation/native';

export default function EscolhaTurma() {
  const navigation: any = useNavigation();

  const handleButtonPress = (menuOption: string) => {
    navigation.navigate('TelaInicialJogo');
  };

  return (
    <ImageBackground source={logo} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Escolha sua turma, Professor!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Turmas')}
        >
          <Text style={styles.buttonText}>1º Ano - A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Gerar Matéria')}
        >
          <Text style={styles.buttonText}>2º Ano - A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Configurações')}
        >
          <Text style={styles.buttonText}>3º Ano - B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Relatórios')}
        >
            <Text style={styles.title}>Adicionar uma nova turma:</Text>
            import Turma { TrumaState } from "";

        
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
});
