import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ectd.css'

const ECTDAI: FC = () => {
  const navigate = useNavigate()
  
  return (
    <div className="veritascribe-page ectd-ai-page">
      {/* Hero Section */}
      <section className="veritascribe-hero">
        <div className="hero-card">
          <div className="hero-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/assets/image.png" alt="Industry Iceberg Logo" />
          </div>
        </div>
        <h1 className="hero-title">ECTD AI</h1>
      </section>

      {/* What is ECTD AI Section */}
      <section className="veritascribe-content">
        <div className="content-card">
          <div className="content-header">
            <div className="content-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="content-title">What is ECTD AI?</h2>
          </div>
          <div className="content-body">
            <p>
              <strong>ECTD AI</strong> is an AI-powered document analysis and validation service designed 
              for Electronic Common Technical Document (eCTD) submissions. It automatically detects 
              document structure, identifies quality issues, and ensures compliance through intelligent 
              page analysis, OCR detection, and orientation validation.
            </p>
            <p>
              The service streamlines the eCTD submission process by providing comprehensive document 
              validation, reducing manual review time, and ensuring that all regulatory requirements 
              are met before submission to health authorities.
            </p>
            <p>
              With advanced AI capabilities, ECTD AI helps pharmaceutical and biotechnology companies 
              accelerate their regulatory submissions while maintaining the highest standards of document 
              quality and compliance.
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
              Organizations face significant challenges in preparing eCTD submissions. Here are the 
              critical issues that impact submission quality and regulatory approval timelines:
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Manual Document Review</h3>
                  <p className="feature-description">
                    Time-consuming manual review processes for document structure, table of contents, 
                    and quality issues lead to delays and human errors that can result in regulatory 
                    rejections or requests for information.
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
                  <h3 className="feature-title">Inconsistent Document Structure</h3>
                  <p className="feature-description">
                    Lack of automated validation for document structure, table of contents placement, 
                    and formatting requirements results in non-compliant submissions that require 
                    resubmission and delay approval timelines.
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
                  <h3 className="feature-title">OCR and Quality Detection Issues</h3>
                  <p className="feature-description">
                    Difficulty identifying which pages require OCR processing, detecting orientation 
                    inconsistencies, and finding legibility issues leads to submission rejections 
                    and additional review cycles.
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
                  <h3 className="feature-title">Regulatory Compliance Risks</h3>
                  <p className="feature-description">
                    Without automated validation, organizations risk submitting non-compliant documents 
                    that fail regulatory review, resulting in delays, additional costs, and potential 
                    impact on product launch timelines.
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
              We provide comprehensive AI-powered document analysis and validation capabilities that 
              transform how organizations prepare and validate eCTD submissions.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Table of Contents Analysis</h3>
                  <p className="feature-description">
                    Automatically detects the presence, location, and count of table of contents within 
                    documents, ensuring proper document structure and compliance with eCTD requirements.
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
                  <h3 className="feature-title">OCR Requirement Detection</h3>
                  <p className="feature-description">
                    Identifies which pages require Optical Character Recognition processing, enabling 
                    organizations to prioritize and process scanned documents efficiently before submission.
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
                  <h3 className="feature-title">Page Orientation Analysis</h3>
                  <p className="feature-description">
                    Detects pages with different orientations and identifies specific page numbers with 
                    orientation inconsistencies, ensuring document uniformity and compliance standards.
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
                  <h3 className="feature-title">Legibility Issue Detection</h3>
                  <p className="feature-description">
                    Identifies page numbers with legibility issues that may affect document quality 
                    and compliance, enabling proactive correction before regulatory submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="content-card">
          <div className="content-header">
            <h2 className="content-title">Ready to Transform Your eCTD Submissions?</h2>
          </div>
          <div className="content-body">
            <p className="content-intro">
              Discover how ECTD AI can streamline your document validation process and ensure regulatory compliance. 
              Schedule a demo to see our AI-powered platform in action.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button 
                onClick={() => navigate('/ectd-ai-demo')}
                className="ectd-demo-btn"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ECTDAI
