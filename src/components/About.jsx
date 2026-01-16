import '../styles/About.css'

function About() {
  const team = [
    { name: 'Equipo Profesional', role: 'Especialistas en Detailing', icon: '👨‍🔧' },
    { name: 'Tecnología Avanzada', role: 'Equipos de última generación', icon: '🔧' },
    { name: 'Productos Premium', role: 'Marcas reconocidas internacionalmente', icon: '✨' }
  ]

  const guarantees = [
    {
      icon: '✅',
      title: 'Satisfacción Garantizada',
      description: 'Si no quedas satisfecho, trabajamos hasta que lo estés'
    },
    {
      icon: '🛡️',
      title: 'Productos de Calidad',
      description: 'Solo utilizamos productos profesionales de marcas reconocidas'
    },
    {
      icon: '⏱️',
      title: 'Puntualidad',
      description: 'Respetamos tu tiempo y cumplimos con los tiempos estimados'
    },
    {
      icon: '💎',
      title: 'Atención Personalizada',
      description: 'Cada vehículo recibe el cuidado y atención que merece'
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
              <svg viewBox="0 0 24 24" fill="currentColor" className="logo-placeholder-icon">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.25-.75-6-4.58-6-8.5V8.3l6-3.11v15.31z"/>
              </svg>
              <span className="logo-placeholder-text">Logo Platinum</span>
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
              <h3>🎯 Nuestra Misión</h3>
              <p>
                Proporcionar servicios de detailing automotriz excepcionales que superen las 
                expectativas de nuestros clientes, utilizando productos de primera calidad y 
                técnicas profesionales.
              </p>
            </div>
            <div className="mission-card">
              <h3>👁️ Nuestra Visión</h3>
              <p>
                Ser el auto spa de referencia en la región, reconocido por nuestra calidad, 
                profesionalismo y compromiso con la satisfacción del cliente.
              </p>
            </div>
            <div className="mission-card">
              <h3>💫 Nuestros Valores</h3>
              <ul>
                <li>Excelencia en cada servicio</li>
                <li>Honestidad y transparencia</li>
                <li>Pasión por el detailing</li>
                <li>Respeto por tu tiempo</li>
                <li>Mejora continua</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-guarantees">
          <h2>Nuestras Garantías</h2>
          <div className="guarantees-grid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">{guarantee.icon}</div>
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
                <div className="team-icon">{member.icon}</div>
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
            href="https://wa.me/5215500000000?text=Hola,%20quiero%20conocer%20más%20sobre%20Platinum"
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
