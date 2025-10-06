/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from "react";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineTag,
  AiOutlineTeam,
} from "react-icons/ai";
import { BiBuilding, BiHelpCircle } from "react-icons/bi";
import { FiBell, FiMenu, FiSearch, FiSettings, FiUser, FiX } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/CRM4ULOGO.png";

export default function Home() {
  const { usuario } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [, setEditingIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "clientes" | "afazeres" | "atividades" | "solicitacoes"
  >("clientes");

  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const openModal = (
    type: "clientes" | "afazeres" | "atividades" | "solicitacoes"
  ) => {
    setModalType(type);
    setModalOpen(true);
    setEditingIndex(null);
    setNewTask("");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const closeModal = () => setModalOpen(false);
  const iconSize = 25;

  return (
    <div className="flex min-h-screen font-sans bg-[#121212]">
      {/* Sidebar */}
      <aside
        className={`bg-[#191a1f] p-6 flex flex-col justify-between transition-all duration-300 ${
          menuOpen ? "w-64" : "w-16"
        } pt-24`}
      >
        <div>
          <button
            className="text-gray-400 mb-6 focus:outline-none cursor-pointer hover:text-purple-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex items-center gap-2">
              <FiMenu size={iconSize} /> {menuOpen && <span>Menu</span>}
            </div>
          </button>

          <nav className="flex flex-col gap-4 text-gray-300 font-semibold">
            <a href="#home" className="flex items-center gap-3 hover:text-purple-500">
              <AiFillHome size={iconSize} /> {menuOpen && <span>Home</span>}
            </a>
            <Link
              to="/produtos"
              className="flex items-center gap-3 hover:text-purple-500 font-bold"
            >
              <AiOutlineShoppingCart size={iconSize} />{" "}
              {menuOpen && <span>Produtos</span>}
            </Link>
            <button
              className="flex items-center gap-3 hover:text-purple-500 font-bold focus:outline-none cursor-pointer"
              onClick={() => openModal("clientes")}
            >
              <AiOutlineTeam size={iconSize} /> {menuOpen && <span>Clientes</span>}
            </button>
            <Link
              to="/categorias"
              className="flex items-center gap-3 hover:text-purple-500"
            >
              <AiOutlineTag size={iconSize} /> {menuOpen && <span>Categorias</span>}
            </Link>
            <Link 
            to="/usuarios"
            className="flex items-center gap-3 hover:text-purple-500"
            >
              <AiOutlineTeam size={iconSize} /> {menuOpen && <span>Usuarios e Acessos</span>}
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-3 hover:text-purple-500 font-semibold cursor-pointer"
            >
              Sair
            </button>
          </nav>
        </div>

        <div className="flex flex-col gap-4 text-gray-400">
          <Link to="/" className="flex items-center gap-3 hover:text-purple-500">
            <BiBuilding size={iconSize} /> {menuOpen && <span>Sobre a Empresa</span>}
          </Link>
          <Link to="/help" className="flex items-center gap-3 hover:text-purple-500">
            <BiHelpCircle size={iconSize} /> {menuOpen && <span>Central de Ajuda</span>}
          </Link>
        </div>
      </aside>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#191a1f] p-4 z-[999]">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-15 w-auto cursor-pointer"
            />
          </div>

          <div className="relative flex-1 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full rounded-full border border-gray-700 bg-[#1b1b1b] py-2 pl-10 pr-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>

          <div className="flex items-center gap-6 ml-6 text-gray-400">
            <FiBell size={22} className="hover:text-purple-500 cursor-pointer" />
            <FiSettings size={22} className="hover:text-purple-500 cursor-pointer" />
            <FiUser size={22} className="hover:text-purple-500 cursor-pointer" />
          </div>
        </header>

        <div className="flex flex-1 pt-32 px-8 gap-6">
          <main className="flex-1 flex flex-col gap-10">
            {/* Saudações */}
            <section>
              <h1 className="text-white font-bold text-3xl mb-1">
                Olá, {usuario?.nome}!
              </h1>
              <p className="text-gray-400 text-sm">
                Acompanhe e Gerencie sua Empresa.
              </p>
            </section>

            {/* Cards de estatísticas */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#2a2a2a] rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-700 text-white">
                    <AiOutlineShoppingCart size={25} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Total Produtos</p>
                    <p className="text-white text-2xl font-semibold">120</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-700 text-white">
                    <AiOutlineShoppingCart size={25} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Vendas Hoje</p>
                    <p className="text-white text-2xl font-semibold">84</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-600 text-white">
                    <AiOutlineTeam size={25} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Clientes Ativos</p>
                    <p className="text-white text-2xl font-semibold">45</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-red-600 text-white">
                    <AiOutlineTag size={25} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Faturamento</p>
                    <p className="text-white text-2xl font-semibold">R$ 12.500</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tabela de vendas recentes */}
            <section className="bg-[#2a2a2a] rounded-md overflow-hidden">
              <div className="bg-[#222] border-b border-gray-700 text-purple-500 text-center py-2 font-semibold text-lg">
                Vendas Recentes
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700 text-gray-300">
                  <thead className="bg-[#191a1f]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Produto
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Quantidade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-6 py-4">Camiseta</td>
                      <td className="px-6 py-4">Maria Silva</td>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">R$ 100</td>
                      <td className="px-6 py-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-700 text-white">
                          Concluída
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Tênis</td>
                      <td className="px-6 py-4">João Souza</td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">R$ 250</td>
                      <td className="px-6 py-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-600 text-white">
                          Pendente
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-[#2a2a2a] rounded-md cursor-pointer hover:bg-[#3a3a3a]">
                <AiOutlineShoppingCart size={25} className="text-purple-500 mb-2" />
                <span className="text-gray-300 text-sm">Novo Produto</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#2a2a2a] rounded-md cursor-pointer hover:bg-[#3a3a3a]">
                <AiOutlineShoppingCart size={25} className="text-green-500 mb-2" />
                <span className="text-gray-300 text-sm">Registrar Venda</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#2a2a2a] rounded-md cursor-pointer hover:bg-[#3a3a3a]">
                <AiOutlineTeam size={25} className="text-yellow-500 mb-2" />
                <span className="text-gray-300 text-sm">Novo Cliente</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#2a2a2a] rounded-md cursor-pointer hover:bg-[#3a3a3a]">
                <AiOutlineTag size={25} className="text-red-500 mb-2" />
                <span className="text-gray-300 text-sm">Gerenciar Categorias</span>
              </div>
            </section>
          </main>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1000]">
          <div className="bg-[#2a2a2a] w-3/4 h-3/4 rounded-md p-6 relative overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={closeModal}
            >
              <FiX size={20} />
            </button>

            <h2 className="text-purple-500 font-semibold mb-4 text-2xl text-center">
              {modalType === "clientes"
                ? "Clientes"
                : modalType === "afazeres"
                ? "Afazeres"
                : modalType === "atividades"
                ? "Atividades"
                : "Solicitações"}
            </h2>

            {(modalType === "afazeres" ||
              modalType === "solicitacoes" ||
              modalType === "atividades") && (
              <div className="mb-4 flex gap-2">
                <input
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder={`Nova ${
                    modalType === "afazeres"
                      ? "tarefa"
                      : modalType === "atividades"
                      ? "atividade"
                      : "solicitação"
                  }...`}
                  className="flex-4 bg-[#1b1b1b] text-gray-300 p-2 rounded-md"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
