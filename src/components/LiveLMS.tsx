import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import './LiveLMS.css'

const LiveLMS: FC = () => {
  // Set meta tags for this page
  usePageMetaManager({
    title: "Live LMS | Industry Iceberg",
    description: "Live Learning Management System for healthcare and life sciences organizations. Our LMS platform delivers interactive training, compliance education, and professional development with real-time tracking and regulatory compliance features.",
    ogTitle: "Live LMS | Industry Iceberg",
    ogDescription: "Live Learning Management System for healthcare and life sciences organizations. Our LMS platform delivers interactive training, compliance education, and professional development with real-time tracking and regulatory compliance features.",
    twitterTitle: "Live LMS | Industry Iceberg",
    twitterDescription: "Live Learning Management System for healthcare and life sciences organizations. Our LMS platform delivers interactive training, compliance education, and professional development with real-time tracking and regulatory compliance features."
  })
  const navigate = useNavigate()
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    // Extra protection (basic) from user request
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.ctrlKey &&
        (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  
  return (
    <div className="lms-page">
      {/* Header */}
      <header className="lms-header">
        <div className="lms-header-content">
          <h1 className="lms-header-title">Live LMS-Videobased</h1>
          <p className="lms-header-subtitle">
            A comprehensive, video-centric learning management system designed for 
            modern pharmaceutical compliance and interactive training.
          </p>
        </div>
      </header>

      {/* Video Section - Inserted per user request */}
      <div className="lms-video-section">
        {!showVideo ? (
          <div 
            className="lms-video-trigger" 
            onClick={() => setShowVideo(true)}
          >
            <p className="lms-trigger-label">Click below to see sample SOP Video</p>
            <h2 className="lms-trigger-text">
              Live LMS-Videobased sample SOP Video (Sterility Testing Procedure)
            </h2>
          </div>
        ) : (
          <div className="lms-video-card">
            <div className="lms-back-button-container">
              <button 
                className="lms-back-button" 
                onClick={() => setShowVideo(false)}
              >
                ← Back
              </button>
            </div>
            <h1 className="lms-video-title">MASUU GLOBAL VIDEO</h1>
            <p className="lms-video-subtitle">Sterility Testing Training Video</p>

            <video 
              className="lms-video-player"
              controls 
              autoPlay
              controlsList="nodownload noplaybackrate" 
              disablePictureInPicture 
              onContextMenu={(e) => e.preventDefault()}
            > 
              <source 
                src="https://saiicomsi001.blob.core.windows.net/bciicomsi001/Sterility%20Testing%20Video%201.mp4?sp=r&st=2026-02-06T12:54:01Z&se=2026-12-30T21:09:01Z&spr=https&sv=2024-11-04&sr=b&sig=Cn1oRxkGf%2BUMv6FfObqJenCmSOTWpGAq0B3KFEBALDU%3D" 
                type="video/mp4" 
              /> 
              Your browser does not support the video tag. 
            </video> 

            <footer className="lms-video-footer">
              © MASUU Global 
            </footer>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="lms-main-layout">
        {/* Content Area */}
        <main className="lms-content">
          {/* Key Capabilities */}
          <section id="overview" className="lms-content-section">
            <h2 className="lms-section-title">Key Capabilities</h2>
            <div className="lms-capabilities-grid">
              <div className="lms-capability-card">
                <div className="lms-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" fill="currentColor" />
                    <path fillRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12Z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="lms-capability-title">Interactive Video Modules</h3>
                <p className="lms-capability-description">
                  Deliver training through engaging video content with embedded interaction points
                  to ensure active learner participation.
                </p>
              </div>

              <div className="lms-capability-card">
                <div className="lms-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-capability-title">Real-time Progress Tracking</h3>
                <p className="lms-capability-description">
                  Monitor learner progress in real-time with detailed analytics dashboards
                  showing completion rates and engagement metrics.
                </p>
              </div>

              <div className="lms-capability-card">
                <div className="lms-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-capability-title">Quiz & Assessment</h3>
                <p className="lms-capability-description">
                  Integrated testing capabilities with instant feedback, randomized questions,
                  and automated grading to verify comprehension.
                </p>
              </div>

              <div className="lms-capability-card">
                <div className="lms-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839-.232c.1.11.192.22.275.332.636.83 1.108 1.76 1.4 2.733" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-capability-title">Certification Management</h3>
                <p className="lms-capability-description">
                  Automated certificate generation and expiration tracking to ensure
                  your workforce remains compliant with industry standards.
                </p>
              </div>

              <div className="lms-capability-card">
                <div className="lms-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-capability-title">Mobile-Ready Learning</h3>
                <p className="lms-capability-description">
                  Fully responsive design allows employees to access training materials
                  anytime, anywhere, on any device.
                </p>
              </div>

              <div className="lms-capability-card">
                <div className="lms-capability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-capability-title">Audit-Ready Reporting</h3>
                <p className="lms-capability-description">
                  Comprehensive reporting features that provide instant access to training records,
                  audit trails, and compliance status.
                </p>
              </div>
            </div>
          </section>

          {/* LMS Workflow */}
          <section id="workflow" className="lms-content-section">
            <h2 className="lms-section-title">LMS Workflow</h2>
            <div className="lms-workflow-steps">
              <div className="lms-workflow-step">
                <div className="lms-step-number">1</div>
                <div className="lms-step-content">
                  <h3 className="lms-step-title">User Enrollment</h3>
                  <p className="lms-step-description">
                    Seamlessly onboard users individually or via bulk import to get started immediately.
                  </p>
                </div>
              </div>

              <div className="lms-workflow-arrow">→</div>

              <div className="lms-workflow-step">
                <div className="lms-step-number">2</div>
                <div className="lms-step-content">
                  <h3 className="lms-step-title">Course Assignment</h3>
                  <p className="lms-step-description">
                    Assign relevant video courses and compliance modules based on roles and departments.
                  </p>
                </div>
              </div>

              <div className="lms-workflow-arrow">→</div>

              <div className="lms-workflow-step">
                <div className="lms-step-number">3</div>
                <div className="lms-step-content">
                  <h3 className="lms-step-title">Interactive Learning</h3>
                  <p className="lms-step-description">
                    Users engage with high-quality video content, completing quizzes and interactive elements.
                  </p>
                </div>
              </div>

              <div className="lms-workflow-arrow">→</div>

              <div className="lms-workflow-step">
                <div className="lms-step-number">4</div>
                <div className="lms-step-content">
                  <h3 className="lms-step-title">Certification & Analytics</h3>
                  <p className="lms-step-description">
                    Track completion, issue certificates, and generate detailed reports for compliance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases" className="lms-content-section">
            <h2 className="lms-section-title">Use Cases</h2>
            <div className="lms-use-cases-grid">
              <div className="lms-use-case-card">
                <div className="lms-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-use-case-title">GMP Training</h3>
                <p className="lms-use-case-description">
                  Standardize GMP procedures across your organization with consistent, video-based training modules.
                </p>
              </div>

              <div className="lms-use-case-card">
                <div className="lms-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-use-case-title">SOP Compliance</h3>
                <p className="lms-use-case-description">
                  Ensure every employee understands and follows Standard Operating Procedures through tracked learning paths.
                </p>
              </div>

              <div className="lms-use-case-card">
                <div className="lms-use-case-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="lms-use-case-title">Continuous Education</h3>
                <p className="lms-use-case-description">
                  Keep your team updated with the latest industry trends and regulatory changes through ongoing courses.
                </p>
              </div>
            </div>
          </section>

          {/* Key Stats */}
          <section className="lms-content-section">
            <h2 className="lms-section-title">Key Statistics</h2>
            <div className="lms-stats-grid">
              <div className="lms-stat-card">
                <div className="lms-stat-value">40%</div>
                <div className="lms-stat-label">Higher Retention Rates</div>
              </div>
              <div className="lms-stat-card">
                <div className="lms-stat-value">100%</div>
                <div className="lms-stat-label">Audit Trail Accuracy</div>
              </div>
              <div className="lms-stat-card">
                <div className="lms-stat-value">24/7</div>
                <div className="lms-stat-label">Global Access</div>
              </div>
              <div className="lms-stat-card">
                <div className="lms-stat-value">3x</div>
                <div className="lms-stat-label">Faster Onboarding</div>
              </div>
            </div>
          </section>

          {/* CTA in place of pricing */}
          <section className="lms-content-section">
            <div className="lms-cta-card">
            <h2 className="lms-section-title cta-heading">Ready to transform your training?</h2>
              <p className="lms-cta-subtext">
                Join the leading pharmaceutical companies using our Live LMS to streamline compliance and enhance learning.
              </p>
              <div className="lms-cta-actions">
                <button 
                  className="lms-cta-button secondary"
                  onClick={() => navigate('/live-lms-demo')}
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="lms-footer">
        <div className="lms-footer-content">
          <p className="lms-footer-text">
            © 2026 Industry Iceberg. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LiveLMS
