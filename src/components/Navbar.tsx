import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { FC } from 'react'
import './Navbar.css'
import { Compliance_Loop } from '../config'
import { CompliSense } from '../config'
import { Veritascribe } from '../config'
import { trackButtonClick } from '../utils/analytics'

interface DropdownItem {
  label: string
  href?: string
  newTab?: boolean
}

const Navbar: FC = () => {
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const productsMenu: DropdownItem[] = [
    { label: 'Complaint Site Selection', href: '/complaint-site-search' },
    { label: 'Video Creation Service', href: '/video-creation-service' },
    { label: 'AI Technologies & Solutions', href: '/ai-technologies-services' },
    { label: 'Enterprise LLM Solutions', href: '/enterprise-llm-solutions' }
  ]

  const solutionsMenu: DropdownItem[] = [
    { label: 'Compliance Loop', href:Compliance_Loop },
    { label: 'CompliSense', href: CompliSense },
    { label: 'VeritaScribe', href:Veritascribe },
    { label: 'Live LMS-Videobased', href: '/live-lms' },
    { label: 'ECTD AI', href: '/ectd-ai' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    const handleClickOutside = (event: MouseEvent) => {
      // Only close on click, not on hover
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Check if it's a click event, not just mouse movement
        if (event.type === 'mousedown') {
          setActiveDropdown(null)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = (href?: string) => {
    setIsMenuOpen(false) // Close mobile menu on click
    if (href && href !== '#') {
      if (href.startsWith('/')) {
        const currentPath = window.location.pathname
        const solutionPages = [
          '/gmp-compliance',
          '/veritascribe',
          '/complaint-site-search',
          '/quality-training',
          '/ectd-ai',
          '/video-creation-service',
          '/live-lms',
          '/compliance-loop'
        ]
        const isCurrentSolutionPage = solutionPages.includes(currentPath)
        const isNavigatingToSolutionPage = solutionPages.includes(href)
        const isOnHomepage = currentPath === '/' || currentPath === ''

        if (isOnHomepage) {
          navigate(href)
        } else if (isCurrentSolutionPage && isNavigatingToSolutionPage) {
          navigate(href, { replace: true })
        } else {
          navigate(href)
        }
      } else {
        window.location.assign(href)
      }
    }
    setActiveDropdown(null)
  }

  const renderDropdown = (items: DropdownItem[], menuName: string) => {
    if (activeDropdown !== menuName) return null

    return (
      <div 
        className="dropdown-menu"
        onMouseEnter={() => setActiveDropdown(menuName)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {items.map((item, index) => {
          const isExternalLink = item.href && (item.href.startsWith('http://') || item.href.startsWith('https://'))
          const shouldOpenNewTab = isExternalLink || item.newTab
          
          return (
            <a
              key={index}
              href={item.href || '#'}
              onClick={(e) => {
                if (shouldOpenNewTab) {
                  // Allow default behavior for external links (opens in new tab)
                  setActiveDropdown(null)
                  return
                }
                e.preventDefault()
                handleMenuItemClick(item.href)
              }}
              className="dropdown-item"
              target={shouldOpenNewTab ? "_blank" : undefined}
              rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} ref={dropdownRef}>
      <div className="navbar-container">
        <a 
          href="/" 
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            const currentPath = window.location.pathname
            if (currentPath === '/' || currentPath === '') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
              navigate('/')
            }
          }}
        >
          <img src="/assets/image.png" alt="IndustryIceberg Logo" />
        </a>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="/" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Who We Are
          </a>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)} 
          >
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('solutions')}
            >
              Products
              <span className={`dropdown-arrow ${activeDropdown === 'solutions' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(solutionsMenu, 'solutions')}
          </div>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => handleDropdownToggle('products')}
            >
              Services
              <span className={`dropdown-arrow ${activeDropdown === 'products' ? 'active' : ''}`}>▼</span>
            </button>
            {renderDropdown(productsMenu, 'products')}
          </div>

          <a 
            href="/blog" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              const currentPath = window.location.pathname
              const isOnHomepage = currentPath === '/' || currentPath === ''
              
              // If on homepage, normal navigation (back button will work)
              // If on other pages, replace current page with homepage, then navigate to blog
              // This ensures back button from blog always goes to homepage
              if (isOnHomepage) {
                navigate('/blog')
              } else {
                // Replace current page with homepage in history
                navigate('/', { replace: true, state: { fromBlog: true } })
                // Then navigate to blog (this will add blog after homepage in history)
                setTimeout(() => {
                  navigate('/blog')
                }, 0)
              }
            }}
          >
            Blog
          </a>
          
          <div className="nav-actions">
            <a 
              href="/contact-us"
              className="nav-link contact-btn"
              onClick={(e) => {
                e.preventDefault()
                trackButtonClick('Contact Us', 'Contact Us', { location: 'navbar' })
                navigate('/contact-us')
              }}
            >
              Contact Us
            </a>
            <a 
              href="https://pharma.industryiceberg.com/"
              className="nav-link signin-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackButtonClick('Sign In', 'ii Sign In', { 
                  location: 'navbar',
                  external_link: true,
                  destination: 'https://pharma.industryiceberg.com/'
                })
              }}
            >
              ii Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
