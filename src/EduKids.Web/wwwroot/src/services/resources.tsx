// src/resources.js

export const BASE_URL =
  'https://c76d-2804-389-a3f8-2edf-c93a-1a05-eff7-56b5.ngrok-free.app/api/v1';

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/aluno/login`,
  OBTER_TODOS: `${BASE_URL}/professores`,
  OBTER_POR_ID: (id: any) => `${BASE_URL}/professor/${id}`,
  CRIAR: `${BASE_URL}/professor`,
  ATUALIZAR: `${BASE_URL}/professor`,
  REMOVER: (id: any) => `${BASE_URL}/professor?id=${id}`,
  OBTER_TODOS_ALUNOS: `${BASE_URL}/alunos`,
};
