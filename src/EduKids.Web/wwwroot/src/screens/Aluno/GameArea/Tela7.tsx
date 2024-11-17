import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import girl from '../../../assets/assetsJogo/menina.png';
import cloud from '../../../assets/assetsJogo/nuvem.png';
import casaMarrom from '../../../assets/assetsJogo/casaMarrom.png';
import ground from '../../../assets/assetsJogo/chao.png';

type RootStackParamList = {
  Tela7: undefined;
  Resumo: { correctAnswers: number; wrongAnswers: number };
};

type Question = {
  question: string;
  options: string[];
  correct: string;
};

export default function Tela7() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Tela7'>>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response: Question[] = [
        { question: 'Quantas maçãs posso comprar com as 5 moedas?', options: ['4', '5'], correct: '5' },
        { question: 'Quantos dias há em uma semana?', options: ['6', '7'], correct: '7' },
      ];
      setQuestions(response);
    };
    fetchQuestions();
  }, []);

  const handleOption = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigation.navigate('Resumo', {
        correctAnswers: correctAnswers + (selectedOption === currentQuestion.correct ? 1 : 0),
        wrongAnswers: wrongAnswers + (selectedOption !== currentQuestion.correct ? 1 : 0),
      });
    }
  };

  if (questions.length === 0) {
    return <Text>Carregando perguntas...</Text>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={cloud} style={[styles.cloud, { top: 20, left: 10 }]} />
        <Image source={cloud} style={[styles.cloud2, { top: 50, right: 10 }]} />
        <Image source={casaMarrom} style={styles.tower} />
        <Image source={girl} style={styles.girl} />

        <View style={styles.dialogueBox}>
          <Text style={styles.dialogueText}>{currentQuestion.question}</Text>
        </View>

        {currentQuestion.options.map((option, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              { backgroundColor: pressed ? '#5a0d65' : '#841584' },
              styles.button,
              { top: -150 + index * 30, left: '40%' },
            ]}
            onPress={() => handleOption(option)}
          >
            <Text style={styles.buttonText}>{option}</Text>
          </Pressable>
        ))}
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
    bottom: 100, 
    left: '40%',
    width: 200,
    marginBottom: 20,
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 150,
    right: 0,
    height: 100,
    resizeMode: 'cover',
    width: '100%',
  },
  ground2: {
    position: 'absolute',
    bottom: 0,
    left: -150,
    right: 0,
    height: 100,
    resizeMode: 'cover',
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width:200
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
