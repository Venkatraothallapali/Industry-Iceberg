import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import Navbar from './Navbar'
import Footer from './Footer'
import './NotFound.css'

const NotFound: FC = () => {
  const navigate = useNavigate()
  
  // Set canonical URL for 404 page
  useCanonicalUrlWithPath('/404')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get('search') as string
    
    if (searchQuery.trim()) {
      // Navigate to search results or homepage with search parameter
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="not-found-page">
      <Navbar />
      
      <main className="not-found-main">
        <div className="not-found-container">
          <div className="not-found-content">
            {/* 404 Icon */}
            <div className="not-found-icon">
              <svg 
                width="120" 
                height="120" 
                viewBox="0 0 120 120" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="error-icon"
              >
                <circle cx="60" cy="60" r="55" stroke="#E5E7EB" strokeWidth="8"/>
                <path d="M40 40L80 80M80 40L40 80" stroke="#9CA3AF" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Error Message */}
            <h1 className="not-found-title">Nothing here</h1>
            <p className="not-found-description">
              It looks like nothing was found at this location. Maybe try a search?
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="not-found-search">
              <div className="search-container">
                <input
                  type="text"
                  name="search"
                  placeholder="Search…"
                  className="search-input"
                  autoComplete="off"
                />
                <button type="submit" className="search-button" aria-label="Search">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="not-found-actions">
              <button onClick={handleGoHome} className="home-button">
                Go to Homepage
              </button>
            </div>

            {/* Helpful Links */}
            <div className="helpful-links">
              <h3>Looking for something specific?</h3>
              <div className="links-grid">
                <a href="/complianceloop" className="help-link">
                  Compliance Loop
                </a>
                <a href="/veritascribe" className="help-link">
                  VeritaScribe
                </a>
                <a href="/complisense" className="help-link">
                  CompliSense
                </a>
                <a href="/blog" className="help-link">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
