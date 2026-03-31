import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import GMPComplianceWithMeta from './GMPComplianceWithMeta'

const GMPComplianceWithSchema: FC = () => {
  // Set canonical URL for GMP Compliance page
  useCanonicalUrlWithPath('/gmp-compliance')
  
  usePageMetaManager({
    title: "GMP Compliance – Quality Management Solutions | Industry Iceberg",
    description: "Comprehensive GMP compliance solutions for pharmaceutical and life sciences industries, including quality management, regulatory compliance, and best practices.",
    keywords: "GMP compliance, quality management, pharmaceutical compliance, Good Manufacturing Practices, regulatory compliance, quality systems, pharmaceutical quality, GMP training",
    ogTitle: "GMP Compliance – Quality Management Solutions | Industry Iceberg",
    ogDescription: "Comprehensive GMP compliance solutions for pharmaceutical and life sciences industries, including quality management, regulatory compliance, and best practices.",
    twitterTitle: "GMP Compliance – Quality Management Solutions | Industry Iceberg",
    twitterDescription: "Comprehensive GMP compliance solutions for pharmaceutical and life sciences industries, including quality management, regulatory compliance, and best practices."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "GMP Compliance – Industry Iceberg",
    description: "Comprehensive GMP compliance solutions for pharmaceutical and life sciences industries, including quality management, regulatory compliance, and best practices.",
    url: "/gmp-compliance",
    type: "service",
    serviceType: "GMP Compliance Services",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "GMP Compliance", url: "/gmp-compliance" }
    ],
    faqs: [
      {
        question: "What is GMP compliance?",
        answer: "GMP (Good Manufacturing Practices) compliance ensures that products are consistently produced and controlled according to quality standards in pharmaceutical and life sciences industries."
      },
      {
        question: "How can IndustryIceberg help with GMP compliance?",
        answer: "We provide comprehensive GMP compliance solutions including quality management systems, regulatory guidance, training programs, and compliance auditing services."
      },
      {
        question: "Why is GMP compliance important?",
        answer: "GMP compliance is essential for product quality, patient safety, regulatory approval, and market access in pharmaceutical and life sciences industries."
      }
    ]
  })

  return <GMPComplianceWithMeta />
}

export default GMPComplianceWithSchema
