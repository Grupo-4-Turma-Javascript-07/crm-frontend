import { useState } from 'react';
import { AiFillHome, AiOutlineShoppingCart, AiOutlineTag, AiOutlineTeam } from 'react-icons/ai';
import { BiBuilding, BiHelpCircle } from 'react-icons/bi';
import { FiBell, FiChevronDown, FiChevronUp, FiMenu, FiSearch, FiSettings, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Help() {
  const { user } = useUser();
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const iconSize = 25;
  const navigate = useNavigate();

  if (!user) return <div className="text-white p-8">Carregando...</div>;

  const faqs = [
    { question: 'Como adicionar um cliente?', answer: 'Para adicionar um cliente, clique em "Clientes" no menu lateral e depois em "Adicionar novo cliente".' },
    { question: 'Como criar uma atividade?', answer: 'Acesse "Atividades" e clique em "Adicionar", preencha o campo e clique em "Salvar".' },
    { question: 'Como editar uma solicitação?', answer: 'No menu "Solicitações", clique no ícone de editar ao lado da solicitação que deseja alterar.' },
    { question: 'Como buscar informações rapidamente?', answer: 'Use a barra de pesquisa no topo da página para encontrar clientes, atividades ou solicitações.' },
    { question: 'Como alterar minhas configurações?', answer: 'Clique no ícone de usuário no canto superior direito e acesse "Configurações".' },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) || faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen font-sans bg-[#121212]">
      {/* Sidebar */}
      <aside className={`bg-[#191a1f] p-6 flex flex-col justify-between transition-all duration-300 ${menuOpen ? 'w-64' : 'w-16'} pt-24`}>
        <div>
          <button className="text-gray-400 mb-6 focus:outline-none cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu size={iconSize} />
          </button>
          <nav className="flex flex-col gap-4 text-gray-300 font-semibold">
            {/* Botão Home com navigate */}
            <button
              className="flex items-center gap-3 hover:text-purple-500 font-semibold focus:outline-none cursor-pointer"
              onClick={() => navigate('/')}
            >
              <AiFillHome size={iconSize} /> {menuOpen && <span>Home</span>}
            </button>

            <a href="#" className="flex items-center gap-3 hover:text-purple-500 font-bold">
              <AiOutlineShoppingCart size={iconSize} /> {menuOpen && <span>Clientes</span>}
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-purple-500">
              <AiOutlineTag size={iconSize} /> {menuOpen && <span>Categorias</span>}
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-purple-500">
              <AiOutlineTeam size={iconSize} /> {menuOpen && <span>Funcionários</span>}
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4 text-gray-400">
          <a href="#" className="flex items-center gap-3 hover:text-purple-500">
            <BiBuilding size={iconSize} /> {menuOpen && <span>Sobre a Empresa</span>}
          </a>
          <Link to="/help" className="flex items-center gap-3 hover:text-purple-500">
            <BiHelpCircle size={iconSize} /> {menuOpen && <span>Central de Ajuda</span>}
          </Link>
        </div>
      </aside>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#191a1f] p-4 z-[999]">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="https://media.discordapp.net/attachments/1369437328153645093/1404901686274691082/CRM4ULOGO.png?ex=689d88e7&is=689c3767&hm=d27ac9332332ed403c4b9f44d32e632a1e976891f71b60f99ba55ee406630dfb&=&format=webp&quality=lossless&width=625&height=295" alt="Logo" className="h-15 w-auto cursor-pointer" />
            </Link>
          </div>
          <div className="relative flex-1 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Pesquisar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

        {/* Conteúdo da página */}
        <div className="flex flex-1 pt-32 px-8 gap-6 flex-col">
          <div className="max-w-3xl mx-auto w-full">
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-purple-500 mb-2">Central de Ajuda</h1>
              <p className="text-gray-400">Encontre respostas rápidas para dúvidas comuns sobre o CRM4U.</p>
            </header>

            {/* FAQ */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
                <div key={idx} className="bg-[#1e1e1e] rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className="font-semibold text-purple-400">{faq.question}</span>
                    {openIndex === idx ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                  {openIndex === idx && (
                    <p className="mt-3 text-gray-300">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Sugestão de contato */}
            <div className="mt-10 p-6 bg-[#2a2a2a] rounded-lg text-center">
              <h2 className="text-xl font-semibold text-purple-500 mb-2">Ainda com dúvidas?</h2>
              <p className="text-gray-400 mb-4">Envie uma mensagem para nosso suporte e responderemos em até 24 horas.</p>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg cursor-pointer">
                Contatar Suporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
