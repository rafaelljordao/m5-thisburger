import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from "./components/Cart/Cart";
import { Header } from './components/Header/Header';
import { Cardapio } from './pages/Cardapio/Cardapio'; 
import { LandingPage } from './pages/landingPage/LandingPage'
import Pedido from './pages/pedido/Pedido'

function App() {


  return (
    <div className="App">
          <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header/>
          </div>
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/pedido' element={<Pedido/>}/>
          <Route path='/cardapio' element={<Cardapio/>}/>
        </Routes>
      </div>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
