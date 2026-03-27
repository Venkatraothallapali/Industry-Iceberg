import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/landing.css";
import imagePng from "../assets/image.png";
import searchImg from "../assets/Search.png";
import editReviewImg from "../assets/Edit_review.png";
import trackChangesImg from "../assets/trackchanges.png";
import summarizeImg from "../assets/summarize.png";
import customizeSectionImg from "../assets/Customize_Section.png";
import multiInputImg from "../assets/Multi-input Template processing.png";
import VSCImage from "../assets/V_SC.png";
import { FaRocket, FaShieldAlt, FaMagic, FaLayerGroup } from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
  image: string;
}

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible] = useState(true);

  const features: Feature[] = [
    {
      title: "Advanced Search",
      description: "Search anything in your document with real-time highlighting and match counting. Find specific terms, phrases, or sections instantly.",
      image: searchImg
    },
    {
      title: "Edit & Review",
      description: "Edit and review anything in your document with live updates. Make changes to fields, tables, and content, then save your changes instantly.",
      image: editReviewImg
    },
    {
      title: "Track Changes",
      description: "Track changes option that monitors what is changed in your document. See all modifications with visual diff showing added, removed, and modified content.",
      image: trackChangesImg
    },
    {
      title: "AI Summarization",
      description: "Summarization using AI for anything in your document. Get intelligent summaries of sections or entire documents with key points extracted automatically.",
      image: summarizeImg
    },
    {
      title: "Customize Section",
      description: "Add or remove sections in your document based on your requirements. Dynamically customize document structure by inserting new sections or removing unnecessary ones with ease.",
      image: customizeSectionImg
    },
    {
      title: "Multi-input Template Processing",
      description: "Process a single template with multiple data sources to efficiently fill your document. Combine data from various sources into one comprehensive document, streamlining your workflow and reducing manual data entry.",
      image: multiInputImg
    }
  ];

  return (
    <div className="veritascribe-app">
      <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src={imagePng} alt="Home Logo" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <button
              type="button"
              className="nav-schedule-demo-link"
              onClick={() => navigate("/veritascribe/demo")}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={VSCImage}
            alt="Background"
            className="hero-background-image"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
          <div className="hero-logo-brand">
            <span className="hero-brand-text">VeritaScribe</span>
          </div>
          <h1 className="hero-title">
            Transform Your
            <span className="gradient-text"> Document Workflow</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered document drafting and automation platform that saves you
            time and ensures accuracy.
          </p>
          <div className="hero-buttons">
            <button
              type="button"
              className="veritascribe-see-templates-btn"
              onClick={() => navigate("templates")}
            >
              See Templates
              <FaRocket className="veritascribe-see-templates-btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Regulatory & Productivity Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 style={{ color: '#1e82c9', fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '2rem' }}>Regulatory & Productivity Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaRocket />
              </div>
              <h3 className="benefit-title">Productivity & Speed</h3>
              <p className="benefit-description">
                Save hours of manual work as AI completes document tasks in minutes, accelerating reviews, approvals, and overall workflows.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaShieldAlt />
              </div>
              <h3 className="benefit-title">Accuracy & Compliance</h3>
              <p className="benefit-description">
                Eliminate human errors with reliable, compliant, and consistent documentation you can trust.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaMagic />
              </div>
              <h3 className="benefit-title">Instant Understanding</h3>
              <p className="benefit-description">
                Quickly grasp long and complex documents through AI-powered summaries and insights in seconds.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaLayerGroup />
              </div>
              <h3 className="benefit-title">Smart Document Customization & Collaboration</h3>
              <p className="benefit-description">
                Easily update default documents for different products, enable smooth team collaboration, and focus on high-value tasks like scientific review and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <h2 style={{ color: '#1e82c9', fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '2rem' }}>Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to streamline your document workflow
          </p>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-image-container">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-container">
          <h2 style={{ color: '#1e82c9', fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Select Template</h3>
                <p>Choose from our library of professional templates or upload your own document</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Upload Data Source</h3>
                <p>Provide your data in Excel or Word format for automatic filling</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>AI Processing</h3>
                <p>Our AI engine processes and fills your document with precision</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Review & Download</h3>
                <p>Review your completed document and download when ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Workflow?</h2>
          <p className="cta-subtitle">
            Join thousands of professionals who trust Veritascribe for their document needs
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-content">
          <div className="footer-logo-section">
            <img src={imagePng} alt="Industry Iceberg" className="landing-footer-logo" />
            <div className="footer-brand">
              <span className="footer-brand-name">VeritaScribe</span>
            </div>
          </div>
          <nav className="landing-footer-nav">
            <a href="#features" className="landing-footer-link">Features</a>
            <a href="#how-it-works" className="landing-footer-link">How It Works</a>
          </nav>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Industry Iceberg (ii). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Landing;