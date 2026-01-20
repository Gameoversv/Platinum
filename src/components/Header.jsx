import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Aplicar tema al cargar
  useState(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="header-logo-placeholder">
              <img src="/logo2.jpg" alt="Platinum Logo" className="header-logo-img" />
            </div>
          </Link>

          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className={isActive('/servicios') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              to="/accesorios" 
              className={isActive('/accesorios') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Accesorios
            </Link>
            <Link 
              to="/galeria" 
              className={isActive('/galeria') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Galería
            </Link>
            <Link 
              to="/nosotros" 
              className={isActive('/nosotros') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              to="/faq" 
              className={isActive('/faq') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contacto" 
              className="cta-button"
              onClick={() => setMenuOpen(false)}
            >
              Agendar Cita
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
