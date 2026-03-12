import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './VideoCreationService.css'

const VideoCreationService: FC = () => {
  const navigate = useNavigate()
  
  return (
    <div className="video-service-page">
      {/* Header */}
      <header className="video-service-header">
        <div className="video-service-header-content">
          <h1 className="video-service-header-title">Video Creation Service</h1>
          <p className="video-service-header-subtitle">
            Transform your SOP and training documents into structured, high-quality training videos 
            with AI-powered automation
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="video-service-main-layout">
        {/* Content Area */}
        <main className="video-service-content">
          {/* Key Capabilities */}
          <section id="overview" className="video-service-content-section">
            <h2 className="video-service-section-title">Key Capabilities</h2>
            <div className="video-service-capabilities-grid">
              <div className="video-service-capability-card">
                <div className="video-service-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-capability-title">SOP Document Ingestion</h3>
                <p className="video-service-capability-description">
                  Seamlessly import and process SOP documents in multiple formats, automatically 
                  extracting key information and structure.
                </p>
              </div>

              <div className="video-service-capability-card">
                <div className="video-service-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.663 17H4.662C3.74214 17 3.00024 16.2581 3.00024 15.3382V4.66176C3.00024 3.7419 3.74214 3 4.662 3H15.338C16.2579 3 17 3.7419 17 4.66176V9.663M14.5 2.5V8.5M11.5 5.5H17.5M20.5 14.5V20.5M17.5 17.5H23.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-capability-title">Automatic Script Generation</h3>
                <p className="video-service-capability-description">
                  AI-powered script generation that converts technical documentation into engaging, 
                  easy-to-follow video scripts.
                </p>
              </div>

              <div className="video-service-capability-card">
                <div className="video-service-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10L19.553 12.276C19.8334 12.4159 20.0015 12.7151 20.0015 13.0401C20.0015 13.3651 19.8334 13.6643 19.553 13.8042L15 16M5 18H13C13.5304 18 14.0391 17.7893 14.4142 17.4142C14.7893 17.0391 15 16.5304 15 16V8C15 7.46957 14.7893 6.96086 14.4142 6.58579C14.0391 6.21071 13.5304 6 13 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-capability-title">Visual Scene Mapping</h3>
                <p className="video-service-capability-description">
                  Intelligent scene mapping that creates visual storyboards and sequences based on 
                  document content and structure.
                </p>
              </div>

              <div className="video-service-capability-card">
                <div className="video-service-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-capability-title">Voice-Over Creation</h3>
                <p className="video-service-capability-description">
                  Professional AI-generated voice-overs with natural intonation, multiple language 
                  support, and customizable voice styles.
                </p>
              </div>

              <div className="video-service-capability-card">
                <div className="video-service-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-capability-title">Animated Training Videos</h3>
                <p className="video-service-capability-description">
                  Create engaging animated videos with professional graphics, transitions, and 
                  visual effects that enhance learning retention.
                </p>
              </div>

              <div className="video-service-capability-card">
                <div className="video-service-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-capability-title">Compliance-Friendly Outputs</h3>
                <p className="video-service-capability-description">
                  Generate videos that meet regulatory compliance standards with built-in audit 
                  trails, version control, and documentation.
                </p>
              </div>

            </div>
          </section>

          {/* SOP-to-Video Workflow */}
          <section id="workflow" className="video-service-content-section">
            <h2 className="video-service-section-title">SOP-to-Video Workflow</h2>
            <div className="video-service-workflow-steps">
              <div className="video-service-workflow-step">
                <div className="video-service-step-number">1</div>
                <div className="video-service-step-content">
                  <h3 className="video-service-step-title">Document Upload</h3>
                  <p className="video-service-step-description">
                    Upload your SOP or training document in PDF, Word, or other supported formats.
                  </p>
                </div>
              </div>

              <div className="video-service-workflow-arrow">→</div>

              <div className="video-service-workflow-step">
                <div className="video-service-step-number">2</div>
                <div className="video-service-step-content">
                  <h3 className="video-service-step-title">AI Analysis & Script Generation</h3>
                  <p className="video-service-step-description">
                    Our AI analyzes the document structure and automatically generates an engaging 
                    video script with scene breakdowns.
                  </p>
                </div>
              </div>

              <div className="video-service-workflow-arrow">→</div>

              <div className="video-service-workflow-step">
                <div className="video-service-step-number">3</div>
                <div className="video-service-step-content">
                  <h3 className="video-service-step-title">Visual Scene Mapping</h3>
                  <p className="video-service-step-description">
                    Create visual storyboards and map scenes with appropriate graphics, animations, 
                    and visual elements.
                  </p>
                </div>
              </div>

              <div className="video-service-workflow-arrow">→</div>

              <div className="video-service-workflow-step">
                <div className="video-service-step-number">4</div>
                <div className="video-service-step-content">
                  <h3 className="video-service-step-title">Video Production</h3>
                  <p className="video-service-step-description">
                    Generate professional training videos with voice-overs, animations, and 
                    compliance-ready outputs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases" className="video-service-content-section">
            <h2 className="video-service-section-title">Use Cases</h2>
            <div className="video-service-use-cases-grid">
              <div className="video-service-use-case-card">
                <div className="video-service-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-use-case-title">GMP Training</h3>
                <p className="video-service-use-case-description">
                  Convert GMP procedures and quality standards into comprehensive training videos 
                  for manufacturing and quality teams.
                </p>
              </div>

              <div className="video-service-use-case-card">
                <div className="video-service-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-use-case-title">Employee Onboarding</h3>
                <p className="video-service-use-case-description">
                  Create engaging onboarding videos that help new employees understand company 
                  policies, procedures, and best practices.
                </p>
              </div>

              <div className="video-service-use-case-card">
                <div className="video-service-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="video-service-use-case-title">Compliance Training</h3>
                <p className="video-service-use-case-description">
                  Develop compliance training videos that ensure employees understand regulatory 
                  requirements and maintain audit readiness.
                </p>
              </div>
            </div>
          </section>

          {/* Key Stats */}
          <section className="video-service-content-section">
            <h2 className="video-service-section-title">Key Statistics</h2>
            <div className="video-service-stats-grid">
              <div className="video-service-stat-card">
                <div className="video-service-stat-value">80%</div>
                <div className="video-service-stat-label">Reduction in Production Time</div>
              </div>
              <div className="video-service-stat-card">
                <div className="video-service-stat-value">95%</div>
                <div className="video-service-stat-label">Compliance Rate</div>
              </div>
              <div className="video-service-stat-card">
                <div className="video-service-stat-value">50+</div>
                <div className="video-service-stat-label">Supported Formats</div>
              </div>
              <div className="video-service-stat-card">
                <div className="video-service-stat-value">24/7</div>
                <div className="video-service-stat-label">Automated Processing</div>
              </div>
            </div>
          </section>

          {/* CTA in place of pricing */}
          <section className="video-service-content-section">
            <div className="video-service-cta-card">
            <h2 className="video-service-section-title cta-heading">Let's design right plan together</h2>
              <p className="video-service-cta-subtext">
                Tell us about your training volumes, formats, and compliance needs. We’ll tailor a package that fits your team.
              </p>
              <div className="video-service-cta-actions">
                <button 
                  className="video-service-cta-button secondary"
                  onClick={() => navigate('/schedule-demo')}
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="video-service-footer">
        <div className="video-service-footer-content">
          <p className="video-service-footer-text">
            © 2026 Industry Iceberg. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default VideoCreationService
