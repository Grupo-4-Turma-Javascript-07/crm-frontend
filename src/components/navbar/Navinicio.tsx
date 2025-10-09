import { useState } from "react";
import Logo from "../../assets/img/CRM4ULOGO.png";
import { Link } from "react-router-dom";
import { ListIcon, User } from "@phosphor-icons/react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSearchInput] = useState(false);

  return (
    <nav className="bg-[#1b1b1b] flex items-center justify-center drop-shadow-sm py-1.5 px-6 fixed w-full z-[1000]">
      <div className="container flex items-center justify-between w-full">
        {/* logo */}
        <div className="flex flex-1 justify-start">
          <a href="#inicio">
            <img
              src={Logo}
              width={112}
              className="cursor-pointer"
              alt="Logo CRM4U"
            />
          </a>
        </div>

        {/* links do meio */}
        <ul className="hidden lg:flex lg:w-1/3 justify-center gap-8 text-xl">
          {["Home", "Planos", "Sobre Nós"].map((item, i) => (
            <li
              key={i}
              className="text-gray-300 cursor-pointer relative group hover:brightness-105 hover:text-white"
            >
              <a
                href={`#${item === "Home" ? "inicio" : item.toLowerCase().replace(" ", "")}`}
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100" />
            </li>
          ))}
        </ul>

        {/* botões à direita */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            to="/cadastro"
            className="px-4 py-2 sm:py-1.6 bg-gradient-to-r from-roxo-100 to-roxo-250 font-semibold hover:text-white hover:border-roxo-200 transition-all duration-300 rounded-lg cursor-pointer text-gray-900"
          >
            Comece grátis
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 text-gray-300 px-4 py-2 sm:py-1.6 font-semibold hover:text-white transition-all duration-300 border border-gray-600 rounded-lg cursor-pointer"
          >
            <User size={20} weight="regular" />
            <span className="hidden sm:inline">Login</span>
          </Link>

          {/* menu mobile */}
          <button
            className="lg:hidden text-roxo-100 text-3xl font-bold"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            <ListIcon size={32} weight="light" />
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {open && (
        <ul className="flex flex-col items-end gap-4 bg-cinza-50 opacity-90 text-xl mt-1.5 px-6 py-4 lg:hidden fixed top-20 right-0 z-40 shadow-md rounded-lg w-52">
          <li className="relative w-full group hover:brightness-105">
            <a
              href="#inicio"
              onClick={() => setOpen(false)}
              className="block text-right"
            >
              Home
            </a>
            <span className="block border-b border-roxo-200 mt-2 w-full" />
          </li>
          <li className="relative w-full group hover:brightness-105">
            <a
              href="/inicio#planos"
              onClick={() => setOpen(false)}
              className="block text-right"
            >
              Planos
            </a>
            <span className="block border-b border-roxo-200 mt-2 w-full" />
          </li>
          <li className="relative w-full group hover:brightness-105">
            <Link
              to="/inicio#sobre"
              onClick={() => setOpen(false)}
              className="block text-right"
            >
              Sobre Nós
            </Link>
            <span className="block border-b border-roxo-200 mt-2 w-full sm:last:border-none" />
          </li>
          <li className="relative w-full group hover:brightness-105">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 justify-end text-right"
            >
              <User size={20} /> Login
            </Link>
          </li>
          <li className="relative w-full group hover:brightness-105">
            <Link
              to="/cadastro"
              onClick={() => setOpen(false)}
              className="block text-right"
            >
              Cadastro
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
