import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRocket, FaCheckCircle, FaUsers, FaClock } from 'react-icons/fa';
import logoImage from '../assets/logo-cdoxsd3z.png';
import './DemoPage.css';

const DemoPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    country: '',
    hearAbout: '',
    anythingElse: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.workEmail.trim()) newErrors.workEmail = 'Work email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) newErrors.workEmail = 'Please enter a valid email address';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await fetch('https://iidevgmpcomplianceai.azurewebsites.net/request-demo-veritascribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        workEmail: '',
        phoneNumber: '',
        jobTitle: '',
        companyName: '',
        country: '',
        hearAbout: '',
        anythingElse: '',
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="schedule-demo-page">
      {/* Navigation */}
      <nav className="demo-nav">
        <div className="demo-nav-container">
          <div
            className="demo-nav-brand cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src={logoImage}
              alt="VeritaScribe"
              className="demo-nav-logo"
            />
            <span className="demo-nav-title">VeritaScribe</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="demo-content-wrapper">
        <div className="demo-grid">
          {/* Left Side - Content */}
          <div className="demo-left">
            <div>
              <h1 className="demo-main-title">
                Book a Personalized VeritaScribe Live Demo
              </h1>
              <p className="demo-main-description">
                Discover how VeritaScribe's AI-powered platform can transform your regulatory document workflows. 
                Save hours of manual work, eliminate errors, and boost efficiency by up to 80%.
              </p>

              <div className="demo-features">
                <div className="demo-feature-item">
                  <div className="demo-feature-icon">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h3 className="demo-feature-title">Live Platform Walkthrough</h3>
                    <p className="demo-feature-description">See VeritaScribe in action with examples tailored to your needs.</p>
                  </div>
                </div>

                <div className="demo-feature-item">
                  <div className="demo-feature-icon">
                    <FaUsers />
                  </div>
                  <div>
                    <h3 className="demo-feature-title">Expert Guidance</h3>
                    <p className="demo-feature-description">Get your questions answered by our product specialists.</p>
                  </div>
                </div>

                <div className="demo-feature-item">
                  <div className="demo-feature-icon">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="demo-feature-title">Flexible Scheduling</h3>
                    <p className="demo-feature-description">We'll contact you within 24 hours to schedule your demo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="demo-form-container">
            <h2 className="demo-form-title">Schedule Your Demo</h2>
            
            {isSuccess && (
              <div className="success-message">
                <FaCheckCircle />
                <p>Thank you! Your demo request has been received. We will contact you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="demo-form">
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
                  {errors.name && <span className="demo-error">{errors.name}</span>}
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
                  {errors.workEmail && <span className="demo-error">{errors.workEmail}</span>}
                </div>
              </div>

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
                  {errors.phoneNumber && <span className="demo-error">{errors.phoneNumber}</span>}
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
                  {errors.jobTitle && <span className="demo-error">{errors.jobTitle}</span>}
                </div>
              </div>

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
                  {errors.companyName && <span className="demo-error">{errors.companyName}</span>}
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
                  {errors.country && <span className="demo-error">{errors.country}</span>}
                </div>
              </div>

              <div className="demo-form-field">
                <label htmlFor="hearAbout" className="demo-label">How did you hear about VeritaScribe?</label>
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

              <div className="demo-form-field">
                <label htmlFor="anythingElse" className="demo-label">Anything else you'd like us to know?</label>
                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  value={formData.anythingElse}
                  onChange={handleChange}
                  rows={3}
                  className="demo-input demo-textarea"
                  placeholder="Share specific challenges or use cases..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`demo-submit-btn ${isSubmitting ? 'demo-submit-btn-loading' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="demo-spinner">
                      <svg className="demo-spinner-circle" viewBox="0 0 24 24">
                        <circle className="demo-spinner-path" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4"/>
                      </svg>
                    </div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaRocket className="demo-rocket-icon" />
                    Request Your Demo
                  </>
                )}
              </button>

              <p className="demo-submit-note">
                We typically respond within 24 hours to schedule your personalized demo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
