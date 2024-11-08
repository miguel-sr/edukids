import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
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



export default function Tela6() {

  const navigation:any = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Tela7"); 
    
  };

  const handleDogClick = () => {
    navigation.navigate('Tela8');
  };

    return (
    <TouchableOpacity style={styles.container} onPress={handleLogin} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.background}>
          <Image source={cloud} style={[styles.cloud, { top: 20, left: 10 }]} />
          <Image source={cloud} style={[styles.cloud2, { top: 50, right: 10 }]} />
  
          <Image source={casaMarrom} style={styles.tower} />

          <Image source={girl} style={styles.girl} />

          <TouchableOpacity onPress={handleDogClick} >
            <Image source={dog} style={styles.dog} />
          </TouchableOpacity>

          <View style={styles.dialogueBox}>
            <Text style={styles.dialogueText}>
            Amiguinho, agora preciso de sua ajuda!            
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
      top: 40,
      left: '40%',
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    flower: {
      position: 'absolute',
      top: 28,
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
    dog: {
        position: 'absolute',
        top: 75,
        right: 220,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
    dialogueBox: {
      position: 'absolute',
      bottom: 200, 
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
  