import { useState } from 'react'
import '../styles/Services.css'

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const services = {
    platinum: [
      {
        name: 'Lavado Detailing Platinum',
        description: 'Servicio completo de lavado profesional con productos premium',
        includes: ['Lavado exterior profundo', 'Limpieza de llantas y rines', 'Aspirado interior', 'Limpieza de vidrios'],
        duration: '2-3 horas',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
      },
      {
        name: 'Eliminación de Olor con Ozono',
        description: 'Tecnología avanzada para eliminar olores persistentes',
        includes: ['Tratamiento con ozono profesional', 'Elimina bacterias y hongos', 'Neutraliza olores profundos'],
        duration: '1 hora',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"/></svg>
      },
      {
        name: 'Encerado del Vehículo',
        description: 'Protección y brillo duradero para tu auto',
        includes: ['Preparación de superficie', 'Aplicación de cera premium', 'Pulido profesional'],
        duration: '2-3 horas',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      },
      {
        name: 'Tratamiento de Plástico Negro',
        description: 'Restauración y protección de plásticos exteriores',
        includes: ['Limpieza profunda', 'Restauración de color', 'Protección UV'],
        duration: '30-45 min',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
      },
      {
        name: 'Limpieza Básica del Motor',
        description: 'Limpieza y desengrase del compartimiento del motor',
        includes: ['Desengrase profesional', 'Limpieza de componentes', 'Protección'],
        duration: '45 min - 1 hora',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z"/></svg>
      }
    ],
    gold: [
      {
        name: 'Encerado de Vehículo',
        description: 'Servicio de encerado profesional',
        includes: ['Lavado previo', 'Encerado completo', 'Pulido'],
        duration: '2 horas',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"/></svg>
      },
      {
        name: 'Aspirado Profundo',
        description: 'Limpieza profunda del interior',
        includes: ['Aspirado completo', 'Limpieza de tapicería', 'Rincones y detalles'],
        duration: '1 hora',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2h18z"/></svg>
      },
      {
        name: 'Tratamiento de Interior',
        description: 'Limpieza y protección de interiores',
        includes: ['Limpieza de tablero', 'Acondicionamiento de piel', 'Protección UV'],
        duration: '1-2 horas',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
      },
      {
        name: 'Graffiti',
        description: 'Eliminación de graffiti y rayones',
        includes: ['Evaluación de daño', 'Pulido especializado', 'Restauración'],
        duration: 'Variable',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/></svg>
      },
      {
        name: 'Lavado Abajo',
        description: 'Limpieza del chasis y partes inferiores',
        includes: ['Lavado a presión', 'Desengrase', 'Protección anticorrosiva'],
        duration: '30-45 min',
        price: 'Consultar',
        svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
      }
    ]
  }

  const allServices = [...services.platinum, ...services.gold]
  const displayServices = selectedCategory === 'todos' ? allServices :
                         selectedCategory === 'platinum' ? services.platinum :
                         services.gold

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Servicios profesionales de detailing adaptados a tus necesidades</p>
        </div>
      </section>

      <div className="container">
        <div className="services-filter">
          <button 
            className={selectedCategory === 'todos' ? 'active' : ''}
            onClick={() => setSelectedCategory('todos')}
          >
            Todos los Servicios
          </button>
          <button 
            className={selectedCategory === 'platinum' ? 'active' : ''}
            onClick={() => setSelectedCategory('platinum')}
          >
            Paquete Platinum
          </button>
          <button 
            className={selectedCategory === 'gold' ? 'active' : ''}
            onClick={() => setSelectedCategory('gold')}
          >
            Paquete Gold
          </button>
        </div>

        <div className="services-list">
          {displayServices.map((service, index) => (
            <div key={index} className={`service-item ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}>
              <div className="service-image-container">
                <div className="service-image">{service.svg}</div>
              </div>
              <div className="service-content">
                <div className="service-header">
                  <h3>{service.name}</h3>
                  <span className="service-price">{service.price}</span>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <div className="service-includes">
                    <h4>Incluye:</h4>
                    <ul>
                      {service.includes.map((item, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-duration">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    <span>Duración: {service.duration}</span>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/5215500000000?text=${encodeURIComponent(`Hola, me interesa el servicio: ${service.name}`)}`}
                  className="btn btn-primary btn-small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar este servicio
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="services-note">
          <h3>¿No encuentras lo que buscas?</h3>
          <p>Contáctanos y con gusto crearemos un paquete personalizado para ti</p>
          <a 
            href="https://wa.me/5215500000000?text=Hola,%20necesito%20información%20sobre%20servicios%20personalizados"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar Servicio Personalizado
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services
