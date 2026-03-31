import { useEffect } from 'react'
import { performAllRedirects } from '../utils/redirects'

/**
 * URL Redirect Handler Component
 * Handles domain redirects and path normalization for SEO
 * This component should be rendered at the top level of the app
 */
const URLRedirectHandler: React.FC = () => {
  useEffect(() => {
    // Perform all necessary redirects on app load
    performAllRedirects()
  }, [])

  // This component doesn't render anything
  return null
}

export default URLRedirectHandler
