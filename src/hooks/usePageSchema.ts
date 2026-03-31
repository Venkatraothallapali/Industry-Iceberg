import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  addStructuredData,
  createOrganizationData,
  createWebsiteData,
  createWebPageData,
  createProductData,
  createServiceData,
  createBreadcrumbData,
  createFAQData,
  createContactData,
  createArticleData
} from '../utils/structuredData'

interface SchemaConfig {
  title: string
  description: string
  url: string
  type?: 'webpage' | 'product' | 'service' | 'contact' | 'article'
  breadcrumbs?: Array<{name: string, url: string}>
  faqs?: Array<{question: string, answer: string}>
  productCategory?: string
  serviceName?: string
  provider?: string
  author?: string
  datePublished?: string
}

export const usePageSchema = (config: SchemaConfig) => {
  const location = useLocation()

  useEffect(() => {
    // Add Organization schema (site-wide)
    addStructuredData('organization', createOrganizationData())
    
    // Add Website schema (site-wide)
    addStructuredData('website', createWebsiteData())

    // Add WebPage schema (page-specific)
    const webPageData = createWebPageData(
      config.title,
      config.description,
      config.url,
      new Date().toISOString()
    )
    addStructuredData('webpage', webPageData)

    // Add specific schema based on page type
    switch (config.type) {
      case 'product':
        if (config.productCategory) {
          const productData = createProductData(
            config.title,
            config.description,
            config.url,
            config.productCategory
          )
          addStructuredData('product', productData)
        }
        break

      case 'service': {
        const serviceData = createServiceData(
          config.serviceName || '',
          config.title,
          config.description,
          config.url,
          config.provider
        )
        addStructuredData('service', serviceData)
        break
      }

      case 'contact': {
        const contactData = createContactData()
        addStructuredData('contact', contactData)
        break
      }

      case 'article': {
        const articleData = createArticleData(
          config.title,
          config.description,
          config.url,
          config.author,
          config.datePublished
        )
        addStructuredData('article', articleData)
        break
      }

      default:
        break
    }

    // Add Breadcrumb schema if provided
    if (config.breadcrumbs && config.breadcrumbs.length > 0) {
      const breadcrumbData = createBreadcrumbData(config.breadcrumbs)
      addStructuredData('breadcrumbs', breadcrumbData)
    }

    // Add FAQ schema if provided
    if (config.faqs && config.faqs.length > 0) {
      const faqData = createFAQData(config.faqs)
      addStructuredData('faq', faqData)
    }

  }, [location.pathname, config])
}
