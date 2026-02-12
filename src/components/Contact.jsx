import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const whatsappNumber = '18493607471'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `
Hola, me gustaría agendar una cita:

*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Servicio:* ${formData.service}
*Fecha preferida:* ${formData.date}
*Hora preferida:* ${formData.time}
*Mensaje:* ${formData.message}
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contacto y Agendamiento</h1>
          <p>Agenda tu cita o contáctanos para más información</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          {/* Formulario */}
          <div className="contact-form-section">
            <h2>Agendar Cita</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Servicio de Interés *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Lavado Detailing Platinum">Lavado Detailing Platinum</option>
                  <option value="Eliminación de Olor con Ozono">Eliminación de Olor con Ozono</option>
                  <option value="Encerado del Vehículo">Encerado del Vehículo</option>
                  <option value="Tratamiento de Plástico Negro">Tratamiento de Plástico Negro</option>
                  <option value="Limpieza Básica del Motor">Limpieza Básica del Motor</option>
                  <option value="Aspirado Profundo">Aspirado Profundo</option>
                  <option value="Tratamiento de Interior">Tratamiento de Interior</option>
                  <option value="Accesorios">Accesorios</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Fecha Preferida *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Hora Preferida *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje Adicional</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más sobre lo que necesitas..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="contact-info-section">
            <h2>Información de Contacto</h2>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <div>
                <h3>WhatsApp</h3>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  +1 (849)-9889
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3>Dirección</h3>
                <p>Santiago de los Caballeros 51000</p>
                <a href="#map" className="link-btn">Ver en mapa</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div>
                <h3>Horario</h3>
                <ul className="schedule-list">
                  <li>Lun - Vie: 8:00 AM - 6:00 PM</li>
                  <li>Sábado: 8:00 AM - 6:00 PM</li>
                  <li>Domingo: 8:00 AM - 1:00 PM</li>
                </ul>
              </div>
            </div>

            <div className="contact-social">
              <h3>Síguenos</h3>
              <a
                href="https://www.instagram.com/carspaplatinum/"
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @carspaplatinum
              </a>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div id="map" className="map-section">
          <h2>Nuestra Ubicación</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.589659094261!2d-70.61767189999999!3d19.386912499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1d1003e24aa6d%3A0x48e6ccace1927a60!2sPlatinum%20Auto%20Spa%20%26%20Accesorios!5e0!3m2!1ses-419!2sdo!4v1769970277190!5m2!1ses-419!2sdo" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Platinum Auto Spa"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
