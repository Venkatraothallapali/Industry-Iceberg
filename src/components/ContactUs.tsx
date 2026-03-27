import { useState } from 'react'
import type { FC, FormEvent } from 'react'
import './ContactUs.css'
import { trackFormSubmission } from '../utils/analytics'

const ContactUs: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://iidevgmpcomplianceai.azurewebsites.net/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
        
        // Track successful form submission
        trackFormSubmission('Contact Form', {
          full_name: data.fullName,
          company_name: data.companyName,
          business_email: data.businessEmail,
          message_length: typeof data.message === 'string' ? data.message.length : 0,
          form_location: 'contact_page',
          submission_method: 'api'
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
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-inner">
          <p className="contact-hero-kicker">We would love to hear from you</p>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Partner with IndustryIceberg to unlock compliant, AI-powered transformation across
            life sciences. Our global team supports enterprises from strategy through scaled
            deployment.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section contact-form-section" id="contact-form">
        <div className="contact-form-layout">
          <div className="contact-form-copy">
            <h2>Tell us how we can help</h2>
            <p>
              Share a few details about your organization and objectives. Our team will respond
              within one to two business days with the next best step.
            </p>
            <div className="contact-form-image">
              <img 
                src="/assets/contact-bottom-ii.png" 
                alt="Contact Support" 
                className="contact-form-image-img"
              />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text" required />
              </div>
              <div className="contact-field">
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" name="companyName" type="text" required />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="businessEmail">Business Email</label>
                <input id="businessEmail" name="businessEmail" type="email" required />
              </div>
              <div className="contact-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" name="phoneNumber" type="tel" />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="country">Country / Region</label>
                <select id="country" name="country" defaultValue="">
                  <option value="" disabled>
                    Select a country or region
                  </option>
                  <option value="india">India</option>
                  <option value="us">United States</option>
                  <option value="australia">Australia</option>
                  <option value="spain">Spain</option>
                  <option value="ireland">Ireland</option>
                  <option value="jordan">Jordan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="inquiryType">Inquiry Type</label>
                <select id="inquiryType" name="inquiryType" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="sales">Sales</option>
                  <option value="support">Customer Support</option>
                  <option value="partnerships">Partnerships &amp; Alliances</option>
                  <option value="regulatory">Regulatory &amp; Compliance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share a brief overview of your goals, timelines, and any specific use cases."
              />
            </div>

            <button type="submit" className="contact-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {submitStatus === 'success' && (
              <p className="success-message">Thank you! Your Request has been sent successfully.</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">Something went wrong. Please try again later.</p>
            )}
          </form>
        </div>
      </section>

      {/* Global Presence Section Removed */}

      {/* Trust & Compliance Section Removed */}
    </main>
  )
}

export default ContactUs

