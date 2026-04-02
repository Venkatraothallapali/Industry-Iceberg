import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCanonicalUrlWithPath } from '../../../../hooks/useCanonicalUrl'
import './Home.css'

import logoImage from '../assets/image.png'
import CMOIcon from '../assets/ServisesIcons_images/CMO.png'
import CROIcon from '../assets/ServisesIcons_images/CRO.png'
import PreClinicalIcon from '../assets/ServisesIcons_images/Pre-Clinical.png'
import ClinicalIcon from '../assets/ServisesIcons_images/Clinical.png'
import ATLIcon from '../assets/ServisesIcons_images/ATL.png'
import StabilityIcon from '../assets/ServisesIcons_images/Stability & Warehouse.png'

import Navbar from './Navbar'


const Home: React.FC = () => {

  const homeRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  // Set canonical URL for Compliance Loop home page
  useCanonicalUrlWithPath('/complianceloop')


  useEffect(() => {

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {

      return

    }



    const currentRef = homeRef.current

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('fade-in')

          }

        })

      },

      { threshold: 0.1 }

    )



    if (currentRef) {

      const elements = currentRef.querySelectorAll('.animate-on-scroll')

      elements.forEach((el) => observer.observe(el))

    }



    return () => {

      if (currentRef) {

        const elements = currentRef.querySelectorAll('.animate-on-scroll')

        elements.forEach((el) => observer.unobserve(el))

      }

    }

  }, [])



  return (

    <>

      <Navbar />

      <section 
        id="home" 
        className="home-section" 
        ref={homeRef}
        role="img"
        aria-label="Industry Iceberg Compliance Loop - AI-driven regulatory compliance platform for life sciences companies connecting with CMO, CDMO, CRO partners"
      >

        <div className="home-hero">

          <div className="container hero-container">

            <h1 className="main-title animate-on-scroll">

              Compliance Loop

            </h1>

            <p className="subtitle-description animate-on-scroll">

              An AI-driven platform enabling life sciences companies to identify and engage compliant global partners.

            </p>

          </div>

        </div>



        <div className="home-content">
        <div className="container">
          <div className="story-section animate-on-scroll">
            <div className="story-content">
              <h2 className="section-heading">Our Story</h2>
              <p className="story-text">
                Industry Iceberg <strong>(ii)</strong> was born out of Masuu's
                vision, backed by over <strong>150 years of collective experience</strong> from our
                founders and Scientific Advisory Board. Shaped by insights from{' '}
                <strong>450+ pharmaceutical companies</strong>, we recognized a critical need for
                speed, trust, and regulatory clarity when selecting service
                partners—whether CMOs, CDMOs, CROs, preclinical and clinical
                labs, analytical testing labs, or stability and warehousing
                facilities.
              </p>
              <p className="story-text">
                That's why we created <strong>ii</strong>—an AI-powered discovery platform
                designed to help life sciences companies effortlessly identify
                and connect with the most compliant and capable global partners,
                ensuring regulatory and quality excellence at every step.
              </p>
            </div>
          </div>

          <div className="vision-section animate-on-scroll">
            <div className="content-card vision-card">
              <h3>Our Vision</h3>
              <p>Industry Iceberg believes that genuine enterprise transformation stems from fostering superior decision-making throughout an organization, leading to sustainable competitive advantage. Our profound expertise in AI, engineering, and design allows us to develop products and solutions that achieve <strong>billion-dollar impact for our clientele</strong>.</p>
            </div>
          </div>



          <div className="services-preview animate-on-scroll">
            <h2 className="section-heading">Featured Services</h2>
            <p className="services-intro-text">
              Our platform offers seamless access to a wide range of services,
              including:
            </p>
            <div className="services-grid">
              <div className="service-preview-item clickable" onClick={() => navigate('/complianceloop/services/cmo')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/complianceloop/services/cmo')}>
                <div className="service-icon">
                  <img
                    src={CMOIcon}
                    alt="Contract Manufacturing Organizations CMO services - regulatory compliance pharmaceutical manufacturing"
                  />
                </div>
                <h4>Contract Manufacturing Organizations (CMO)</h4>
              </div>
              <div className="service-preview-item clickable" onClick={() => navigate('/complianceloop/services/cro')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/complianceloop/services/cro')}>
                <div className="service-icon">
                  <img
                    src={CROIcon}
                    alt="Contract Research Organizations CRO services - clinical trials pharmaceutical research"
                  />
                </div>
                <h4>Contract Research Organizations (CROs)</h4>
              </div>
              <div className="service-preview-item clickable" onClick={() => navigate('/complianceloop/services/preclinical')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/complianceloop/services/preclinical')}>
                <div className="service-icon">
                  <img
                    src={PreClinicalIcon}
                    alt="Pre-Clinical research services - drug development safety assessment toxicology studies"
                  />
                </div>
                <h4>Pre-Clinical</h4>
              </div>
              <div className="service-preview-item clickable" onClick={() => navigate('/complianceloop/services/clinical')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/complianceloop/services/clinical')}>
                <div className="service-icon">
                  <img
                    src={ClinicalIcon}
                    alt="Clinical trial services - clinical research Phase I II III IV studies"
                  />
                </div>
                <h4>Clinical</h4>
              </div>
              <div className="service-preview-item clickable" onClick={() => navigate('/complianceloop/services/analytical-testing')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/complianceloop/services/analytical-testing')}>
                <div className="service-icon">
                  <img
                    src={ATLIcon}
                    alt="Analytical Testing Lab ATL services - quality control method validation pharmaceutical testing"
                  />
                </div>
                <h4>Analytical Testing Lab (ATL)</h4>
              </div>
              <div className="service-preview-item clickable" onClick={() => navigate('/complianceloop/services/stability-warehouse')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && navigate('/complianceloop/services/stability-warehouse')}>
                <div className="service-icon">
                  <img
                    src={StabilityIcon}
                    alt="Stability and Warehouse services - cold chain storage pharmaceutical logistics ICH compliance"
                  />
                </div>
                <h4>Stability & Warehouse</h4>
              </div>
            </div>
          </div>

        </div>
        </div>

        

        <footer className="home-footer">

          <div className="complianceloop-footer-content">

            <div className="footer-logo-section">

              <img src={logoImage} alt="Industry Iceberg Compliance Loop - AI-driven regulatory compliance platform" className="complianceloop-footer-logo" />

              <div className="footer-brand">

                <span className="footer-brand-name">Compliance Loop</span>

              </div>

            </div>

            <nav className="complianceloop-footer-nav">

              <a href="/complianceloop/services" className="complianceloop-footer-link" onClick={(e) => {

                e.preventDefault();

                navigate('/complianceloop/services');

                window.scrollTo({ top: 0, behavior: 'smooth' });

              }}>Services</a>

              <a href="/complianceloop/demo" className="complianceloop-footer-link" onClick={(e) => {

                e.preventDefault();

                navigate('/complianceloop/demo');

                window.scrollTo({ top: 0, behavior: 'smooth' });

              }}>Contact</a>

            </nav>

            <div className="footer-copyright">

              <p>&copy; {new Date().getFullYear()} Industry Iceberg (ii). All rights reserved.</p>

            </div>

          </div>

        </footer>

      </section>

    </>

  )

}



export default Home