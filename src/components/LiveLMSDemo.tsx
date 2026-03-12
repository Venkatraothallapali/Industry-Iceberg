import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ScheduleDemo.css'

const LiveLMSDemo: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    country: '',
    hearAbout: '',
    anythingElse: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.workEmail.trim()) newErrors.workEmail = 'Work email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) newErrors.workEmail = 'Please enter a valid email address'
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required'
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://iidevgmpcomplianceai.azurewebsites.net/request-demo-complianceloop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          workEmail: '',
          phoneNumber: '',
          jobTitle: '',
          companyName: '',
          country: '',
          hearAbout: '',
          anythingElse: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="schedule-demo-page">
      {/* Compact Navigation */}
      <nav className="demo-nav">
        <div className="demo-nav-container">
          <div className="demo-nav-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/assets/logo-cdoxsd3z.png" alt="Industry Iceberg Logo" className="demo-nav-logo" />
            <span className="demo-nav-title">Live LMS-Videobased</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="demo-content-wrapper">
        <div className="demo-grid">
          {/* Left Side - Narrower */}
          <div className="demo-left">
            <div>
              <h1 className="demo-main-title">
                Book a Personalized Live LMS Demo
              </h1>
              <p className="demo-main-description">
                Experience how our video-based LMS transforms pharmaceutical compliance training. 
                Streamline workflows, ensure regulatory adherence, and engage learners with interactive content.
              </p>

              <div className="demo-features">
                <div className="demo-feature-item">
                  <div className="demo-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" fill="currentColor" />
                      <path fillRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="demo-feature-title">Interactive Video Learning</h3>
                    <p className="demo-feature-description">See how video modules with embedded checks drive engagement and retention.</p>
                  </div>
                </div>

                <div className="demo-feature-item">
                  <div className="demo-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="demo-feature-title">Compliance & Analytics</h3>
                    <p className="demo-feature-description">Track progress in real-time and generate audit-ready reports instantly.</p>
                  </div>
                </div>

                <div className="demo-feature-item">
                  <div className="demo-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="demo-feature-title">Flexible Implementation</h3>
                    <p className="demo-feature-description">Learn how we tailor the LMS to your specific SOPs and organizational structure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Wider form */}
          <div className="demo-form-container">
            <h2 className="demo-form-title">Schedule Your Demo</h2>
            <form onSubmit={handleSubmit} className="demo-form">
              {/* Row 1: Name + Work Email */}
              <div className="demo-form-row">
                <div className="demo-form-field">
                  <label htmlFor="name" className="demo-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`demo-input ${errors.name ? 'demo-input-error' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="demo-error">{errors.name}</p>}
                </div>

                <div className="demo-form-field">
                  <label htmlFor="workEmail" className="demo-label">Work Email *</label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={`demo-input ${errors.workEmail ? 'demo-input-error' : ''}`}
                    placeholder="john@company.com"
                  />
                  {errors.workEmail && <p className="demo-error">{errors.workEmail}</p>}
                </div>
              </div>

              {/* Row 2: Phone Number + Job Title */}
              <div className="demo-form-row">
                <div className="demo-form-field">
                  <label htmlFor="phoneNumber" className="demo-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`demo-input ${errors.phoneNumber ? 'demo-input-error' : ''}`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phoneNumber && <p className="demo-error">{errors.phoneNumber}</p>}
                </div>

                <div className="demo-form-field">
                  <label htmlFor="jobTitle" className="demo-label">Job Title *</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={`demo-input ${errors.jobTitle ? 'demo-input-error' : ''}`}
                    placeholder="Regulatory Affairs Manager"
                  />
                  {errors.jobTitle && <p className="demo-error">{errors.jobTitle}</p>}
                </div>
              </div>

              {/* Row 3: Company Name + Country */}
              <div className="demo-form-row">
                <div className="demo-form-field">
                  <label htmlFor="companyName" className="demo-label">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`demo-input ${errors.companyName ? 'demo-input-error' : ''}`}
                    placeholder="Acme Pharmaceuticals"
                  />
                  {errors.companyName && <p className="demo-error">{errors.companyName}</p>}
                </div>

                <div className="demo-form-field">
                  <label htmlFor="country" className="demo-label">Country *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`demo-input ${errors.country ? 'demo-input-error' : ''}`}
                    placeholder="United States"
                  />
                  {errors.country && <p className="demo-error">{errors.country}</p>}
                </div>
              </div>

              {/* How did you hear */}
              <div className="demo-form-field">
                <label htmlFor="hearAbout" className="demo-label">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="demo-input demo-select"
                >
                  <option value="">Please select</option>
                  <option value="google">Google Search</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="event">Industry Event</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Anything Else */}
              <div className="demo-form-field">
                <label htmlFor="anythingElse" className="demo-label">
                  Anything else you'd like us to know?
                </label>
                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  value={formData.anythingElse}
                  onChange={handleChange}
                  rows={2}
                  className="demo-input demo-textarea"
                  placeholder="Share specific training needs or challenges..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`demo-submit-btn ${isSubmitting ? 'demo-submit-btn-loading' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="demo-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="demo-spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="demo-spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <svg className="demo-rocket-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 16.5C4.5 13.4624 6.46243 11.5 9.5 11.5C12.5376 11.5 14.5 13.4624 14.5 16.5C14.5 19.5376 12.5376 21.5 9.5 21.5C6.46243 21.5 4.5 19.5376 4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2C15 2 17 4 17 7C17 8 16.5 9.5 15.5 10.5L12 14L8.5 10.5C7.5 9.5 7 8 7 7C7 4 9 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Request Your Demo
                  </>
                )}
              </button>

              <p className="demo-submit-note">
                We typically respond within 24 hours.
              </p>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your demo request has been received. We will contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  Something went wrong. Please try again later or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveLMSDemo
