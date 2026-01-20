import { useState } from 'react'
import '../styles/FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'Servicios',
      questions: [
        {
          question: '¿Cuánto tiempo toma un servicio de lavado detailing?',
          answer: 'Un servicio completo de lavado detailing toma entre 2-3 horas dependiendo del tamaño y condición del vehículo. Los servicios básicos pueden tomar 1-2 horas.'
        },
        {
          question: '¿Qué incluye el servicio Platinum?',
          answer: 'El servicio Platinum incluye lavado exterior profundo, limpieza de llantas y rines, aspirado completo del interior, limpieza de vidrios, tratamiento de plásticos, y acabado con protectores premium.'
        },
        {
          question: '¿Hacen servicios a domicilio?',
          answer: 'Sí, ofrecemos servicio a domicilio en áreas seleccionadas. Contáctanos por WhatsApp para verificar disponibilidad en tu zona.'
        },
        {
          question: '¿Con qué frecuencia debo hacer un detailing completo?',
          answer: 'Recomendamos un detailing completo cada 3-4 meses para mantener tu vehículo en óptimas condiciones. Los lavados básicos pueden ser cada 2-3 semanas.'
        }
      ]
    },
    {
      category: 'Productos',
      questions: [
        {
          question: '¿Qué tipo de productos utilizan?',
          answer: 'Utilizamos productos profesionales de marcas reconocidas internacionalmente como Meguiars, Chemical Guys, y 3M. Todos nuestros productos son seguros para la pintura y acabados de tu vehículo.'
        },
        {
          question: '¿Venden productos para uso personal?',
          answer: 'Sí, contamos con una línea de productos profesionales disponibles para la venta. Incluyen ceras, shampoos, protectores y aromatizantes.'
        },
        {
          question: '¿Los productos son seguros para todo tipo de pintura?',
          answer: 'Absolutamente. Todos nuestros productos están formulados para ser seguros en todo tipo de pinturas, incluidas las pinturas mate y wraps vinílicos.'
        }
      ]
    },
    {
      category: 'Accesorios',
      questions: [
        {
          question: '¿Ofrecen instalación de accesorios?',
          answer: 'Sí, ofrecemos servicio profesional de instalación para la mayoría de los accesorios que vendemos, incluyendo luces LED, alarmas, bocinas, y más.'
        },
        {
          question: '¿Los accesorios tienen garantía?',
          answer: 'Todos nuestros accesorios incluyen garantía del fabricante. El tiempo varía según el producto, pero típicamente es de 6 meses a 1 año.'
        },
        {
          question: '¿Pueden conseguir accesorios específicos?',
          answer: 'Sí, si no tenemos en existencia el accesorio que buscas, podemos conseguirlo. Contáctanos con los detalles y te cotizamos.'
        }
      ]
    },
    {
      category: 'Reservaciones y Pagos',
      questions: [
        {
          question: '¿Cómo puedo agendar una cita?',
          answer: 'Puedes agendar tu cita a través de WhatsApp, llamada telefónica, o visitándonos directamente. Recomendamos agendar con anticipación para garantizar disponibilidad.'
        },
        {
          question: '¿Qué métodos de pago aceptan?',
          answer: 'Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias.'
        },
        {
          question: '¿Puedo cancelar o reprogramar mi cita?',
          answer: 'Sí, puedes cancelar o reprogramar con al menos 24 horas de anticipación sin cargo alguno.'
        },
        {
          question: '¿Ofrecen paquetes o descuentos?',
          answer: 'Sí, contamos con paquetes especiales y descuentos para clientes frecuentes. Pregunta por nuestras promociones vigentes.'
        }
      ]
    },
    {
      category: 'Otros',
      questions: [
        {
          question: '¿Dónde están ubicados?',
          answer: 'Puedes encontrar nuestra ubicación exacta en la sección de Contacto o a través del mapa en nuestra página.'
        },
        {
          question: '¿Cuál es su horario de atención?',
          answer: 'Lunes a Viernes: 9:00 - 19:00, Sábados: 9:00 - 18:00, Domingos: 10:00 - 15:00'
        },
        {
          question: '¿Trabajan en días festivos?',
          answer: 'Nuestro horario puede variar en días festivos. Te recomendamos contactarnos con anticipación para verificar disponibilidad.'
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <section className="page-hero">
        <div className="container">
          <h1>Preguntas Frecuentes</h1>
          <p>Encuentra respuestas a las preguntas más comunes</p>
        </div>
      </section>

      <div className="container">
        <div className="faq-content">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2>{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`
                  const isOpen = openIndex === index
                  
                  return (
                    <div 
                      key={questionIndex} 
                      className={`faq-item ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        <span>{faq.question}</span>
                        <svg 
                          className="faq-icon" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M7 10l5 5 5-5z"/>
                        </svg>
                      </button>
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3>¿No encontraste lo que buscabas?</h3>
          <p>Estamos aquí para ayudarte. Contáctanos directamente y con gusto resolveremos tus dudas.</p>
          <a
            href="https://wa.me/18494909889?text=Hola,%20tengo%20una%20pregunta"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
