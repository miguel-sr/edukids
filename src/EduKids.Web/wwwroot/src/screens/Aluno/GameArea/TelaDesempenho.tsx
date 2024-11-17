import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type ResumoScreenRouteProp = RouteProp<RootStackParamList, 'Resumo'>;

export default function Resumo() {
  const navigation: StackNavigationProp<RootStackParamList, 'Resumo'> = useNavigation();
  const route: ResumoScreenRouteProp = useRoute();

  const { correctAnswers = 0, wrongAnswers = 0 } = route.params;

  const totalQuestions = correctAnswers + wrongAnswers;
  const successRate = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

  let message = '';

  if (successRate < 60) {
    message = 'Vamos tentar novamente?';
  } else if (successRate >= 60 && successRate <= 70) {
    message = 'Estamos no caminho certo, amiguinho!';
  } else if (successRate > 70) {
    message = 'UAU! Você aprendeu muito, coleguinha! Parabéns!';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Jogo</Text>
      <Text style={styles.result}>Respostas Certas: {correctAnswers}</Text>
      <Text style={styles.result}>Respostas Erradas: {wrongAnswers}</Text>
      <Text style={styles.message}>{message}</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Tela1')} 
      >
        <Text style={styles.buttonText}>Jogar Novamente</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3edea',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#841584',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
