import { useState } from 'react'
import { Home } from './components/home'
import { Login } from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Login />
    <Home />
  )
}

export default App
