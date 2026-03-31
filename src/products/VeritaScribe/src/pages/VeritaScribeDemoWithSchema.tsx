import type { FC } from 'react'
import { usePageMetaManager } from '../../../../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../../../../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../../../../hooks/useAdvancedSchema'
import DemoPage from './DemoPage'

const VeritaScribeDemoWithSchema: FC = () => {
  // Set canonical URL
  useCanonicalUrlWithPath('/veritascribe/demo')
  
  usePageMetaManager({
    title: "Request VeritaScribe Demo | AI Document Automation | Industry Iceberg",
    description: "Schedule a personalized demo of VeritaScribe AI document automation platform. See how AI-powered document drafting, review, and compliance can transform your pharmaceutical workflows.",
    keywords: "VeritaScribe demo, AI document automation demo, pharmaceutical document AI demo, regulatory document demo, AI drafting demo, document workflow demo, compliance automation demo",
    ogTitle: "Request VeritaScribe Demo | AI Document Automation | Industry Iceberg",
    ogDescription: "Schedule a personalized demo of VeritaScribe AI document automation platform. See how AI-powered document drafting, review, and compliance can transform your pharmaceutical workflows.",
    twitterTitle: "Request VeritaScribe Demo | AI Document Automation | Industry Iceberg",
    twitterDescription: "Schedule a personalized demo of VeritaScribe AI document automation platform. See how AI-powered document drafting, review, and compliance can transform your pharmaceutical workflows."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Request VeritaScribe Demo | AI Document Automation",
    description: "Schedule a personalized demo of VeritaScribe AI document automation platform for pharmaceutical and life sciences industries.",
    url: "/veritascribe/demo",
    type: "contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "VeritaScribe", url: "/veritascribe" },
      { name: "Request Demo", url: "/veritascribe/demo" }
    ],
    faqs: [
      {
        question: "What will I see in the VeritaScribe demo?",
        answer: "You'll see live demonstrations of AI-powered document drafting, template management, collaborative review, data source integration, and document preview features tailored to your regulatory needs."
      },
      {
        question: "How long is the VeritaScribe demo?",
        answer: "The demo typically lasts 30-45 minutes, including time for questions and discussion about your specific document automation requirements."
      },
      {
        question: "Is the VeritaScribe demo customized for my industry?",
        answer: "Yes, we customize the demo based on your industry (pharmaceutical, biotech, medical device) and specific use cases such as SOPs, protocols, or regulatory submissions."
      },
      {
        question: "What do I need to prepare for the demo?",
        answer: "Just bring your questions and document challenges. Our team will handle the rest. If you have specific document types you'd like to see, let us know in advance."
      },
      {
        question: "How soon can VeritaScribe be implemented after the demo?",
        answer: "Implementation timelines vary based on your requirements. Typical deployment ranges from 2-4 weeks for standard configurations. We'll discuss this during your demo."
      },
      {
        question: "Does VeritaScribe integrate with existing systems?",
        answer: "Yes, VeritaScribe integrates with popular document management systems, databases, and enterprise platforms. We'll discuss your specific integration needs during the demo."
      }
    ]
  })

  return <DemoPage />
}

export default VeritaScribeDemoWithSchema
