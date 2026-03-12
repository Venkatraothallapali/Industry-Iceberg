import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './GMPCompliance.css'

const QualityTraining: FC = () => {
  const navigate = useNavigate()
  return (
    <div className="gmp-compliance-page quality-training-page">
      {/* Hero Section */}
      <section className="gmp-hero">
        <div className="hero-card">
          <div className="hero-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/assets/image.png" alt="Industry Iceberg Logo" />
          </div>
        </div>
        <h1 className="hero-title">Quality Training</h1>
      </section>

      {/* What is Quality Training Section */}
      <section className="gmp-content">
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">What is Quality Training?</h2>
          </div>
          <div className="content-body">
            <p>
              <strong>Quality Training</strong> is an AI-powered video creation and training service 
              designed to help life sciences companies effortlessly produce secure, compliant, and professional 
              video content for workforce training and technical documentation. It automates the end-to-end 
              production of training videos, ensuring regulatory and quality excellence at every step.
            </p>
            <p>
              The service delivers comprehensive video-based training content covering GMP regulations, quality 
              systems, documentation practices, and operational procedures. From technical documentation to 
              workforce training, Quality Training enables organizations to create engaging, compliant 
              video content at scale.
            </p>
            <p>
              By providing AI-powered video creation tools and robust content management capabilities, Quality 
              Training helps organizations ensure their workforce receives consistent, up-to-date training 
              that meets regulatory expectations and maintains the highest standards of quality and compliance.
            </p>
          </div>
        </div>

        {/* Current Challenges Section */}
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V12M12 15H12.01M5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">Current Challenges</h2>
          </div>
          <div className="content-body">
            <p className="content-intro">
              Organizations face significant challenges in creating and maintaining effective video-based 
              quality training programs. Here are the key issues that impact workforce competency and 
              regulatory compliance:
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Time-Consuming Video Production</h3>
                  <p className="feature-description">
                    Manual video creation processes are resource-intensive and time-consuming, making it 
                    difficult to keep training content current with evolving regulatory requirements and 
                    industry best practices.
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
                  <h3 className="feature-title">Inconsistent Video Quality</h3>
                  <p className="feature-description">
                    Lack of standardized video production processes results in inconsistent quality, 
                    branding, and messaging across training videos, leading to confusion and reduced 
                    effectiveness.
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
                  <h3 className="feature-title">Compliance and Security Concerns</h3>
                  <p className="feature-description">
                    Ensuring video content meets regulatory compliance requirements and maintaining 
                    security standards for sensitive training materials creates significant challenges 
                    in video production and distribution.
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
                  <h3 className="feature-title">Limited Scalability</h3>
                  <p className="feature-description">
                    Traditional video production methods cannot scale efficiently to meet the growing 
                    demand for training content across multiple departments, sites, and regulatory 
                    requirements.
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
              We provide comprehensive AI-powered video training solutions that automate content creation 
              and build workforce competency across your organization.
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
                  <h3 className="feature-title">AI-Powered Video Creation</h3>
                  <p className="feature-description">
                    Automated video production service that generates professional, compliant training 
                    videos from technical documentation and training materials, reducing production time 
                    by up to 80% while maintaining quality standards.
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
                  <h3 className="feature-title">Secure & Compliant Content</h3>
                  <p className="feature-description">
                    Built-in compliance features ensure all video content meets regulatory requirements 
                    and security standards, with automated audit trails and access controls for 
                    sensitive training materials.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Scalable Video Production</h3>
                  <p className="feature-description">
                    End-to-end automation enables organizations to produce training videos at scale, 
                    supporting multiple departments, sites, and regulatory requirements with consistent 
                    quality and branding.
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
                  <h3 className="feature-title">Training Management & Tracking</h3>
                  <p className="feature-description">
                    Comprehensive service that tracks video training completion, schedules refresher 
                    training, and maintains detailed training records required for regulatory inspections 
                    and audits.
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

export default QualityTraining
