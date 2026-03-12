import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './GMPCompliance.css'

const GMPCompliance: FC = () => {
  const navigate = useNavigate()
  return (
    <div className="gmp-compliance-page">
      {/* Hero Section */}
      <section className="gmp-hero">
        <div className="hero-card">
          <div className="hero-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/assets/image.png" alt="Industry Iceberg Logo" />
          </div>
        </div>
        <h1 className="hero-title">GMP Compliance</h1>
      </section>

      {/* What is GMP Section */}
      <section className="gmp-content">
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">What is GMP?</h2>
          </div>
          <div className="content-body">
            <p>
              <strong>Good Manufacturing Practice (GMP)</strong> is a system for ensuring that products 
              are consistently produced and controlled according to quality standards. It is designed to 
              minimize the risks involved in any pharmaceutical production that cannot be eliminated 
              through testing the final product.
            </p>
            <p>
              GMP covers all aspects of production from the starting materials, premises, and equipment 
              to the training and personal hygiene of staff. Detailed, written procedures are essential 
              for each process that could affect the quality of the finished product. There must be 
              systems to provide documented proof that correct procedures are consistently followed at 
              each step in the manufacturing process.
            </p>
            <p>
              The FDA conducts inspections to ensure companies comply with GMP regulations. When violations 
              are found, inspectors issue Form 483 observations, which document objectionable conditions 
              that may lead to enforcement action.
            </p>
          </div>
        </div>

        {/* Current GMP Challenges Section */}
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V12M12 15H12.01M5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">Current GMP Challenges</h2>
          </div>
          <div className="content-body">
            <p className="content-intro">
              Modern regulatory inspections by the FDA and EMA have evolved. Today, "looking good on paper" 
              is no longer enough. Companies are currently struggling with four critical friction points:
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">The Data Integrity Trap</h3>
                  <p className="feature-description">
                    Legacy systems often fail the ALCOA+ test. Auditors are increasingly citing missing audit 
                    trails, "testing to compliance," and unauthorized data deletions in computerized systems.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">The CAPA Bottleneck</h3>
                  <p className="feature-description">
                    Many organizations treat Corrective and Preventive Actions (CAPAs) as clerical tasks. 
                    This results in superficial root cause analyses that lead to repeat deviations—a major 
                    red flag for systemic failure.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Quality Culture Fragmentation</h3>
                  <p className="feature-description">
                    There is often a disconnect between the Quality Unit and the shop floor. When compliance 
                    is seen as a "QA problem" rather than an operational standard, human error rates 
                    skyrocket during high-pressure inspections.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Inadequate SME Coaching</h3>
                  <p className="feature-description">
                    Subject Matter Experts often struggle to articulate complex processes under intense 
                    auditor scrutiny, leading to "implied" non-compliance even when the technical process 
                    is sound.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solutions Section */}
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">Solutions</h2>
          </div>
          <div className="content-body">
            <p className="content-intro">
              We bridge the gap between regulatory expectation and operational reality. Our framework moves 
              your organization into a state of <strong>All-Time Readiness (ATR)</strong>.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Digital Transformation & eQMS Integration</h3>
                  <p className="feature-description">
                    We replace high-risk paper trails with validated, digital Quality Management Systems. 
                    Our solutions ensure real-time visibility, automated audit trails, and 100% data 
                    integrity across the product lifecycle.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Advanced Root Cause Analysis (RCA) Excellence</h3>
                  <p className="feature-description">
                    We implement high-level investigation methodologies that move beyond "retraining" as a 
                    fix. By identifying true systemic and human-factor root causes, we eliminate the cycle 
                    of recurring deviations.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21M7 16L12 11L16 15L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Predictive Quality Oversight</h3>
                  <p className="feature-description">
                    Using data-driven trend analysis, we help you identify risks before they manifest. Our 
                    solution shifts your team from a reactive "audit-prep" mindset to a proactive, 
                    continuous improvement culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default GMPCompliance
