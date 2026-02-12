import '../styles/About.css'

function About() {
  const team = [
    { 
      name: 'Equipo Profesional', 
      role: 'Especialistas en Detailing', 
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
    },
    { 
      name: 'Tecnología Avanzada', 
      role: 'Equipos de última generación', 
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
    },
    { 
      name: 'Productos Premium', 
      role: 'Marcas reconocidas internacionalmente', 
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    }
  ]

  const guarantees = [
    {
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,
      title: 'Satisfacción Garantizada',
      description: 'Si no quedas satisfecho, trabajamos hasta que lo estés'
    },
    {
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>,
      title: 'Productos de Calidad',
      description: 'Solo utilizamos productos profesionales de marcas reconocidas'
    },
    {
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>,
      title: 'Puntualidad',
      description: 'Respetamos tu tiempo y cumplimos con los tiempos estimados'
    },
    {
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
      title: 'Atención Personalizada',
      description: 'Cada vehículo recibe el cuidado y atención que merece'
    },
    {
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>,
      title: 'Garantía de Servicio',
      description: 'Todos nuestros trabajos están respaldados por garantía'
    },
    {
      svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>,
      title: 'Citas Flexibles',
      description: 'Horarios adaptados a tu disponibilidad y necesidades'
    }
  ]

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>Sobre Nosotros</h1>
          <p>Pasión por el detailing y compromiso con la excelencia</p>
        </div>
      </section>

      <div className="container">
        <section className="about-story">
          <h2>Nuestra Historia</h2>
          <div className="story-layout">
            <div className="story-logo-placeholder">
              <img src="/logo2.jpg" alt="Platinum Logo" className="story-logo" />
            </div>
            <div className="story-content">
              <p>
                En <strong>Platinum Accesorios & Auto Spa</strong>, nos apasiona el cuidado automotriz. 
                Comenzamos con una visión clara: ofrecer servicios de detailing y accesorios de la más 
                alta calidad a precios accesibles.
              </p>
              <p>
                Hoy nos enorgullecemos de ser un referente en servicios de auto spa, combinando 
                técnicas profesionales con productos premium para lograr resultados excepcionales 
                en cada vehículo que atendemos.
              </p>
              <p>
                Nuestro compromiso es simple: tratar cada auto como si fuera nuestro, con dedicación, 
                profesionalismo y atención al detalle.
              </p>
            </div>
          </div>
        </section>

        <section className="about-mission">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon target">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3>Nuestra Misión</h3>
              <p>
                Proporcionar servicios de detailing automotriz excepcionales que superen las 
                expectativas de nuestros clientes, utilizando productos de primera calidad y 
                técnicas profesionales.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon eye">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <h3>Nuestra Visión</h3>
              <p>
                Ser el auto spa de referencia en la región, reconocido por nuestra calidad, 
                profesionalismo y compromiso con la satisfacción del cliente.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon stars">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3>Nuestros Valores</h3>
              <ul>
                <li>✓ Excelencia en cada servicio</li>
                <li>✓ Honestidad y transparencia</li>
                <li>✓ Pasión por el detailing</li>
                <li>✓ Respeto por tu tiempo</li>
                <li>✓ Mejora continua</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-guarantees">
          <h2>Nuestras Garantías</h2>
          <div className="guarantees-grid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">{guarantee.svg}</div>
                <h3>{guarantee.title}</h3>
                <p>{guarantee.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-team">
          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{member.svg}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <h2>¿Listo para experimentar el servicio Platinum?</h2>
          <p>Únete a cientos de clientes satisfechos que confían en nosotros</p>
          <a
            href="https://wa.me/18493607471?text=Hola,%20quiero%20conocer%20más%20sobre%20Platinum"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctanos
          </a>
        </section>
      </div>
    </div>
  )
}

export default About
