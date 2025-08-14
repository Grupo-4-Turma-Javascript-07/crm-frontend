import { useState } from "react";
import Logo from "../../assets/img/CRM4ULOGO.png"
import { Link } from "react-router-dom";
import { ListIcon} from "@phosphor-icons/react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSearchInput, setOpenSearchInput] = useState(false);

  return (
    <nav className="bg-cinza-50 flex items-center justify-center drop-shadow-sm py-1.5 px-6 fixed w-full z-1000">
      <div className="container flex items-center justify-between w-full">
        <div className="flex flex-1 justify-start">
          <img src={Logo} width={112} className="cursor-pointer" alt="Logo CRM4U" />
        </div>

        <ul className="hidden lg:flex lg:w-1/3 justify-center gap-8 text-xl">
          <li className="cursor-pointer relative group hover:brightness-105 hover:text-roxo-100">
            <a href='#inicio'>Home</a>
            <span
              className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-roxo-100 scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100"
            />
          </li>
          <li className="cursor-pointer relative group hover:brightness-105 hover:text-roxo-100">
            <a href="#planos">Planos</a>
            <span
              className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-roxo-100 scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100"
            />
          </li>
          <li className="cursor-pointer relative group hover:brightness-105 hover:text-roxo-100">
            <a href="#sobre">Sobre Nós</a>
            <span
              className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-roxo-100 scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100"
            />
          </li>
        </ul>

        <div className="flex-1 flex justify-end gap-6">
          <div className="flex">

            <div
              className={`transition-all duration-300 ease-in-out ${openSearchInput ? "min-w-[80px] max-w-[400px] opacity-100" : "max-w-0 opacity-0 ml-0"}`
              }
            >
            </div>

          </div>
          
          <div className="flex-1 flex justify-end gap-4">
            <Link
            to="/login"
            className="px-4 py-2 hover:bg-roxo-100 hover:text-white hover:border-roxo-100 transition-all duration-300 border-1 rounded-4xl cursor-pointer"
            >
              Login
              </Link>
              <Link
              to="/cadastro"
              className="px-4 py-2 bg-roxo-100 hover:bg-roxo-200 hover:text-white hover:border-roxo-200 transition-all duration-300 rounded-4xl cursor-pointer"
              >
                Cadastro
                </Link>
                </div>

          <button
            className="lg:hidden text-azul-claro text-3xl font-bold"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            <ListIcon size={32} weight="light" />
          </button>
        </div>
      </div>

      {open && (
        <ul className="flex flex-col items-end gap-4 bg-cinza-50 opacity-90 text-xl mt-1.5 px-6 py-4 lg:hidden fixed top-20 right-0 z-40 shadow-md rounded-lg w-52">
          <li className="relative w-full group hover:brightness-105">
            <a href="#inicio" onClick={() => setOpen(false)} className="block text-right">Home</a>
            <span className="block border-b border-roxo-200 mt-2 w-full" />
          </li>
          <li className="relative w-full group hover:brightness-105">
            <a href="/inicio#planos" onClick={() => setOpen(false)} className="block text-right">Planos</a>
            <span className="block border-b border-roxo-200 mt-2 w-full" />
          </li>
          <li className="relative w-full group hover:brightness-105">
            <Link to="/inicio#sobre" onClick={() => setOpen(false)} className="block text-right">Sobre Nós</Link>
            <span className="block border-b border-roxo-200 mt-2 w-full sm:last:border-none" />
          </li>
          <li className="sm:hidden relative w-full group hover:brightness-105">
            <a href="#login" onClick={() => setOpen(false)} className="block text-right">
              Login
            </a>

          <li className="relative w-full group hover:brightness-105">
            <Link to="/login" onClick={() => setOpen(false)} className="block text-right">
            Login
            </Link>
            </li>
            <li className="relative w-full group hover:brightness-105">
              <Link to="/cadastro" onClick={() => setOpen(false)} className="block text-right">
              Cadastro
              </Link>
              </li>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar;