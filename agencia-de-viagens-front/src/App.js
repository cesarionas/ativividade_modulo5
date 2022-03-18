import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import PacotesCreate from "./views/pacotes/Create";
import Pacotes from "./views/pacotes/Index";
import Promocao from "./views/promocao/Index"
import PromocaoCreate from "./views/promocao/Create";
import Cliente from "./views/cliente/Index";
import ClienteCreate from "./views/cliente/Create";
import Contato from "./views/Contato"


function App() {
  return (

    <BrowserRouter>
    <main>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Pacotes" element={<Pacotes/>} />
        <Route path="/Pacotes-Create" element={<PacotesCreate/>} />
        <Route path="/Pacotes-Update/:id" element={<PacotesCreate/>} />
        <Route path="/Promocao" element={<Promocao/>} />
        <Route path="/Promocao-Create" element={<PromocaoCreate/>} />
        <Route path="/Promocao-Update/:id" element={<PromocaoCreate/>} />
        <Route path="/Cliente" element={<Cliente/>} /> 
        <Route path="/Cliente-Update/:id" element={<ClienteCreate/>} />
         <Route path="/Cliente-Create" element={<ClienteCreate/>} />
         <Route path="/Contato" element={<Contato/>} />
      </Routes>
    </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
