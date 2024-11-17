import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/Login/Login'
import TelaInicial from '../screens/Professor/TelaInicial'
import TelaInicialAluno from '../screens/Aluno/TelaInicialAluno'
import GameArea from '../screens/Aluno/GameArea/gameArea';
import Tela1 from '../screens/Aluno/GameArea/Tela1';
import Tela2 from '../screens/Aluno/GameArea/Tela2';
import Tela3 from '../screens/Aluno/GameArea/Tela3';
import Tela4 from '../screens/Aluno/GameArea/Tela4';
import Tela5 from '../screens/Aluno/GameArea/Tela5';
import Tela6 from '../screens/Aluno/GameArea/Tela6';
import Tela7 from '../screens/Aluno/GameArea/Tela7';
import Tela8 from '../screens/Aluno/GameArea/HelpDog';
import TelaCerta from '../screens/Aluno/GameArea/TelaCerta';
import TelaErrada from '../screens/Aluno/GameArea/TelaErrada';
import Turmas from '../screens/Professor/Turmas';
import Alunos from '../screens/Professor/Alunos';
import MateriaTela from '../screens/Professor/Materias';
import UpdateLoginScreen from '../screens/Configuracoes/Configuracoes';
import GameMateria from '../screens/Professor/GamificarMateria'
import Resumo from '../screens/Aluno/GameArea/TelaDesempenho'

export type RootStackParamList = {
  Login: undefined;
  TelaInicial: undefined;
  TelaInicialAluno: undefined;
  TelaInicialJogo: undefined;
  introductionGame: undefined;
  Tela1: undefined;
  Tela2:undefined;
  Tela3:undefined;
  Tela4:undefined;
  Tela5:undefined;
  Tela6:undefined;
  Tela7:undefined;
  Tela8:undefined;
  TelaCerta:undefined;
  TelaErrada:undefined;
  Turmas:undefined;
  Alunos:undefined;
  MateriaTela:undefined;
  UpdateLoginScreen:undefined;
  GameMateria:undefined;
  Resumo: { correctAnswers: number | undefined; wrongAnswers: number | undefined };
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
        <Stack.Screen name="Tela1" component={Tela1} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="Tela3" component={Tela3} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="Tela4" component={Tela4} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="Tela5" component={Tela5} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="Tela6" component={Tela6} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="Tela7" component={Tela7} options={{ title: 'Tela Inicial', headerShown: false }} />
        <Stack.Screen name="Tela8" component={Tela8} options={{ title: 'Tela8', headerShown: false }} />
        <Stack.Screen name="TelaCerta" component={TelaCerta} options={{ title: 'TelaCerta', headerShown: false }} />
        <Stack.Screen name="TelaErrada" component={TelaErrada} options={{ title: 'TelaErrada', headerShown: false }} />
        <Stack.Screen name="Turmas" component={Turmas} options={{ title: 'Turmas', headerShown: false }} />
        <Stack.Screen name="Alunos" component={Alunos} options={{ title: 'Alunos', headerShown: false }} />
        <Stack.Screen name="MateriaTela" component={MateriaTela} options={{ title: 'MateriaTela', headerShown: false }} />
        <Stack.Screen name="UpdateLoginScreen" component={UpdateLoginScreen} options={{ title: 'UpdateLoginScreen', headerShown: false }} />
        <Stack.Screen name="GameMateria" component={GameMateria} options={{ title: 'GameMateria', headerShown: false }} />
        <Stack.Screen name="Resumo" component={Resumo} options={{ title: 'Resumo', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
