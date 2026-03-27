import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import './ECTDAI.css'

const ECTDAI: FC = () => {
  const navigate = useNavigate()
  
  // Set meta tags for this page
  usePageMetaManager({
    title: "ECTD AI | Industry Iceberg",
    description: "AI-powered Electronic Common Technical Document (ECTD) submission and management solutions for pharmaceutical companies. Our ECTD AI platform automates document preparation, regulatory compliance checks, and submission workflows for FDA, EMA, and global health authorities.",
    ogTitle: "ECTD AI | Industry Iceberg",
    ogDescription: "AI-powered Electronic Common Technical Document (ECTD) submission and management solutions for pharmaceutical companies. Our ECTD AI platform automates document preparation, regulatory compliance checks, and submission workflows for FDA, EMA, and global health authorities.",
    twitterTitle: "ECTD AI | Industry Iceberg",
    twitterDescription: "AI-powered Electronic Common Technical Document (ECTD) submission and management solutions for pharmaceutical companies. Our ECTD AI platform automates document preparation, regulatory compliance checks, and submission workflows for FDA, EMA, and global health authorities."
  })

  return (
    <div className="ectdai-page">
      {/* Hero Section */}
      <div className="ectdai-hero">
        <div className="ectdai-hero-logo" onClick={() => navigate('/')}>
          <img src="/assets/image.png" alt="Industry Iceberg Logo" />
        </div>
        <h1 className="ectdai-hero-title">ECTD AI</h1>
      </div>

      {/* Content Section */}
      <div className="ectdai-content">
        {/* Card 1 - What is ECTD AI */}
        <div className="ectdai-card">
          <div className="ectdai-card-header">
            <div className="ectdai-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 7V17L12 21L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="ectdai-card-title">What is ECTD AI?</h2>
          </div>
          <div className="ectdai-card-body">
            <p>
              <strong>ECTD AI</strong> is an AI-powered document analysis and validation service designed for Electronic Common Technical Document (eCTD) submissions. It automatically detects document structure, identifies quality issues, and ensures compliance through intelligent page analysis, OCR detection, and orientation validation.
            </p>
            <p>
              The service streamlines the eCTD submission process by providing comprehensive document validation, reducing manual review time, and ensuring that all regulatory requirements are met before submission to health authorities.
            </p>
            <p>
              With advanced AI capabilities, ECTD AI helps pharmaceutical and biotechnology companies accelerate their regulatory submissions while maintaining the highest standards of document quality and compliance.
            </p>
          </div>
        </div>

        {/* Card 2 - Current Challenges */}
        <div className="ectdai-card">
          <div className="ectdai-card-header">
            <div className="ectdai-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="ectdai-card-title">Current Challenges</h2>
          </div>
          <div className="ectdai-card-body">
            <p>
              Regulatory teams face significant challenges when preparing and submitting eCTD documents. These challenges often lead to delays, increased costs, and potential compliance issues that can impact product approval timelines.
            </p>
            <div className="ectdai-feature-list">
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H15M9 15H15M17 10L21 14L17 18M3 6L7 10L3 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">Manual Document Review</h3>
                  <p className="ectdai-feature-description">
                    Time-consuming manual review processes for document structure, table of contents, and quality issues lead to delays and human errors that can result in regulatory rejections or requests for information.
                  </p>
                </div>
              </div>
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20V10H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 14H12V20H4V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 14H20V20H16V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">Inconsistent Document Structure</h3>
                  <p className="ectdai-feature-description">
                    Lack of automated validation for document structure, table of contents placement, and formatting requirements results in non-compliant submissions that require resubmission and delay approval timelines.
                  </p>
                </div>
              </div>
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">OCR and Quality Detection Issues</h3>
                  <p className="ectdai-feature-description">
                    Difficulty identifying which pages require OCR processing, detecting orientation inconsistencies, and finding legibility issues leads to submission rejections and additional review cycles.
                  </p>
                </div>
              </div>
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">Regulatory Compliance Risks</h3>
                  <p className="ectdai-feature-description">
                    Without automated validation, organizations risk submitting non-compliant documents that fail regulatory review, resulting in delays, additional costs, and potential impact on product launch timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Solutions */}
        <div className="ectdai-card">
          <div className="ectdai-card-header">
            <div className="ectdai-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="ectdai-card-title">Solutions</h2>
          </div>
          <div className="ectdai-card-body">
            <p>
              ECTD AI provides intelligent solutions to address the most challenging aspects of eCTD submission preparation. Our AI-powered tools automate critical validation processes and ensure compliance with regulatory standards across all document types.
            </p>
            <div className="ectdai-feature-list">
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7H20M4 12H14M4 17H11M17 11L20 14L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">Table of Contents Analysis</h3>
                  <p className="ectdai-feature-description">
                    Automatically detects the presence, location, and count of table of contents within documents, ensuring proper document structure and compliance with eCTD requirements.
                  </p>
                </div>
              </div>
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">OCR Requirement Detection</h3>
                  <p className="ectdai-feature-description">
                    Identifies which pages require Optical Character Recognition processing, enabling organizations to prioritize and process scanned documents efficiently before submission.
                  </p>
                </div>
              </div>
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">Page Orientation Analysis</h3>
                  <p className="ectdai-feature-description">
                    Detects pages with different orientations and identifies specific page numbers with orientation inconsistencies, ensuring document uniformity and compliance standards.
                  </p>
                </div>
              </div>
              <div className="ectdai-feature-item">
                <div className="ectdai-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8L8 10L12 12L16 10L12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ectdai-feature-content">
                  <h3 className="ectdai-feature-title">Legibility Issue Detection</h3>
                  <p className="ectdai-feature-description">
                    Identifies page numbers with legibility issues that may affect document quality and compliance, enabling proactive correction before regulatory submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 - CTA */}
        <div className="ectdai-card">
          <div className="ectdai-card-header">
            <h2 className="ectdai-card-title">Ready to Transform Your eCTD Submissions?</h2>
          </div>
          <div className="ectdai-card-body">
            <p>
              Experience the power of AI-driven eCTD validation and compliance checking. Our solution helps pharmaceutical companies streamline their regulatory submission processes, reduce manual review time, and ensure compliance with global regulatory standards. Schedule a demo to see our AI-powered platform in action.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="ectdai-demo-btn" onClick={() => navigate('/ectd-ai-demo')}>
              Request a Demo
            </button>
            </div>
           </div>
         </div>
       </div>
      </div>
  )
}

export default ECTDAI
