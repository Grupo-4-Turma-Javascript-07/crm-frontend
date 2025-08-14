
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Help from '../src/pages/help/Help'
import Categoria from "./components/categoria/Categoria"
import Navbar from "./components/navbar/Navbar"
/* import Footer from "./components/footer/Footer"
 */
import FooterSistema from "./components/footer/FooterSistema"
import Sobre from "./components/sobre/Sobre"
import { AuthProvider } from "./contexts/AuthContext"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Produto from "./components/produto/Produto"


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element= {<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/categorias" element={<Categoria />} />
          <Route path="/produtos" element={<Produto />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
{/*         <Footer /> */}
        <FooterSistema />
        <ToastContainer theme="colored" />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

