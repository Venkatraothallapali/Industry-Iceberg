import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductsShowcase.css'
import { Compliance_Loop } from '../config'
import { CompliSense } from '../config'
import { Veritascribe } from '../config'

const ProductsShowcase: FC = () => {
  const navigate = useNavigate()
  return (
    <section id="services" className="products-showcase">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Our Products & Services</h2>
          <p className="products-subtitle">
            IndustryIceberg delivers comprehensive AI-driven solutions designed for enterprise needs
          </p>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">Compliance Loop</h3>
            <p className="product-description">
              An AI-powered discovery platform designed to help life sciences companies effortlessly 
              identify and connect with the most compliant and capable global partners, ensuring 
              regulatory and quality excellence at every step.
            </p>
            <ul className="product-features">
              <li>
                <strong>Contract Manufacturing Organizations (CMO)</strong>
              </li>
              <li>
                <strong>Contract Research Organizations (CROs)</strong>
              </li>
              <li>
                <strong>Pre-Clinical</strong>
              </li>
              <li>
                <strong>Clinical</strong>
              </li>
              <li>
                <strong>Analytical Testing Lab (ATL)</strong>
              </li>
              <li>
                <strong>Stability & Warehouse</strong>
              </li>
            </ul>
            <a 
              href={Compliance_Loop} 
              className="product-link"
              onClick={(e) => {
                e.preventDefault()
                navigate('/compliance-loop')
              }}
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">CompliSense</h3>
            <p className="product-description">
              GMP audits and compliance management. Helps organizations navigate FDA inspections 
              and improve their compliance posture.
            </p>
            <ul className="product-features">
              <li>
                <strong>Observation Analysis:</strong> AI analyzes FDA 483 observations and maps 
                them to relevant CFR sections.
              </li>
              <li>
                <strong>Historical Pattern Analysis:</strong> Displays how often CFR numbers were 
                cited between 2007 and 2025 to identify recurring compliance risks.
              </li>
              <li>
                <strong>Corrective & Preventive Actions (CAPA):</strong> AI-generated CAPA 
                recommendations based on observation and CFR analysis.
              </li>
            </ul>
            <a 
              href={CompliSense}
              className="product-link"
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 3V9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 className="product-title">VeritaScribe</h3>
            <p className="product-description">
              AI-powered document drafting and automation platform designed for accuracy, 
              efficiency, and governance.
            </p>
            <ul className="product-features">
              <li>
                <strong>Advanced Search:</strong> Powerful search capabilities across all documents.
              </li>
              <li>
                <strong>Edit & Review:</strong> Collaborative editing tools with real-time updates.
              </li>
              <li>
                <strong>Track Changes:</strong> Comprehensive change tracking with complete 
                audit trails.
              </li>
              <li>
                <strong>AI Summarization:</strong> Automatically generate concise summaries from 
                lengthy documents.
              </li>
            </ul>
            <a 
              href={Veritascribe}
              className="product-link"
              onClick={(e) => {
                e.preventDefault()
                navigate('/veritascribe')
              }}
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L19.553 12.276C19.8334 12.4159 20.0015 12.7151 20.0015 13.0401C20.0015 13.3651 19.8334 13.6643 19.553 13.8042L15 16M5 18H13C13.5304 18 14.0391 17.7893 14.4142 17.4142C14.7893 17.0391 15 16.5304 15 16V8C15 7.46957 14.7893 6.96086 14.4142 6.58579C14.0391 6.21071 13.5304 6 13 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">Live LMS-Videobased</h3>
            <p className="product-description">
              A comprehensive, video-centric learning management system designed for 
              modern pharmaceutical compliance and interactive training.
            </p>
            <ul className="product-features">
              <li>
                <strong>Video-Centric Learning:</strong> Interactive video modules for engaging training experiences.
              </li>
              <li>
                <strong>Compliance Tracking:</strong> Real-time monitoring of training completion and compliance status.
              </li>
              <li>
                <strong>Interactive Assessments:</strong> Built-in quizzes and assessments to verify understanding.
              </li>
              <li>
                <strong>Real-time Analytics:</strong> Detailed insights into learner progress and engagement.
              </li>
            </ul>
            <a 
              href="/live-lms" 
              className="product-link"
              onClick={(e) => {
                e.preventDefault()
                navigate('/live-lms')
              }}
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L19.553 12.276C19.8334 12.4159 20.0015 12.7151 20.0015 13.0401C20.0015 13.3651 19.8334 13.6643 19.553 13.8042L15 16M5 18H13C13.5304 18 14.0391 17.7893 14.4142 17.4142C14.7893 17.0391 15 16.5304 15 16V8C15 7.46957 14.7893 6.96086 14.4142 6.58579C14.0391 6.21071 13.5304 6 13 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">Video Creation Service</h3>
            <p className="product-description">
              AI-powered video creation for regulated sectors.<br />
              From technical documentation to workforce training, IndustryIceberg automates the 
              end-to-end production of secure, compliant, and professional video content at scale.
            </p>
            <ul className="product-features">
              <li>
                <strong>Technical Documentation:</strong> Automated creation of technical 
                documentation videos for regulated industries.
              </li>
              <li>
                <strong>Workforce Training:</strong> Scalable training video production for 
                employee education and compliance.
              </li>
              <li>
                <strong>Secure & Compliant:</strong> Ensures all video content meets regulatory 
                and security standards.
              </li>
              <li>
                <strong>End-to-End Automation:</strong> Complete video production workflow 
                automation from script to final delivery.
              </li>
              <li>
                <strong>Multi-Language Support:</strong> Generate videos in multiple languages for global teams.
              </li>
            </ul>
            <a 
              href="/video-creation-service" 
              className="product-link"
              onClick={(e) => {
                e.preventDefault()
                navigate('/video-creation-service')
              }}
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 7V17L12 21L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11H15M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="8" r="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="product-title">AI Technologies & Solutions</h3>
            <p className="product-description">
              Advanced AI capabilities powered by Computer Vision, Natural Language Processing, 
              Deep Learning, and Artificial Intelligence for enterprise transformation.
            </p>
            <ul className="product-features">
              <li>
                <strong>Computer Vision:</strong> Image recognition, object detection, and visual analytics.
              </li>
              <li>
                <strong>Natural Language Processing:</strong> Text understanding, sentiment analysis, and language translation.
              </li>
              <li>
                <strong>Deep Learning:</strong> Neural networks for pattern recognition and predictive modeling.
              </li>
              <li>
                <strong>Artificial Intelligence:</strong> Reasoning, planning, and autonomous decision-making systems.
              </li>
              <li>
                <strong>Multi-modal Integration:</strong> Combined AI capabilities for comprehensive solutions.
              </li>
              <li>
                <strong>Predictive Analytics:</strong> Advanced forecasting and trend analysis for business insights.
              </li>
            </ul>
            <a 
              href="/ai-technologies-services" 
              className="product-link"
              onClick={(e) => {
                e.preventDefault()
                navigate('/ai-technologies-services')
              }}
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">Enterprise LLM Solutions</h3>
            <p className="product-description">
              Enterprise-grade Large Language Model solutions for secure, scalable, and 
              governed AI deployment across your organization.
            </p>
            <ul className="product-features">
              <li>
                <strong>Secure Deployment:</strong> Enterprise security with data governance and compliance.
              </li>
              <li>
                <strong>Scalable Architecture:</strong> Cloud-native infrastructure for enterprise scale.
              </li>
              <li>
                <strong>Risk Management:</strong> Comprehensive compliance and risk assessment frameworks.
              </li>
              <li>
                <strong>Monitoring & Observability:</strong> Real-time tracking of model performance and behavior.
              </li>
              <li>
                <strong>Custom Model Fine-tuning:</strong> Tailored LLM solutions for specific business needs.
              </li>
              <li>
                <strong>API Integration:</strong> Seamless integration with existing enterprise systems and workflows.
              </li>
            </ul>
            <a 
              href="/enterprise-llm-solutions" 
              className="product-link"
              onClick={(e) => {
                e.preventDefault()
                navigate('/enterprise-llm-solutions')
              }}
            >
              Learn More →
            </a>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 3V9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="product-title">ECTD AI</h3>
            <p className="product-description">
              AI-powered document analysis and validation for eCTD submissions. Automatically detects 
              document structure, identifies quality issues, and ensures compliance through intelligent 
              page analysis, OCR detection, and orientation validation.
            </p>
            <ul className="product-features">
              <li>
                <strong>Table of Contents Analysis:</strong> Automatically detects the presence, 
                location, and count of table of contents within documents.
              </li>
              <li>
                <strong>OCR Requirement Detection:</strong> Identifies which pages require Optical 
                Character Recognition processing.
              </li>
              <li>
                <strong>Page Orientation Analysis:</strong> Detects pages with different 
                orientations and identifies specific page numbers with orientation inconsistencies.
              </li>
              <li>
                <strong>Legibility Issue Detection:</strong> Identifies page numbers with legibility 
                issues that may affect document quality and compliance.
              </li>
            </ul>
            <a 
              href="/ectd-ai" 
              className="product-link"
              onClick={(e) => {
                e.preventDefault()
                navigate('/ectd-ai')
              }}
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsShowcase
