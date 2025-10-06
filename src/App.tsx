import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";

// páginas
import Inicio from "./components/inicio/Inicio";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Categoria from "./components/categoria/Categoria";
import Produto from "./components/produto/Produto";
import Help from "./pages/help/Help";
import Usuarios from "./components/usuarios/Usuarios.tsx"

// layouts
import PublicLayout from "./components/layouts/PublicLayout";
import AppLayout from "./components/layouts/AppLayout";
import ForgotPassword from "./pages/senha/ForgotPassword.tsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<Categoria />} />
            <Route path="/produtos" element={<Produto />} />
            <Route path="/usuarios" element={<Usuarios />}/>
            <Route path="/help" element={<Help />} />
          </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/senha" element={<ForgotPassword />} />
        </Routes>

        <ToastContainer theme="colored" />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
