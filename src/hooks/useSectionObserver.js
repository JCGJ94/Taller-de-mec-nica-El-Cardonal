import { useEffect, useState } from 'react'

export function useSectionObserver(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // fallback simple: si no hay IO, marcamos siempre la primera sección
      if (sectionIds.length > 0) setActiveSection(sectionIds[0])
      return
    }

    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          threshold: 0.4,
          rootMargin: '0px 0px -20% 0px', 
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach(o => o.disconnect())
    }
  }, [sectionIds.join(',')])

  return activeSection
}
