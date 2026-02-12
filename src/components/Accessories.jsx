import { useState } from 'react'
import '../styles/Accessories.css'

function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' o 'list'
  const [modalImage, setModalImage] = useState(null)

  const accessories = {
    iluminacion: [
      {
        name: 'Focus LED Super Bright 100 Watts',
        price: 'Precio a consultar',
        image: '/Accesorios/focus led super bright 100 watts.jpeg'
      },
      {
        name: 'Focus LED 130 Watts',
        price: 'Precio a consultar',
        image: '/Accesorios/focus led 130 watts.jpeg'
      },
      {
        name: 'Focus LED Elite 150W',
        price: 'Precio a consultar',
        image: '/Accesorios/focus led elite 150w.jpeg'
      },
      {
        name: 'Focus LED 200W',
        price: 'Precio a consultar',
        image: '/Accesorios/focus led 200w.jpeg'
      },
      {
        name: 'GTS Car LED Headlight 250W',
        price: 'Precio a consultar',
        image: '/Accesorios/gts car led headlight 250w.jpeg'
      },
      {
        name: 'GTS LED Headlight 350W',
        price: 'Precio a consultar',
        image: '/Accesorios/gts led headlight 350w.jpeg'
      },
      {
        name: 'DRL Car Grille LED Lights',
        price: 'Precio a consultar',
        image: '/Accesorios/DRL car grille led lights.jpeg'
      },
      {
        name: 'Car Interior Decoration Atmosphere Light',
        price: 'Precio a consultar',
        image: '/Accesorios/Car interior decoration atmosphere light.jpeg'
      }
    ],

    interior: [
      {
        name: 'Car MP5 Player',
        price: 'Precio a consultar',
        image: '/Accesorios/car mp5 player.jpeg'
      },
      {
        name: 'Goodyear Auto Horns',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear auto horns.jpeg'
      }
    ],

    aromatizantes: [
      {
        name: 'Meguiar\'s Air Refresher Black Chrome Spray',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar air refresher black chrome spray.jpeg'
      },
      {
        name: 'Meguiar\'s Air Refresher Black Chrome',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar Air refresher black chrome.jpeg'
      },
      {
        name: 'Meguiar\'s Air Refresher Dubai Sands',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar Air refresher dubai sands.jpeg'
      },
      {
        name: 'Meguiar\'s Air Refresher Fiji Sunset',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar Air refresher fiji sunset.jpeg'
      },
      {
        name: 'Meguiar\'s Air Refresher Island Volcano',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar Air refresher Island Volcano.jpeg'
      },
      {
        name: 'Meguiar\'s Air Refresher New Car Scent',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar Air refresher new car scent.jpeg'
      },
      {
        name: 'Meguiar\'s Air Refresher Sweet Summer Breeze',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar Air refresher Sweet summer breeze.jpeg'
      },
      {
        name: 'Meguiar\'s Air Refresher Tropical Rain Forest',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar Air refresher tropical rain forest.jpeg'
      },
      {
        name: 'Goodyear Quick Fresh Deodorizer',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear quick fresh deodorizer.jpeg'
      }
    ],

    productos: [
      {
        name: 'Meguiar\'s Gold Class Carnauba Plus',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar gold class carnauba plus .jpeg'
      },
      {
        name: 'Meguiar\'s Ultimate Wash & Wax',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiars ultimate wash & wax.jpeg'
      },
      {
        name: 'Meguiar\'s Cleaner Wax',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar cleaner wax.jpeg'
      },
      {
        name: 'Meguiar\'s Ultimate Quik Wax',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar ultimate quik wax.jpeg'
      },
      {
        name: 'Meguiar\'s Waterless Wash & Wax',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar waterless wash & wax.jpeg'
      },
      {
        name: 'Meguiar\'s Hot Rims Wheel & Tire Cleaner',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiars hot rims wheel & tire cleaner.jpeg'
      },
      {
        name: 'Meguiar\'s Endurance Tire Gel',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar endurance tire gel.jpeg'
      },
      {
        name: 'Meguiar\'s Ultimate Insane Shine Tire Coating',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar ultimate insane shine tire coating.jpeg'
      },
      {
        name: 'Meguiar\'s HotShine Tire Spray',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiars hotshine tire spray.jpeg'
      },
      {
        name: 'Meguiar\'s HotShine Foam',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar hotshine foam.jpeg'
      },
      {
        name: 'Meguiar\'s Ultimate Black Plastic Restorer',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar ultimate black plastic restorer  .jpeg'
      },
      {
        name: 'Meguiar\'s Ultimate Black Plastic Restorer Spray',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar ultimate black plastic restorer spray.jpeg'
      },
      {
        name: 'Meguiar\'s PlastX',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar plastx.jpeg'
      },
      {
        name: 'Meguiar\'s Metal Polish',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar metal polish.jpeg'
      },
      {
        name: 'Meguiar\'s Gold Class Rich Leather',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar gold class rich leather.jpeg'
      },
      {
        name: 'Meguiar\'s Natural Shine Protectant',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar natural shine protectant.jpeg'
      },
      {
        name: 'Meguiar\'s Supreme Shine',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar supreme shine.jpeg'
      },
      {
        name: 'Meguiar\'s Gold Class Quik Detailer',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiar gold classh quik detailer.jpeg'
      },
      {
        name: 'Meguiar\'s Detailer All Season Dressing',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar detailer all season dressing.jpeg'
      },
      {
        name: 'Meguiar\'s Detailer Hyper Dressing',
        price: 'Precio a consultar',
        image: '/Accesorios/meguiar detailer hyper dressing.jpeg'
      },
      {
        name: 'Meguiar\'s Scented Car Wash Bubblegum Watermelon',
        price: 'Precio a consultar',
        image: '/Accesorios/Meguiars scented car wash bubblegum watermelon.jpeg'
      },
      {
        name: 'Goodyear Brake Parts Cleaner',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear brake parts cleaner.jpeg'
      },
      {
        name: 'Goodyear Carburetor Cleaner',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear carburetor cleaner.jpeg'
      },
      {
        name: 'Goodyear Glass Restorer',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear glass restorer.jpeg'
      },
      {
        name: 'Goodyear Air Conditioner Cleaner',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear air conditioner cleaner.jpeg'
      },
      {
        name: 'Goodyear Windshield Washer',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear windshield washer.jpeg'
      },
      {
        name: 'Michelin Leather Cleaner',
        price: 'Precio a consultar',
        image: '/Accesorios/michelin leather cleaner.jpeg'
      }
    ],

    fluidos: [
      {
        name: 'Prestone Coolant 1 Gallon',
        price: 'Precio a consultar',
        image: '/Accesorios/prestone coolant 1 gal.jpeg'
      },
      {
        name: 'Blue DEF 2.5 Gallon',
        price: 'Precio a consultar',
        image: '/Accesorios/Blue def 2.5Gal.jpeg'
      },
      {
        name: 'Belray Automatic Transmission Fluid 1QT',
        price: 'Precio a consultar',
        image: '/Accesorios/belray automatic transmission fluid 1qt.jpeg'
      },
      {
        name: 'Goodyear Power Steering Fluid',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear power steering fluid.jpeg'
      }
    ],

    aceites: [
      {
        name: 'Mobil 1 0W-20 1QT',
        price: 'Precio a consultar',
        image: '/Accesorios/mobil 1 0w-20 1qt.jpeg'
      },
      {
        name: 'Mobil 1 5W-20 1QT',
        price: 'Precio a consultar',
        image: '/Accesorios/mobil 1 5w-20 1qt.jpeg'
      },
      {
        name: 'Valvoline 5W-20 Motor Oil',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline 5w-20 motor oil.jpeg'
      },
      {
        name: 'Valvoline 5W-30 Motor Oil',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline 5w-30 motor oil.jpeg'
      },
      {
        name: 'Valvoline 10W-30 MaxLife',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline 10w-30 maxlife.jpeg'
      },
      {
        name: 'Valvoline 10W-40 Motor Oil',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline 10w-40 motor oil.jpeg'
      },
      {
        name: 'Valvoline 15W-40 5L',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline 15w-40 5L.jpeg'
      },
      {
        name: 'Valvoline 15W-40 E700 Plus',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline 15w-40 e700 plus.jpeg'
      },
      {
        name: 'Valvoline 85W-140 Gear Oil',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline 85w-140 gear oil.jpeg'
      },
      {
        name: 'Valvoline Full Synthetic DCT Oil',
        price: 'Precio a consultar',
        image: '/Accesorios/valvoline full synthetic DCT oil.jpeg'
      },
      {
        name: 'Liqui Moly 0W-20 1L',
        price: 'Precio a consultar',
        image: '/Accesorios/liqui moly 0w-20 1L.jpeg'
      },
      {
        name: 'Liqui Moly 5W-40 1L',
        price: 'Precio a consultar',
        image: '/Accesorios/liqui moly 5w-40 1L.jpeg'
      },
      {
        name: 'Liqui Moly 10W-60 1L',
        price: 'Precio a consultar',
        image: '/Accesorios/liqui moly 10w-60 1L.jpeg'
      },
      {
        name: 'Liqui Moly 10W-60 5L',
        price: 'Precio a consultar',
        image: '/Accesorios/liqui moly 10w-60 5L.jpeg'
      },
      {
        name: 'Liqui Moly AA0W-20 1L',
        price: 'Precio a consultar',
        image: '/Accesorios/liqui moly AAOW-20 1L.jpeg'
      },
      {
        name: 'Liqui Moly Top Tec 5W-30 1L',
        price: 'Precio a consultar',
        image: '/Accesorios/Liqui Moly top tec 52-30 1L.jpeg'
      },
      {
        name: 'Belray 5W-20 1QT',
        price: 'Precio a consultar',
        image: '/Accesorios/belray 5w-20 1qt.jpeg'
      },
      {
        name: 'Belray 5W-30 1QT',
        price: 'Precio a consultar',
        image: '/Accesorios/belray 5w-30 1qt.jpeg'
      },
      {
        name: 'Belray 10W-40 1QT',
        price: 'Precio a consultar',
        image: '/Accesorios/belray 10w-40 1qt.jpeg'
      },
      {
        name: 'Belray 20W-50 1QT',
        price: 'Precio a consultar',
        image: '/Accesorios/belray 20w-50 1qt.jpeg'
      }
    ],

    aditivos: [
      {
        name: 'Bardahl Oil Supplement',
        price: 'Precio a consultar',
        image: '/Accesorios/Bardahl oil supplement.jpeg'
      },
      {
        name: 'Bardahl Power Booster',
        price: 'Precio a consultar',
        image: '/Accesorios/bardahl power booster.jpeg'
      },
      {
        name: 'Liqui Moly Oil Smoke Stop',
        price: 'Precio a consultar',
        image: '/Accesorios/Liqui moly oil smoke stop.jpeg'
      },
      {
        name: 'Liqui Moly Brake & Parts Cleaner',
        price: 'Precio a consultar',
        image: '/Accesorios/liqui moly brake & parts cleaner.jpeg'
      },
      {
        name: 'Liqui Moly Tapafugas de Radiador',
        price: 'Precio a consultar',
        image: '/Accesorios/liqui moly tapafugas de radiador.jpeg'
      },
      {
        name: 'Liquid Moly LM-40',
        price: 'Precio a consultar',
        image: '/Accesorios/Liquid moly LM-40.jpeg'
      },
      {
        name: 'Lubristar Super Oil Treatment',
        price: 'Precio a consultar',
        image: '/Accesorios/lubristar super oil treatment.jpeg'
      },
      {
        name: 'Goodyear Octane Booster',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear octane booster.jpeg'
      },
      {
        name: 'Goodyear Steel Epoxy',
        price: 'Precio a consultar',
        image: '/Accesorios/goodyear steel epoxy.jpeg'
      }
    ]
  }

  const categories = {
    todos: 'Todos los Productos',
    iluminacion: 'Iluminación LED',
    interior: 'Interior / Audio',
    aromatizantes: 'Aromatizantes',
    productos: 'Limpieza / Detailing',
    fluidos: 'Fluidos Automotrices',
    aceites: 'Aceites de Motor',
    aditivos: 'Aditivos / Tratamientos'
  }

  const getAllAccessories = () => Object.values(accessories).flat()

  const getFilteredAccessories = () => {
    let items =
      selectedCategory === 'todos'
        ? getAllAccessories()
        : accessories[selectedCategory] || []

    if (searchTerm.trim()) {
      items = items.filter((item) =>
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
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar productos..."
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
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
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
                <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
              </svg>
              Cuadrícula
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="Vista de lista"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
              </svg>
              Lista
            </button>
          </div>
        </div>

        {displayAccessories.length === 0 ? (
          <div className="no-results">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <h3>No se encontraron resultados</h3>
            <p>Intenta con otra búsqueda o categoría</p>
          </div>
        ) : (
          <div className={`accessories-${viewMode}`}>
            {displayAccessories.map((item, index) => (
              <div key={index} className={`accessory-card ${viewMode}-view`}>
                <div className="accessory-image-placeholder">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="accessory-image"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', cursor: 'pointer' }}
                      onClick={() => setModalImage({ src: item.image, alt: item.name })}
                    />
                  ) : (
                    <>
                      <span style={{ fontSize: '40px', lineHeight: 1 }}>📦</span>
                      <span className="placeholder-text">Producto</span>
                    </>
                  )}
                </div>

                <div className="accessory-info">
                  <h3>{item.name}</h3>

                  <a
                    href={`https://wa.me/18493607471?text=${encodeURIComponent(
                      `Hola, me interesa: ${item.name}`
                    )}`}
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
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <h3>Productos Originales</h3>
            <p>Todos nuestros productos son 100% originales y de alta calidad</p>
          </div>

          <div className="info-card">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
            <h3>Instalación Disponible</h3>
            <p>Ofrecemos servicio de instalación profesional</p>
          </div>

          <div className="info-card">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <h3>Garantía</h3>
            <p>Todos nuestros productos incluyen garantía del fabricante</p>
          </div>
        </div>
      </div>

      {/* Modal para imagen grande */}
      {modalImage && (
        <div
          className="image-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage.src}
            alt={modalImage.alt}
            className="modal-image"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              background: '#fff',
              padding: '8px',
              objectFit: 'contain'
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default Accessories