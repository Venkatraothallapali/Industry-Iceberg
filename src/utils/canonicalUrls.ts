/**
 * Canonical URL Utility Functions
 * Handles canonical URL generation for SEO optimization
 */

// Base domain configuration
const BASE_DOMAIN = 'https://www.industryiceberg.com'

/**
 * Generates canonical URL for a given path
 * @param path - The current path (e.g., '/', '/complianceloop', '/veritascribe')
 * @returns Full canonical URL
 */
export const getCanonicalUrl = (path: string): string => {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Remove trailing slash except for homepage
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '')
  
  return `${BASE_DOMAIN}${cleanPath}`
}

/**
 * Generates canonical URL for product pages
 * @param product - Product name (e.g., 'complianceloop', 'veritascribe', 'complisense')
 * @param subPath - Optional sub-path (e.g., 'services', 'demo')
 * @returns Full canonical URL for product page
 */
export const getProductCanonicalUrl = (product: string, subPath?: string): string => {
  const basePath = `/${product}`
  const fullPath = subPath ? `${basePath}/${subPath}` : basePath
  return getCanonicalUrl(fullPath)
}

/**
 * Generates canonical URL for service pages
 * @param product - Product name
 * @param serviceId - Service ID (e.g., 'cmo', 'cdmo', 'cro')
 * @returns Full canonical URL for service page
 */
export const getServiceCanonicalUrl = (product: string, serviceId: string): string => {
  return getProductCanonicalUrl(product, `services/${serviceId}`)
}

/**
 * Gets current canonical URL based on window location
 * @returns Current page's canonical URL
 */
export const getCurrentCanonicalUrl = (): string => {
  if (typeof window !== 'undefined') {
    return getCanonicalUrl(window.location.pathname)
  }
  return BASE_DOMAIN
}

/**
 * Canonical URL configurations for different page types
 */
export const CANONICAL_URLS = {
  // Homepage
  home: getCanonicalUrl('/'),
  
  // Product pages
  complianceLoop: getProductCanonicalUrl('complianceloop'),
  veritaScribe: getProductCanonicalUrl('veritascribe'),
  complisense: getProductCanonicalUrl('complisense'),
  
  // Service pages
  complianceLoopServices: getProductCanonicalUrl('complianceloop', 'services'),
  complisenseDashboard: getProductCanonicalUrl('complisense'),
  
  // Demo pages
  complianceLoopDemo: getProductCanonicalUrl('complianceloop', 'demo'),
  veritaScribeDemo: getProductCanonicalUrl('veritascribe', 'demo'),
  complisenseDemo: getProductCanonicalUrl('complisense', 'request-demo'),
  
  // Service-specific pages
  cmoService: getServiceCanonicalUrl('complianceloop', 'CMO'),
  cdroService: getServiceCanonicalUrl('complianceloop', 'CDMO'),
  croService: getServiceCanonicalUrl('complianceloop', 'CROs'),
  preclinicalService: getServiceCanonicalUrl('complianceloop', 'pre-clinical'),
  clinicalService: getServiceCanonicalUrl('complianceloop', 'clinical'),
  analyticalTestingService: getServiceCanonicalUrl('complianceloop', 'analytical-testing'),
  stabilityWarehouseService: getServiceCanonicalUrl('complianceloop', 'stability-warehouse'),
  
  // Other pages
  contact: getProductCanonicalUrl('', 'contact'),
  about: getProductCanonicalUrl('', 'about'),
  blog: getProductCanonicalUrl('', 'blog'),
  
  // Technology pages
  aiModelDevelopment: getProductCanonicalUrl('', 'ai-model-development'),
  enterpriseLLM: getProductCanonicalUrl('', 'enterprise-llm-solutions'),
  liveLMS: getProductCanonicalUrl('', 'live-lms'),
  videoCreation: getProductCanonicalUrl('', 'video-creation-service'),
  gmpCompliance: getProductCanonicalUrl('', 'gmp-compliance'),
  qualityTraining: getProductCanonicalUrl('', 'quality-training'),
  complaintSiteSearch: getProductCanonicalUrl('', 'complaint-site-search'),
  ectdAI: getProductCanonicalUrl('', 'ectd-ai'),
} as const
