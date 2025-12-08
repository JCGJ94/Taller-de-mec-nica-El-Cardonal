import React from 'react'
import './ContactSection.css'

function ContactSection() {
    return (
        <section id="contact" className="section-card contact-section quick-contact">
            <h3>Contacto rápido</h3>
            <p>Déjanos tu nombre y te respondemos.</p>

            <form className="quick-form">
                <input type="text" placeholder="Tu nombre" required />
                <input type="email" placeholder="Tu email" required />
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default ContactSection


