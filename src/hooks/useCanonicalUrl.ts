import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getCanonicalUrl, getCurrentCanonicalUrl } from '../utils/canonicalUrls'

/**
 * Custom hook for managing canonical URLs
 * Automatically sets and updates canonical URL tags based on current route
 */
export const useCanonicalUrl = (customPath?: string) => {
  const location = useLocation()

  useEffect(() => {
    // Remove existing canonical tags
    const existingCanonical = document.querySelector('link[rel="canonical"]')
    if (existingCanonical) {
      existingCanonical.remove()
    }

    // Create new canonical tag
    const canonical = document.createElement('link')
    canonical.rel = 'canonical'
    
    // Use custom path if provided, otherwise use current location
    const canonicalUrl = customPath 
      ? getCanonicalUrl(customPath)
      : getCurrentCanonicalUrl()
    
    canonical.href = canonicalUrl
    
    // Add to head
    document.head.appendChild(canonical)

    // Cleanup function
    return () => {
      if (canonical.parentNode) {
        canonical.parentNode.removeChild(canonical)
      }
    }
  }, [location.pathname, customPath])
}

/**
 * Custom hook for setting canonical URL with specific path
 * Useful for dynamic pages like service pages
 */
export const useCanonicalUrlWithPath = (path: string) => {
  return useCanonicalUrl(path)
}
