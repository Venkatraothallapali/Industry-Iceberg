import type { FC } from 'react'
import './WhoWeAre.css'

const WhoWeAre: FC = () => {
  return (
    <section className="who-we-are-section">
      <div className="who-we-are-container">
        <h2 className="who-we-are-title">Built on Pharma. Powered by AI.</h2>
        <div className="who-we-are-description">
          <p>
            IndustryIceberg is an innovation-driven Life Sciences technology company focused on solving the most complex challenges in the pharmaceutical sector.
          </p>
          
          <p>
            With deep, hands-on experience across pharma operations and regulations, we design and build advanced AI and ML powered solutions that others find difficult or impossible to deliver. Our strength lies in combining real-world industry expertise with cutting-edge artificial intelligence to transform complex processes into scalable, reliable products.
          </p>
          
          <p>
            From regulatory compliance and quality systems to data-intensive workflows, we use AI to automate, analyze, and accelerate critical pharma operations, without compromising accuracy or compliance. Every solution we build is grounded in domain knowledge, engineered for complexity, and designed to deliver measurable impact.
          </p>
          
          <p className="description-outro">
            At IndustryIceberg,<br />
            we do not just apply AI to pharma problems. We use pharma intelligence to build AI that works.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
