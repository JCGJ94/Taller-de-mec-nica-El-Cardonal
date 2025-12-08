import React from 'react'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-fullbleed">
      <section className="about-page">
        <div className="about-container">
          <h1 className="about-title">Sobre Nosotros</h1>

          <p className="about-hero-text">
            Somos una empresa joven, comprometida y en constante crecimiento, con un profundo
            <span className="about-highlight"> conocimiento técnico</span> y un trato humano cercano.
            Nos caracteriza un trabajo <span className="about-highlight">efectivo, limpio y responsable</span>,
            donde cada detalle importa y cada cliente recibe la atención que merece.
          </p>

          <p className="about-hero-text">
            En Auto Mecánica El Cardonal creemos en la transparencia, la profesionalidad y la confianza.
            Por eso nos esforzamos día a día en ofrecer un servicio honesto, rápido y adaptado a las
            necesidades de cada vehículo, sin perder la esencia familiar que nos distingue.
          </p>

          <div className="about-team-section">
            <h2 className="about-team-title">Nuestro Equipo</h2>
            <p className="about-team-desc">
              Contamos con un equipo apasionado por la mecánica, comprometido con la calidad y con años de
              experiencia en el sector. Cada miembro aporta su conocimiento y dedicación para asegurar que
              cada reparación, mantenimiento o diagnóstico se realice con los más altos estándares.
            </p>
            <p className="about-team-desc">
              Combinamos técnicas modernas, herramientas de última generación y una formación continua para
              garantizar resultados precisos, seguros y duraderos. Nuestro objetivo es claro: ofrecer la
              mejor experiencia posible a quienes confían en nosotros.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
