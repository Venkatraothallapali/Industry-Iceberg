import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './GMPCompliance.css'

const ComplaintSiteSearch: FC = () => {
  const navigate = useNavigate();

  const handleSeeProduct = () => {
    navigate('/compliance-loop');
  };

  return (
    <div className="gmp-compliance-page complaint-site-page">
      {/* Hero Section */}
      <section className="gmp-hero">
        <div className="hero-card">
          <div className="hero-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/assets/image.png" alt="Industry Iceberg Logo" />
          </div>
        </div>
        <h1 className="hero-title">Complaint Site Selection</h1>
      </section>

      {/* Current Challenges Section */}
      <section className="gmp-content">
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
              Organizations struggle with selecting the right manufacturing sites based on complaint data 
              and quality performance. Here are the critical challenges that impact site selection and 
              regulatory compliance:
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Fragmented Complaint Data</h3>
                  <p className="feature-description">
                    Complaint information scattered across multiple systems and sites makes it difficult 
                    to identify patterns, track trends, and perform comprehensive analysis across facilities 
                    for informed site selection decisions.
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
                  <h3 className="feature-title">Limited Site-Specific Visibility</h3>
                  <p className="feature-description">
                    Lack of efficient tools to analyze and compare complaints by manufacturing site or facility 
                    prevents quality teams from making informed site selection decisions based on performance data.
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
                  <h3 className="feature-title">Inefficient Site Comparison</h3>
                  <p className="feature-description">
                    Basic analysis tools fail to handle complex multi-site comparisons and advanced data 
                    evaluation needed for effective site selection based on complaint patterns and quality metrics.
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
                  <h3 className="feature-title">Delayed Site Selection Decisions</h3>
                  <p className="feature-description">
                    Without efficient data analysis and comparison tools, quality issues may go undetected 
                    during site selection, leading to increased regulatory risk and potential compliance problems 
                    at selected facilities.
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
              We provide comprehensive site selection capabilities that transform how organizations identify, 
              evaluate, and select manufacturing sites based on complaint data and quality performance metrics.
            </p>

            <ul className="product-features" style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong>Site Performance Analysis</strong>
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong>Complaint Pattern Identification</strong>
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong>Multi-Site Comparison</strong>
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong>Quality Metrics Evaluation</strong>
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong>Regulatory Compliance Assessment</strong>
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong>Risk-Based Site Selection</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* See Product Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '1rem' }}>
          <button
            onClick={handleSeeProduct}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#1e82c9',
              color: 'white',
              border: '2px solid #1e82c9',
              borderRadius: '2rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(30, 130, 201, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1a6fb8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#1e82c9';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            See Product
          </button>
        </div>
      </section>
    </div>
  )
}

export default ComplaintSiteSearch
