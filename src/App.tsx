import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navinicio"
import Sobre from "./components/inicio/Inicio"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main className="flex flex-col gap-24 pt-[88px]">
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </main>
    {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
