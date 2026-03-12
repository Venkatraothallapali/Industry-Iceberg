import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./Navbar.css"
import logoImage from "../assets/image.png"

const serviceLinks = [
  { id: "cmo", label: "CMO" },
  { id: "cdmo", label: "CDMO" },
  { id: "cro", label: "CROs" },
  { id: "preclinical", label: "Pre-Clinical" },
  { id: "clinical", label: "Clinical" },
  { id: "analytical-testing", label: "Analytical Testing" },
  { id: "stability-warehouse", label: "Stability & Warehouse" },
]

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Scroll to service section */
  const scrollToService = (serviceId: string) => {
    const el = document.getElementById(`service-${serviceId}`)
    if (!el) return

    const rect = el.getBoundingClientRect()
    const absoluteTop = rect.top + window.scrollY

    window.scrollTo({
      top: absoluteTop - 100,
      behavior: "smooth",
    })
  }

  /* Handle service click */
  const handleServiceClick = (serviceId: string) => {
    setIsMobileMenuOpen(false)

    if (location.pathname === "/compliance-loop/services") {
      scrollToService(serviceId)
    } else {
      navigate("/compliance-loop/services", {
        state: { scrollTo: serviceId },
      })
    }
  }

  /* Handle scroll after navigation */
  useEffect(() => {
    if (location.pathname === "/compliance-loop/services" && location.state?.scrollTo) {
      const serviceId = location.state.scrollTo

      setTimeout(() => {
        scrollToService(serviceId)
      }, 200)
    }
  }, [location])

  return (
    <div className="compliance-loop-navbar">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">

          {/* Logo */}
          <a href="/" className="nav-logo">
            <img src={logoImage} alt="Industry Iceberg" />
          </a>

          {/* Mobile Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMobileMenuOpen ? "open" : ""}></span>
            <span className={isMobileMenuOpen ? "open" : ""}></span>
            <span className={isMobileMenuOpen ? "open" : ""}></span>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>

            {/* Home */}
            <li>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Services */}
            <li className="services-dropdown">
              <Link
                to="/compliance-loop/services"
                className={`nav-link ${
                  location.pathname.includes("services") ? "active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>

              <ul className="services-dropdown-menu">
                {serviceLinks.map((service) => (
                  <li key={service.id}>
                    <button
                      className="nav-link services-dropdown-link"
                      onClick={() => handleServiceClick(service.id)}
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/compliance-loop/contact"
                className={`nav-link ${
                  location.pathname.includes("contact") ? "active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            {/* External Sign In */}
            <li>
              <a
                href="https://pharma.industryiceberg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link sign-in-btn"
              >
                Sign In
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar