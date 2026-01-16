import { useState } from 'react'
import '../styles/Accessories.css'

function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' o 'list'

  const accessories = {
    iluminacion: [
      { name: 'Luces LED interiores', price: 'Desde $350', image: '💡' },
      { name: 'Faros LED', price: 'Desde $1,200', image: '🔦' },
      { name: 'Tiras LED decorativas', price: 'Desde $450', image: '✨' },
      { name: 'Luces de neblina LED', price: 'Desde $800', image: '🌟' }
    ],
    interior: [
      { name: 'Tapetes premium', price: 'Desde $600', image: '🚗' },
      { name: 'Fundas para asientos', price: 'Desde $1,500', image: '💺' },
      { name: 'Volantes deportivos', price: 'Desde $800', image: '⚙️' },
      { name: 'Organizadores de cajuela', price: 'Desde $400', image: '📦' }
    ],
    exterior: [
      { name: 'Espejos cromados', price: 'Desde $500', image: '🪞' },
      { name: 'Spoilers', price: 'Desde $2,000', image: '🏎️' },
      { name: 'Molduras cromadas', price: 'Desde $350', image: '✨' },
      { name: 'Viseras para lluvia', price: 'Desde $600', image: '🌧️' }
    ],
    audio: [
      { name: 'Bocinas premium', price: 'Desde $1,200', image: '🔊' },
      { name: 'Amplificadores', price: 'Desde $2,500', image: '📻' },
      { name: 'Subwoofers', price: 'Desde $1,800', image: '🎵' },
      { name: 'Pantallas touch', price: 'Desde $3,500', image: '📱' }
    ],
    seguridad: [
      { name: 'Alarmas', price: 'Desde $1,500', image: '🚨' },
      { name: 'Cámaras de reversa', price: 'Desde $1,200', image: '📹' },
      { name: 'Sensores de estacionamiento', price: 'Desde $800', image: '📡' },
      { name: 'GPS tracking', price: 'Desde $2,000', image: '🛰️' }
    ],
    productos: [
      { name: 'Cera premium', price: 'Desde $250', image: '🧴' },
      { name: 'Shampoo automotriz', price: 'Desde $150', image: '🧽' },
      { name: 'Aromatizantes premium', price: 'Desde $100', image: '🌸' },
      { name: 'Protector de vinilo', price: 'Desde $200', image: '🛡️' }
    ]
  }

  const categories = {
    todos: 'Todos los Accesorios',
    iluminacion: 'Iluminación',
    interior: 'Interior',
    exterior: 'Exterior',
    audio: 'Audio y Video',
    seguridad: 'Seguridad',
    productos: 'Productos de Limpieza'
  }

  const getAllAccessories = () => {
    return Object.values(accessories).flat()
  }

  const getFilteredAccessories = () => {
    let items = selectedCategory === 'todos' 
      ? getAllAccessories()
      : accessories[selectedCategory] || []
    
    if (searchTerm.trim()) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return items
  }

  const displayAccessories = getFilteredAccessories()

  return (
    <div className="accessories-page">
      <section className="page-hero">
        <div className="container">
          <h1>Accesorios Automotrices</h1>
          <p>Los mejores accesorios y productos para tu vehículo</p>
        </div>
      </section>

      <div className="container">
        <div className="accessories-filter">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              className={selectedCategory === key ? 'active' : ''}
              onClick={() => setSelectedCategory(key)}
            >
              {categories[key]}
            </button>
          ))}
        </div>

        <div className="accessories-controls">
          <div className="search-container">
            <svg viewBox="0 0 24 24" fill="currentColor" className="search-icon">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar accesorios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="clear-search"
                aria-label="Limpiar búsqueda"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            )}
          </div>
          
          <div className="view-controls">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Vista de cuadrícula"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
              </svg>
              Cuadrícula
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="Vista de lista"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
              Lista
            </button>
          </div>
        </div>

        {displayAccessories.length === 0 ? (
          <div className="no-results">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <h3>No se encontraron resultados</h3>
            <p>Intenta con otra búsqueda o categoría</p>
          </div>
        ) : (
          <div className={`accessories-${viewMode}`}>
          {displayAccessories.map((item, index) => (
            <div key={index} className={`accessory-card ${viewMode}-view`}>
              <div className="accessory-image-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" className="placeholder-icon">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                <span className="placeholder-text">Imagen del producto</span>
              </div>
              <div className="accessory-info">
                <h3>{item.name}</h3>
                <p className="accessory-price">{item.price}</p>
                <a
                  href={`https://wa.me/5215500000000?text=${encodeURIComponent(`Hola, me interesa: ${item.name}`)}`}
                  className="btn btn-primary btn-small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
          </div>
        )}

        <div className="accessories-info">
          <div className="info-card">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <h3>Productos Originales</h3>
            <p>Todos nuestros accesorios son 100% originales y de alta calidad</p>
          </div>
          <div className="info-card">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <h3>Instalación Disponible</h3>
            <p>Ofrecemos servicio de instalación profesional</p>
          </div>
          <div className="info-card">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <h3>Garantía</h3>
            <p>Todos nuestros productos incluyen garantía del fabricante</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accessories
