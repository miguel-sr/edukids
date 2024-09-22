import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import girl from '../../../assets/assetsJogo/menina.png';
import boy from '../../../assets/assetsJogo/menino.png';
import tree from '../../../assets/assetsJogo/arvore.png';
import coin from '../../../assets/assetsJogo/moeda.png';
import house from '../../../assets/assetsJogo/casaMarrom.png';
import flower from '../../../assets/assetsJogo/flor.png';
import ground from '../../../assets/assetsJogo/chao.png';
import cloud from '../../../assets/assetsJogo/nuvem.png';
import * as ScreenOrientation from 'expo-screen-orientation'; 


export default function GameScreen() {
  const navigation:any = useNavigation();

  const handleLogin = () => {
    navigation.navigate("introductionGame"); // "TelaInicial" é o nome da rota, não o componente
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE); // Definindo a orientação como paisagem (landscape)
    
    // Desbloquear a orientação quando o componente for desmontado
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  // Animações para as nuvens
  const cloudAnim1 = useRef(new Animated.Value(0)).current;
  const cloudAnim2 = useRef(new Animated.Value(0)).current;
  const cloudAnim3 = useRef(new Animated.Value(0)).current;

  // Animação de pulso para a moeda
  const coinAnim1 = useRef(new Animated.Value(1)).current;
  const coinAnim2 = useRef(new Animated.Value(1)).current;

  // Animações do chão
  const groundAnim1 = useRef(new Animated.Value(0)).current;
  const groundAnim2 = useRef(new Animated.Value(0)).current;
  const groundAnim3 = useRef(new Animated.Value(0)).current;
  const groundAnim4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação das nuvens
    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudAnim1, {
          toValue: 20,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(cloudAnim1, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudAnim2, {
          toValue: -20,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(cloudAnim2, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudAnim3, {
          toValue: 15,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(cloudAnim3, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animação de pulso nas moedas
    Animated.loop(
      Animated.sequence([
        Animated.timing(coinAnim1, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(coinAnim1, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(coinAnim2, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(coinAnim2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animação do chão
    Animated.loop(
      Animated.sequence([
        Animated.timing(groundAnim1, {
          toValue: 5,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(groundAnim1, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(groundAnim2, {
          toValue: -5,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(groundAnim2, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(groundAnim3, {
          toValue: 4,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(groundAnim3, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(groundAnim4, {
          toValue: -4,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(groundAnim4, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={() => {}} activeOpacity={1}>
      <ImageBackground style={styles.background}>
        <View style={styles.gameArea}>

          {/* Casa */}
          <Image source={house} style={styles.house} />

          {/* Moedas com animação de pulso */}
          <Animated.Image source={coin} style={[styles.coin1, { transform: [{ scale: coinAnim1 }] }]} />
          <Animated.Image source={coin} style={[styles.coin2, { transform: [{ scale: coinAnim2 }] }]} />

          {/* Menina */}
          <Image source={girl} style={styles.girl} />

          {/* Menino */}
          <Image source={boy} style={styles.boy} />

          {/* Árvore */}
          <Image source={tree} style={styles.tree} />

          {/* Flor */}
          <Image source={flower} style={styles.flower} />

          {/* Nuvens com animação de flutuação */}
          <Animated.Image source={cloud} style={[styles.cloud, { transform: [{ translateY: cloudAnim1 }] }]} />
          <Animated.Image source={cloud} style={[styles.cloud2, { transform: [{ translateY: cloudAnim2 }] }]} />
          <Animated.Image source={cloud} style={[styles.cloud3, { transform: [{ translateY: cloudAnim3 }] }]} />

          {/* Chão com animação de pulsar */}
          <Animated.Image source={ground} style={[styles.ground, { transform: [{ translateY: groundAnim1 }] }]} />
          <Animated.Image source={ground} style={[styles.ground2, { transform: [{ translateY: groundAnim2 }] }]} />
          <Animated.Image source={ground} style={[styles.ground3, { transform: [{ translateY: groundAnim3 }] }]} />
          <Animated.Image source={ground} style={[styles.ground4, { transform: [{ translateY: groundAnim4 }] }]} />

          {/* Texto "Let's Play" */}
          <Text style={styles.text}>LET'S PLAY</Text>
          <Text style={styles.mathText}>Matemática</Text>

          {/* Instrução para clicar */}
          <Text style={styles.instruction} onPress={handleLogin}>Toque em qualquer lugar para continuar...</Text>

        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3edea',
  },
  gameArea: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    top: '15%',
    left: '40%',
    transform: [{ translateX: -150 }],
    fontSize: 100,
    color: '#FFB300',
    fontWeight: 'bold',
    textShadowColor: '#FF6F00',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10,
  },
  mathText: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -100 }],
    fontSize: 40,
    fontWeight: 'bold',
    color: 'transparent',
    backgroundColor: 'linear-gradient(to right, #00BFFF, #1E90FF)', // Azul gradiente
    textShadowColor: '#1E90FF',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  instruction: {
    position: 'absolute',
    bottom: '5%',
    left: '45%',
    transform: [{ translateX: -160 }],
    fontSize: 25,
    color: '#fff',
    fontStyle: 'italic',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  girl: {
    position: 'absolute',
    top: '18%',
    right: '10%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  boy: {
    position: 'absolute',
    top: '18%',
    left: '20%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tree: {
    position: 'absolute',
    top: '12%',
    right: '25%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flower: {
    position: 'absolute',
    bottom: 75,
    right: '40%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  coin1: {
    position: 'absolute',
    top: '18%',
    right: '15%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  coin2: {
    position: 'absolute',
    top: '18%',
    left: '28%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  house: {
    position: 'absolute',
    bottom: '8%',
    left: '70%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 150,
    width: '100%',
    height: '20%',
    resizeMode: 'cover',
  },
  ground2: {
    position: 'absolute',
    bottom: 0,
    left: -150,
    width: '100%',
    height: '20%',
    resizeMode: 'cover',
  },
  ground3: {
    position: 'absolute',
    top: 160,
    left: -580,
    width: '100%',
    height: '20%',
    resizeMode: 'cover',
  },
  ground4: {
    position: 'absolute',
    top: 110,
    right: -550,
    width: '100%',
    height: '20%',
    resizeMode: 'cover',
  },
  cloud: {
    position: 'absolute',
    bottom: '1%',
    right: -150,
    width: '150%',
    height: '150%',
    resizeMode: 'contain',
  },
  cloud2: {
    position: 'absolute',
    bottom: '35%',
    left: '50%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cloud3: {
    position: 'absolute',
    bottom: '35%',
    left: '-50%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
