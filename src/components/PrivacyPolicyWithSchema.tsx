import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import PrivacyPolicy from './PrivacyPolicy'

const PrivacyPolicyWithSchema: FC = () => {
  // Set canonical URL for Privacy Policy page
  useCanonicalUrlWithPath('/privacy-policy')
  
  usePageMetaManager({
    title: "Privacy Policy – Data Protection | Industry Iceberg",
    description: "IndustryIceberg's privacy policy outlining how we collect, use, and protect your personal data in accordance with GDPR and other privacy regulations.",
    keywords: "privacy policy, data protection, GDPR compliance, personal data, data privacy, IndustryIceberg privacy, user data protection",
    ogTitle: "Privacy Policy – Data Protection | Industry Iceberg",
    ogDescription: "IndustryIceberg's privacy policy outlining how we collect, use, and protect your personal data in accordance with GDPR and other privacy regulations.",
    twitterTitle: "Privacy Policy – Data Protection | Industry Iceberg",
    twitterDescription: "IndustryIceberg's privacy policy outlining how we collect, use, and protect your personal data in accordance with GDPR and other privacy regulations."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Privacy Policy – Industry Iceberg",
    description: "IndustryIceberg's privacy policy outlining how we collect, use, and protect your personal data in accordance with GDPR and other privacy regulations.",
    url: "/privacy-policy",
    type: "webpage",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Privacy Policy", url: "/privacy-policy" }
    ],
    faqs: [
      {
        question: "What data does IndustryIceberg collect?",
        answer: "We collect only necessary data for providing our AI solutions, including contact information, usage data, and technical information required for service delivery."
      },
      {
        question: "How is my personal data protected?",
        answer: "We implement industry-standard security measures, encryption, and access controls to protect your personal data in compliance with GDPR and other privacy regulations."
      },
      {
        question: "Can I request my data to be deleted?",
        answer: "Yes, you have the right to request data deletion under GDPR. Contact us through our contact form, and we'll process your request within the legally required timeframe."
      }
    ]
  })

  return <PrivacyPolicy />
}

export default PrivacyPolicyWithSchema
