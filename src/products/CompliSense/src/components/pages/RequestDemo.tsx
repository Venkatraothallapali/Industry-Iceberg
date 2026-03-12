import { useState } from 'react';
import "./RequestDemo.css";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    country: '',
    hearAbout: '',
    anythingElse: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle form submission
      const response = await fetch('https://iidevgmpcomplianceai.azurewebsites.net/request-demo-complisense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="complisense-app">
        <div className="demo-success-page">
          <div className="demo-success-container">
            <div className="success-icon">✓</div>
            <h2 className="success-title">Thank You!</h2>
            <p className="success-message">
              We've received your demo request and will get back to you within 24 hours.
            </p>
            <button 
              className="btn-primary"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="complisense-app">
      <div className="demo-page">
      <div className="demo-container">
        <div className="demo-form-container">
          <h2 className="demo-title">Request a Demo</h2>
          <p className="demo-subtitle">
            See how CompliSense can transform your FDA 483 compliance analysis
          </p>
          
          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="demo-form-row">
              <div className="demo-form-field">
                <label className="demo-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="demo-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="demo-form-field">
                <label className="demo-label">Work Email *</label>
                <input
                  type="email"
                  name="workEmail"
                  className="demo-input"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="demo-form-row">
              <div className="demo-form-field">
                <label className="demo-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="demo-input"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              
              <div className="demo-form-field">
                <label className="demo-label">Job Title *</label>
                <input
                  type="text"
                  name="jobTitle"
                  className="demo-input"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Quality Assurance Manager"
                  required
                />
              </div>
            </div>

            <div className="demo-form-row">
              <div className="demo-form-field">
                <label className="demo-label">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  className="demo-input"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Pharma Corp"
                  required
                />
              </div>
              
              <div className="demo-form-field">
                <label className="demo-label">Country *</label>
                <select
                  name="country"
                  className="demo-select"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="demo-form-field">
              <label className="demo-label">How did you hear about us?</label>
              <select
                name="hearAbout"
                className="demo-select"
                value={formData.hearAbout}
                onChange={handleChange}
              >
                <option value="">Select Option</option>
                <option value="Google">Google Search</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Colleague Referral</option>
                <option value="Conference">Conference</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="demo-form-field">
              <label className="demo-label">Anything else you'd like to know?</label>
              <textarea
                name="anythingElse"
                className="demo-textarea"
                value={formData.anythingElse}
                onChange={handleChange}
                placeholder="Tell us about your specific compliance challenges..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="demo-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="demo-spinner"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Request
                  <span className="demo-rocket-icon">🚀</span>
                </>
              )}
            </button>

            <p className="demo-submit-note">
              We'll respond within 24 hours with a personalized demo.
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RequestDemo;
