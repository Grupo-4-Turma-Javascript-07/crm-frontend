import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/CRM4ULOGO.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogoClick = () => {
    // Redirecionar para home
    window.location.href = "/";
  };

  const handleProfileClick = () => {
    // Redirecionar para login/cadastro
    window.location.href = "/login";
  };

  const handleNavClick = (path: string) => {
    window.location.href = path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementará a busca de produtos por nome no futuro
    console.log("Buscar por:", searchTerm);
  };

  return (
    <nav className="bg-cinza/95 backdrop-blur-md border-b border-roxo-200/30 fixed w-full top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 group"
            >
                {/* Substituir pelo logo real */}
        <div className="container flex items-center justify-between w-full">
            <div className="flex flex-1 justify-start">
            <img 
            src={logo} 
            alt="Company Logo" 
            className="h-24 w-auto object-contain" 
          />
            </div>
        </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleNavClick("/")}
                className="text-gray-300 hover:text-roxo-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-roxo-200/20"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("/categorias")}
                className="text-gray-300 hover:text-roxo-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-roxo-200/20"
              >
                Categorias
              </button>
              <button
                onClick={() => handleNavClick("/produtos")}
                className="text-gray-300 hover:text-roxo-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-roxo-200/20"
              >
                Produtos
              </button>
              <button>
            <Link
            to="/login"
            className="px-4 py-2 hover:bg-roxo-100 hover:text-white hover:border-roxo-100 transition-all duration-300 border-1 rounded-4xl cursor-pointer text-white"
            >
              Login
              </Link>
              </button>
            </div>
          </div>

          {/* Search Bar & Profile */}
          <div className="flex items-center space-x-4">
            
            {/* Search */}
            <div className="relative">
              <div className="flex items-center">
                <button
                  onClick={toggleSearch}
                  className="p-2 rounded-full hover:bg-roxo-200/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-300 hover:text-roxo-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                
                {/* Search Input (animated) */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  searchOpen ? "w-64 ml-2" : "w-0"
                }`}>
                  <div onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar produtos..."
                      className="w-full bg-preto/50 border border-roxo-200/50 rounded-lg py-2 px-4 text-sm text-branco placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
                    />
                    <button
                      onClick={handleSearchSubmit}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-roxo-100 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Button */}
            <button
              onClick={handleProfileClick}
              className="p-2 rounded-full bg-gradient-to-r from-roxo-100 to-rosa-100 hover:from-roxo-50 hover:to-rosa-200 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-5 h-5 text-branco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-300 hover:text-roxo-100 hover:bg-roxo-200/20 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-preto/30 rounded-lg mt-2 border border-roxo-200/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("/");
                }}
                className="text-gray-300 hover:text-roxo-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-roxo-200/20"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("/categorias");
                }}
                className="text-gray-300 hover:text-roxo-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-roxo-200/20"
              >
                Categorias
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("/produtos");
                }}
                className="text-gray-300 hover:text-roxo-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-roxo-200/20"
              >
                Produtos
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleProfileClick();
                }}
                className="text-gray-300 hover:text-roxo-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-roxo-200/20"
              >
                👤 Login / Perfil
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;