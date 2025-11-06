import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import LearnMore from './components/LearnMore'
import Browse from './components/Browse'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/learn-more' element={<LearnMore />} />
      </Routes>
    </HashRouter>
  )
}

export default App
