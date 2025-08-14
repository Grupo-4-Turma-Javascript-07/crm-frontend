/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react';
import { AiFillHome, AiOutlineShoppingCart, AiOutlineTag, AiOutlineTeam } from 'react-icons/ai';
import { BiBuilding, BiHelpCircle } from 'react-icons/bi';
import { FiBell, FiMenu, FiSearch, FiSettings, FiUser, FiX } from 'react-icons/fi';
// import { useUser } from '../../contexts/UserContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  // const { user, setUser } = useUser();

  const {usuario} = useContext(AuthContext)
  // const user = usuario
  const [menuOpen, setMenuOpen] = useState(true);
  const iconSize = 25;

  const [newTask, setNewTask] = useState('');
  const [, setEditingIndex] = useState<number | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'clientes' | 'afazeres' | 'atividades' | 'solicitacoes'>('clientes');

  // if (!user) return <div className="text-white p-8">Carregando...</div>;

  // const addAfazer = () => {
  //   if (!newTask.trim()) return;
  //   const updated = editingIndex !== null
  //     ? [...(user.afazeres ?? [])]
  //     : [...(user.afazeres ?? []), newTask];

  //   if (editingIndex !== null) {
  //     updated[editingIndex] = newTask;
  //   }

  //   setUser({ ...user, afazeres: updated });
  //   setEditingIndex(null);
  //   setNewTask('');
  // };

  // const editAfazer = (index: number) => {
  //   setNewTask(user.afazeres[index]);
  //   setEditingIndex(index);
  // };

  // const deleteAfazer = (index: number) => {
  //   setUser({
  //     ...user,
  //     afazeres: user.afazeres.filter((_, i) => i !== index),
  //   });
  // };

  // const addTask = () => {
  //   if (!newTask.trim()) return;

  //   if (modalType === 'solicitacoes') {
  //     const updated = editingIndex !== null ? [...(user.solicitacoes ?? [])] : [...(user.solicitacoes ?? []), newTask];
  //     if (editingIndex !== null) updated[editingIndex] = newTask;
  //     setUser({ ...user, solicitacoes: updated });
  //   } else if (modalType === 'atividades') {
  //     const updated = editingIndex !== null ? [...(user.atividades ?? [])] : [...(user.atividades ?? []), newTask];
  //     if (editingIndex !== null) updated[editingIndex] = newTask;
  //     setUser({ ...user, atividades: updated });
  //   } else if (modalType === 'afazeres') {
  //     // Afazeres no modal
  //     const updated = editingIndex !== null ? [...(user.afazeres ?? [])] : [...(user.afazeres ?? []), newTask];
  //     if (editingIndex !== null) updated[editingIndex] = newTask;
  //     setUser({ ...user, afazeres: updated });
  //   }

  //   setEditingIndex(null);
  //   setNewTask('');
  // };

  // const deleteTask = (index: number) => {
  //   if (modalType === 'solicitacoes') {
  //     setUser({ ...user, solicitacoes: user.solicitacoes.filter((_, i) => i !== index) });
  //   } else if (modalType === 'atividades') {
  //     setUser({ ...user, atividades: (user.atividades ?? []).filter((_, i) => i !== index) });
  //   } else if (modalType === 'afazeres') {
  //     setUser({ ...user, afazeres: user.afazeres.filter((_, i) => i !== index) });
  //   }
  // };

  // const editTask = (index: number) => {
  //   if (modalType === 'solicitacoes') {
  //     setNewTask(user.solicitacoes[index]);
  //   } else if (modalType === 'atividades') {
  //     setNewTask(user.atividades?.[index] ?? '');
  //   } else if (modalType === 'afazeres') {
  //     setNewTask(user.afazeres[index]);
  //   }
  //   setEditingIndex(index);
  //   setModalOpen(true);
  // };

  const token = localStorage.getItem('access_token')

  useEffect(() => {
    if(token === '') {
      navigate('/login')
    }
  }, [token])

  const openModal = (type: 'clientes' | 'afazeres' | 'atividades' | 'solicitacoes') => {
    setModalType(type);
    setModalOpen(true);
    setEditingIndex(null);
    setNewTask('');
  };

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex min-h-screen font-sans bg-[#121212]">
      {/* Sidebar */}
      <aside className={`bg-[#191a1f] p-6 flex flex-col justify-between transition-all duration-300 ${menuOpen ? 'w-64' : 'w-16'} pt-24`}>
        <div>
          <button
            className="text-gray-400 mb-6 focus:outline-none cursor-pointer hover:text-purple-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className='flex items-center gap-2'>
              <FiMenu size={iconSize} /> {menuOpen && <span>Menu</span>}
            </div>
          </button>
          <nav className="flex flex-col gap-4 text-gray-300 font-semibold">
            <a href="#" className="flex items-center gap-3 hover:text-purple-500">
              <AiFillHome size={iconSize} /> {menuOpen && <span>Home</span>}
            </a>
            <Link to='/produtos' className="flex items-center gap-3 hover:text-purple-500 font-bold">
              <AiOutlineShoppingCart size={iconSize} /> {menuOpen && <span>Produtos</span>}
            </Link>
            <button className="flex items-center gap-3 hover:text-purple-500 font-bold focus:outline-none cursor-pointer" onClick={() => openModal('clientes')}>
              <AiOutlineTeam size={iconSize} /> {menuOpen && <span>Clientes</span>}
            </button>
            <Link to='/categorias' className="flex items-center gap-3 hover:text-purple-500">
              <AiOutlineTag size={iconSize} /> {menuOpen && <span>Categorias</span>}
            </Link>
            <a href="#" className="flex items-center gap-3 hover:text-purple-500">
              <AiOutlineTeam size={iconSize} /> {menuOpen && <span>Funcionários</span>}
            </a>
            <button onClick={logout} className="flex items-center gap-3 hover:text-purple-500">
            <span>Sair</span>
          </button>
          </nav>
        </div>
        <div className="flex flex-col gap-4 text-gray-400">
          <a href="#" className="flex items-center gap-3 hover:text-purple-500">
            <BiBuilding size={iconSize} /> {menuOpen && <span>Sobre a Empresa</span>}
          </a>
          <a href="/Help" className="flex items-center gap-3 hover:text-purple-500">
            <BiHelpCircle size={iconSize} /> {menuOpen && <span>Central de Ajuda</span>}
          </a>
          
        </div>
      </aside>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#191a1f] p-4 z-[999]">
          <div className="flex items-center gap-3">
            <img src="https://media.discordapp.net/attachments/1369437328153645093/1404901686274691082/CRM4ULOGO.png?ex=689e31a7&is=689ce027&hm=defa6fdca67d988e3a1f856f238578e7e5d97beeee3b9203afb156e562c17a7f&=&format=webp&quality=lossless&width=625&height=295" alt="Logo" className="h-15 w-auto cursor-pointer" />
          </div>
          <div className="relative flex-1 max-w-md mx-auto">
            <input type="text" placeholder="Pesquisar" className="w-full rounded-full border border-gray-700 bg-[#1b1b1b] py-2 pl-10 pr-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" />
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
            <section>
              <h1 className="text-white font-bold text-3xl mb-1">Olá, {usuario?.nome}!</h1>
              <p className="text-gray-400 text-sm">Acompanhe seu trabalho e novidades do CRM4U</p>
            </section>

            <section className="grid grid-cols-3 gap-5">
              <div className="bg-[#2a2a2a] p-4 rounded-md cursor-pointer" onClick={() => openModal('clientes')}>
                <p className="text-purple-500 font-semibold text-center">Clientes</p>
              </div>
              <div className="bg-[#2a2a2a] p-4 rounded-md cursor-pointer" onClick={() => openModal('atividades')}>
                <p className="text-purple-500 font-semibold text-center">Atividades</p>
              </div>
              <div className="bg-[#2a2a2a] p-4 rounded-md cursor-pointer" onClick={() => openModal('solicitacoes')}>
                <p className="text-purple-500 font-semibold text-center">Solicitações</p>
              </div>
            </section>

            {/* Painel Afazeres */}
            <section className="bg-[#2a2a2a] rounded-md">
              <div className="bg-[#222] border-b border-gray-700 text-purple-600 text-center py-1 font-semibold text-xl">Afazeres</div>
              <div className="p-4 flex flex-col gap-3 justify-center items-center">
                <div className="flex gap-2 w-[1000px]">
                  <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nova tarefa..." className="flex-4 bg-[#1b1b1b] text-gray-300 p-2 rounded-md" />
                  {/* <button onClick={addAfazer} className="flex-1 inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-lg text-sm font-bold rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-400 hover:to-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    {editingIndex !== null ? 'Salvar' : 'Adicionar'}
                  </button> */}
                </div>
                <ul className="flex flex-col gap-2">
                  {/* {user.afazeres.map((task, index) => (
                    <li key={index} className="flex justify-between items-center bg-[#1b1b1b] p-2 rounded-md w-[800px]">
                      <span>{task}</span>
                      <div className="flex gap-2">
                        <FiEdit2 className="text-yellow-200 hover:text-yellow-500 cursor-pointer" onClick={() => editAfazer(index)} />
                        <FiTrash2 className="text-red-300 hover:text-red-500 cursor-pointer" onClick={() => deleteAfazer(index)} />
                      </div>
                    </li>
                  ))} */}
                </ul>
              </div>
            </section>
          </main>

          <aside className="w-64 bg-[#1b1b1b] rounded-md p-4 text-gray-300">
            <h2 className="text-purple-500 font-semibold mb-2">Atualizações do Sistema</h2>
            <ul className="text-sm space-y-2">
              <li>Nova versão do sistema lançada</li>
              <li>Correção de bugs no módulo de vendas</li>
              <li>Novo recurso de notificações em tempo real</li>
            </ul>
          </aside>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1000]">
          <div className="bg-[#2a2a2a] w-3/4 h-3/4 rounded-md p-6 relative overflow-y-auto">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500" onClick={closeModal}>
              <FiX size={20} />
            </button>
            <h2 className="text-purple-500 font-semibold mb-4 text-2xl text-center">
              {modalType === 'clientes' ? 'Clientes' : modalType === 'afazeres' ? 'Afazeres' : modalType === 'atividades' ? 'Atividades' : 'Solicitações'}
            </h2>

            {(modalType === 'afazeres' || modalType === 'solicitacoes' || modalType === 'atividades') && (
              <div className="mb-4 flex gap-2">
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder={`Nova ${modalType === 'afazeres' ? 'tarefa' : modalType === 'atividades' ? 'atividade' : 'solicitação'}...`} className="flex-4 bg-[#1b1b1b] text-gray-300 p-2 rounded-md" />
                {/* <button onClick={addTask} className="flex-1 inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-lg text-sm font-bold rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-400 hover:to-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  {editingIndex !== null ? 'Salvar' : 'Adicionar'}
                </button> */}
              </div>
            )}

            <ul className="text-gray-300 space-y-2 max-h-[70%] overflow-y-auto">
              {/* {modalType === 'clientes' && user.clientes.map((empresa, idx) => (
                <li key={idx} className="border-b border-gray-700 py-1">
                  <span className="font-semibold">{empresa.nome}</span>: {empresa.descricao}
                </li>
              ))} */}

              {/* {(modalType === 'afazeres' || modalType === 'solicitacoes' || modalType === 'atividades') &&
                (modalType === 'afazeres' ? user.afazeres ?? [] : modalType === 'solicitacoes' ? user.solicitacoes ?? [] : user.atividades ?? []).map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center py-1">
                    <span>{item}</span>
                    <div className="flex gap-2">
                      <FiEdit2 className="text-yellow-200 hover:text-yellow-500 cursor-pointer" onClick={() => editTask(idx)} />
                      <FiTrash2 className="text-red-300 hover:text-red-600 cursor-pointer" onClick={() => deleteTask(idx)} />
                    </div>
                  </li>
                ))} */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}