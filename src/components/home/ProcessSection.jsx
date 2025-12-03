import React from 'react'
import ScrollNextButton from '@/components/ui/ScrollNextButton.jsx'
import './ProcessSection.css'

function ProcessSection() {
  return (
    <section id="process" className="section-card process-section">
      <h3>Cómo funciona la cita online</h3>
      <ol className="steps">
        <li>
          <strong>1. Escríbenos por WhatsApp</strong>
          <span>
            Indica marca, modelo y matrícula, y qué notas en el coche o qué servicio
            quieres.
          </span>
        </li>
        <li>
          <strong>2. Te damos hora y presupuesto orientativo</strong>
          <span>
            Confirmamos la cita manualmente para asegurar hueco en uno de los dos
            elevadores.
          </span>
        </li>
        <li>
          <strong>3. Traes el coche al taller</strong>
          <span>
            Hacemos la diagnosis, revisión o reparación y te avisamos cuando esté listo.
          </span>
        </li>
      </ol>

      <ScrollNextButton targetId="budget" />
    </section>
  )
}

export default ProcessSection
