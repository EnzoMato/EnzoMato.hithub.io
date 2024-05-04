import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Protectoras from './pages/Protectoras'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/ >}></Route>
        <Route path='/Protectoras' element={<Protectoras />}></Route>
      </Routes>
    </>
  )
}

export default App
