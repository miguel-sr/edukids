// src/resources.js

export const BASE_URL = 'https://2d69-164-163-34-155.ngrok-free.app/api/v1';
// export const BASE_URL = 'https://localhost:7293/api/v1';

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  OBTER_TODOS_PROFESSORES: `${BASE_URL}/professores`,
  OBTER_TODOS_ALUNOS_COM_MATERIA: `${BASE_URL}/aluno/com-materia`,
  OBTER_TODAS_TURMAS: `${BASE_URL}/turma`,
  OBTER_RESUMO_DE_NOTAS: (idAluno: number, idTurma: number) =>
    `${BASE_URL}/nota/resumo/${idAluno}/${idTurma}`,
  CONTROLLER_PERGUNTA: `${BASE_URL}/pergunta`,
};
