import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UpdateLoginScreen() {
  const navigation = useNavigation();

  // Estados para armazenar o login e senha
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  // Função para lidar com o envio do formulário
  const handleUpdate = () => {
    // Verificar se as senhas coincidem
    if (senha !== confirmSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Aqui, você poderia adicionar a lógica para atualizar o login e a senha no backend

    Alert.alert('Sucesso', 'Login e senha atualizados com sucesso!');

    // Navegar para a tela anterior ou outra tela
    navigation.goBack();
  };

  return (
    <ImageBackground style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Atualizar Login e Senha</Text>

        {/* Campo para o login */}
        <TextInput
          style={styles.input}
          placeholder="Novo Login"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />

        {/* Campo para a senha */}
        <TextInput
          style={styles.input}
          placeholder="Nova Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {/* Campo para confirmar a senha */}
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confirmSenha}
          onChangeText={setConfirmSenha}
          secureTextEntry
        />

        {/* Botão para atualizar o login e senha */}
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor:'#ACDDF1',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
