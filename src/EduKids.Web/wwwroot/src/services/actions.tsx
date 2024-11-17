import axios from 'axios';
import { ENDPOINTS } from './resources';

export const obterTodosProfessores = async () => {
  try {
    const response = await axios.get(ENDPOINTS.OBTER_TODOS);
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
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const Alunos = async () => {
  try {
    const response = await axios.post(ENDPOINTS.OBTER_TODOS_ALUNOS);
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const AlunosComMateria = async () => {
  try {
    const response = await axios.get(ENDPOINTS.OBTER_TODOS_ALUNOS_COM_MATERIA);
    console.log('response.data', response.data);
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
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const Turmas = async () => {
  try {
    const response = await axios.get(ENDPOINTS.OBTER_TODAS_TURMAS);

    console.log(response);
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};
