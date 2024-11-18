import axios from 'axios';
import { ENDPOINTS } from './resources';

export const ObterTodosProfessores = async () => {
  try {
    const response = await axios.get(ENDPOINTS.OBTER_TODOS_PROFESSORES);
    console.log('response.data');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter professores:', error);
    throw error;
  }
};

export const Login = async (username: string, password: string) => {
  try {
    const response = await axios.post(ENDPOINTS.LOGIN, {
      Login: username,
      Senha: password,
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const AlunosComMateria = async () => {
  try {
    const response = await axios.get(ENDPOINTS.OBTER_TODOS_ALUNOS_COM_MATERIA);

    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const ResumoDeNotas = async (idAluno: number, idDisciplina: number) => {
  try {
    const response = await axios.get(
      ENDPOINTS.OBTER_RESUMO_DE_NOTAS(idAluno, idDisciplina)
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const Turmas = async () => {
  try {
    const response = await axios.get(ENDPOINTS.OBTER_TODAS_TURMAS);

    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const CriarPergunta = async (pergunta: any) => {
  try {
    const response = await axios.post(ENDPOINTS.CONTROLLER_PERGUNTA, pergunta);

    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const ObterPerguntas = async () => {
  try {
    const response = await axios.get(ENDPOINTS.CONTROLLER_PERGUNTA);

    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};
