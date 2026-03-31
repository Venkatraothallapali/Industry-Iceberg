import type { FC } from 'react'
import { usePageMetaManager } from '../../../../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../../../../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../../../../hooks/useAdvancedSchema'
import DemoPage from './DemoPage'

const ComplianceLoopDemoWithSchema: FC = () => {
  // Set canonical URL
  useCanonicalUrlWithPath('/complianceloop/demo')
  
  usePageMetaManager({
    title: "Request Compliance Loop Demo | AI Partner Discovery | Industry Iceberg",
    description: "Schedule a personalized demo of Compliance Loop AI platform. Discover how AI-powered partner discovery and compliance monitoring can accelerate your life sciences partnerships.",
    keywords: "Compliance Loop demo, AI partner discovery demo, CMO CRO demo, compliant partner demo, life sciences partnership demo, AI compliance monitoring demo",
    ogTitle: "Request Compliance Loop Demo | AI Partner Discovery | Industry Iceberg",
    ogDescription: "Schedule a personalized demo of Compliance Loop AI platform. Discover how AI-powered partner discovery and compliance monitoring can accelerate your life sciences partnerships.",
    twitterTitle: "Request Compliance Loop Demo | AI Partner Discovery | Industry Iceberg",
    twitterDescription: "Schedule a personalized demo of Compliance Loop AI platform. Discover how AI-powered partner discovery and compliance monitoring can accelerate your life sciences partnerships."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Request Compliance Loop Demo | AI Partner Discovery",
    description: "Schedule a personalized demo of Compliance Loop AI platform for compliant partner discovery in life sciences industries.",
    url: "/complianceloop/demo",
    type: "contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Compliance Loop", url: "/complianceloop" },
      { name: "Request Demo", url: "/complianceloop/demo" }
    ],
    faqs: [
      {
        question: "What will I see in the Compliance Loop demo?",
        answer: "You'll see live demonstrations of AI-powered partner discovery, compliance scoring, audit history analysis, real-time monitoring, and partnership matching tailored to your specific needs."
      },
      {
        question: "How does Compliance Loop find compliant partners?",
        answer: "Compliance Loop uses AI to analyze FDA 483 observations, warning letters, inspection data, and compliance history to identify partners that meet your quality and regulatory standards."
      },
      {
        question: "Can I search for specific types of partners?",
        answer: "Yes, you can search for CMOs, CDMOs, CROs, analytical testing labs, stability facilities, and other specialized service providers with specific capabilities and compliance profiles."
      },
      {
        question: "How current is the compliance data?",
        answer: "Our compliance data is updated continuously with the latest FDA inspections, warning letters, and regulatory actions to ensure you have current partner intelligence."
      },
      {
        question: "Does Compliance Loop cover global partners?",
        answer: "Currently, Compliance Loop focuses on FDA-regulated partners in the United States. We are expanding to include EMA and other global regulatory jurisdictions."
      },
      {
        question: "How quickly can I start using Compliance Loop?",
        answer: "After your demo and subscription, you can begin using Compliance Loop immediately. Implementation typically takes 1-2 business days for account setup and training."
      }
    ]
  })

  return <DemoPage />
}

export default ComplianceLoopDemoWithSchema
