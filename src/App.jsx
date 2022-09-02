import { useState } from 'react'
import { LandingPage } from './pages/landingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <LandingPage />
    </div>
  )
}

export default App
