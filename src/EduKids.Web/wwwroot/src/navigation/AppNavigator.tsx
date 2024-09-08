import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/Login/Login";
import TelaInicial from "../screens/Professor/TelaInicial";
import TelaInicialAluno from "../screens/Aluno/TelaInicialAluno";

export type RootStackParamList = {
  Login: undefined;
  TelaInicial: undefined;
  TelaInicialAluno: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login", headerShown: true }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ title: "Tela Inicial", headerShown: true }}
        />
        <Stack.Screen
          name="TelaInicialAluno"
          component={TelaInicialAluno}
          options={{ title: "Tela Inicial Aluno", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
