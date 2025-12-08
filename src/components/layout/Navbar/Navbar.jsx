import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Divider from '@/components/ui/Divider/Divider.jsx'

const WHATSAPP_NUMBER = '34685562049'
const WHATSAPP_TEXT = encodeURIComponent(
  'Hola, quiero pedir cita o presupuesto para mi coche.\n\nServicio que necesito:'
)

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false)
  }, [location.pathname])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const scrollToSection = id => {
    closeMenu()
    if (location.pathname !== '/') {
      // si en el futuro tienes otras páginas, podrías usar navigate
      window.location.href = '/#' + id
      return
    }
    const el = document.getElementById(id)
    if (!el) return

    // Calcular la altura del navbar para ajustar el scroll
    const navbar = document.querySelector('.app-header')
    const navbarHeight = navbar ? navbar.offsetHeight : 0
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navbarHeight - 20 // 20px de margen adicional

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  const handleLogoClick = () => {
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const sectionLinkClass = id =>
    `app-nav-section ${activeSection === id ? 'active' : ''}`

  return (
    <>
      <header className={`app-header ${isOpen ? 'menu-open' : ''}`}>
        <div className="app-header-background"></div>
        <div className="app-header-inner">
          <button
            type="button"
            className="app-logo-block"
            onClick={handleLogoClick}
            aria-label="Ir al inicio"
          >
            <img
              src="/coche-definitivo-1.svg"
              alt="Auto Mecánica El Cardonal"
              className="app-logo"
            />
            <img src="/brandText-navbar.svg" alt="brand" className="app-logo" />
          </button>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <nav className={`app-nav ${isOpen ? 'active' : ''}`}>
            <button
              type="button"
              className={sectionLinkClass('services')}
              onClick={() => scrollToSection('services')}
            >
              Servicios
            </button>
            <button
              type="button"
              className={sectionLinkClass('process')}
              onClick={() => scrollToSection('process')}
            >
              Cómo funciona la cita online
            </button>
            <button
              type="button"
              className={sectionLinkClass('budget')}
              onClick={() => scrollToSection('budget')}
            >
              Presupuesto
            </button>
            <button
              type="button"
              className={sectionLinkClass('location')}
              onClick={() => scrollToSection('location')}
            >
              Localización
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
              className="app-nav-cta"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </nav>

          {/* Overlay to close menu when clicking outside */}
          {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </div>
        <Divider />
      </header>
    </>
  )
}

export default Navbar
