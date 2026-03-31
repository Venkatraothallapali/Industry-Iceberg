import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { addStructuredData, createOrganizationData, createWebsiteData, createBreadcrumbData, createServiceData } from '../utils/structuredData'

const GA_TRACKING_ID = 'G-SMN2K1HHVV'

interface ProductMetaConfig {
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

const productMetaConfigs: Record<string, ProductMetaConfig> = {
  'compliance-loop': {
    title: 'Compliance Loop: AI Platform for Life Sciences | Industry Iceberg',
    description: 'IndustryIceberg\'s Compliance Loop helps life sciences companies find compliant partners, streamline workflows, and ensure regulatory excellence.',
    keywords: 'Compliance Loop, AI platform for life sciences, compliant partner discovery, pharma AI solutions, CMO CRO services, regulatory compliance AI',
    ogTitle: 'Compliance Loop: AI Platform for Life Sciences | Industry Iceberg',
    ogDescription: 'IndustryIceberg\'s Compliance Loop helps life sciences companies find compliant partners, streamline workflows, and ensure regulatory excellence.',
    twitterTitle: 'Compliance Loop: AI Platform for Life Sciences | Industry Iceberg',
    twitterDescription: 'IndustryIceberg\'s Compliance Loop helps life sciences companies find compliant partners, streamline workflows, and ensure regulatory excellence.'
  },
  'complisense': {
    title: 'CompliSense: cGMP Intelligence Platform | Industry Iceberg AI',
    description: 'CompliSense by IndustryIceberg provides real-time FDA 483 insights, GMP trend analysis and actionable intelligence for compliant life sciences operations.',
    keywords: 'cGMP Intelligence platform, CompliSense, FDA 483 analysis, GMP inspection trends, life sciences compliance, pharma regulatory intelligence, quality system insights',
    ogTitle: 'CompliSense: cGMP Intelligence Platform | Industry Iceberg AI',
    ogDescription: 'CompliSense by IndustryIceberg provides real-time FDA 483 insights, GMP trend analysis and actionable intelligence for compliant life sciences operations.',
    twitterTitle: 'CompliSense: cGMP Intelligence Platform | Industry Iceberg AI',
    twitterDescription: 'CompliSense by IndustryIceberg provides real-time FDA 483 insights, GMP trend analysis and actionable intelligence for compliant life sciences operations.'
  },
  'veritascribe': {
    title: 'VeritaScribe: AI Document Automation | IndustryIceberg',
    description: 'VeritaScribe AI automates document drafting, ensures compliance, and accelerates workflow with summaries, edits, and smart collaboration tools.',
    keywords: 'AI document automation, VeritaScribe, document workflow AI, regulatory compliance documents, AI summarization, collaborative document editing, pharma document automation',
    ogTitle: 'VeritaScribe: AI Document Automation | IndustryIceberg',
    ogDescription: 'VeritaScribe AI automates document drafting, ensures compliance, and accelerates workflow with summaries, edits, and smart collaboration tools.',
    twitterTitle: 'VeritaScribe: AI Document Automation | IndustryIceberg',
    twitterDescription: 'VeritaScribe AI automates document drafting, ensures compliance, and accelerates workflow with summaries, edits, and smart collaboration tools.'
  }
}

const serviceMetaConfigs: Record<string, ProductMetaConfig> = {
  'CMO': {
    title: 'Find Compliant Contract Manufacturing Organizations (CMOs) Quickly',
    description: 'IndustryIceberg AI helps life sciences teams find capable, compliant Contract Manufacturing Organizations quickly, with real-time data, certifications, and audit-ready partners.',
    keywords: 'Contract Manufacturing Organizations, CMO discovery, pharma CMO AI, compliant CMOs, API manufacturing, drug product manufacturing, biologics CMO',
    ogTitle: 'Find Compliant Contract Manufacturing Organizations (CMOs) Quickly',
    ogDescription: 'IndustryIceberg AI helps life sciences teams find capable, compliant Contract Manufacturing Organizations quickly, with real-time data, certifications, and audit-ready partners.',
    twitterTitle: 'Find Compliant Contract Manufacturing Organizations (CMOs) Quickly',
    twitterDescription: 'IndustryIceberg AI helps life sciences teams find capable, compliant Contract Manufacturing Organizations quickly, with real-time data, certifications, and audit-ready partners.'
  },
  'CDMO': {
    title: 'Find Compliant Contract Development & Manufacturing Organizations (CDMOs)',
    description: 'IndustryIceberg AI helps life sciences teams discover compliant Contract Development & Manufacturing Organizations offering formulation, scale-up, and full lifecycle manufacturing support.',
    keywords: 'Contract Development & Manufacturing Organizations, CDMO discovery, pharma CDMO AI, compliant CDMOs, API CDMO, drug product CDMO, biologics CDMO',
    ogTitle: 'Find Compliant Contract Development & Manufacturing Organizations (CDMOs)',
    ogDescription: 'IndustryIceberg AI helps life sciences teams discover compliant Contract Development & Manufacturing Organizations offering formulation, scale-up, and full lifecycle manufacturing support.',
    twitterTitle: 'Find Compliant Contract Development & Manufacturing Organizations (CDMOs)',
    twitterDescription: 'IndustryIceberg AI helps life sciences teams discover compliant Contract Development & Manufacturing Organizations offering formulation, scale-up, and full lifecycle manufacturing support.'
  },
  'CROs': {
    title: 'Discover Compliant Contract Research Organizations (CROs) | Industry Iceberg AI Platform',
    description: 'IndustryIceberg AI helps life sciences teams find qualified, compliant Contract Research Organizations with real-time data, trial support and actionable insights.',
    keywords: 'Contract Research Organizations, CRO discovery, pharma CRO AI, compliant CROs, clinical trial CRO, regulatory support CRO, biostatistics CRO',
    ogTitle: 'Discover Compliant Contract Research Organizations (CROs) | Industry Iceberg AI Platform',
    ogDescription: 'IndustryIceberg AI helps life sciences teams find qualified, compliant Contract Research Organizations with real-time data, trial support and actionable insights.',
    twitterTitle: 'Discover Compliant Contract Research Organizations (CROs) | Industry Iceberg AI Platform',
    twitterDescription: 'IndustryIceberg AI helps life sciences teams find qualified, compliant Contract Research Organizations with real-time data, trial support and actionable insights.'
  },
  'pre-clinical': {
    title: 'Find Compliant Pre Clinical Services for Pharma | Industry Iceberg AI Platform',
    description: 'IndustryIceberg AI helps life sciences teams find expert pre-clinical labs, access real-time data, and ensure GLP-compliant drug development.',
    keywords: 'Pre-Clinical Services, preclinical labs, GLP compliance, toxicology studies, pharmacokinetics PK, pharmacodynamics PD, early drug development, pharma AI',
    ogTitle: 'Find Compliant Pre Clinical Services for Pharma | Industry Iceberg AI Platform',
    ogDescription: 'IndustryIceberg AI helps life sciences teams find expert pre-clinical labs, access real-time data, and ensure GLP-compliant drug development.',
    twitterTitle: 'Find Compliant Pre Clinical Services for Pharma | Industry Iceberg AI Platform',
    twitterDescription: 'IndustryIceberg AI helps life sciences teams find expert pre-clinical labs, access real-time data, and ensure GLP-compliant drug development.'
  },
  'clinical': {
    title: 'Find Compliant Clinical Services for Pharma | Industry Iceberg AI Platform',
    description: 'IndustryIceberg AI helps life sciences teams find compliant clinical partners, manage trials, and ensure regulatory, data, and patient accuracy.',
    keywords: 'Clinical Services, pharma clinical trials, clinical partner discovery, GCP compliance, patient recruitment, biostatistics, pharmacovigilance, trial management',
    ogTitle: 'Find Compliant Clinical Services for Pharma | Industry Iceberg AI Platform',
    ogDescription: 'IndustryIceberg AI helps life sciences teams find compliant clinical partners, manage trials, and ensure regulatory, data, and patient accuracy.',
    twitterTitle: 'Find Compliant Clinical Services for Pharma | Industry Iceberg AI Platform',
    twitterDescription: 'IndustryIceberg AI helps life sciences teams find compliant clinical partners, manage trials, and ensure regulatory, data, and patient accuracy.'
  },
  'analytical-testing': {
    title: 'Discover Compliant Analytical Testing Labs(ATL) | Industry Iceberg AI Platform',
    description: 'IndustryIceberg AI helps pharma teams find compliant analytical testing labs, ensuring quality, stability, and regulatory-ready products.',
    keywords: 'Analytical Testing Lab, ATL services, pharma lab compliance, stability testing, bioanalytical lab, GMP labs, method validation, raw material testing',
    ogTitle: 'Discover Compliant Analytical Testing Labs(ATL) | Industry Iceberg AI Platform',
    ogDescription: 'IndustryIceberg AI helps pharma teams find compliant analytical testing labs, ensuring quality, stability, and regulatory-ready products.',
    twitterTitle: 'Discover Compliant Analytical Testing Labs(ATL) | Industry Iceberg AI Platform',
    twitterDescription: 'IndustryIceberg AI helps pharma teams find compliant analytical testing labs, ensuring quality, stability, and regulatory-ready products.'
  },
  'stability-warehouse': {
    title: 'Find Compliant Stability and Warehouse Partners | Industry Iceberg AI Platform',
    description: 'IndustryIceberg AI helps pharma teams find compliant stability and warehouse partners, ensuring product quality, safety, and regulatory compliance.',
    keywords: 'Stability & Warehousing, pharma storage solutions, cold chain storage, controlled room temperature storage, regulatory-compliant warehousing, stability testing services, temperature monitoring labs',
    ogTitle: 'Find Compliant Stability and Warehouse Partners | Industry Iceberg AI Platform',
    ogDescription: 'IndustryIceberg AI helps pharma teams find compliant stability and warehouse partners, ensuring product quality, safety, and regulatory compliance.',
    twitterTitle: 'Find Compliant Stability and Warehouse Partners | Industry Iceberg AI Platform',
    twitterDescription: 'IndustryIceberg AI helps pharma teams find compliant stability and warehouse partners, ensuring product quality, safety, and regulatory compliance.'
  }
}

export const useProductPageMeta = () => {
  const location = useLocation()
  
  useEffect(() => {
    const pathname = location.pathname
    let metaConfig: ProductMetaConfig | null = null
    const breadcrumbs: Array<{name: string, url: string}> = [{ name: "Home", url: "/" }]
    
    // Extract product name from pathname
    const pathMatch = pathname.match(/\/([^/]+)/)
    if (pathMatch) {
      const productName = pathMatch[1]
      
      // Check if it's a service page within complianceloop
      if (pathname.includes('/complianceloop/services/')) {
        const serviceMatch = pathname.match(/\/services\/([^/]+)/)
        if (serviceMatch) {
          const serviceName = serviceMatch[1]
          metaConfig = serviceMetaConfigs[serviceName] || null
          breadcrumbs.push(
            { name: "Compliance Loop", url: "/complianceloop" },
            { name: "Services", url: "/complianceloop/services" },
            { name: serviceName.charAt(0).toUpperCase() + serviceName.slice(1), url: pathname }
          )
        }
      } else {
        // Check if it's a product page
        metaConfig = productMetaConfigs[productName] || null
        breadcrumbs.push(
          { name: productName.charAt(0).toUpperCase() + productName.slice(1), url: pathname }
        )
      }
    }
    
    // Use found config or skip
    if (metaConfig) {
      // Update document title
      document.title = metaConfig.title
      
      // Update meta description
      const metaDescription = document.querySelector("meta[name='description']")
      if (metaDescription && metaConfig.description) {
        metaDescription.setAttribute("content", metaConfig.description)
      }

      // Update meta keywords
      let metaKeywords = document.querySelector("meta[name='keywords']")
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      if (metaKeywords && metaConfig.keywords) {
        metaKeywords.setAttribute("content", metaConfig.keywords)
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector("meta[property='og:title']")
      if (ogTitle && metaConfig.ogTitle) {
        ogTitle.setAttribute("content", metaConfig.ogTitle)
      }

      const ogDescription = document.querySelector("meta[property='og:description']")
      if (ogDescription && metaConfig.ogDescription) {
        ogDescription.setAttribute("content", metaConfig.ogDescription)
      }

      const ogUrl = document.querySelector("meta[property='og:url']")
      if (ogUrl) {
        ogUrl.setAttribute("content", `https://industryiceberg.com${pathname}`)
      }

      // Update Twitter tags
      const twitterTitle = document.querySelector("meta[name='twitter:title']")
      if (twitterTitle && metaConfig.twitterTitle) {
        twitterTitle.setAttribute("content", metaConfig.twitterTitle)
      }

      const twitterDescription = document.querySelector("meta[name='twitter:description']")
      if (twitterDescription && metaConfig.twitterDescription) {
        twitterDescription.setAttribute("content", metaConfig.twitterDescription)
      }

      // Add structured data
      // Add organization data (only once)
      addStructuredData('organization', createOrganizationData())
      
      // Add website data (only once)
      addStructuredData('website', createWebsiteData())

      // Add service-specific structured data for service pages
      if (pathname.includes('/compliance-loop/services/')) {
        const serviceMatch = pathname.match(/\/services\/([^/]+)/)
        if (serviceMatch) {
          const serviceName = serviceMatch[1]
          addStructuredData('service', createServiceData(
            serviceName,
            metaConfig.title,
            metaConfig.description,
            pathname
          ))
        }
      }

      // Add breadcrumb data
      if (breadcrumbs.length > 0) {
        addStructuredData('breadcrumbs', createBreadcrumbData(breadcrumbs))
      }

      // Add advanced schema markup for better search visibility
      // Skip Compliance Loop services as requested
      if (pathname.includes('/compliance-loop/services/')) {
        // Services pages - no advanced schema as requested
        // Only basic structured data will be added
      } else {
        // Product pages - advanced schema is handled by the unconditional useAdvancedSchema call at top level
        // Note: useAdvancedSchema is called at the top of the component, not inside this block
      }

      // Track page view with Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: pathname,
          page_title: metaConfig.title,
        })
      }
    }
  }, [location.pathname])
}

export default useProductPageMeta
