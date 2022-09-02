import { useState } from 'react'
import { LandingPage } from './pages/landingPage/LandingPage'
import Pedido from './pages/pedido/Pedido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <LandingPage />
        <Pedido />
    </div>
  )
}

export default App
