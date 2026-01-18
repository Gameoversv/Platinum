import { useState } from 'react'
import '../styles/Services.css'

function Services() {

  const services = [
    {
      name: 'Eliminación de Olor con Ozono',
      description: 'Tecnología avanzada para eliminar olores persistentes',
      includes: ['Tratamiento con ozono profesional', 'Elimina bacterias y hongos', 'Neutraliza olores profundos'],
      duration: '1 hora',
      price: 'Consultar',
      image: '/ozone treatment.jpg'
    },
    {
      name: 'Corrección de Pintura',
      description: 'Eliminación de imperfecciones y rayones en la pintura',
      includes: ['Evaluación de daños', 'Pulido multietapa', 'Restauración de brillo', 'Sellado de protección'],
      duration: '4-6 horas',
      price: 'Consultar',
      image: '/paint correction.jpg'
    },
    {
      name: 'Ceramic Coating',
      description: 'Recubrimiento cerámico de alta durabilidad y protección',
      includes: ['Preparación de superficie', 'Aplicación de cerámica multicapa', 'Curado profesional', 'Protección hasta 5 años'],
      duration: '1-2 días',
      price: 'Consultar',
      image: '/ceramic coating.jpg'
    },
    {
      name: 'PPF (Paint Protection Film)',
      description: 'Película protectora transparente para la pintura',
      includes: ['Medición y corte preciso', 'Instalación profesional', 'Protección contra rayones y piedras', 'Autoregeneración de rayones leves'],
      duration: '2-4 días',
      price: 'Consultar',
      image: '/ppf.png'
    },
    {
      name: 'Tratamiento de Plástico Negro',
      description: 'Restauración y protección de plásticos exteriores',
      includes: ['Limpieza profunda', 'Restauración de color', 'Protección UV'],
      duration: '30-45 min',
      price: 'Consultar',
      image: '/Tratamiento de plastico negro.png'
    },
    {
      name: 'Limpieza Básica del Motor',
      description: 'Limpieza y desengrase del compartimiento del motor',
      includes: ['Desengrase profesional', 'Limpieza de componentes', 'Protección'],
      duration: '45 min - 1 hora',
      price: 'Consultar',
      image: '/limpieza de motor.jpg'
    },
    {
      name: 'Decontaminación de Pintura',
      description: 'Eliminación de contaminantes adheridos a la pintura',
      includes: ['Clay bar profesional', 'Eliminación de partículas metálicas', 'Preparación para encerado'],
      duration: '1-2 horas',
      price: 'Consultar',
      image: '/descontaminacion.jpg'
    },
    {
      name: 'Encerado de Vehículo',
      description: 'Servicio de encerado profesional',
      includes: ['Lavado previo', 'Encerado completo', 'Pulido'],
      duration: '2 horas',
      price: 'Consultar',
      image: '/encerado de vehiculo.jpg'
    },
    {
      name: 'Aspirado Profundo',
      description: 'Limpieza profunda del interior',
      includes: ['Aspirado completo', 'Limpieza de tapicería', 'Rincones y detalles'],
      duration: '1 hora',
      price: 'Consultar',
      image: '/aspirado profundo.jpg'
    },
    {
      name: 'Tratamiento de Interior',
      description: 'Limpieza y protección de interiores',
      includes: ['Limpieza de tablero', 'Acondicionamiento de piel', 'Protección UV'],
      duration: '1-2 horas',
      price: 'Consultar',
      image: '/tratamiento de interior.jpg'
    },
    {
      name: 'Lavado por Debajo con Grafito',
      description: 'Limpieza profunda del chasis con protección de grafito',
      includes: ['Lavado a presión del chasis', 'Desengrase completo', 'Aplicación de grafito protector', 'Protección anticorrosiva'],
      duration: '1-1.5 horas',
      price: 'Consultar',
      image: '/lavado debajo grafito.jpg'
    },
    {
      name: 'Brillado de Pantalla',
      description: 'Pulido y protección de pantalla táctil',
      includes: ['Limpieza profunda', 'Pulido anti-rayones', 'Aplicación de protector', 'Eliminación de huellas'],
      duration: '30 min',
      price: 'Consultar',
      image: '/brillado de pantalla.jpg'
    },
    {
      name: 'Tintado de Cristales',
      description: 'Instalación profesional de película para cristales',
      includes: ['Medición y corte preciso', 'Instalación sin burbujas', 'Reducción de calor y UV', 'Garantía de instalación'],
      duration: '2-3 horas',
      price: 'Consultar',
      image: '/tintado.jpg'
    }
  ]

  const displayServices = services

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Servicios profesionales de detailing adaptados a tus necesidades</p>
        </div>
      </section>

      <div className="container">
        <div className="services-list">
          {displayServices.map((service, index) => (
            <div key={index} className={`service-item ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}>
              <div className="service-image-container">
                {service.image ? (
                  <img src={service.image} alt={service.name} className="service-image" />
                ) : (
                  <div className="service-image-svg">
                    {service.svg}
                  </div>
                )}
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
