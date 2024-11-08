// src/api/actions/authActions.js

import axios from 'axios';
import { ENDPOINTS } from './resources';

// Ação para fazer o login
export const obterTodosProfessores = async () => {
    try {
      const response = await axios.get(ENDPOINTS.OBTER_TODOS);
      console.log(response.data)
      return response.data; // Lista de professores
    } catch (error) {
      console.error("Erro ao obter professores:", error);
      throw error;
    }
  };
