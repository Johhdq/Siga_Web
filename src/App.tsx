import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './components/home'
import { Login } from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Login />
  )
}

export default App
