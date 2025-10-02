/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CRM4ULOGO from "/src/assets/img/CRM4ULOGO.png";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import FooterSistema from "../../components/footer/FooterSistema";

interface Usuario {
  nome: string;
  email: string;
  foto: string;
  senha: string;
  ativo: boolean;
}

const usuarioInicial: Usuario = {
  nome: "",
  email: "",
  foto: "",
  senha: "",
  ativo: true,
};

function Cadastro() {
  const [usuario, setUsuario] = useState<Usuario>(usuarioInicial);
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = useState("");

  function handleLoginClick() {
    navigate("/login");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (usuario.senha !== confirmarSenha) {
      ToastAlerta("As senhas não conferem!", "erro");
      return;
    }
    setLoading(true);
    try {
      await cadastrarUsuario("/usuario/cadastro", usuario, () => {});
      ToastAlerta("Cadastro realizado com sucesso!", "sucesso");
      navigate("/login");
    } catch (error) {
      ToastAlerta("Erro ao cadastrar usuário!", "erro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex flex-col text-white font-family-Source">
      <div className="flex flex-1 w-full">
        {/* Lado esquerdo */}
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

        {/* Lado direito */}
        <div
          className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center md:px-20 px-4 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/1200x/b8/4a/b9/b84ab9b1f6117b4c6347d56f2b969381.jpg)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>

          <div className="w-full py-6 z-20">
            <h1 className="my-4 flex justify-center items-center">
              <img src={CRM4ULOGO} alt="Logo" className="h-28 w-auto" />
            </h1>

            <form className="sm:w-2/3 w-full mx-auto" onSubmit={handleSubmit}>
              {/* Foto de perfil */}
              {photoUrl && (
                <div className="mb-4 flex justify-center">
                  <img
                    src={photoUrl}
                    alt="Pré-visualização"
                    className="w-24 h-24 rounded-full object-cover border-2 border-roxo-100"
                  />
                </div>
              )}
              <input
                type="url"
                name="photoUrl"
                id="photoUrl"
                placeholder="Link da foto de perfil (opcional)"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="block w-full p-4 text-lg rounded-lg bg-black border border-roxo-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
              />
              <span className="text-xs text-gray-400 mt-1 block">
                Dica: Hospede sua imagem em{" "}
                <a href="https://postimages.org" target="_blank" rel="noopener noreferrer" className="underline text-roxo-100">
                  postimages.org
                </a>{" "}
                ou{" "}
                <a href="https://imgur.com" target="_blank" rel="noopener noreferrer" className="underline text-roxo-100">
                  imgur.com
                </a>{" "}
                e cole o link aqui.
              </span>

              {/* Nome */}
              <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Nome completo"
                  className="block w-full p-4 text-lg rounded-lg bg-black border border-roxo-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
                  value={usuario.nome}
                  onChange={e => setUsuario({ ...usuario, nome: e.target.value })}
                  required
                />
              </div>

              {/* Email */}
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-lg bg-black border border-roxo-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
                  value={usuario.email}
                  onChange={e => setUsuario({ ...usuario, email: e.target.value })}
                  required
                />
              </div>

              {/* Senha */}
              <div className="pb-2 pt-4">
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Senha"
                  className="block w-full p-4 text-lg rounded-lg bg-black border border-roxo-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
                  value={usuario.senha}
                  onChange={e => setUsuario({ ...usuario, senha: e.target.value })}
                  required
                />
              </div>

              {/* Confirmar senha */}
              <div className="pb-2 pt-4">
                <input
                  type="password"
                  name="confirmarSenha"
                  id="confirmarSenha"
                  placeholder="Confirmar senha"
                  className="block w-full p-4 text-lg rounded-lg bg-black border border-roxo-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
                  value={confirmarSenha}
                  onChange={e => setConfirmarSenha(e.target.value)}
                  required
                />
              </div>

              {/* Botão criar conta */}
              <div className="mx-1 pt-4">
                <button
                  type="submit"
                  className="flex-1 w-full inline-flex justify-center items-center py-3 border border-transparent shadow-lg text-lg font-bold rounded-lg text-branco bg-gradient-to-r from-roxo-300 to-roxo-250 hover:from-roxo-100 hover:to-roxo-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo-250 transition-all duration-300 transform hover:scale-105"
                  disabled={loading}
                >
                  {loading ? "Cadastrando..." : "Criar conta"}
                </button>
              </div>
            </form>

            {/* Link para login */}
            <div className="py-6 space-x-2">
              <span>Já tem conta?</span>
              <button onClick={handleLoginClick} className="cursor-pointer hover:underline hover:text-roxo-100 font-semibold">
                Clique aqui para entrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer no final */}
      <FooterSistema />
    </section>
  );
}

export default Cadastro;
