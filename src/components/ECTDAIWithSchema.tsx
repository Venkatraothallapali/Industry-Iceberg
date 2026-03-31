import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import ECTDAI from './ECTDAI'

const ECTDAIWithSchema: FC = () => {
  // Set canonical URL for eCTD AI page
  useCanonicalUrlWithPath('/ectd-ai')
  
  usePageMetaManager({
    title: "ECTD AI: eCTD Document Validation | IndustryIceberg",
    description: "ECTD AI automates eCTD submission validation, detecting structure, OCR, orientation, and legibility issues for compliant, faster regulatory approvals.",
    keywords: "eCTD AI, eCTD document validation, AI regulatory submission, pharmaceutical compliance, document OCR detection, table of contents analysis, page orientation validation, pharma submission AI",
    ogTitle: "ECTD AI: eCTD Document Validation | IndustryIceberg",
    ogDescription: "ECTD AI automates eCTD submission validation, detecting structure, OCR, orientation, and legibility issues for compliant, faster regulatory approvals.",
    twitterTitle: "ECTD AI: eCTD Document Validation | IndustryIceberg",
    twitterDescription: "ECTD AI automates eCTD submission validation, detecting structure, OCR, orientation, and legibility issues for compliant, faster regulatory approvals."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "eCTD AI – Industry Iceberg",
    description: "eCTD AI is an AI-powered regulatory submission and lifecycle management platform designed to streamline electronic Common Technical Document (eCTD) workflows, automate compliance, and enhance pharmaceutical submission efficiency.",
    url: "/ectd-ai",
    type: "ectd-ai",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "eCTD AI", url: "/ectd-ai" }
    ],
    faqs: [
      {
        question: "What is eCTD AI?",
        answer: "eCTD AI is an AI-powered platform that helps manage regulatory submissions using the electronic Common Technical Document format."
      },
      {
        question: "How does eCTD AI improve regulatory submissions?",
        answer: "eCTD AI automates document generation, validates submissions, manages lifecycle tracking, and ensures compliance with regulatory requirements."
      },
      {
        question: "Who can benefit from eCTD AI?",
        answer: "Pharmaceutical companies, biotech firms, and regulatory affairs professionals who need to manage eCTD submissions efficiently."
      }
    ]
  })

  return <ECTDAI />
}

export default ECTDAIWithSchema
