import './App.css'
import Home from './pages/Home'
import Owner from './pages/Owner'
import Navbar from './components/navbar'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />,
        < Route path="/Owner" element={<Owner />} />
      </Routes>
    </>
  )
}

export default App
