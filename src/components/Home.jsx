import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const whatsappNumber = '18494909889'
  const whatsappMessage = encodeURIComponent('Hola, me gustaría agendar una cita en Platinum Auto Spa')

  const featuredServices = [
    {
      title: 'Lavado Detailing Platinum',
      description: 'Servicio completo de lavado profesional con productos premium'
    },
    {
      title: 'Eliminación de Olor con Ozono',
      description: 'Tecnología avanzada para eliminar olores persistentes'
    },
    {
      title: 'Encerado del Vehículo',
      description: 'Protección y brillo duradero para tu auto'
    },
    {
      title: 'Tratamiento de Plástico Negro',
      description: 'Restauración y protección de plásticos exteriores'
    },
    {
      title: 'Limpieza Básica del Motor',
      description: 'Desengrase y limpieza profesional del compartimiento'
    },
    {
      title: 'Aspirado Profundo',
      description: 'Limpieza exhaustiva de interiores y tapicería'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="brand-name">Platinum</span>
            <span className="subtitle">Accesorios & Auto Spa</span>
          </h1>
          <p className="hero-description">
            Servicios profesionales de detailing y los mejores accesorios para tu vehículo
          </p>
          <div className="hero-buttons">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Cita
            </a>
            <Link to="/servicios" className="btn btn-secondary">
              Ver Servicios
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Desliza para más</span>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Ubicación Estratégica</h3>
              <p>Fácil acceso y ubicación conveniente</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3>Horarios Flexibles</h3>
              <p>Abierto todos los días con horarios extendidos</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3>Servicio Profesional</h3>
              <p>Personal capacitado y productos de calidad</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <h3>Contacto Directo</h3>
              <p>Agenda tu cita fácilmente por WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios Destacados</h2>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="service-placeholder-icon">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/servicios" className="btn btn-primary">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para darle a tu auto el cuidado que merece?</h2>
          <p>Agenda tu cita hoy y experimenta el servicio Platinum</p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            className="btn btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
