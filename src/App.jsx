import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Cardapio } from "./pages/Cardapio/Cardapio";
import { LandingPage } from "./pages/landingPage/LandingPage";
import Pedido from "./pages/pedido/Pedido";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
