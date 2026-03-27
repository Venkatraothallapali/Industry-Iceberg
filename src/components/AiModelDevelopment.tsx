import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import './AiModelDevelopment.css'

const AiModelDevelopment: FC = () => {
  const navigate = useNavigate()
  
  // Set meta tags for this page
  usePageMetaManager({
    title: "AI Model Development | Industry Iceberg",
    description: "Custom AI model development services for healthcare and life sciences. We build machine learning models, neural networks, and AI solutions tailored to your specific regulatory compliance, drug discovery, and clinical research needs.",
    ogTitle: "AI Model Development | Industry Iceberg",
    ogDescription: "Custom AI model development services for healthcare and life sciences. We build machine learning models, neural networks, and AI solutions tailored to your specific regulatory compliance, drug discovery, and clinical research needs.",
    twitterTitle: "AI Model Development | Industry Iceberg",
    twitterDescription: "Custom AI model development services for healthcare and life sciences. We build machine learning models, neural networks, and AI solutions tailored to your specific regulatory compliance, drug discovery, and clinical research needs."
  })

  return (
    <div className="ai-technologies-page">
      <header className="ai-technologies-header">
        <div className="ai-technologies-header-content">
          <h1 className="ai-technologies-header-title">AI Technologies & Solutions</h1>
          <p className="ai-technologies-header-subtitle-ai-capabilities">
            Advanced AI capabilities powered by Computer Vision, Natural Language Processing,<br />
            Deep Learning, and Artificial Intelligence for enterprise transformation.
          </p>
          <div className="hero-cta">
            <button
              className="ai-model-request-consultation-btn"
              onClick={() => navigate('/ai-model-demo')}
            >
              Request Consultation
            </button>
          </div>
        </div>
      </header>

      <div className="ai-technologies-main-layout">
        <main className="ai-technologies-content">
          <section id="approach" className="ai-technologies-content-section">
            <h2 className="ai-technologies-section-title">Our AI Technology Stack</h2>
            <div className="ai-technologies-workflow-steps">
              <div className="ai-technologies-workflow-step">
                <div className="ai-technologies-step-number">1</div>
                <div className="ai-technologies-step-content">
                  <div className="ai-technologies-step-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12L12 15L9 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="ai-technologies-step-title">Computer Vision</h3>
                  <p className="ai-technologies-step-description">
                    Advanced image and video analysis for object detection, facial recognition, quality control, and visual inspection across industrial applications.
                  </p>
                </div>
              </div>

              <div className="ai-technologies-workflow-arrow">→</div>

              <div className="ai-technologies-workflow-step">
                <div className="ai-technologies-step-number">2</div>
                <div className="ai-technologies-step-content">
                  <div className="ai-technologies-step-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.89543 2 4 3.11929 4 5.2V18.8C4 19.9207 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6H16M8 10H16M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="ai-technologies-step-title">Natural Language Processing</h3>
                  <p className="ai-technologies-step-description">
                    Text understanding, sentiment analysis, document processing, and language translation for intelligent communication and data extraction.
                  </p>
                </div>
              </div>

              <div className="ai-technologies-workflow-arrow">→</div>

              <div className="ai-technologies-workflow-step">
                <div className="ai-technologies-step-number">3</div>
                <div className="ai-technologies-step-content">
                  <div className="ai-technologies-step-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17H22M7 12L12 17L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="17" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="ai-technologies-step-title">Deep Learning</h3>
                  <p className="ai-technologies-step-description">
                    Neural networks and deep architectures for pattern recognition, prediction, and complex decision-making across structured and unstructured data.
                  </p>
                </div>
              </div>

              <div className="ai-technologies-workflow-arrow">→</div>

              <div className="ai-technologies-workflow-step">
                <div className="ai-technologies-step-number">4</div>
                <div className="ai-technologies-step-content">
                  <div className="ai-technologies-step-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 7V17L12 21L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11H15M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="8" r="1" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="ai-technologies-step-title">Artificial Intelligence</h3>
                  <p className="ai-technologies-step-description">
                    Integrated AI systems combining reasoning, planning, and autonomous decision-making for comprehensive business intelligence and automation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="industries" className="ai-technologies-content-section">
            <h2 className="ai-technologies-section-title">Industry Applications</h2>
            <div className="ai-technologies-use-cases-grid">
              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12L12 15L9 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Computer Vision</h3>
                <p className="ai-technologies-use-case-description">
                  Image recognition, object detection, quality control, and visual analytics for manufacturing, healthcare, and security applications.
                </p>
              </div>

              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.89543 2 4 3.11929 4 5.2V18.8C4 19.9207 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6H16M8 10H16M8 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Natural Language Processing</h3>
                <p className="ai-technologies-use-case-description">
                  Text analysis, sentiment detection, document understanding, and language translation for customer service and content intelligence.
                </p>
              </div>

              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17H22M7 12L12 17L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="17" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Deep Learning</h3>
                <p className="ai-technologies-use-case-description">
                  Neural networks for pattern recognition, predictive analytics, and complex decision-making in finance, healthcare, and autonomous systems.
                </p>
              </div>

              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 7V17L12 21L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11H15M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="8" r="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Artificial Intelligence</h3>
                <p className="ai-technologies-use-case-description">
                  Intelligent automation, decision support systems, and cognitive computing for enterprise operations and strategic planning.
                </p>
              </div>

              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 4L21 9L12 14L3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 12L3 14L12 19L21 14L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Manufacturing & Industry 4.0</h3>
                <p className="ai-technologies-use-case-description">
                  Smart factories, predictive maintenance, and quality automation using integrated AI technologies for industrial transformation.
                </p>
              </div>

              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Healthcare & Life Sciences</h3>
                <p className="ai-technologies-use-case-description">
                  Medical imaging, drug discovery, patient monitoring, and clinical trial optimization using advanced AI technologies.
                </p>
              </div>

              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H21V9H3V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 15H21V19H3V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Finance & Banking</h3>
                <p className="ai-technologies-use-case-description">
                  Risk assessment, fraud detection, algorithmic trading, and customer insights using AI-powered financial intelligence.
                </p>
              </div>

              <div className="ai-technologies-use-case-card">
                <div className="ai-technologies-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H21M5 7V5H9V7M15 7V5H19V7M5 11H7M10 11H12M15 11H19M5 15H9M12 15H14M5 19H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="ai-technologies-use-case-title">Retail & E-commerce</h3>
                <p className="ai-technologies-use-case-description">
                  Recommendation systems, demand forecasting, and customer behavior analysis for personalized shopping experiences.
                </p>
              </div>
            </div>
          </section>

          <section id="capabilities" className="ai-technologies-content-section">
            <h2 className="ai-technologies-section-title">Our Technical Capabilities</h2>
            <div className="ai-technologies-technical-grid">
              <div className="ai-technologies-technical-column">
                <h3 className="ai-technologies-technical-heading">Core AI Technologies</h3>
                <ul className="ai-technologies-technical-list">
                  <li>Computer Vision for image recognition, object detection, and visual analytics.</li>
                  <li>Natural Language Processing for text understanding, sentiment analysis, and language translation.</li>
                  <li>Deep Learning for neural networks, pattern recognition, and predictive modeling.</li>
                  <li>Artificial Intelligence for reasoning, planning, and autonomous decision-making systems.</li>
                </ul>
              </div>
              <div className="ai-technologies-technical-column">
                <h3 className="ai-technologies-technical-heading">Integration & Deployment</h3>
                <ul className="ai-technologies-technical-list">
                  <li>Multi-modal AI combining vision, language, and reasoning capabilities.</li>
                  <li>Scalable infrastructure for cloud, hybrid, and on-premises deployment.</li>
                  <li>Real-time processing with low-latency inference and edge computing.</li>
                  <li>Enterprise security with data governance, privacy, and compliance frameworks.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="benefits" className="ai-technologies-content-section">
            <h2 className="ai-technologies-section-title">Enterprise Benefits</h2>
            <div className="ai-technologies-benefits-grid">
              <div className="ai-technologies-benefit-card">
                <h3 className="ai-technologies-benefit-title">Scalable Infrastructure</h3>
                <p className="ai-technologies-benefit-description">
                  Architected for cloud, hybrid, or on-prem environments with autoscaling and containerized workloads.
                </p>
              </div>
              <div className="ai-technologies-benefit-card">
                <h3 className="ai-technologies-benefit-title">Production-grade Pipelines</h3>
                <p className="ai-technologies-benefit-description">
                  CI/CD-backed model pipelines with versioning, approvals, and controlled promotion to production.
                </p>
              </div>
              <div className="ai-technologies-benefit-card">
                <h3 className="ai-technologies-benefit-title">Regulatory Compliance</h3>
                <p className="ai-technologies-benefit-description">
                  Design and documentation aligned with industry regulations and internal quality frameworks.
                </p>
              </div>
              <div className="ai-technologies-benefit-card">
                <h3 className="ai-technologies-benefit-title">Model Explainability</h3>
                <p className="ai-technologies-benefit-description">
                  Explainable AI techniques that support audit, validation, and stakeholder trust in model outputs.
                </p>
              </div>
              <div className="ai-technologies-benefit-card">
                <h3 className="ai-technologies-benefit-title">Cost Optimization</h3>
                <p className="ai-technologies-benefit-description">
                  Right-sized infrastructure, efficient architectures, and usage-aware deployment strategies.
                </p>
              </div>
              <div className="ai-technologies-benefit-card">
                <h3 className="ai-technologies-benefit-title">Secure Architecture</h3>
                <p className="ai-technologies-benefit-description">
                  Security-by-design with layered controls across data, models, APIs, and user access.
                </p>
              </div>
            </div>
          </section>

          <section id="cta" className="ai-technologies-content-section">
            <div className="ai-technologies-cta-card">
              <h2 className="ai-technologies-cta-section-title">Build Intelligent Systems That Scale</h2>
              <p className="ai-technologies-cta-subtext">
                Partner with us to design, deploy, and operate AI models that are ready for enterprise use, governance, and growth.
              </p>
              <div className="ai-technologies-cta-actions">
                <button
                  className="ai-technologies-cta-button"
                  onClick={() => navigate('/ai-model-demo')}
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="ai-technologies-footer">
        <div className="ai-technologies-footer-content">
          <p className="ai-technologies-footer-text">
            © 2026 Industry Iceberg. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AiModelDevelopment
