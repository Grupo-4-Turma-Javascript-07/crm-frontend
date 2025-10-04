import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import logo from "../../assets/img/CRM4ULOGO.png";
function FooterSistema()  {
  return (
    <footer className="bg-black text-white relative">
      {/* gradiente no topo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-verde-100 via-roxo-300 to-verde-100"></div>

      <div className="max-w-screen-lg mx-auto py-10 px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-10 border-t border-gray-200">
        {/* Menu */}
        <div className="sm:w-2/12">
          <h4 className="text-sm uppercase text-verde-100 font-bold mb-3">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-verde-100">Home</a></li>
            <li><a href="#planos" className="hover:text-verde-100">Planos</a></li>
            <li><a href="#sobre" className="hover:text-verde-100">Sobre</a></li>
          </ul>
        </div>

        {/* Info */}
        <div className="sm:w-7/12 text-center sm:text-left">
          <h3 className="font-bold text-xl text-verde-100 mb-4">Nossa Empresa</h3>
          <p className="text-gray-500 text-sm">
            O CRM4U é a solução simples e moderna para gerenciar clientes, produtos e vendas. Pensado para pequenas e médias empresas, ele traz praticidade, organização e mais resultados no seu dia a dia
          </p>
        </div>

        {/* Logo */}
        <div className="sm:w-3/12 flex justify-center sm:justify-end items-center">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-24 w-auto object-contain" 
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-screen-lg mx-auto py-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between text-sm">
        {/* Social icons */}
        <div className="flex gap-4">
          <a href="#" aria-label="Github">
            <GithubLogoIcon size={24} className="text-gray-500 hover:text-verde-100 transition-colors" />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramLogoIcon size={24} className="text-gray-500 hover:text-verde-100 transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedinLogoIcon size={24} className="text-gray-500 hover:text-verde-100 transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500">© 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSistema;