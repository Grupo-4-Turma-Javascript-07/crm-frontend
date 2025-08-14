import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CRM4ULOGO from "/src/assets/img/CRM4ULOGO.png";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate("/");
  //   }
  // }, [isAuth, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await handleLogin(email, password);
    navigate('/home')
  }

  function handleCadastroClick() {
    navigate("/cadastro");
  }

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
            Bem-vindo de volta!
          </h1>
          <p className="text-3xl my-4">Conecte-se com a gente.</p>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-20 px-0 z-0"
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
            <img src={CRM4ULOGO} alt="Logo" className="h-28 w-auto" />
          </h1>
          <>
            <form
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg  rounded-lg bg-black border border-roxo-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                  className="block w-full p-4 text-lg rounded-lg bg-black border border-roxo-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-roxo-100 focus:border-roxo-100 transition-all duration-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                <button type="button" className="cursor-pointer">
                  Esqueceu a senha?
                </button>
              </div>
              <div className="mx-1 pt-4">
                <button
                  type="submit"
                  className="flex-1 w-full inline-flex justify-center items-center py-3  border border-transparent shadow-lg text-lg font-bold rounded-lg text-branco bg-gradient-to-r from-roxo-100 to-rosa-100 hover:from-roxo-50 hover:to-rosa-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo-100 transition-all duration-300 transform hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </button>
              </div>
            </form>
            <div className="py-6 space-x-2">
              <span>Não tem uma conta?</span>
              <button
                onClick={handleCadastroClick}
                className="cursor-pointer hover:underline hover:text-roxo-100 font-semibold"
              >
                Cadastre-se aqui
              </button>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}

export default Login;