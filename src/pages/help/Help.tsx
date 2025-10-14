import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";


const categoriesData = [
  {
    title: "Começando",
    description: "Aprenda o básico da nossa plataforma para começar rapidamente.",
    link: "#",
  },
  {
    title: "Gerenciamento de Conta",
    description: "Gerencie sua conta, configurações e preferências de privacidade.",
    link: "#",
  },
  {
    title: "Resolução de Problemas",
    description: "Resolva problemas comuns com soluções passo a passo.",
    link: "#",
  },
];

const faqData = [
  {
    question: "Como mudo a minha senha?",
    answer: 'Para mudar a senha clique em "esqueci minha senha" na página de login e siga as instruções.',
  },
  {
    question: "Posso fazer o upgrade do meu plano depois?",
    answer: "Sim, você pode fazer o upgrade ou downgrade do seu planio a uqlaquer momento nas configurações do seu perfil.",
  },
];

const Help: React.FC = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);


  const filteredCategories = categoriesData.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#121212]">

      {/* Main */}
      <main className="container mx-auto px-4 py-12 pt-20 text-purple-500">
        {/* Search Bar */}
        <div className="mb-8 relative">
          <input
          type="text"
          placeholder="Procure pelo seu problema..."
          className="text-purple-500 w-full pl-12 p-4 pr-12 text-lg border rounded-lg shadow focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
          <MagnifyingGlassIcon
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 cursor-pointer"
          />
          </div>


        {/* Categories */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-purple-500 mb-2">
                {category.title}
              </h2>
              <p className="text-white">{category.description}</p>
              <a href={category.link} className="text-purple-500 mt-4 inline-block">
                Leia mais →
              </a>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-purple-500 mb-6">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-[#2a2a2a] p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="text-white mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Help;
