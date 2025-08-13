import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./components/login/Login"
import Cadastro from "./components/cadastro/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
