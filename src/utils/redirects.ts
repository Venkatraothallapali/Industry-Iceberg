/**
 * URL Redirect Utility Functions
 * Handles domain redirects and URL normalization for SEO
 */

// Primary domain configuration
const PRIMARY_DOMAIN = 'https://www.industryiceberg.com'
const ALTERNATIVE_DOMAINS = [
  'https://industryiceberg.com',
  'http://industryiceberg.com',
  'http://www.industryiceberg.com',
  'https://industryiceberg.com',
  // Add any other alternative domains here
]

/**
 * Checks if current domain needs redirection
 * @param currentDomain - Current window location hostname + protocol
 * @returns True if redirection is needed
 */
export const needsRedirection = (currentDomain: string): boolean => {
  return ALTERNATIVE_DOMAINS.includes(currentDomain)
}

/**
 * Gets the target URL for redirection
 * @param currentUrl - Current full URL
 * @returns Redirected URL with primary domain
 */
export const getRedirectUrl = (currentUrl: string): string => {
  const url = new URL(currentUrl)
  
  // Replace domain with primary domain
  url.protocol = 'https:'
  url.hostname = 'www.industryiceberg.com'
  
  return url.toString()
}

/**
 * Performs domain redirection if needed
 * Should be called early in the app lifecycle
 */
export const performDomainRedirect = (): void => {
  if (typeof window !== 'undefined') {
    const currentDomain = `${window.location.protocol}//${window.location.hostname}`
    const currentUrl = window.location.href
    
    if (needsRedirection(currentDomain)) {
      const redirectUrl = getRedirectUrl(currentUrl)
      window.location.replace(redirectUrl)
    }
  }
}

/**
 * URL normalization functions
 */

/**
 * Normalizes URL path by removing trailing slashes (except homepage)
 * @param path - URL path
 * @returns Normalized path
 */
export const normalizePath = (path: string): string => {
  if (path === '/') return '/'
  return path.replace(/\/$/, '')
}

/**
 * Converts URL to lowercase and normalizes
 * @param path - URL path
 * @returns Normalized lowercase path
 */
export const normalizeUrl = (path: string): string => {
  return normalizePath(path.toLowerCase())
}

/**
 * Redirect configurations for specific URLs
 */
export const REDIRECT_RULES = {
  // Service redirects (short URLs to full paths)
  '/cmo': '/complianceloop/services/CMO',
  '/cdmo': '/complianceloop/services/CDMO',
  '/cro': '/complianceloop/services/CROs',
  '/preclinical': '/complianceloop/services/pre-clinical',
  '/clinical': '/complianceloop/services/clinical',
  '/analytical-testing': '/complianceloop/services/analytical-testing',
  '/stability': '/complianceloop/services/stability-warehouse',
  
  // Demo redirects
  '/demo': '/contact',
  '/schedule-demo': '/videoservice-schedule-demo',
  '/request-demo': '/contact',
  
  // Legacy redirects
  '/about-us': '/about',
  '/contact-us': '/contact',
  '/our-services': '/complianceloop/services',
  
  // WWW enforcement
  'enforceWWW': true,
  'enforceHTTPS': true,
} as const

/**
 * Checks if a path needs redirection based on redirect rules
 * @param path - Current path
 * @returns Target path or null if no redirect needed
 */
export const getPathRedirect = (path: string): string | null => {
  const normalizedPath = normalizePath(path)
  
  // Check direct matches
  if (REDIRECT_RULES[normalizedPath as keyof typeof REDIRECT_RULES]) {
    return REDIRECT_RULES[normalizedPath as keyof typeof REDIRECT_RULES] as string
  }
  
  return null
}

/**
 * Performs all necessary redirects
 * Combines domain redirects and path redirects
 */
export const performAllRedirects = (): void => {
  if (typeof window !== 'undefined') {
    // First check domain redirect
    performDomainRedirect()
    
    // Then check path redirects
    const currentPath = window.location.pathname
    const pathRedirect = getPathRedirect(currentPath)
    
    if (pathRedirect && pathRedirect !== currentPath) {
      const newUrl = `${PRIMARY_DOMAIN}${pathRedirect}${window.location.search}${window.location.hash}`
      window.location.replace(newUrl)
    }
  }
}
