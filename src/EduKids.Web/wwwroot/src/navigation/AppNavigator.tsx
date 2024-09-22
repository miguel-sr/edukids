import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/Login/Login'
import TelaInicial from '../screens/Professor/TelaInicial'
import TelaInicialAluno from '../screens/Aluno/TelaInicialAluno'
import GameArea from '../screens/Aluno/GameArea/gameArea';
import introductionGame from '../screens/Aluno/GameArea/introductionGame';
import EscolhaTurma from '../screens/Professor/EscolhaTurma'

export type RootStackParamList = {
  Login: undefined;
  TelaInicial: undefined;
  TelaInicialAluno: undefined;
  TelaInicialJogo: undefined;
  introductionGame: undefined;
  EscolhaTurma: undefined;
};

const Stack = createStackNavigator<RootStackParamList>()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login', headerShown: true }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ title: 'Tela Inicial', headerShown: true }}
        />
        <Stack.Screen
          name="TelaInicialAluno"
          component={TelaInicialAluno}
          options={{ title: 'Tela Inicial Aluno', headerShown: true }}
        />
        <Stack.Screen name="TelaInicialJogo" component={GameArea} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="introductionGame" component={introductionGame} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="EscolhaTurma" component={EscolhaTurma} options={{ title: 'Tela Inicial', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
