import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface ServiceTitleMapping {
  [key: string]: string
}

const serviceTitleMapping: ServiceTitleMapping = {
  cmo: 'CMO Services | Industry Iceberg',
  cdmo: 'CDMO Services | Industry Iceberg',
  cro: 'CRO Services | Industry Iceberg',
  preclinical: 'Pre-Clinical Services | Industry Iceberg',
  clinical: 'Clinical Services | Industry Iceberg',
  'analytical-testing': 'Analytical Testing Services | Industry Iceberg',
  'stability-warehouse': 'Stability & Warehouse Services | Industry Iceberg',
}

const GA_TRACKING_ID = 'G-SMN2K1HHVV'

export const usePageMeta = () => {
  const { serviceId } = useParams<{ serviceId?: string }>()

  useEffect(() => {
    // Get current pathname from window.location since we removed useLocation
    const currentPath = window.location.pathname

    // Determine page title based on current route
    let pageTitle = 'Services | Industry Iceberg' // Default title
    
    if (serviceId && serviceTitleMapping[serviceId]) {
      pageTitle = serviceTitleMapping[serviceId]
    } else if (currentPath === '/compliance-loop/services') {
      pageTitle = 'Services | Industry Iceberg'
    } else if (currentPath === '/compliance-loop/') {
      pageTitle = 'Compliance Loop | Industry Iceberg'
    } else if (currentPath === '/compliance-loop/contact' || currentPath === '/compliance-loop/demo') {
      pageTitle = 'Schedule a Demo | Industry Iceberg'
    }

    // Update document title
    document.title = pageTitle

    // Track page view with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: currentPath,
        page_title: pageTitle,
      })
    }
  }, [serviceId])
}
