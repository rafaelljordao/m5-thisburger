import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";


function App() {
  
  
  return (
    
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header/>
          </div>
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      </div>
    </BrowserRouter>
   
  )
}

export default App
