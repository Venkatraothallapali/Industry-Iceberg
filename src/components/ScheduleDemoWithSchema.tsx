import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import ScheduleDemo from './ScheduleDemo'

const ScheduleDemoWithSchema: FC = () => {
  // Set canonical URL for Schedule Demo page
  useCanonicalUrlWithPath('/demo')
  
  usePageMetaManager({
    title: "Schedule Demo – AI Solutions for Pharma | Industry Iceberg",
    description: "Schedule a personalized demo of IndustryIceberg's AI-powered solutions for pharmaceutical and life sciences industries. See how our AI can transform your operations.",
    keywords: "schedule demo, AI solutions demo, pharma AI demo, compliance AI demo, enterprise AI demo, IndustryIceberg demo, AI consultation",
    ogTitle: "Schedule Demo – AI Solutions for Pharma | Industry Iceberg",
    ogDescription: "Schedule a personalized demo of IndustryIceberg's AI-powered solutions for pharmaceutical and life sciences industries. See how our AI can transform your operations.",
    twitterTitle: "Schedule Demo – AI Solutions for Pharma | Industry Iceberg",
    twitterDescription: "Schedule a personalized demo of IndustryIceberg's AI-powered solutions for pharmaceutical and life sciences industries. See how our AI can transform your operations."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Schedule Demo – Industry Iceberg",
    description: "Schedule a personalized demo of IndustryIceberg's AI-powered solutions for pharmaceutical and life sciences industries.",
    url: "/demo",
    type: "contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Schedule Demo", url: "/demo" }
    ],
    faqs: [
      {
        question: "How do I schedule a demo with IndustryIceberg?",
        answer: "You can schedule a demo by filling out the form on this page, and our team will contact you within 24 hours to arrange a personalized demonstration."
      },
      {
        question: "What will be covered in the demo?",
        answer: "The demo will cover our AI-powered solutions including Compliance Loop, CompliSense, and VeritaScribe, tailored to your specific business needs."
      },
      {
        question: "Is the demo free of charge?",
        answer: "Yes, we offer free initial demos to help you understand how our AI solutions can benefit your pharmaceutical or life sciences company."
      }
    ]
  })

  return <ScheduleDemo />
}

export default ScheduleDemoWithSchema
