import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Cardapio } from "./pages/Cardapio/Cardapio";
import { LandingPage } from "./pages/landingPage/LandingPage";
import Pedido from "./pages/pedido/Pedido";
import Header from "./components/Header/Header";
import Footer from './components/footer/Footer'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
