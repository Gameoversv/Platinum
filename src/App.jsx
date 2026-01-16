import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Accessories from './components/Accessories'
import Gallery from './components/Gallery'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/accesorios" element={<Accessories />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
