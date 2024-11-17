// src/resources.js

// export const BASE_URL = 'https://7580-164-163-34-155.ngrok-free.app/api/v1';
export const BASE_URL = 'https://localhost:7293/api/v1';

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/aluno/login`,
  OBTER_TODOS: `${BASE_URL}/professores`,
  OBTER_POR_ID: (id: any) => `${BASE_URL}/professor/${id}`,
  CRIAR: `${BASE_URL}/professor`,
  ATUALIZAR: `${BASE_URL}/professor`,
  REMOVER: (id: any) => `${BASE_URL}/professor?id=${id}`,
  OBTER_TODOS_ALUNOS: `${BASE_URL}/aluno`,
  OBTER_TODOS_ALUNOS_COM_MATERIA: `${BASE_URL}/aluno/com-materia`,
  OBTER_TODAS_TURMAS: `${BASE_URL}/turma`,
  OBTER_RESUMO_DE_NOTAS: (idAluno: number, idTurma: number) =>
    `${BASE_URL}/nota/resumo/${idAluno}/${idTurma}`,
};
