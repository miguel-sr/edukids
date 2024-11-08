import React, { useRef } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import girl from '../../../assets/assetsJogo/menina.png';
import coin from '../../../assets/assetsJogo/moeda.png';
import tower from '../../../assets/assetsJogo/torre.png';
import cloud from '../../../assets/assetsJogo/nuvem.png';
import flower from '../../../assets/assetsJogo/flor.png';
import ground from '../../../assets/assetsJogo/chao.png';
import lawn from '../../../assets/assetsJogo/gramado.png';
import { useNavigation } from '@react-navigation/native';

export default function GameScreen() {
  const navigation:any = useNavigation();
  const girlPosition = useRef(new Animated.Value(0)).current; 

  const handleLogin = () => {
    Animated.timing(girlPosition, {
      toValue: 100, 
      duration: 1000, 
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Tela2');

    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleLogin} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.background}>
          <Image source={cloud} style={[styles.cloud, { top: 20, left: 10 }]} />
          <Image source={cloud} style={[styles.cloud2, { top: 50, right: 10 }]} />

          <Image source={tower} style={styles.tower} />

          <Image source={lawn} style={styles.lawn} />

          <Image source={flower} style={styles.flower} />

          <Image source={coin} style={[styles.coin, { top: 150, left: 200 }]} />
          <Image source={coin} style={[styles.coin, { top: 150, left: 260 }]} />

          <Animated.Image 
            source={girl} 
            style={[styles.girl, { transform: [{ translateX: girlPosition }] }]} 
          />

          <View style={styles.dialogueBox}>
            <Text style={styles.dialogueText}>
              Era uma vez uma menina que precisava comprar maçãs para seu pai...
            </Text>
          </View>
        </View>

        <ImageBackground source={ground} style={styles.ground} />
        <ImageBackground source={ground} style={styles.ground2} />
      </View>
    </TouchableOpacity>
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
    top: 20,
    left: '40%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flower: {
    position: 'absolute',
    top: 80,
    right: 250,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  coin: {
    position: 'absolute',
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
    bottom: 220, 
    left: '10%', 
    width: '70%', 
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
  ground: {
    position: 'absolute',
    top: 150,
    left: 150,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  ground2: {
    position: 'absolute',
    top: 150,
    left: -150,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  lawn: {
    position: 'absolute',
    top: 70,
    left: '20%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
