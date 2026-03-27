import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { addStructuredData, createOrganizationData, createWebsiteData, createServiceData, createBreadcrumbData } from '../utils/structuredData'

const GA_TRACKING_ID = 'G-SMN2K1HHVV'

interface ProductMetaConfig {
  title: string
  description: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

const productMetaConfigs: Record<string, ProductMetaConfig> = {
  'compliance-loop': {
    title: 'Compliance Loop | AI-Driven Regulatory Compliance Platform | Industry Iceberg',
    description: 'Compliance Loop by Industry Iceberg offers comprehensive AI-powered regulatory compliance solutions for life sciences companies. Find verified CMOs, CDMOs, CROs, preclinical labs, analytical testing facilities, and stability warehouses. Ensure regulatory excellence across pharmaceutical, biotechnology, and medical device development.',
    keywords: 'regulatory compliance, CMO, CDMO, CRO, preclinical research, clinical trials, analytical testing, stability studies, pharmaceutical compliance, life sciences, FDA compliance, EMA regulations, medical device compliance, quality assurance, audit readiness, regulatory affairs',
    ogTitle: 'Compliance Loop | AI-Driven Regulatory Compliance Platform | Industry Iceberg',
    ogDescription: 'Discover verified compliance partners with Industry Iceberg Compliance Loop. AI-powered platform for CMO, CDMO, CRO services, preclinical, clinical, analytical testing, and stability solutions.',
    twitterTitle: 'Compliance Loop | AI-Driven Regulatory Compliance | Industry Iceberg',
    twitterDescription: 'Find verified CMOs, CDMOs, CROs & compliance partners with AI-powered platform. Ensure regulatory excellence in pharma, biotech & medical devices.'
  },
  'complisense': {
    title: 'CompliSense | AI-Powered Compliance Management Platform | Industry Iceberg',
    description: 'CompliSense by Industry Iceberg delivers AI-powered intelligent compliance management solutions for life sciences organizations. Our platform automates regulatory processes, quality management, documentation workflows, and compliance monitoring to ensure FDA, EMA, and global regulatory standards adherence while reducing operational costs and improving efficiency.',
    keywords: 'compliance management, AI-powered compliance, regulatory automation, quality management, documentation workflows, FDA compliance, EMA regulations, life sciences compliance, pharmaceutical compliance, medical device compliance, regulatory affairs, quality assurance, audit management, compliance monitoring, regulatory submissions',
    ogTitle: 'CompliSense | AI-Powered Compliance Management | Industry Iceberg',
    ogDescription: 'AI-powered compliance management platform for life sciences. Automate regulatory processes, quality management, documentation workflows & compliance monitoring.',
    twitterTitle: 'CompliSense | AI-Powered Compliance Management | Industry Iceberg',
    twitterDescription: 'AI-powered compliance management for life sciences. Automate regulatory processes, quality management & documentation workflows.'
  },
  'veritascribe': {
    title: 'VeritaScribe | AI-Powered Medical Documentation & Transcription | Industry Iceberg',
    description: 'VeritaScribe by Industry Iceberg provides AI-powered medical documentation and transcription solutions for healthcare organizations and life sciences companies. Our platform ensures accurate clinical trial documentation, regulatory submissions, patient records, and medical reports while maintaining HIPAA compliance and reducing documentation time by 80%.',
    keywords: 'medical documentation, AI transcription, clinical trial documentation, regulatory submissions, patient records, medical reports, HIPAA compliance, healthcare documentation, life sciences documentation, pharmaceutical documentation, medical transcription, clinical documentation, regulatory documentation, AI-powered documentation',
    ogTitle: 'VeritaScribe | AI-Powered Medical Documentation | Industry Iceberg',
    ogDescription: 'AI-powered medical documentation and transcription for healthcare. Clinical trial documentation, regulatory submissions, patient records & HIPAA compliance.',
    twitterTitle: 'VeritaScribe | AI-Powered Medical Documentation | Industry Iceberg',
    twitterDescription: 'AI-powered medical documentation for healthcare. Clinical trial documentation, regulatory submissions, patient records & HIPAA compliance.'
  }
}

const serviceMetaConfigs: Record<string, ProductMetaConfig> = {
  'cmo': {
    title: 'CMO Services | Contract Manufacturing Organizations | Compliance Loop | Industry Iceberg',
    description: 'Find verified Contract Manufacturing Organizations (CMOs) with Industry Iceberg Compliance Loop. Our AI-powered platform connects you with FDA-approved, GMP-compliant CMOs offering pharmaceutical manufacturing, drug substance production, formulation development, fill-finish operations, and commercial scale manufacturing with quality assurance and regulatory compliance.',
    keywords: 'CMO, contract manufacturing organization, pharmaceutical manufacturing, GMP compliance, FDA approved facilities, drug substance manufacturing, formulation development, fill-finish operations, commercial scale production, quality assurance, regulatory compliance, pharma manufacturing, biotechnology manufacturing, API manufacturing, dosage form manufacturing',
    ogTitle: 'CMO Services | Verified Contract Manufacturing Organizations | Industry Iceberg',
    ogDescription: 'Discover verified CMOs with AI-powered platform. FDA-approved, GMP-compliant contract manufacturing for pharmaceuticals, APIs, formulation development, and commercial scale production.',
    twitterTitle: 'CMO Services | Contract Manufacturing Organizations | Industry Iceberg',
    twitterDescription: 'Find verified CMOs for pharmaceutical manufacturing. FDA-approved, GMP-compliant facilities for drug substance, formulation, fill-finish & commercial production.'
  },
  'cdmo': {
    title: 'CDMO Services | Contract Development & Manufacturing Organizations | Compliance Loop | Industry Iceberg',
    description: 'Discover verified Contract Development and Manufacturing Organizations (CDMOs) with Industry Iceberg Compliance Loop. Our AI-powered platform connects you with integrated CDMO partners offering end-to-end drug development, process development, analytical method development, clinical trial manufacturing, scale-up, tech transfer, and commercial production under stringent quality standards.',
    keywords: 'CDMO, contract development and manufacturing organization, drug development, process development, analytical method development, clinical trial manufacturing, scale-up, tech transfer, commercial production, integrated development, pharmaceutical development, biotechnology development, formulation development, GMP manufacturing, regulatory compliance',
    ogTitle: 'CDMO Services | Integrated Drug Development & Manufacturing | Industry Iceberg',
    ogDescription: 'Find verified CDMOs with AI-powered platform. Integrated drug development, process development, clinical manufacturing, scale-up, and commercial production services.',
    twitterTitle: 'CDMO Services | Contract Development & Manufacturing | Industry Iceberg',
    twitterDescription: 'Discover verified CDMOs for integrated drug development. Process development, clinical manufacturing, scale-up & commercial production services.'
  },
  'cro': {
    title: 'CRO Services | Contract Research Organizations | Clinical Trials | Compliance Loop | Industry Iceberg',
    description: 'Find verified Contract Research Organizations (CROs) with Industry Iceberg Compliance Loop. Our AI-powered platform connects you with expert CROs offering comprehensive clinical research services including clinical trial design, site selection, patient recruitment, study monitoring, data management, statistical analysis, pharmacovigilance, and regulatory submission support across Phase I-IV trials.',
    keywords: 'CRO, contract research organization, clinical trials, clinical research, Phase I trials, Phase II trials, Phase III trials, Phase IV trials, patient recruitment, site selection, study monitoring, data management, statistical analysis, pharmacovigilance, regulatory submission, clinical development, drug development, biotechnology research',
    ogTitle: 'CRO Services | Clinical Research Organizations | Industry Iceberg',
    ogDescription: 'Discover verified CROs with AI-powered platform. Clinical trial design, patient recruitment, study monitoring, data management, and regulatory submission support across all phases.',
    twitterTitle: 'CRO Services | Clinical Research Organizations | Industry Iceberg',
    twitterDescription: 'Find verified CROs for clinical trials. Expert services in trial design, patient recruitment, monitoring, data management & regulatory submission.'
  },
  'preclinical': {
    title: 'Pre-Clinical Services | Drug Development & Safety Studies | Compliance Loop | Industry Iceberg',
    description: 'Find verified preclinical research organizations with Industry Iceberg Compliance Loop. Our AI-powered platform connects you with GLP-compliant preclinical labs offering comprehensive drug development and safety assessment services including pharmacology studies, toxicology testing, safety pharmacology, ADME profiling, bioanalysis, efficacy studies, and IND-enabling studies.',
    keywords: 'preclinical research, drug development, safety assessment, toxicology studies, pharmacology studies, safety pharmacology, ADME profiling, bioanalysis, GLP compliance, IND applications, regulatory submissions, animal studies, efficacy studies, preclinical testing, drug safety, pharmaceutical research, biotechnology research',
    ogTitle: 'Pre-Clinical Services | GLP-Compliant Drug Development | Industry Iceberg',
    ogDescription: 'Discover verified preclinical research organizations. GLP-compliant toxicology, pharmacology, ADME, bioanalysis, and IND-enabling studies for drug development.',
    twitterTitle: 'Pre-Clinical Services | Drug Development & Safety | Industry Iceberg',
    twitterDescription: 'Find verified preclinical labs for drug development. GLP-compliant toxicology, pharmacology, ADME, bioanalysis & IND-enabling studies.'
  },
  'clinical': {
    title: 'Clinical Services | Clinical Trial Management & Research | Compliance Loop | Industry Iceberg',
    description: 'Find verified clinical research organizations with Industry Iceberg Compliance Loop. Our AI-powered platform connects you with expert clinical service providers offering comprehensive clinical trial management, trial design, protocol development, site management, clinical monitoring, data collection, safety reporting, biostatistics, and preparation of clinical study reports for regulatory submissions.',
    keywords: 'clinical services, clinical trial management, clinical research, protocol development, site management, clinical monitoring, data collection, safety reporting, biostatistics, clinical study reports, regulatory submissions, GCP compliance, clinical development, pharmaceutical trials, biotechnology trials, medical device trials, Phase I-IV',
    ogTitle: 'Clinical Services | Clinical Trial Management & Research | Industry Iceberg',
    ogDescription: 'Discover verified clinical research organizations. Expert clinical trial management, protocol development, monitoring, data collection & regulatory submission support.',
    twitterTitle: 'Clinical Services | Clinical Trial Management | Industry Iceberg',
    twitterDescription: 'Find verified clinical service providers. Expert trial management, protocol development, monitoring, data collection & regulatory support.'
  },
  'analytical-testing': {
    title: 'Analytical Testing Services | Quality Control & Method Development | Compliance Loop | Industry Iceberg',
    description: 'Find verified analytical testing laboratories with Industry Iceberg Compliance Loop. Our AI-powered platform connects you with accredited analytical testing labs offering comprehensive quality control, method development, method validation, stability testing, impurity profiling, dissolution testing, microbiological analysis, bioanalysis, and release testing for pharmaceutical products.',
    keywords: 'analytical testing, quality control, method development, method validation, stability testing, impurity profiling, dissolution testing, microbiological analysis, bioanalysis, release testing, pharmaceutical testing, HPLC, GC, mass spectrometry, regulatory compliance, GMP testing, quality assurance, laboratory testing',
    ogTitle: 'Analytical Testing Services | Quality Control Laboratories | Industry Iceberg',
    ogDescription: 'Discover verified analytical testing laboratories. Comprehensive quality control, method development, stability testing, impurity profiling & regulatory compliance testing.',
    twitterTitle: 'Analytical Testing Services | Quality Control & Testing | Industry Iceberg',
    twitterDescription: 'Find verified analytical testing labs. Quality control, method development, stability testing, impurity profiling & regulatory compliance services.'
  },
  'stability-warehouse': {
    title: 'Stability & Warehouse Services | Cold Chain Storage & Distribution | Compliance Loop | Industry Iceberg',
    description: 'Find verified stability testing and warehouse facilities with Industry Iceberg Compliance Loop. Our AI-powered platform connects you with ICH-compliant storage providers offering comprehensive stability studies, environmental monitoring, cold chain logistics, controlled temperature storage, warehousing, distribution management, and stability data analysis for pharmaceutical products.',
    keywords: 'stability testing, warehouse services, cold chain logistics, temperature controlled storage, ICH compliance, environmental monitoring, pharmaceutical storage, stability studies, stability data analysis, cold storage, frozen storage, refrigerated storage, warehousing, distribution management, shelf life studies, pharmaceutical logistics',
    ogTitle: 'Stability & Warehouse Services | Cold Chain Storage | Industry Iceberg',
    ogDescription: 'Discover verified stability testing and warehouse facilities. ICH-compliant storage, cold chain logistics, stability studies & environmental monitoring.',
    twitterTitle: 'Stability & Warehouse Services | Cold Chain Storage | Industry Iceberg',
    twitterDescription: 'Find verified stability testing & warehouse facilities. ICH-compliant storage, cold chain logistics, environmental monitoring & stability studies.'
  }
}

export const useProductPageMeta = () => {
  const location = useLocation()
  
  useEffect(() => {
    const pathname = location.pathname
    let metaConfig: ProductMetaConfig | null = null
    
    // Extract product name from pathname
    const pathMatch = pathname.match(/\/([^/]+)/)
    if (pathMatch) {
      const productName = pathMatch[1]
      
      // Check if it's a service page within compliance-loop
      if (pathname.includes('/compliance-loop/services/')) {
        const serviceMatch = pathname.match(/\/services\/([^/]+)/)
        if (serviceMatch) {
          const serviceName = serviceMatch[1]
          metaConfig = serviceMetaConfigs[serviceName] || null
        }
      } else {
        // Check if it's a product page
        metaConfig = productMetaConfigs[productName] || null
      }
    }
    
    // Use found config or skip
    if (metaConfig) {
      // Update document title
      document.title = metaConfig.title

      // Update meta description
      const metaDescription = document.querySelector("meta[name='description']")
      if (metaDescription) {
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
        ogUrl.setAttribute("content", window.location.href)
      }

      // Update Twitter Card tags
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
      const pathSegments = pathname.split('/').filter(segment => segment)
      const breadcrumbs = pathSegments.map((segment, index) => ({
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        url: '/' + pathSegments.slice(0, index + 1).join('/')
      }))
      
      if (breadcrumbs.length > 0) {
        // Add home as first breadcrumb
        breadcrumbs.unshift({ name: 'Home', url: '/' })
        addStructuredData('breadcrumbs', createBreadcrumbData(breadcrumbs))
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
