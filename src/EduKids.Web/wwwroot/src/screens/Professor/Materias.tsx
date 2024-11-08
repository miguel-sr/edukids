import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';  // Importando o gráfico
import { Dimensions } from 'react-native';

export default function MateriaTela() {
  const navigation: any = useNavigation();
  const [inputText, setInputText] = useState('');
  const [buttons, setButtons] = useState([
    { label: 'Aluno 1', materias: ['Matemática', 'Português', 'História'] },
    { label: 'Aluno 2', materias: ['Biologia', 'Física', 'Química'] },
    { label: 'Aluno 3', materias: ['Geografia', 'Arte', 'Educação Física'] },
  ]);
  const [selectedAluno, setSelectedAluno] = useState<any>(null);

  const [selectedBimestre, setSelectedBimestre] = useState<number | null>(null);

  const handleButtonPress = (aluno: any) => {
    // Define o aluno selecionado para exibir suas matérias
    setSelectedAluno(aluno);
  };

  const handleAddButton = () => {
    if (inputText.trim() !== '') {
      setButtons([...buttons, { label: inputText, materias: [] }]);
      setInputText(''); // Limpa o campo de input após adicionar
    }
  };

  // Dados fictícios para o gráfico de evolução das notas
  const notaData = {
    labels: ['1º Bimestre', '2º Bimestre', '3º Bimestre', '4º Bimestre'],  // Bimestres
    datasets: [
      {
        data: [8, 6, 7, 9], // Notas do aluno nos bimestres
        strokeWidth: 2, // Espessura da linha
        color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Cor da linha
      }
    ]
  };

  const bimestreDetails: { [key: number]: { notas: number[]; media: number } } = {
    1: { notas: [8, 6], media: 7 },
    2: { notas: [6, 5], media: 5.5 },
    3: { notas: [7, 8], media: 7.5 },
    4: { notas: [9, 7], media: 8 },
  };
  

  return (
    <ImageBackground style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Aluno 1 - Matemática</Text>

        {/* Se um aluno for selecionado, exibe suas matérias */}
        {selectedAluno && (
          <View style={styles.materiasContainer}>
            <Text style={styles.materiasTitle}>Matérias de {selectedAluno.label}:</Text>
            {selectedAluno.materias.length > 0 ? (
              selectedAluno.materias.map((materia: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                <Text key={index} style={styles.materiaText}>{materia}</Text>
              ))
            ) : (
              <Text style={styles.materiaText}>Nenhuma matéria cadastrada.</Text>
            )}
          </View>
        )}

        {/* Exibindo o gráfico de evolução das notas */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Evolução das Notas</Text>
          <LineChart
            data={notaData}
            width={Dimensions.get('window').width - 40} // Largura do gráfico (ajustável)
            height={220} // Altura do gráfico
            yAxisLabel="" // Remove o rótulo do eixo Y
            yAxisSuffix="pontos" // Sufixo das notas
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#f2f2f2',
              backgroundGradientTo: '#f2f2f2',
              decimalPlaces: 0, // Sem casas decimais
              color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#fff'
              }
            }}
            bezier
          />
        </View>

        {/* Bimestres */}
        <View style={styles.bimestresContainer}>
          {['1º Bimestre', '2º Bimestre', '3º Bimestre', '4º Bimestre'].map((bimestre, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.bimestreButton, selectedBimestre === index + 1 && styles.selectedBimestre]}
              onPress={() => setSelectedBimestre(index + 1)}
            >
              <Text style={styles.bimestreText}>{bimestre}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Exibindo o gráfico das notas do bimestre selecionado */}
        {selectedBimestre !== null && (
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Notas do {selectedBimestre}º Bimestre</Text>
            <LineChart
              data={{
                labels: ['Nota 1', 'Nota 2'],
                datasets: [
                  {
                    data: bimestreDetails[selectedBimestre].notas,
                    strokeWidth: 2,
                    color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Cor diferente
                  }
                ]
              }}
              width={Dimensions.get('window').width - 40} // Largura do gráfico (ajustável)
              height={220} // Altura do gráfico
              yAxisLabel="" // Remove o rótulo do eixo Y
              yAxisSuffix="pontos" // Sufixo das notas
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#f2f2f2',
                backgroundGradientTo: '#f2f2f2',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#fff'
                }
              }}
              bezier
            />
            <Text style={styles.mediaText}>Média: {bimestreDetails[selectedBimestre].media}</Text>
          </View>
        )}

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
  materiaText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  chartContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bimestresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  bimestreButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  selectedBimestre: {
    backgroundColor: '#007BFF',
  },
  bimestreText: {
    fontSize: 16,
    color: '#333',
  },
  mediaText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
