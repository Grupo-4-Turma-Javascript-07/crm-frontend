import React from "react";
import CRM4ULOGO from "../../assets/img/CRM4ULOGO.png";
import "../../index.css"; //Importando o CSS para estilização

const Sobre: React.FC = () => {
  return (
    <section className="bg--color-cinza text--color-roxo-200 font-sans px-6 py-16 text-center">
      <img
        src={CRM4ULOGO}
        alt="Logo CRM4U"
        className="w-28 mx-auto mb-6"
      />

      <h1 className="text-4xl font-bold text-purple-500 mb-6">
        Sobre a CRM4U
      </h1>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        A <span className="text-pink-500 font-semibold">CRM4U</span> é uma empresa especializada em soluções digitais para gestão de relacionamento com clientes. Com foco em inovação e tecnologia, oferecemos ferramentas que ajudam empresas a crescer, fidelizar e entender melhor seus consumidores.
      </p>

      {/* Missão */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-fuchsia-700 mb-2">Missão</h2>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Transformar dados em experiências personalizadas, criando conexões reais entre marcas e pessoas.
        </p>
      </div>

      {/* Visão */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-fuchsia-700 mb-2">Visão</h2>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Ser referência em soluções de CRM no Brasil, promovendo inovação, inteligência de mercado e excelência no atendimento.
        </p>
      </div>

      {/* Valores */}
      <div>
        <h2 className="text-2xl font-semibold text-fuchsia-700 mb-2">Valores</h2>
        <ul className="list-none text-base leading-relaxed max-w-2xl mx-auto space-y-2">
          <li>🤝 Compromisso com o cliente</li>
          <li>🚀 Inovação contínua</li>
          <li>📊 Transparência e ética</li>
          <li>💡 Inteligência estratégica</li>
          <li>🌱 Desenvolvimento sustentável</li>
        </ul>
      </div>
    </section>
  );
};

export default Sobre;
