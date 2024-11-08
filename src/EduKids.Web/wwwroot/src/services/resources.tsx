// src/resources.js

export const BASE_URL = "https://192.168.0.17:7293/api/v1"; 

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/professor/login`,
  OBTER_TODOS: `${BASE_URL}/professor`,
  OBTER_POR_ID: (id: any) => `${BASE_URL}/professor/${id}`,
  CRIAR: `${BASE_URL}/professor`,
  ATUALIZAR: `${BASE_URL}/professor`,
  REMOVER: (id: any) => `${BASE_URL}/professor?id=${id}`,
};

