import React from "react";
import FotoEquipe from "./FotoEquipe";
import CRM4ULOGO from "../../assets/img/CRM4ULOGO.png";
import fotoedu from "../../assets/img/fotoedu.png";
import fotoigor from "../../assets/img/fotoigor.png";
import fotojulio from "../../assets/img/fotojulio.png";
import fotolarissa2 from "../../assets/img/fotolarissa2.png";
import fotomaria from "../../assets/img/fotomaria.png";
import fotomelissa from "../../assets/img/fotomelissa.png";
import fotovanessa from "../../assets/img/fotovanessa.png";
import "../../index.css";

function Sobre() {
  return (
   <section className="bg-cinza text-white font-sans px-6 py-16 text-center">
    <h1 className="block text-4xl font-semibold text-roxo-100 mb-10 transition-colors group-focus-within:text-roxo-100">
         Sobre Nós
      </h1>
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row max-w-6xl mx-auto gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:items-center"> 
    <img
        src={CRM4ULOGO}
        alt="Logo CRM4U"
        className="mx-auto md:mx-0 h-32 sm:h-36 md:h-40 w-auto mb-6 sm:mb-8 md:mb-0 flex-shrink-0"
    />
      <p className="text-justify text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        Na <span className="text-roxo-100 font-sans-serif">CRM4U</span>, desenvolvemos soluções inteligentes para transformar a forma como empresas se conectam com seus clientes.
         <p className="mb-2">
          Nosso sistema de CRM foi criado para resolver os desafios reais do dia a dia: falta de organização, perda de oportunidades, ausência de histórico de atendimentos e falhas na comunicação interna. Com uma plataforma intuitiva e completa, centralizamos informações, automatizamos processos e facilitamos a gestão de produtos, categorias e equipes. 
         </p>
         <p className="mb-2">
         Tudo isso com o objetivo de aumentar a produtividade e fortalecer o relacionamento com o cliente. 
         Somos apaixonados por inovação, eficiência e resultados. Mais do que tecnologia, entregamos parceria para o crescimento sustentável dos nossos clientes.
        </p>
        </p>
        </div>
      {/* Caixas de Missão, Visão e Valores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 text-left">
        {/* Missão */}
        <div className="bg-gray-900 border border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-700 transition">
          <h2 className="text-xl text-center font-semibold text-purple-400 mb-3">Missão</h2>
          <p className="text-sm text-center text-gray-300">
            Desenvolver soluções inteligentes e acessíveis que transformem a forma como empresas se conectam com seus clientes, promovendo organização, eficiência e crescimento sustentável por meio de uma gestão centrada em resultados.
          </p>
        </div>
        

        {/* Visão */}
        <div className="bg-gray-900 border border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-700 transition">
          <h2 className="text-xl text-center font-semibold text-purple-400 mb-3">Visão</h2>
          <p className="text-sm text-center text-gray-300">
            Ser reconhecida como a principal plataforma de CRM para empresas que buscam inovação, produtividade e excelência no relacionamento com o cliente, contribuindo para um mercado mais conectado, ágil e humano.          </p>
        </div>

        {/* Valores */}
        <div className="bg-gray-900 border border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-700 transition">
          <h2 className="text-xl text-center font-semibold text-purple-400 mb-3">Valores</h2>
          <ul className="text-sm text-center text-gray-300 space-y-2">
            Inovamos com propósito, automatizamos com eficiência e colocamos o cliente no centro de tudo. Atuamos com ética, simplicidade inteligente e foco em resultados sustentáveis.
          </ul>
        </div>
      </div>

       <h1 className="text-4xl font-bold text-roxo-100 mb-10">Nossa Equipe:</h1>

<div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 px-6">
  {/* Coluna esquerda: fotos em grid */}
      <div className="md:w-1/3 grid grid-cols-2 gap-6">

    <FotoEquipe
      src={fotoedu}
      alt="Eduardo Garcia"
      github="https://github.com/oligEdu"
    />
    <FotoEquipe
      src={fotoigor}
      alt="Igor Pardinho"
      github="https://github.com/igorpardinho"
    />
    <FotoEquipe
      src={fotojulio}
      alt="Julio Teixeira"
      github="https://github.com/Juliotbr"
    />
    <FotoEquipe
      src={fotolarissa2}
      alt="Larissa Pinheiro"
      github="https://github.com/larissa-pinheiro"
    />
    <FotoEquipe
      src={fotomaria}
      alt="Maria Navarro"
      github="https://github.com/marinavarroo"
    />
    <FotoEquipe
      src={fotomelissa}
      alt="Melissa Silva"
      github="https://github.com/melcsilva"
    />
    <FotoEquipe
      src={fotovanessa}
      alt="Vanessa Targino"
      github="https://github.com/vanessatargino"
    />
  </div>

  {/* Coluna direita: texto */}
  <div className="md:w-2/3 text-justify text-lg leading-relaxed">
    <p className="mb-6">
      A CRM4U foi idealizada e construída por um time multidisciplinar formado por Eduardo Garcia, Igor Pardinho, Julio Teixeira, Larissa Pinheiro, Maria Navarro, Melissa Silva e Vanessa Targino.
    </p>
    <p className="mb-6">
      Cada um traz sua expertise e paixão por inovação, tecnologia e soluções inteligentes, unindo esforços para desenvolver uma plataforma de CRM que realmente faça a diferença para as empresas e seus clientes.
    </p>
    <p className="mb-6">
      Somos comprometidos com a excelência, colaboração e o sucesso dos nossos clientes, trabalhando juntos para criar uma experiência simples, eficiente e transformadora.
    </p>
    <p>
      Acreditamos que a união de talentos e a diversidade de ideias são fundamentais para impulsionar a inovação e alcançar resultados extraordinários. Estamos sempre em busca de aprimoramento contínuo, aprendendo com cada desafio e celebrando cada conquista. Nossa equipe é a alma da CRM4U, e juntos estamos construindo um futuro mais conectado e eficiente para todos.
    </p>
  </div>
</div>

    </section>
  );
};
export default Sobre