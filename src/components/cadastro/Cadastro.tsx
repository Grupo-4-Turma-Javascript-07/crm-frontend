import React from "react";
import logo from "../../assets/img/CRM4ULOGO.png"

const Cadastro: React.FC = () => {
  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  return (
    <section className="min-h-screen flex items-stretch text-white font-family-Source">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover bg-center relative items-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/1200x/b8/4a/b9/b84ab9b1f6117b4c6347d56f2b969381.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-4xl font-bold text-left tracking-wide">
            Junte-se a nós!
          </h1>
          <p className="text-3xl my-4">
            Crie sua conta e comece sua jornada.
          </p>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/1200x/b8/4a/b9/b84ab9b1f6117b4c6347d56f2b969381.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-28 w-auto" />
          </h1>
          <div className="py-6 space-x-2 hover:">
            <button onClick={handleLoginClick}  className="cursor-pointer hover:underline hover:text-roxo-100">
              Já tem conta? Clique aqui para entrar!
            </button>
          </div>
          <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome completo"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirmar senha"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
            </div>
            <div className="px-4 pb-2 pt-4">
              <button 
                type="submit"
                className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-lg text-lg font-bold rounded-lg text-branco bg-gradient-to-r from-roxo-100 to-rosa-100 hover:from-roxo-50 hover:to-rosa-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo-100 transition-all duration-300 transform hover:scale-105">
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;