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
              <svg viewBox="0 0 24 24" fill="currentColor" className="header-logo-icon">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.25-.75-6-4.58-6-8.5V8.3l6-3.11v15.31z"/>
              </svg>
              <span className="header-logo-text">PLATINUM</span>
            </div>
          </Link>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

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
