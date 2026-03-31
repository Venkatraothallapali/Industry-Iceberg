import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import TermsOfUse from './TermsOfUse'

const TermsOfUseWithSchema: FC = () => {
  // Set canonical URL for Terms of Use page
  useCanonicalUrlWithPath('/terms-of-use')
  
  usePageMetaManager({
    title: "Terms of Use – Legal Terms & Conditions | Industry Iceberg",
    description: "IndustryIceberg's terms of use outlining the legal terms and conditions for using our AI solutions, services, and website.",
    keywords: "terms of use, legal terms, conditions of use, IndustryIceberg terms, service terms, legal agreement, user agreement",
    ogTitle: "Terms of Use – Legal Terms & Conditions | Industry Iceberg",
    ogDescription: "IndustryIceberg's terms of use outlining the legal terms and conditions for using our AI solutions, services, and website.",
    twitterTitle: "Terms of Use – Legal Terms & Conditions | Industry Iceberg",
    twitterDescription: "IndustryIceberg's terms of use outlining the legal terms and conditions for using our AI solutions, services, and website."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Terms of Use – Industry Iceberg",
    description: "IndustryIceberg's terms of use outlining the legal terms and conditions for using our AI solutions, services, and website.",
    url: "/terms-of-use",
    type: "webpage",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Terms of Use", url: "/terms-of-use" }
    ],
    faqs: [
      {
        question: "What are the terms of use for IndustryIceberg services?",
        answer: "Our terms of use outline the legal conditions for using our AI solutions, including user responsibilities, service limitations, and intellectual property rights."
      },
      {
        question: "Can I use IndustryIceberg AI solutions for commercial purposes?",
        answer: "Yes, our AI solutions are designed for commercial use in pharmaceutical and life sciences industries, subject to the terms outlined in our service agreements."
      },
      {
        question: "What happens if I violate the terms of use?",
        answer: "Violation of terms may result in service suspension or termination. We recommend reviewing the terms carefully and contacting us with any questions."
      }
    ]
  })

  return <TermsOfUse />
}

export default TermsOfUseWithSchema
