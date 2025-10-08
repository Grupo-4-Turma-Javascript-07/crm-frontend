import React from "react";
import logo from "/src/assets/img/CRM4ULOGO.png";

const FooterSistema: React.FC = () => {
  return (
    <footer className="h-10 flex items-center justify-between px-4 border-t border-roxo-200 bg-black text-white text-sm">
      <img src={logo} alt="CRM4U Logo" className="h-6" />
      <span>© 2025 CRM4U. Todos os direitos reservados.</span>
    </footer>
  );
};

export default FooterSistema;
