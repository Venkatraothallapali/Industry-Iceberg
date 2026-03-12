import { Link } from "react-router-dom";
import { FileText, Search, TrendingUp, Shield, ArrowRight } from "lucide-react";
import heroImage from "../../assets/fda-image.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <div className="hero-section">
        <div className="hero-pattern"></div>

        <div className="container hero-center">

          <div className="logo-container">
            <div className="logo-card">
              <img
                src={heroImage}
                alt="Industry Iceberg Logo"
                className="logo"
              />
            </div>
          </div>

          <h1 className="hero-title">
            CompliSense
          </h1>

          <p className="hero-subtitle">
            Transform FDA 483 Observations into Actionable Compliance Insights
            <br />
            <span className="hero-highlight">
              Analyze 261,811+ observations from 2007–2025
            </span>
          </p>

          <div className="hero-buttons">

            <Link to="dashboard" className="btn-primary btn-large">
              <span>Explore Dashboard</span>
              <ArrowRight size={20} />
            </Link>

            <Link to="request-demo" className="btn-secondary btn-large">
              Request a Demo
            </Link>

          </div>

        </div>
      </div>

      {/* WHAT IS GMP */}
      <div className="section">
        <div className="container">

          <div className="card">

            <div className="card-header">
              <Shield size={32} />
              <h2 className="section-title">What is GMP?</h2>
            </div>

            <div className="card-content">

              <p className="card-text">
                <strong>Good Manufacturing Practice (GMP)</strong> is a system
                ensuring that products are consistently produced and controlled
                according to quality standards.
              </p>

              <p className="card-text">
                GMP covers all aspects of production including materials,
                equipment, personnel training, and procedures to ensure
                pharmaceutical safety and compliance.
              </p>

              <div className="info-box">
                <p className="info-text">
                  The FDA conducts inspections to ensure companies comply with
                  GMP regulations. Violations result in Form 483 observations
                  documenting issues requiring corrective action.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FEATURES */}
      <div className="section section-gray">
        <div className="container">

          <h2 className="section-title center">Why Choose CompliSense?</h2>

          <p className="section-subtitle center">
            Comprehensive FDA 483 observation analysis with AI-powered insights
          </p>

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">
                <Search size={32} />
              </div>

              <h3 className="feature-title">Advanced Search</h3>

              <p className="feature-description">
                Search through 261,811+ FDA observations with powerful filters
                and intelligent categorization.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={32} />
              </div>

              <h3 className="feature-title">Trend Analysis</h3>

              <p className="feature-description">
                Identify compliance trends across industries, regions, and time
                periods.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FileText size={32} />
              </div>

              <h3 className="feature-title">Detailed Reports</h3>

              <p className="feature-description">
                Generate comprehensive compliance reports with actionable
                insights.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>

              <h3 className="feature-title">Risk Assessment</h3>

              <p className="feature-description">
                Evaluate compliance risks and prioritize corrective actions.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="section">
        <div className="container">

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-number">261,811+</div>
              <div className="stat-label">FDA Observations</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">2007-2025</div>
              <div className="stat-label">Years of Data</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Program Areas</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Countries</div>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">

        <div className="container center">

          <h2 className="cta-title">
            Ready to Transform Your Compliance Strategy?
          </h2>

          <p className="cta-subtitle">
            Explore our interactive dashboard or request a personalized demo
          </p>

          <div className="cta-buttons">

            <Link to="dashboard" className="btn-primary">
              View Dashboard
            </Link>

            <Link to="request-demo" className="btn-secondary">
              Request Demo
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;