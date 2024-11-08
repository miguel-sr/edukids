import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import girl from '../../../assets/assetsJogo/menina.png';
import dog from '../../../assets/assetsJogo/dog.png';
import pai from '../../../assets/assetsJogo/pai.png';
import coin from '../../../assets/assetsJogo/moeda.png';
import casaMarrom from '../../../assets/assetsJogo/casaMarrom.png';
import cloud from '../../../assets/assetsJogo/nuvem.png';
import arvore from '../../../assets/assetsJogo/arvore.png';
import ground from '../../../assets/assetsJogo/chao.png';
import box from '../../../assets/assetsJogo/caixaDeTexto.png';
import lawn from '../../../assets/assetsJogo/gramado.png';
import { useNavigation } from '@react-navigation/native';

export default function Tela7() {
  const navigation: any = useNavigation();

  const handleOption = (option: string) => {
    if (option === '5') {
      navigation.navigate('TelaCerta');
    } else if (option === '4') {
      navigation.navigate('TelaErrada');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={cloud} style={[styles.cloud, { top: 20, left: 10 }]} />
        <Image source={cloud} style={[styles.cloud2, { top: 50, right: 10 }]} />

        <Image source={casaMarrom} style={styles.tower} />
        <Image source={girl} style={styles.girl} />

        <View style={styles.dialogueBox}>
          <Text style={styles.dialogueText}>Quantas maçãs posso comprar com as 5 moedas?</Text>
        </View>

        {/* Botão para 4 maçãs */}
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#5a0d65' : '#841584' },
            styles.button,
            styles.choiceButton,
          ]}
          onPress={() => handleOption('4')}
        >
          <Text style={styles.buttonText}>4 maçãs</Text>
        </Pressable>

        {/* Botão para 5 maçãs */}
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#5a0d65' : '#841584' },
            styles.button,
            styles.choiceButton,
          ]}
          onPress={() => handleOption('5')}
        >
          <Text style={styles.buttonText}>5 maçãs</Text>
        </Pressable>
      </View>
      <ImageBackground source={ground} style={styles.ground} />
      <ImageBackground source={ground} style={styles.ground2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3edea',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cloud: {
    position: 'relative',
    top: 1000,
    right: -150,
    width: '150%',
    height: '150%',
    resizeMode: 'contain',
  },
  cloud2: {
    position: 'absolute',
    top: '115%',
    left: '50%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tower: {
    position: 'absolute',
    top: 40,
    left: '40%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  girl: {
    position: 'absolute',
    top: 50,
    right: 150,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  dialogueBox: {
    position: 'absolute',
    bottom: 250, 
    left: '10%', 
    width: '80%', 
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: '#A9A9A9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, 
  },
  dialogueText: {
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'center',
  },
  choiceButton: {
    position: 'absolute',
    bottom: 100, // Ajuste a posição para colocar o botão em local clicável
    left: '25%',
    width: '50%',
    marginBottom: 20,
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    resizeMode: 'cover',
  },
  ground2: {
    position: 'absolute',
    bottom: 0,
    left: -150,
    right: 0,
    height: 100,
    resizeMode: 'cover',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
