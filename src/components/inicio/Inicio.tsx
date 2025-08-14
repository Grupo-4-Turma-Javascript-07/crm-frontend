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

function Inicio() {
  return (
    <>
      {/* Conteúdo da página Inicio */}
      <div
        id="inicio"
        className="bg-background flex flex-col items-center scroll-mt-44 mt-20 font-family-Source"
      >
        {/* SEÇÃO INICIAL */}
        <div className="container grid grid-cols-2 text-nav-footer">
          {/* Texto à esquerda */}
          <div className="flex flex-col gap-3 justify-center py-4 px-9">
            <h2 className="text-4xl font-bold text-shadow-lg/15 text-branco mb-1">
              O CRM nº1 do <span className="text-roxo-100">Brasil.</span>
            </h2>
            <p className="text-lg font-semibold text-branco">
              Administre suas vendas, produtos e categorias em uma interface{" "}
              <span className="text-roxo-100">moderna</span> e{" "}
              <span className="text-roxo-100">fácil</span> de usar
            </p>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 hover:bg-roxo-100 hover:text-white hover:border-roxo-100 transition-all duration-300 border-1 rounded-4xl cursor-pointer">
                <a href="#cardapio">Teste Grátis</a>
              </button>
              <button className="px-4 py-2 bg-roxo-100 hover:bg-roxo-200 hover:text-white hover:border-roxo-200 transition-all duration-300 rounded-4xl cursor-pointer">
                <a href="#cardapio">Agendar demo</a>
              </button>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/1369437328153645093/1405551579280703589/CRM_LAYOUT.png?ex=689f3d6a&is=689debea&hm=ad0b7c968f24162f431f9a2a591269f8414f01172256266927c338bf83b412ca&"
              alt="Imagem Página Home"
              className="w-full h-96"
            />
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
            <div className="bg-cinza-50 rounded-3xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-roxo-100 mb-4">Básico</h3>
              <p className="text-white mb-6 font-semibold text-center">
                Para pequenos negócios que querem aumentar suas vendas
              </p>
              <ul className="text-white space-y-2 mb-6 list-disc pl-6">
                <li>Inbox unificado</li>
                <li>Funis de venda ilimitados</li>
                <li>Gestão de tarefas e mais</li>
              </ul>
              <p className="text-2xl font-bold text-roxo-100">R$ 79/mês</p>
              <p className="text-white text-sm mb-6">por usuário</p>
              <button className="bg-roxo-100 text-white px-6 py-2 rounded-full hover:bg-roxo-200 transition">
                Assinar
              </button>
            </div>

            {/* Plano Avançado */}
            <div className="bg-cinza-50 rounded-3xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-roxo-100 mb-4">Avançado</h3>
              <p className="text-white mb-6 font-semibold text-center">
                Para empresas que querem automatizar seu trabalho
              </p>
              <ul className="text-white space-y-2 mb-6 list-disc pl-6">
                <li>Tudo do Básico</li>
                <li>Salesbot sem código</li>
                <li>Automação de funil de vendas</li>
              </ul>
              <p className="text-2xl font-bold text-roxo-100">R$ 129/mês</p>
              <p className="text-white text-sm mb-6">por usuário</p>
              <button className="bg-roxo-100 text-white px-6 py-2 rounded-full hover:bg-roxo-200 transition">
                Assinar
              </button>
            </div>

            {/* Plano Empresarial */}
            <div className="bg-cinza-50 rounded-3xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-roxo-100 mb-4">
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
              <p className="text-2xl font-bold text-roxo-100">R$ 199/mês</p>
              <p className="text-white text-sm mb-6">por usuário</p>
              <button className="bg-roxo-100 text-white px-6 py-2 rounded-full hover:bg-roxo-200 transition">
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
          <div className="bg-cinza-50 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-700 transition">
            <h2 className="text-xl text-center font-semibold text-purple-400 mb-3">
              Missão
            </h2>
            <p className="text-sm text-center text-gray-300">
              Desenvolver soluções inteligentes e acessíveis que transformem a
              forma como empresas se conectam com seus clientes, promovendo
              organização, eficiência e crescimento sustentável por meio de uma
              gestão centrada em resultados.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-cinza-50 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-700 transition">
            <h2 className="text-xl text-center font-semibold text-purple-400 mb-3">
              Visão
            </h2>
            <p className="text-sm text-center text-gray-300">
              Ser reconhecida como a principal plataforma de CRM para empresas
              que buscam inovação, produtividade e excelência no relacionamento
              com o cliente, contribuindo para um mercado mais conectado, ágil
              e humano.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-cinza-50 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-700 transition">
            <h2 className="text-xl text-center font-semibold text-purple-400 mb-3">
              Valores
            </h2>
            <ul className="text-sm text-center text-gray-300 space-y-2">
              Inovamos com propósito, automatizamos com eficiência e colocamos o
              cliente no centro de tudo. Atuamos com ética, simplicidade
              inteligente e foco em resultados sustentáveis.
            </ul>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-roxo-100 mb-10">Nossa Equipe:</h1>

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
              A CRM4U foi idealizada e construída por um time multidisciplinar
              formado por Eduardo Garcia, Igor Pardinho, Julio Teixeira, Larissa
              Pinheiro, Maria Navarro, Melissa Silva e Vanessa Targino.
            </p>
            <p className="mb-6">
              Cada um traz sua expertise e paixão por inovação, tecnologia e
              soluções inteligentes, unindo esforços para desenvolver uma
              plataforma de CRM que realmente faça a diferença para as empresas
              e seus clientes.
            </p>
            <p className="mb-6">
              Somos comprometidos com a excelência, colaboração e o sucesso dos
              nossos clientes, trabalhando juntos para criar uma experiência
              simples, eficiente e transformadora.
            </p>
            <p>
              Acreditamos que a união de talentos e a diversidade de ideias são
              fundamentais para impulsionar a inovação e alcançar resultados
              extraordinários. Estamos sempre em busca de aprimoramento
              contínuo, aprendendo com cada desafio e celebrando cada conquista.
              Nossa equipe é a alma da CRM4U, e juntos estamos construindo um
              futuro mais conectado e eficiente para todos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
