import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation: any = useNavigation();
  const [inputText, setInputText] = useState('');
  const [buttons, setButtons] = useState([
    { label: 'Aluno 1', materias: ['Matemática', 'Português', 'História'] },
    { label: 'Aluno 2', materias: ['Biologia', 'Física', 'Química'] },
    { label: 'Aluno 3', materias: ['Geografia', 'Arte', 'Educação Física'] },
  ]);
  const [selectedAluno, setSelectedAluno] = useState<any>(null);

  const handleButtonPress = (aluno: any) => {
    // Define o aluno selecionado para exibir suas matérias
    setSelectedAluno(aluno);
  };

  const handleMateriaPress = (materia: string) => {
    // Navegar para outra tela ao clicar na matéria
    navigation.navigate("MateriaTela", { materia }); // "MateriaTela" é o nome da rota da tela de matérias
    console.log(`Matéria ${materia} selecionada`);
  };

  const handleAddButton = () => {
    if (inputText.trim() !== '') {
      setButtons([...buttons, { label: inputText, materias: [] }]);
      setInputText(''); // Limpa o campo de input após adicionar
    }
  };

  return (
    <ImageBackground style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Escolha um aluno!</Text>
        
        {/* Renderizando os botões de alunos */}
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Se um aluno for selecionado, exibe suas matérias como botões */}
        {selectedAluno && (
          <View style={styles.materiasContainer}>
            <Text style={styles.materiasTitle}>Matérias de {selectedAluno.label}:</Text>
            {selectedAluno.materias.length > 0 ? (
              selectedAluno.materias.map((materia: string, index: React.Key | null | undefined) => (
                <TouchableOpacity
                  key={index}
                  style={styles.materiaButton}
                  onPress={() => handleMateriaPress(materia)}
                >
                  <Text style={styles.materiaButtonText}>{materia}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.materiaText}>Nenhuma matéria cadastrada.</Text>
            )}
          </View>
        )}

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor:"#ACDDF1",
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
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  materiasContainer: {
    width: '100%',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  materiasTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  materiaButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  materiaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  materiaText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
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
});
