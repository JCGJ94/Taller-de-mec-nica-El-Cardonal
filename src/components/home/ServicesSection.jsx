import React from 'react'
import { SERVICES } from '@/utils/servicesData.js'
import ScrollNextButton from '@/components/ui/ScrollNextButton.jsx'
import './ServicesSection.css'

function ServicesSection() {
  return (
    <section id="services" className="section-card services-section">
      <h3>Servicios principales</h3>
      <p className="section-subtitle">
        Mantenimiento rápido para que tu coche pase la ITV y siga funcionando como el
        primer día.
      </p>

      <div className="home-services-grid">
        {SERVICES.map(service => (
          <article key={service.id} className="service-card">
            <h4>{service.name}</h4>
            <p>{service.shortDescription}</p>
            <div className="service-meta">
              {service.duration && <span>Duración orientativa: {service.duration}</span>}
              <span>Precio: según vehículo y trabajo</span>
            </div>
          </article>
        ))}
      </div>

      <ScrollNextButton targetId="process" />
    </section>
  )
}

export default ServicesSection
