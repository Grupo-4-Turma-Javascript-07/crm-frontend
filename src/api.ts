// src/api/api.ts

import axios from 'axios';

// Criamos uma instância do Axios com configurações pré-definidas.
export const api = axios.create({
  /**
   * A URL base da sua API.
   * Pelos seus logs de erro anteriores, seu back-end parece estar rodando na porta 3000.
   * Se for outra porta (como 4000, comum em projetos NestJS), altere aqui.
   */
  baseURL: 'http://localhost:3000', 

  /**
   * Aqui você pode adicionar headers que serão enviados em todas as requisições.
   * Isso é muito útil para autenticação. Quando você implementar o login,
   * o header de autorização será adicionado aqui.
   * * Exemplo comentado de como seria com um token de autenticação:
   * headers: {
   * 'Authorization': `Bearer ${seu_token_aqui}`
   * }
   */
});