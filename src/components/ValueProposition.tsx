import type { FC } from 'react'
import './ValueProposition.css'

const ValueProposition: FC = () => {
  const scrollingText = 'Cutting-Edge AI Solutions to Power Modern Enterprises'

  return (
    <section id="who-we-are" className="value-proposition">
      <div className="value-proposition-background">
        <div className="value-proposition-overlay"></div>
      </div>
      <div className="value-proposition-container">
        <div className="value-proposition-marquee-wrapper">
          <div className="value-proposition-marquee">
            <span className="value-marquee-text">{scrollingText}</span>
            <span className="value-marquee-separator"> • </span>
            <span className="value-marquee-text">{scrollingText}</span>
            <span className="value-marquee-separator"> • </span>
            <span className="value-marquee-text">{scrollingText}</span>
            <span className="value-marquee-separator"> • </span>
            <span className="value-marquee-text">{scrollingText}</span>
          </div>
        </div>
        <p className="section-description">
          IndustryIceberg builds AI-driven platforms that help organizations improve compliance, 
          automate complex workflows, and make confident, data-backed decisions across regulated industries.
        </p>
      </div>
    </section>
  )
}

export default ValueProposition
