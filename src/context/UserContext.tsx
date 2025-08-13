/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface Empresa {
  nome: string;
  descricao: string;
}

interface User {
  nome: string;
  clientes: Empresa[];
  afazeres: string[];
  solicitacoes: string[];
  atividades?: string[];
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Simula delay de API
      await new Promise(res => setTimeout(res, 500));

      const mockUser: User = {
        nome: 'Maria Clara',
        clientes: [
          { nome: 'Acme Corp', descricao: 'Fornece equipamentos industriais' },
          { nome: 'Globex Ltda.', descricao: 'Consultoria de tecnologia' },
          { nome: 'Initech', descricao: 'Desenvolvimento de softwares' },
          { nome: 'Umbrella Corp.', descricao: 'Produtos farmacêuticos' },
        ],
        afazeres: [
          'Revisar contratos do mês',
          'Enviar relatório financeiro',
          'Atualizar base de clientes',
          'Organizar reunião com parceiros',
        ],
        solicitacoes: [
          'Solicitação de suporte técnico da Acme Corp.',
          'Pedido de atualização do dashboard da Globex Ltda.',
          'Requisição de materiais de marketing da Initech',
          'Solicitação de mudança de plano do cliente Umbrella Corp.',
        ],
      };

      setUser(mockUser);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
