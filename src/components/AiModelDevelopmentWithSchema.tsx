import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import AiModelDevelopment from './AiModelDevelopment'

const AiModelDevelopmentWithSchema: FC = () => {
  // Set canonical URL for AI Model Development page
  useCanonicalUrlWithPath('/ai-technologies-services')
  
  usePageMetaManager({
    title: "AI Technologies & Services – Custom AI Solutions | Industry Iceberg",
    description: "Custom AI model development and AI technologies for pharmaceutical and life sciences industries, including machine learning, NLP, and predictive analytics.",
    keywords: "AI model development, custom AI solutions, machine learning, NLP, predictive analytics, pharma AI, life sciences AI, AI technologies",
    ogTitle: "AI Technologies & Services – Custom AI Solutions | Industry Iceberg",
    ogDescription: "Custom AI model development and AI technologies for pharmaceutical and life sciences industries, including machine learning, NLP, and predictive analytics.",
    twitterTitle: "AI Technologies & Services – Custom AI Solutions | Industry Iceberg",
    twitterDescription: "Custom AI model development and AI technologies for pharmaceutical and life sciences industries, including machine learning, NLP, and predictive analytics."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "AI Technologies & Services – Industry Iceberg",
    description: "Custom AI model development and AI technologies for pharmaceutical and life sciences industries, including machine learning, NLP, and predictive analytics.",
    url: "/ai-technologies-services",
    type: "service",
    serviceType: "AI Model Development Services",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "AI Technologies & Services", url: "/ai-technologies-services" }
    ],
    faqs: [
      {
        question: "What AI model development services do you offer?",
        answer: "We offer custom AI model development including machine learning, natural language processing, computer vision, and predictive analytics tailored for pharmaceutical and life sciences industries."
      },
      {
        question: "How do you develop AI models for pharma companies?",
        answer: "We follow a structured approach including data analysis, model design, training, validation, and deployment, ensuring compliance with industry regulations and quality standards."
      },
      {
        question: "Can you integrate AI models with existing systems?",
        answer: "Yes, we specialize in integrating AI models with existing pharmaceutical systems, ensuring seamless data flow and workflow optimization."
      }
    ]
  })

  return <AiModelDevelopment />
}

export default AiModelDevelopmentWithSchema
