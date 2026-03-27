import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_TRACKING_ID = 'G-SMN2K1HHVV'

interface ProductMetaConfig {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

const productMetaConfigs: Record<string, ProductMetaConfig> = {
  'compliance-loop': {
    title: 'Compliance Loop | Industry Iceberg',
    description: 'Compliance Loop offers comprehensive regulatory compliance solutions for life sciences companies, including CMO, CDMO, CRO services, preclinical research, clinical trials, analytical testing, and stability studies. Our integrated platform ensures regulatory excellence across pharmaceutical, biotechnology, and medical device development.',
    ogTitle: 'Compliance Loop | Industry Iceberg',
    ogDescription: 'Compliance Loop offers comprehensive regulatory compliance solutions for life sciences companies, including CMO, CDMO, CRO services, preclinical research, clinical trials, analytical testing, and stability studies. Our integrated platform ensures regulatory excellence across pharmaceutical, biotechnology, and medical device development.',
    twitterTitle: 'Compliance Loop | Industry Iceberg',
    twitterDescription: 'Compliance Loop offers comprehensive regulatory compliance solutions for life sciences companies, including CMO, CDMO, CRO services, preclinical research, clinical trials, analytical testing, and stability studies. Our integrated platform ensures regulatory excellence across pharmaceutical, biotechnology, and medical device development.'
  },
  'complisense': {
    title: 'CompliSense | Industry Iceberg',
    description: 'CompliSense delivers AI-powered intelligent compliance management solutions for life sciences organizations. Our platform automates regulatory processes, quality management, documentation workflows, and compliance monitoring to ensure FDA, EMA, and global regulatory standards adherence while reducing operational costs and improving efficiency.',
    ogTitle: 'CompliSense | Industry Iceberg',
    ogDescription: 'CompliSense delivers AI-powered intelligent compliance management solutions for life sciences organizations. Our platform automates regulatory processes, quality management, documentation workflows, and compliance monitoring to ensure FDA, EMA, and global regulatory standards adherence while reducing operational costs and improving efficiency.',
    twitterTitle: 'CompliSense | Industry Iceberg',
    twitterDescription: 'CompliSense delivers AI-powered intelligent compliance management solutions for life sciences organizations. Our platform automates regulatory processes, quality management, documentation workflows, and compliance monitoring to ensure FDA, EMA, and global regulatory standards adherence while reducing operational costs and improving efficiency.'
  },
  'veritascribe': {
    title: 'VeritaScribe | Industry Iceberg',
    description: 'VeritaScribe provides AI-powered medical documentation and transcription solutions for healthcare organizations and life sciences companies. Our platform ensures accurate clinical trial documentation, regulatory submissions, patient records, and medical reports while maintaining HIPAA compliance and reducing documentation time by 80%.',
    ogTitle: 'VeritaScribe | Industry Iceberg',
    ogDescription: 'VeritaScribe provides AI-powered medical documentation and transcription solutions for healthcare organizations and life sciences companies. Our platform ensures accurate clinical trial documentation, regulatory submissions, patient records, and medical reports while maintaining HIPAA compliance and reducing documentation time by 80%.',
    twitterTitle: 'VeritaScribe | Industry Iceberg',
    twitterDescription: 'VeritaScribe provides AI-powered medical documentation and transcription solutions for healthcare organizations and life sciences companies. Our platform ensures accurate clinical trial documentation, regulatory submissions, patient records, and medical reports while maintaining HIPAA compliance and reducing documentation time by 80%.'
  }
}

const serviceMetaConfigs: Record<string, ProductMetaConfig> = {
  'cmo': {
    title: 'CMO Services | Compliance Loop | Industry Iceberg',
    description: 'Contract Manufacturing Organization (CMO) services providing end-to-end pharmaceutical and biotechnology manufacturing solutions. Our FDA-approved facilities offer GMP-compliant drug substance manufacturing, formulation development, fill-finish operations, and commercial scale production with quality assurance and regulatory compliance.',
    ogTitle: 'CMO Services | Compliance Loop | Industry Iceberg',
    ogDescription: 'Contract Manufacturing Organization (CMO) services providing end-to-end pharmaceutical and biotechnology manufacturing solutions. Our FDA-approved facilities offer GMP-compliant drug substance manufacturing, formulation development, fill-finish operations, and commercial scale production with quality assurance and regulatory compliance.',
    twitterTitle: 'CMO Services | Compliance Loop | Industry Iceberg',
    twitterDescription: 'Contract Manufacturing Organization (CMO) services providing end-to-end pharmaceutical and biotechnology manufacturing solutions. Our FDA-approved facilities offer GMP-compliant drug substance manufacturing, formulation development, fill-finish operations, and commercial scale production with quality assurance and regulatory compliance.'
  },
  'cdmo': {
    title: 'CDMO Services | Compliance Loop | Industry Iceberg',
    description: 'Contract Development and Manufacturing Organization (CDMO) services offering integrated drug development and manufacturing solutions from preclinical through commercialization. Our comprehensive CDMO services include process development, analytical method development, clinical trial manufacturing, scale-up, and commercial production under stringent quality standards.',
    ogTitle: 'CDMO Services | Compliance Loop | Industry Iceberg',
    ogDescription: 'Contract Development and Manufacturing Organization (CDMO) services offering integrated drug development and manufacturing solutions from preclinical through commercialization. Our comprehensive CDMO services include process development, analytical method development, clinical trial manufacturing, scale-up, and commercial production under stringent quality standards.',
    twitterTitle: 'CDMO Services | Compliance Loop | Industry Iceberg',
    twitterDescription: 'Contract Development and Manufacturing Organization (CDMO) services offering integrated drug development and manufacturing solutions from preclinical through commercialization. Our comprehensive CDMO services include process development, analytical method development, clinical trial manufacturing, scale-up, and commercial production under stringent quality standards.'
  },
  'cro': {
    title: 'CRO Services | Compliance Loop | Industry Iceberg',
    description: 'Contract Research Organization (CRO) services delivering comprehensive clinical research solutions for pharmaceutical and biotechnology companies. Our CRO services include clinical trial design, site selection, patient recruitment, study monitoring, data management, statistical analysis, and regulatory submission support across Phase I-IV trials.',
    ogTitle: 'CRO Services | Compliance Loop | Industry Iceberg',
    ogDescription: 'Contract Research Organization (CRO) services delivering comprehensive clinical research solutions for pharmaceutical and biotechnology companies. Our CRO services include clinical trial design, site selection, patient recruitment, study monitoring, data management, statistical analysis, and regulatory submission support across Phase I-IV trials.',
    twitterTitle: 'CRO Services | Compliance Loop | Industry Iceberg',
    twitterDescription: 'Contract Research Organization (CRO) services delivering comprehensive clinical research solutions for pharmaceutical and biotechnology companies. Our CRO services include clinical trial design, site selection, patient recruitment, study monitoring, data management, statistical analysis, and regulatory submission support across Phase I-IV trials.'
  },
  'preclinical': {
    title: 'Pre-Clinical Services | Compliance Loop | Industry Iceberg',
    description: 'Pre-clinical research services providing comprehensive laboratory and animal study support for drug development and safety assessment. Our preclinical services include pharmacology studies, toxicology testing, safety pharmacology, ADME profiling, bioanalysis, and GLP-compliant studies to support IND applications and regulatory submissions.',
    ogTitle: 'Pre-Clinical Services | Compliance Loop | Industry Iceberg',
    ogDescription: 'Pre-clinical research services providing comprehensive laboratory and animal study support for drug development and safety assessment. Our preclinical services include pharmacology studies, toxicology testing, safety pharmacology, ADME profiling, bioanalysis, and GLP-compliant studies to support IND applications and regulatory submissions.',
    twitterTitle: 'Pre-Clinical Services | Compliance Loop | Industry Iceberg',
    twitterDescription: 'Pre-clinical research services providing comprehensive laboratory and animal study support for drug development and safety assessment. Our preclinical services include pharmacology studies, toxicology testing, safety pharmacology, ADME profiling, bioanalysis, and GLP-compliant studies to support IND applications and regulatory submissions.'
  },
  'clinical': {
    title: 'Clinical Services | Compliance Loop | Industry Iceberg',
    description: 'Clinical research services providing comprehensive clinical trial management, monitoring, and regulatory support for pharmaceutical development. Our clinical services include trial design, protocol development, site management, clinical monitoring, data collection, safety reporting, and preparation of clinical study reports for regulatory submissions.',
    ogTitle: 'Clinical Services | Compliance Loop | Industry Iceberg',
    ogDescription: 'Clinical research services providing comprehensive clinical trial management, monitoring, and regulatory support for pharmaceutical development. Our clinical services include trial design, protocol development, site management, clinical monitoring, data collection, safety reporting, and preparation of clinical study reports for regulatory submissions.',
    twitterTitle: 'Clinical Services | Compliance Loop | Industry Iceberg',
    twitterDescription: 'Clinical research services providing comprehensive clinical trial management, monitoring, and regulatory support for pharmaceutical development. Our clinical services include trial design, protocol development, site management, clinical monitoring, data collection, safety reporting, and preparation of clinical study reports for regulatory submissions.'
  },
  'analytical-testing': {
    title: 'Analytical Testing Services | Compliance Loop | Industry Iceberg',
    description: 'Analytical testing services providing comprehensive quality control, method development, and regulatory compliance testing for pharmaceutical products. Our analytical services include method validation, stability testing, impurity profiling, dissolution testing, microbiological analysis, and release testing to ensure product quality and regulatory compliance.',
    ogTitle: 'Analytical Testing Services | Compliance Loop | Industry Iceberg',
    ogDescription: 'Analytical testing services providing comprehensive quality control, method development, and regulatory compliance testing for pharmaceutical products. Our analytical services include method validation, stability testing, impurity profiling, dissolution testing, microbiological analysis, and release testing to ensure product quality and regulatory compliance.',
    twitterTitle: 'Analytical Testing Services | Compliance Loop | Industry Iceberg',
    twitterDescription: 'Analytical testing services providing comprehensive quality control, method development, and regulatory compliance testing for pharmaceutical products. Our analytical services include method validation, stability testing, impurity profiling, dissolution testing, microbiological analysis, and release testing to ensure product quality and regulatory compliance.'
  },
  'stability-warehouse': {
    title: 'Stability & Warehouse Services | Compliance Loop | Industry Iceberg',
    description: 'Stability testing and warehouse services providing comprehensive storage, distribution, and stability study support for pharmaceutical products. Our services include ICH-compliant stability studies, environmental monitoring, cold chain logistics, warehousing, distribution management, and stability data analysis to support product shelf-life and regulatory requirements.',
    ogTitle: 'Stability & Warehouse Services | Compliance Loop | Industry Iceberg',
    ogDescription: 'Stability testing and warehouse services providing comprehensive storage, distribution, and stability study support for pharmaceutical products. Our services include ICH-compliant stability studies, environmental monitoring, cold chain logistics, warehousing, distribution management, and stability data analysis to support product shelf-life and regulatory requirements.',
    twitterTitle: 'Stability & Warehouse Services | Compliance Loop | Industry Iceberg',
    twitterDescription: 'Stability testing and warehouse services providing comprehensive storage, distribution, and stability study support for pharmaceutical products. Our services include ICH-compliant stability studies, environmental monitoring, cold chain logistics, warehousing, distribution management, and stability data analysis to support product shelf-life and regulatory requirements.'
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
