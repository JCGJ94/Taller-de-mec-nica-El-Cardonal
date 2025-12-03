import React from 'react'
import HeroSection from '@/components/home/HeroSection.jsx'
import ServicesSection from '@/components/home/ServicesSection.jsx'
import ProcessSection from '@/components/home/ProcessSection.jsx'
import BudgetSection from '@/components/home/BudgetSection.jsx'
import ContactSection from '@/components/home/ContactSection.jsx'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home">
  
      <ServicesSection />
      <ProcessSection />
      <BudgetSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
