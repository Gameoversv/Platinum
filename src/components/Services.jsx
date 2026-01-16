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
        image: '🚗'
      },
      {
        name: 'Eliminación de Olor con Ozono',
        description: 'Tecnología avanzada para eliminar olores persistentes',
        includes: ['Tratamiento con ozono profesional', 'Elimina bacterias y hongos', 'Neutraliza olores profundos'],
        duration: '1 hora',
        price: 'Consultar',
        image: '🌬️'
      },
      {
        name: 'Encerado del Vehículo',
        description: 'Protección y brillo duradero para tu auto',
        includes: ['Preparación de superficie', 'Aplicación de cera premium', 'Pulido profesional'],
        duration: '2-3 horas',
        price: 'Consultar',
        image: '💎'
      },
      {
        name: 'Tratamiento de Plástico Negro',
        description: 'Restauración y protección de plásticos exteriores',
        includes: ['Limpieza profunda', 'Restauración de color', 'Protección UV'],
        duration: '30-45 min',
        price: 'Consultar',
        image: '🔧'
      },
      {
        name: 'Limpieza Básica del Motor',
        description: 'Limpieza y desengrase del compartimiento del motor',
        includes: ['Desengrase profesional', 'Limpieza de componentes', 'Protección'],
        duration: '45 min - 1 hora',
        price: 'Consultar',
        image: '⚙️'
      }
    ],
    gold: [
      {
        name: 'Encerado de Vehículo',
        description: 'Servicio de encerado profesional',
        includes: ['Lavado previo', 'Encerado completo', 'Pulido'],
        duration: '2 horas',
        price: 'Consultar',
        image: '✨'
      },
      {
        name: 'Aspirado Profundo',
        description: 'Limpieza profunda del interior',
        includes: ['Aspirado completo', 'Limpieza de tapicería', 'Rincones y detalles'],
        duration: '1 hora',
        price: 'Consultar',
        image: '💺'
      },
      {
        name: 'Tratamiento de Interior',
        description: 'Limpieza y protección de interiores',
        includes: ['Limpieza de tablero', 'Acondicionamiento de piel', 'Protección UV'],
        duration: '1-2 horas',
        price: 'Consultar',
        image: '🧼'
      },
      {
        name: 'Graffiti',
        description: 'Eliminación de graffiti y rayones',
        includes: ['Evaluación de daño', 'Pulido especializado', 'Restauración'],
        duration: 'Variable',
        price: 'Consultar',
        image: '🎨'
      },
      {
        name: 'Lavado Abajo',
        description: 'Limpieza del chasis y partes inferiores',
        includes: ['Lavado a presión', 'Desengrase', 'Protección anticorrosiva'],
        duration: '30-45 min',
        price: 'Consultar',
        image: '🚿'
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
                <div className="service-image">{service.image}</div>
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
