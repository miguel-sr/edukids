import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import logo from '../../assets/BackgroundCeu.png';
import { useNavigation } from '@react-navigation/native';
import { Turmas } from '../../services/actions';

export default function App() {
  const navigation: any = useNavigation();
  const [inputText, setInputText] = useState('');
  const [buttons, setButtons] = useState<any[]>([]);

  const handleButtonPress = (menuOption: string) => {
    navigation.navigate('Alunos');
    console.log(`Botão ${menuOption} pressionado`);
  };

  const handleAddButton = () => {
    if (inputText.trim() !== '') {
      setButtons([...buttons, { label: inputText }]);
      setInputText('');
    }
  };

  const handleRemoveButton = (index: number) => {
    const updatedButtons = buttons.filter((_, i) => i !== index);
    setButtons(updatedButtons);
  };

  const handleLogout = () => {
    navigation.navigate('Login'); // Certifique-se de que 'Login' é o nome correto da rota de login
  };

  useEffect(() => {
    fetchTurmas();
  }, []);

  const fetchTurmas = async () => {
    try {
      const turmas = await Turmas();

      turmas.forEach((turma: any) => {
        setButtons((prevButtons) => [
          ...prevButtons,
          { label: turma.descricao },
        ]);
      });
    } catch (error: any) {
      console.error('Erro no login:', error.response.data);
    }
  };

  return (
    <ImageBackground style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Escolha sua turma!</Text>

        {buttons.map((button, index) => (
          <View key={index} style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(button.label)}
            >
              <Text style={styles.buttonText}>{button.label}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveButton(index)}
            >
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nova turma"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: '#ACDDF1',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#ACDDF1',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: '55%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#FF5733',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
