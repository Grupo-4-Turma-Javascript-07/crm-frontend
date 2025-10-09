import { useState } from "react";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  cargo: string;
  departamento: string;
  status: "Ativo" | "Em licença" | "Inativo";
  avatar?: string;
}

const usuariosData: Usuario[] = [
  {
    id: 1,
    nome: "Ana Souza",
    email: "ana.souza@crm4u.com",
    cargo: "Gerente de Vendas",
    departamento: "Vendas",
    status: "Ativo",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    nome: "Bruno Lima",
    email: "bruno.lima@crm4u.com",
    cargo: "Desenvolvedor Frontend",
    departamento: "TI",
    status: "Ativo",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    nome: "Carla Mendes",
    email: "carla.mendes@crm4u.com",
    cargo: "Analista de Marketing",
    departamento: "Marketing",
    status: "Em licença",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: 4,
    nome: "Diego Costa",
    email: "diego.costa@crm4u.com",
    cargo: "Suporte Técnico",
    departamento: "Suporte",
    status: "Inativo",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

export default function UsuariosCRM() {
  const [busca, setBusca] = useState("");

  const usuariosFiltrados = usuariosData.filter((usuario) =>
    usuario.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const getStatusClasses = (status: Usuario["status"]) => {
    switch (status) {
      case "Ativo":
        return "bg-green-100 text-green-800";
      case "Em licença":
        return "bg-yellow-100 text-yellow-800";
      case "Inativo":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="w-full bg-[#121212] flex items-center justify-center min-h-screen p-4">
      <div className="container max-w-6xl">
        <div className="bg-[#2a2a2a] rounded-xl shadow-md overflow-hidden">
          {/* Cabeçalho */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-purple-500">Usuários da [NOME DA EMPRESA] </h2>
                <p className="text-white mt-1">Lista de usuários com acesso ao sistema</p>
              </div>
            </div>

            {/* Barra de pesquisa */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Pesquisar usuário..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10 pr-4 py-2 border text-white border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#2a2a2a]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">Nome</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">Cargo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">Departamento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-purple-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-[#2a2a2a] divide-y divide-gray-200">
                {usuariosFiltrados.map((usuario) => (
                  <tr key={usuario.id} className="transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {usuario.avatar && (
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full object-cover" src={usuario.avatar} alt={usuario.nome} />
                          </div>
                        )}
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{usuario.nome}</div>
                          <div className="text-sm text-gray-500">{usuario.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{usuario.cargo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{usuario.departamento}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(usuario.status)}`}>
                        {usuario.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="py-1 px-3 text-sm border font-semibold rounded-lg text-white bg-gradient-to-r cursor-pointer hover:text-white transition-all duration-300 transform hover:scale-105">
                        ✏️ Editar
                        </button>
                        <button className="py-1 px-3 text-sm border font-semibold rounded-lg text-white bg-gradient-to-r cursor-pointer hover:text-white transition-all duration-300 transform hover:scale-105 ml-2">
                          🗑️ Excluir
                          </button>
                          </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
