import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './components/Projects'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
