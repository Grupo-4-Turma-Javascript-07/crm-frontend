import FotoEquipe from "./FotoEquipe";
import CRM4ULOGO from "../../assets/img/CRM4ULOGO.png";
import fotoedu from "../../assets/img/fotoedu.png";
import fotoigor from "../../assets/img/fotoigor.png";
import fotojulio from "../../assets/img/fotojulio.png";
import fotolarissa2 from "../../assets/img/fotolarissa2.png";
import fotomaria from "../../assets/img/fotomaria.png";
import fotomelissa from "../../assets/img/fotomelissa.png";
import fotovanessa from "../../assets/img/fotovanessa.png";
import imglayout from "../../assets/img/CRMLAYOUT.png";
import "../../index.css";

function Inicio() {
  return (
    <>
      {/* Conteúdo da página Inicio */}
      <div
        id="inicio"
        className="bg-background flex flex-col items-center scroll-mt-44 mt-20 font-family-Source"
      >
        {/* SEÇÃO INICIAL */}
        <div className="container grid grid-cols-2 text-nav-footer pt-10">
          {/* Texto à esquerda */}
          <div className="flex flex-col gap-3 justify-center py-4 px-15">
            <h2 className="text-5xl font-bold text-shadow-lg/15 text-branco mb-1">
              O CRM nº1 do <span className="text-roxo-100">Brasil.</span>
            </h2>
            <p className="text-3xl font-semibold text-branco">
              Administre suas vendas, produtos e categorias em uma interface{" "}
              <span className="text-roxo-100">moderna</span> e{" "}
              <span className="text-roxo-100">fácil</span> de usar
            </p>
            <div className="flex gap-4 mt-4">
              <button className="text-gray-300 py-3 px-15 border-white shadow-lg text-lg rounded-lg hover:text-white  transition-all duration-300 border-1 cursor-pointer">
                <a href="#teste">Teste Grátis</a>
              </button>
              <button className="py-3 px-15 border border-transparent shadow-lg text-lg rounded-lg text-branco bg-gradient-to-r from-roxo-300 to-roxo-250 hover:from-roxo-100 hover:to-roxo-250 hover:text-roxo-300 transition-all duration-300 cursor-pointer">
                <a href="#agendar">Agendar demo</a>
              </button>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="flex justify-center">
            <img 
              src={imglayout} 
              alt="Layout do CRM" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* FUNCIONALIDADES */}
        <div
          id="funcionalidades"
          className="py-15 w-full bg-cinza-100 mt-15 rounded-lg shadow-lg/20 max-w-6xl px-6"
        >
          <div className="lg:text-center">
            <h2 className="text-4xl text-shadow-lg/30 text-white font-semibold tracking-wide uppercase">
              Funcionalidades do nosso sistema
            </h2>
            <p className="mt-2 text-shadow-lg/20 text-2xl leading-8 font-light tracking-tight text-verde-100">
              Tudo o que você precisa em um só lugar!
            </p>
            <p className="mt-4 text-shadow-lg/20 max-w-2xl text-xl text-white lg:mx-auto">
              Nosso CRM é simples, moderno e poderoso. Perfeito para pequenas e grandes equipes.
            </p>
          </div>

          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

              {/* Item 1 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-roxo-250 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-verde-100">
                    Escalável
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  Cresça sem limites: o sistema acompanha a evolução da sua empresa.
                </dd>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-roxo-250 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-verde-100">
                    Automação
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  Reduza tarefas manuais e deixe o sistema trabalhar por você.
                </dd>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-roxo-250 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-verde-100">
                    Simples de usar
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  Interface intuitiva para qualquer pessoa da sua equipe.
                </dd>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-roxo-250 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-verde-100">
                    Suporte dedicado
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  Equipe pronta para ajudar você em cada etapa do processo.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* SEÇÃO DE PLANOS */}
        <div
          id="planos"
          className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-2"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-branco">
            Escolha seu plano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Plano Básico */}
            <div className="bg-gradient-to-t from-roxo-250 to-roxo-300 rounded-3xl shadow-lg p-6 hover:shadow-roxo-350 transition flex flex-col items-center">
              <h3 className="text-shadow-lg/20 text-3xl font-bold text-verde-100 mb-4">Básico</h3>
              <p className="text-white mb-6 font-semibold text-center">
                Para pequenos negócios que querem aumentar suas vendas
              </p>
              <ul className="text-white space-y-2 mb-6 list-disc pl-6">
                <li>Inbox unificado</li>
                <li>Funis de venda ilimitados</li>
                <li>Gestão de tarefas e mais</li>
              </ul>
              <p className="text-shadow-lg/20 text-4xl font-bold text-verde-100">R$ 79/mês</p>
              <p className="text-white text-sm mb-6">por usuário</p>
              <button className="cursor-pointer border-1 border-white text-white text-lg px-30 py-3 rounded-2xl hover:bg-verde-100 hover:border-0 transition">
                Assinar
              </button>
            </div>

            {/* Plano Avançado */}
            <div className="bg-gradient-to-t from-roxo-250 to-roxo-300 rounded-3xl shadow-lg p-6 hover:shadow-roxo-350 transition flex flex-col items-center">
              <h3 className="text-shadow-lg/20 text-3xl font-bold text-verde-100 mb-4">Avançado</h3>
              <p className="text-white mb-6 font-semibold text-center">
                Para empresas que querem automatizar seu trabalho
              </p>
              <ul className="text-white space-y-2 mb-6 list-disc pl-6">
                <li>Tudo do Básico</li>
                <li>Salesbot sem código</li>
                <li>Automação de funil de vendas</li>
              </ul>
              <p className="text-shadow-lg/20 text-4xl font-bold text-verde-100">R$ 129/mês</p>
              <p className="text-white text-sm mb-6">por usuário</p>
              <button className="cursor-pointer border-1 border-white text-white text-lg px-30 py-3 rounded-2xl hover:bg-verde-100 hover:border-0 transition">
                Assinar
              </button>
            </div>

            {/* Plano Empresarial */}
            <div className="bg-gradient-to-t from-roxo-250 to-roxo-300 rounded-3xl shadow-lg hover:shadow-roxo-350 transition p-6 flex flex-col items-center">
              <h3 className="text-shadow-lg/20 text-3xl font-bold text-verde-100 mb-4">
                Empresarial
              </h3>
              <p className="text-white mb-6 font-semibold text-center">
                Para empresas maiores que lidam com muitos leads
              </p>
              <ul className="text-white space-y-2 mb-6 list-disc pl-6">
                <li>Tudo do Avançado</li>
                <li>Base de dados aumentada</li>
                <li>Perfis de clientes avançados</li>
              </ul>
              <p className="text-shadow-lg/20 text-4xl font-bold text-verde-100">R$ 199/mês</p>
              <p className="text-white text-sm mb-6">por usuário</p>
              <button className="cursor-pointer border-1 border-white text-white text-lg px-30 py-3 rounded-2xl hover:bg-verde-100 hover:border-0 transition">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo original da página Sobre */}
      <section
        id="sobre"
        className="bg-cinza text-white px-6 py-16 text-center"
      >
        <h1 className="block text-4xl font-semibold text-white mb-10 mt-4">
          Sobre Nós
        </h1>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row max-w-6xl mx-auto gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:items-center">
          <img
            src={CRM4ULOGO}
            alt="Logo CRM4U"
            className="mx-auto md:mx-0 h-32 sm:h-36 md:h-40 w-auto mb-6 sm:mb-8 md:mb-0 flex-shrink-0"
          />
          <p className="text-justify text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Na{" "}
            <span className="text-roxo-100 font-bold">CRM4U</span>,
            desenvolvemos soluções inteligentes para transformar a forma como
            empresas se conectam com seus clientes.
            <p className="mb-2">
              Nosso sistema de CRM foi criado para <span className="text-roxo-100 font-bold">resolver</span> os desafios reais do
              dia a dia: falta de <span className="text-roxo-100 font-bold">organização</span>, perda de oportunidades, ausência de histórico de atendimentos e falhas na comunicação interna. Com
              uma plataforma <span className="text-roxo-100 font-bold">intuitiva</span> e completa, centralizamos informações, <span className="text-roxo-100 font-bold">automatizamos</span> processos e <span className="text-roxo-100 font-bold">facilitamos</span> a gestão de produtos, categorias e equipes.
            </p>
            <p className="mb-2">
              Tudo isso com o objetivo de <span className="text-roxo-100 font-bold">aumentar</span> a produtividade e <span className="text-roxo-100 font-bold">fortalecer </span>
              o relacionamento com o cliente. Somos <span className="text-roxo-100 font-bold">apaixonados</span> por inovação, <span className="text-roxo-100 font-bold">eficiência</span> e resultados. Mais do que tecnologia, entregamos parceria para o <span className="text-roxo-100 font-bold">crescimento</span> sustentável dos nossos clientes.
            </p>
          </p>
        </div>

        {/* Caixas de Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 text-left">
          {/* Missão */}
          <div className="bg-gradient-to-t from-roxo-250 to-roxo-300 rounded-3xl shadow-lg p-6 hover:shadow-roxo-350 transition flex flex-col items-center">
            <h2 className="text-shadow-lg/20 text-2xl text-center font-semibold text-verde-100 mb-3">
              Missão
            </h2>
            <p className="text-sm text-center text-white">
              Desenvolver soluções inteligentes e acessíveis que transformem a
              forma como empresas se conectam com seus clientes, promovendo
              organização, eficiência e crescimento sustentável por meio de uma
              gestão centrada em resultados.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-gradient-to-t from-roxo-250 to-roxo-300 rounded-3xl shadow-lg p-6 hover:shadow-roxo-350 transition flex flex-col items-center">
            <h2 className="text-2xl text-center text-shadow-lg/20 font-semibold text-verde-100 mb-3">
              Visão
            </h2>
            <p className="text-sm text-center text-white">
              Ser reconhecida como a principal plataforma de CRM para empresas
              que buscam inovação, produtividade e excelência no relacionamento
              com o cliente, contribuindo para um mercado mais conectado, ágil
              e humano.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-gradient-to-t from-roxo-250 to-roxo-300 rounded-3xl shadow-lg p-6 hover:shadow-roxo-350 transition flex flex-col items-center">
            <h2 className="text-2xl text-center text-shadow-lg/20 font-semibold text-verde-100 mb-3">
              Valores
            </h2>
            <ul className="text-mt text-center text-white space-y-2">
              Inovamos com propósito, automatizamos com eficiência e colocamos o
              cliente no centro de tudo. Atuamos com ética, simplicidade
              inteligente e foco em resultados sustentáveis.
            </ul>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-10">Nossa Equipe</h1>

        <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 px-6">
          {/* Coluna esquerda: fotos em grid */}
          <div className="md:w-1/3 grid grid-cols-2 gap-6">
            <FotoEquipe src={fotoedu} alt="Eduardo Garcia" github="https://github.com/oligEdu" />
            <FotoEquipe src={fotoigor} alt="Igor Pardinho" github="https://github.com/igorpardinho" />
            <FotoEquipe src={fotojulio} alt="Julio Teixeira" github="https://github.com/Juliotbr" />
            <FotoEquipe src={fotolarissa2} alt="Larissa Pinheiro" github="https://github.com/larissa-pinheiro" />
            <FotoEquipe src={fotomaria} alt="Maria Navarro" github="https://github.com/marinavarroo" />
            <FotoEquipe src={fotomelissa} alt="Melissa Silva" github="https://github.com/melcsilva" />
            <FotoEquipe src={fotovanessa} alt="Vanessa Targino" github="https://github.com/vanessatargino" />
          </div>

          {/* Coluna direita: texto */}
          <div className="md:w-2/3 text-justify text-lg leading-relaxed">
            <p className="mb-6">
              A <span className="text-roxo-100 font-bold">CRM4U</span> foi idealizada e construída por um time <span className="text-roxo-100 font-bold">multidisciplinar </span>
              formado por <span className=" font-bold">Eduardo Garcia</span>, <span className=" font-bold">Igor Pardinho</span>, <span className="t font-bold">Julio Teixeira</span>, <span className="font-bold">Larissa
              Pinheiro</span>, <span className="font-bold">Maria Navarro</span>, <span className="font-bold">Melissa Silva</span> e <span className=" font-bold">Vanessa Targino</span>.
            </p>
            <p className="mb-6">
              Cada um traz sua <span className="text-roxo-100 font-bold">expertise</span> e <span className="text-roxo-100 font-bold">paixão</span> por inovação, tecnologia e
              soluções inteligentes, unindo esforços para desenvolver uma
              plataforma de CRM que realmente faça a <span className="text-roxo-100 font-bold">diferença</span> para as empresas
              e seus clientes.
            </p>
            <p className="mb-6">
              Somos comprometidos com a <span className="text-roxo-100 font-bold">excelência</span>, colaboração e o sucesso dos
              nossos clientes, trabalhando juntos para criar uma experiência
              simples, eficiente e <span className="text-roxo-100 font-bold">transformadora</span>.
            </p>
            <p>
              Acreditamos que a união de talentos e a diversidade de ideias são
              fundamentais para <span className="text-roxo-100 font-bold">impulsionar</span> a inovação e alcançar resultados 
              <span className="text-roxo-100 font-bold"> extraordinários</span>. Estamos sempre em busca de aprimoramento
              contínuo, aprendendo com cada desafio e celebrando cada <span className="text-roxo-100 font-bold">conquista</span>.
              Nossa equipe é a alma da <span className="text-roxo-100 font-bold">CRM4U</span>, e juntos estamos construindo um
              futuro mais <span className="text-roxo-100 font-bold">conectado</span> e <span className="text-roxo-100 font-bold">eficiente </span>para todos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
