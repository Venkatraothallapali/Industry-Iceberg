import type { FC } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { Compliance_Loop } from '../config'
import { CompliSense } from '../config'
import { Veritascribe } from '../config'


const Footer: FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img
                src="/assets/image.png"
                alt="IndustryIceberg Logo"
                className="footer-logo"
              />
            </a>
            <p className="footer-tagline">
              Powering intelligent & compliant decisions across pharma and life sciences
            </p>

            {/* Connect moved into brand column so it sits under the logo/tagline */}
            <div className="footer-connect">
              <h3 className="footer-heading">Connect</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/company/industry-iceberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#who-we-are">Who We Are</a></li>
              <li><a href="#services" onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>Our Products & Services</a></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Products</h3>
            <ul className="footer-links">
              <li><Link to={Compliance_Loop}>Compliance Loop</Link></li>
              <li><a href={CompliSense} target="_blank" rel="noopener noreferrer">CompliSense</a></li>
              <li><Link to={Veritascribe}>VeritaScribe</Link></li>
              <li><Link to="/live-lms">Live LMS-Videobased</Link></li>
              <li><Link to="/ectd-ai">ECTD AI</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="/complaint-site-search">Complaint Site Selection</a></li>
              <li><Link to="/video-creation-service">Video Creation Service</Link></li>
              <li><Link to="/ai-technologies-services">AI Technologies & Solutions</Link></li>
              <li><Link to="/enterprise-llm-solutions">Enterprise LLM Solutions</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p className="copyright">
                Copyright © 2026 IndustryIceberg. All Rights Reserved.
              </p>
              <div className="legal-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="/terms-of-use">Terms of Use</a>
              </div>
            </div>

            <div className="footer-address">
              <p className="footer-contact-item">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@industryiceberg.com">info@industryiceberg.com</a>
              </p>

              <p className="footer-contact-item">
                <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 91541 69469</span>
              </p>

              <div className="footer-address-link">
                <p className="footer-contact-item">
                  <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>5th floor, Rama Enclave, Miyapur</span>
                </p>
                <p className="footer-address-continuation">
                  Hyderabad, Telangana, India 500049
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
