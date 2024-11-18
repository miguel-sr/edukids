import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CriarPergunta, ObterPerguntas } from '../../services/actions';

const PERGUNTA_PADRAO = {
  descricao: '',
  idDisciplina: 1,
  respostaCorreta: '',
  respostaErrada: '',
};

export default function GameMateria() {
  const navigation: any = useNavigation();

  const [questionario, setQuestionario] = useState(PERGUNTA_PADRAO);

  const [perguntas, setPerguntas] = useState<any[]>([]);

  useEffect(() => {
    ObterPerguntas().then(setPerguntas);
  }, []);

  const handleAdicionarPergunta = async () => {
    if (
      questionario.descricao.trim() !== '' &&
      questionario.respostaCorreta.trim() !== '' &&
      questionario.respostaErrada.trim() !== ''
    ) {
      await CriarPergunta(questionario);
      await ObterPerguntas();

      setQuestionario(PERGUNTA_PADRAO);
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  const handleVoltar = () => {
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Pergunta</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a pergunta"
        value={questionario.descricao}
        onChangeText={(text) =>
          setQuestionario({ ...questionario, descricao: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Resposta correta"
        value={questionario.respostaCorreta}
        onChangeText={(text) =>
          setQuestionario({ ...questionario, respostaCorreta: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Resposta errada"
        value={questionario.respostaErrada}
        onChangeText={(text) =>
          setQuestionario({ ...questionario, respostaErrada: text })
        }
      />

      <TouchableOpacity style={styles.button} onPress={handleAdicionarPergunta}>
        <Text style={styles.buttonText}>Adicionar Pergunta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.listaPerguntas}>
        <Text style={styles.subTitle}>Perguntas Adicionadas:</Text>
        {perguntas.map((item, index) => (
          <View key={index} style={styles.perguntaContainer}>
            <Text style={styles.perguntaText}>{item.descricao}</Text>
            <Text style={styles.respostaText}>
              Correta: {item.respostaCorreta}
            </Text>
            <Text style={styles.respostaText}>
              Errada: {item.respostaErrada}
            </Text>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ACDDF1',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listaPerguntas: {
    width: '100%',
    marginTop: 20,
  },
  perguntaContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  perguntaText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  respostaText: {
    fontSize: 14,
    color: '#555',
  },
});
