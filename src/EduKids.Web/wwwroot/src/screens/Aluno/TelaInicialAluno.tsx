import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';
import logo from '../../assets/BackgroundCeu.png';

export default function TelaInicialAluno() {
  const [fontsLoaded] = useFonts({
    KaushanScript: require('../../assets/fonts/KaushanScript.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  const handleButtonPress = (menuOption: string) => {
    console.log(`Botão ${menuOption} pressionado`);
  };

  return (
    <ImageBackground source={logo} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#D70000' }]}
          onPress={() => handleButtonPress('História')}
        >
          <Text style={styles.buttonText}>H</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#A4D43C' }]}
          onPress={() => handleButtonPress('Português')}
        >
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4607CA' }]}
          onPress={() => handleButtonPress('Matemática')}
        >
          <Text style={styles.buttonText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FFEB3A' }]}
          onPress={() => handleButtonPress('Geografia')}
        >
          <Text style={styles.buttonText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#D835DC' }]}
          onPress={() => handleButtonPress('Inglês')}
        >
          <Text style={styles.buttonText}>I</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#EF03AD' }]}
          onPress={() => handleButtonPress('L')}
        >
          <Text style={styles.buttonText}>L</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '30%',
    aspectRatio: 1 / 1,
    backgroundColor: '#007BFF',
    borderRadius: 9999,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'center',
    fontFamily: 'KaushanScript',
  },
});
