import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import ValueProposition from './ValueProposition'
import WhoWeAre from './WhoWeAre'
import ProductsShowcase from './ProductsShowcase'

const HomeWithMeta: FC = () => {
  // Set canonical URL for homepage
  useCanonicalUrlWithPath('/')
  
  usePageMetaManager({
    title: "AI-Driven Enterprise Solutions for Pharma | Industry Iceberg",
    description: "IndustryIceberg delivers AI-driven enterprise solutions for pharma to automate compliance, streamline workflows and enable accurate, data-driven decisions.",
    keywords: "AI solutions for pharma, pharma AI, enterprise automation, compliance AI, AI solutions, enterprise AI solutions, pharma compliance automation, AI workflow automation, pharma intelligence",
    ogTitle: "AI-Driven Enterprise Solutions for Pharma | Industry Iceberg",
    ogDescription: "IndustryIceberg delivers AI-driven enterprise solutions for pharma to automate compliance, streamline workflows and enable accurate, data-driven decisions.",
    twitterTitle: "AI-Driven Enterprise Solutions for Pharma | Industry Iceberg",
    twitterDescription: "IndustryIceberg delivers AI-driven enterprise solutions for pharma to automate compliance, streamline workflows and enable accurate, data-driven decisions."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "AI-Driven Enterprise Solutions for Pharma | Industry Iceberg",
    description: "IndustryIceberg delivers AI-driven enterprise solutions for pharma to automate compliance, streamline workflows and enable accurate, data-driven decisions.",
    url: "/",
    type: "homepage",
    breadcrumbs: [
      { name: "Home", url: "/" }
    ],
    faqs: [
      {
        question: "What AI solutions does IndustryIceberg provide for pharmaceutical companies?",
        answer: "IndustryIceberg offers AI-driven enterprise solutions including Compliance Loop for partner discovery, CompliSense for cGMP intelligence, and VeritaScribe for document automation."
      },
      {
        question: "How can AI improve regulatory compliance in pharma?",
        answer: "AI can automate compliance monitoring, streamline workflows, provide real-time insights, and help find compliant partners quickly, reducing manual effort and improving accuracy."
      },
      {
        question: "Is IndustryIceberg's AI platform suitable for life sciences companies?",
        answer: "Yes, our AI solutions are specifically designed for life sciences, pharmaceutical, and biotechnology companies to address their unique compliance and operational challenges."
      }
    ]
  })

  return (
    <>
      <ValueProposition />
      <WhoWeAre />
      <ProductsShowcase />
    </>
  )
}

export default HomeWithMeta
