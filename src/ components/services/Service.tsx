import axios from "axios";

// Configuração da API
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://crm-backend-ibg8.onrender.com'
});

// Interceptador para adicionar token automaticamente nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptador para lidar com respostas de erro
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado ou inválido
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Tipos para as interfaces
export interface Categoria {
  id: number;
  nome: string;
  produtos?: Produto[];
}

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  opt: boolean;
  categoria: Categoria;
  usuario?: Usuario;
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  foto?: string;
  ativo: boolean;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
}

// Funções de API para Categorias
export const categoriaAPI = {
  // GET /categorias - Listar todas as categorias
  findAll: () => api.get<Categoria[]>('/categorias'),
  
  // GET /categorias/:id - Buscar categoria por ID
  findById: (id: number) => api.get<Categoria>(`/categorias/${id}`),
  
  // GET /categorias/nome?nome=searchTerm - Buscar categorias por nome
  findByName: (nome: string) => api.get<Categoria[]>(`/categorias/nome?nome=${nome}`),
  
  // POST /categorias - Criar nova categoria
  create: (categoria: Omit<Categoria, 'id'>) => api.post<Categoria>('/categorias', categoria),
  
  // PUT /categorias/:id - Atualizar categoria
  update: (id: number, categoria: Omit<Categoria, 'id'>) => 
    api.put<Categoria>(`/categorias/${id}`, categoria),
  
  // DELETE /categorias/:id - Deletar categoria
  delete: (id: number) => api.delete<void>(`/categorias/${id}`)
};

// Funções de API para Autenticação
export const authAPI = {
  // POST /login - Fazer login
  login: (loginDto: LoginDto) => api.post<AuthResponse>('/login', loginDto),
};