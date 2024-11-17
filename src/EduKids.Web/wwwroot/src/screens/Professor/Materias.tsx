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
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ResumoDeNotas } from '../../services/actions';

export default function MateriaTela() {
  const [selectedBimestre, setSelectedBimestre] = useState<number | null>(null);
  const [resumo, setResumo] = useState<any>();
  const [dadosDoGraficoAnual, setDadosDoGraficoAnual] = useState<any>();
  const [dadosDoGraficosBimestral, setDadosDoGraficosBimestral] =
    useState<any>();

  useEffect(() => {
    fetchResumo();
  }, []);

  useEffect(() => {
    PreencherGraficoBimestral();
  }, [selectedBimestre]);

  const fetchResumo = async () => {
    try {
      let novoResumo = await ResumoDeNotas(2, 1);
      setResumo(novoResumo);

      const novoGrafico = {
        labels: novoResumo.bimestres.map((b: any) => `${b.numero}º Bimestre`),
        datasets: [
          {
            data: novoResumo.bimestres.map((b: any) => (b.media ? b.media : 0)),
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          },
        ],
      };

      setDadosDoGraficoAnual(novoGrafico);
    } catch (error) {
      console.error('Erro ao buscar o resumo:', error);
    }
  };

  function PreencherGraficoBimestral() {
    if (selectedBimestre === null) return;

    const bimestreSelecionado = resumo.bimestres[selectedBimestre];
    console.log(bimestreSelecionado);
    const novoGraficoBimestral = {
      labels: ['Nota 1', 'Nota 2'],
      datasets: [
        {
          data: [bimestreSelecionado.valorN1, bimestreSelecionado.valorN2],
          strokeWidth: 2,
          color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
        },
      ],
    };

    setDadosDoGraficosBimestral(novoGraficoBimestral);
  }

  useEffect(() => {
    PreencherGraficoBimestral();
  }, [selectedBimestre]);

  return (
    <ImageBackground style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {resumo?.nome} - {resumo?.disciplina}
        </Text>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Evolução das Notas</Text>
          {dadosDoGraficoAnual && (
            <LineChart
              data={dadosDoGraficoAnual}
              width={Dimensions.get('window').width - 40}
              height={220}
              yAxisLabel=""
              yAxisSuffix="pontos"
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#f2f2f2',
                backgroundGradientTo: '#f2f2f2',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#fff',
                },
              }}
              bezier
            />
          )}
        </View>

        {/* Bimestres */}
        <View style={styles.bimestresContainer}>
          {resumo?.bimestres?.map((bimestre: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.bimestreButton,
                selectedBimestre === index && styles.selectedBimestre,
              ]}
              onPress={() => setSelectedBimestre(index)}
            >
              <Text
                style={styles.bimestreText}
              >{`${bimestre.numero}º Bi`}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Exibindo o gráfico das notas do bimestre selecionado */}
        {selectedBimestre !== null && dadosDoGraficosBimestral && (
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>
              Notas do {selectedBimestre + 1}º Bimestre
            </Text>
            <LineChart
              data={dadosDoGraficosBimestral}
              width={Dimensions.get('window').width - 40}
              height={220}
              yAxisLabel=""
              yAxisSuffix="pontos"
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#f2f2f2',
                backgroundGradientTo: '#f2f2f2',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#fff',
                },
              }}
              bezier
            />
            <Text style={styles.mediaText}>
              Média: {resumo.bimestres[selectedBimestre].media}
            </Text>
          </View>
        )}

        <StatusBar style="auto" />
      </View>
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
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
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
