import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import ECTDDemo from './ECTDDemo'

const ECTDDemoWithSchema: FC = () => {
  // Set canonical URL for ECTD Demo page
  useCanonicalUrlWithPath('/ectd-ai-demo')
  
  usePageMetaManager({
    title: "eCTD AI Demo – Regulatory Submission Demo | Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's eCTD AI platform for regulatory submissions and lifecycle management. Experience AI-powered regulatory compliance.",
    keywords: "eCTD AI demo, regulatory submission demo, eCTD lifecycle demo, regulatory AI demo, pharma compliance demo, IndustryIceberg eCTD demo",
    ogTitle: "eCTD AI Demo – Regulatory Submission Demo | Industry Iceberg",
    ogDescription: "Interactive demo of IndustryIceberg's eCTD AI platform for regulatory submissions and lifecycle management. Experience AI-powered regulatory compliance.",
    twitterTitle: "eCTD AI Demo – Regulatory Submission Demo | Industry Iceberg",
    twitterDescription: "Interactive demo of IndustryIceberg's eCTD AI platform for regulatory submissions and lifecycle management. Experience AI-powered regulatory compliance."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "eCTD AI Demo – Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's eCTD AI platform for regulatory submissions and lifecycle management.",
    url: "/ectd-ai-demo",
    type: "webpage",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "eCTD AI Demo", url: "/ectd-ai-demo" }
    ],
    faqs: [
      {
        question: "What does the eCTD AI demo demonstrate?",
        answer: "Our eCTD AI demo showcases AI-powered regulatory submission generation, document validation, lifecycle management, and compliance checking for pharmaceutical submissions."
      },
      {
        question: "Can I try real regulatory document generation in the demo?",
        answer: "The demo uses sample data to demonstrate the technology while maintaining confidentiality. You can see how AI generates and validates regulatory documents."
      },
      {
        question: "Is the eCTD AI demo suitable for regulatory professionals?",
        answer: "Yes, our demo is designed for regulatory affairs professionals to understand how AI can streamline their submission workflows and improve compliance."
      }
    ]
  })

  return <ECTDDemo />
}

export default ECTDDemoWithSchema
