import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LearnMore from './components/LearnMore'
import Browse from './components/Browse'
import Cart from './components/Cart'
import Favorites from './components/Favorites'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div style={{ paddingTop: "90px", minHeight: "100vh" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/learn-more' element={<LearnMore />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App