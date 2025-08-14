/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable no-useless-catch */
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const login = async (url: string, dados: object, setDados: Function) => {
  try {
    const resposta = await api.post(url, dados);

    if (resposta.data.access_token) {
      localStorage.setItem('access_token', resposta.data.access_token);

      const payload = JSON.parse(atob(resposta.data.access_token.split('.')[1]));
      const userId = payload.sub;

      try {
        const userResponse = await api.get(`/usuario/${userId}`);
        localStorage.setItem('user', JSON.stringify(userResponse.data));
      } catch (error) {
        console.log('Erro ao buscar dados do usuário:', error);
      }
    }

    setDados(resposta.data);
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user');
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('access_token');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const cadastrarUsuario = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const buscar = async <T = any>(url: string): Promise<T | null> => {
  try {
    const resposta = await api.get<T>(url);
    return resposta.data ?? null;
  } catch (err: any) {
    if (err.response?.status === 404) return null;
    throw err;
  }
};

export const cadastrar = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const atualizar = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};