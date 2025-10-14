import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiBell, FiSettings } from "react-icons/fi";
import logo from "../../assets/img/CRM4ULOGO.png";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscar por:", searchTerm);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#191a1f]/95 backdrop-blur-md border-b border-gray-800 p-4 z-[999] shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/Home">
          <img
            src={logo}
            alt="Logo CRM4U"
            className="h-10 w-auto cursor-pointer hover:opacity-80 transition-all duration-300"
          />
        </Link>
      </div>

      {/* Links principais */}
      <nav className="hidden md:flex items-center gap-6 text-gray-300 font-medium">
        <Link
          to="/Home"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/categorias"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          Categorias
        </Link>
        <Link
          to="/produtos"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          Produtos
        </Link>
      </nav>

      {/* Barra de pesquisa */}
      <form
        onSubmit={handleSearchSubmit}
        className="relative flex-1 max-w-md mx-4 hidden md:block"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar produtos..."
          className="w-full rounded-full border border-gray-700 bg-[#1b1b1b] py-2 pl-10 pr-3 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
      </form>

      {/* Ícones de ação */}
      <div className="flex items-center gap-5 text-gray-400">
        <FiBell size={22} className="hover:text-purple-500 cursor-pointer" />
        <FiSettings size={22} className="hover:text-purple-500 cursor-pointer" />
        <Link to="/login">
          <FiUser size={22} className="hover:text-purple-500 cursor-pointer" />
        </Link>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-300 hover:text-purple-400 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1b1b1b]/95 border-t border-gray-700 p-4 md:hidden flex flex-col space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar produtos..."
              className="w-full rounded-full border border-gray-700 bg-[#191a1f] py-2 pl-10 pr-3 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </form>

          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/categorias"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            Categorias
          </Link>
          <Link
            to="/produtos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            Produtos
          </Link>
          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            👤 Login / Perfil
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
