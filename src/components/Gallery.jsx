import { useState, useEffect } from 'react'
import '../styles/Gallery.css'

function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('todos')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Simulación de galería - en producción estas serían imágenes reales
  const galleryItems = [
    { id: 1, category: 'lavado', title: 'Lavado Detailing Platinum', description: 'Lavado completo con acabado premium' },
    { id: 2, category: 'interior', title: 'Limpieza de Interior', description: 'Tratamiento profundo de tapicería y superficies' },
    { id: 3, category: 'exterior', title: 'Pulido y Encerado', description: 'Acabado de alto brillo con protección duradera' },
    { id: 4, category: 'motor', title: 'Limpieza de Motor', description: 'Desengrase y limpieza profesional del motor' },
    { id: 5, category: 'lavado', title: 'Lavado Premium', description: 'Servicio de lavado con atención al detalle' },
    { id: 6, category: 'interior', title: 'Tratamiento de Tapicería', description: 'Restauración y protección de asientos' },
    { id: 7, category: 'exterior', title: 'Restauración de Faros', description: 'Pulido y sellado de faros opacos' },
    { id: 8, category: 'plasticos', title: 'Tratamiento de Plásticos', description: 'Restauración de color y brillo en plásticos' },
    { id: 9, category: 'exterior', title: 'Encerado Profesional', description: 'Protección de pintura con cera premium' },
    { id: 10, category: 'lavado', title: 'Detailing Completo', description: 'Servicio integral exterior e interior' },
    { id: 11, category: 'motor', title: 'Limpieza de Compartimiento', description: 'Limpieza completa del área del motor' },
    { id: 12, category: 'interior', title: 'Limpieza con Ozono', description: 'Eliminación de olores y desinfección profunda' },
  ]

  const filters = [
    { key: 'todos', label: 'Todos' },
    { key: 'lavado', label: 'Lavado' },
    { key: 'interior', label: 'Interior' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'motor', label: 'Motor' },
    { key: 'plasticos', label: 'Plásticos' }
  ]

  const filteredItems = selectedFilter === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, lightboxIndex])

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <h1>Galería de Trabajos</h1>
          <p>Mira la transformación que logramos en cada vehículo</p>
        </div>
      </section>

      <div className="container">
        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={selectedFilter === filter.key ? 'active' : ''}
              onClick={() => setSelectedFilter(filter.key)}
            >
              {filter.label}
              <span className="filter-count">
                ({filter.key === 'todos' ? galleryItems.length : galleryItems.filter(item => item.category === filter.key).length})
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-intro">
          <h2>Nuestros Trabajos</h2>
          <p>Cada vehículo recibe atención especializada y cuidado profesional. Aquí puedes ver algunos de nuestros servicios terminados.</p>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-container">
                <div className="gallery-image-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="placeholder-icon">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <span className="placeholder-text">Imagen del servicio</span>
                </div>
                <div className="gallery-overlay">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="zoom-icon">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
              </div>
              <div className="gallery-item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="category-badge">{filters.find(f => f.key === item.category)?.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <h3>¡Sigue nuestro trabajo en Instagram!</h3>
          <p>Publicamos diariamente fotos reales de nuestros trabajos</p>
          <a
            href="https://www.instagram.com/carspaplatinum/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Visitar Instagram
          </a>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
            <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
            
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-image">
                <div className="comparison-image-placeholder large">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="placeholder-icon">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                  <span className="placeholder-text">Imagen del servicio</span>
                </div>
              </div>
              <div className="lightbox-info">
                <h3>{filteredItems[lightboxIndex]?.title}</h3>
                <p>{filteredItems[lightboxIndex]?.description}</p>
                <span className="category-badge">{filters.find(f => f.key === filteredItems[lightboxIndex]?.category)?.label}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
