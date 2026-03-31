import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import LiveLMSDemo from './LiveLMSDemo'

const LiveLMSDemoWithSchema: FC = () => {
  // Set canonical URL for Live LMS Demo page
  useCanonicalUrlWithPath('/live-lms-demo')
  
  usePageMetaManager({
    title: "Live LMS Demo – Learning Management System Demo | Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's Live LMS platform for real-time learning and training in pharmaceutical and life sciences industries.",
    keywords: "Live LMS demo, learning management demo, real-time education demo, pharma training demo, live learning demo, IndustryIceberg LMS demo",
    ogTitle: "Live LMS Demo – Learning Management System Demo | Industry Iceberg",
    ogDescription: "Interactive demo of IndustryIceberg's Live LMS platform for real-time learning and training in pharmaceutical and life sciences industries.",
    twitterTitle: "Live LMS Demo – Learning Management System Demo | Industry Iceberg",
    twitterDescription: "Interactive demo of IndustryIceberg's Live LMS platform for real-time learning and training in pharmaceutical and life sciences industries."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Live LMS Demo – Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's Live LMS platform for real-time learning and training in pharmaceutical and life sciences industries.",
    url: "/live-lms-demo",
    type: "webpage",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Live LMS Demo", url: "/live-lms-demo" }
    ],
    faqs: [
      {
        question: "What does the Live LMS demo showcase?",
        answer: "Our Live LMS demo demonstrates real-time interactive classes, industry-specific learning modules, and engagement tools designed for pharmaceutical and life sciences training."
      },
      {
        question: "Can I participate in a live session during the demo?",
        answer: "The demo includes sample live sessions and interactive features to showcase the platform capabilities. Full live sessions require registration for scheduled events."
      },
      {
        question: "Is the Live LMS demo suitable for training managers?",
        answer: "Yes, our demo is designed for training managers and HR professionals to evaluate the platform for their organization's learning and development needs."
      }
    ]
  })

  return <LiveLMSDemo />
}

export default LiveLMSDemoWithSchema
