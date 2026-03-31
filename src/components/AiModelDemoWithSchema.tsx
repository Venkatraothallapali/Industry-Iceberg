import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import AiModelDemo from './AiModelDemo'

const AiModelDemoWithSchema: FC = () => {
  // Set canonical URL for AI Model Demo page
  useCanonicalUrlWithPath('/ai-model-demo')
  
  usePageMetaManager({
    title: "AI Model Demo – Interactive AI Demo | Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's AI models for pharmaceutical and life sciences industries. Experience our AI technology in action.",
    keywords: "AI model demo, interactive AI demo, pharma AI demo, AI technology demo, machine learning demo, IndustryIceberg AI demo",
    ogTitle: "AI Model Demo – Interactive AI Demo | Industry Iceberg",
    ogDescription: "Interactive demo of IndustryIceberg's AI models for pharmaceutical and life sciences industries. Experience our AI technology in action.",
    twitterTitle: "AI Model Demo – Interactive AI Demo | Industry Iceberg",
    twitterDescription: "Interactive demo of IndustryIceberg's AI models for pharmaceutical and life sciences industries. Experience our AI technology in action."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "AI Model Demo – Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's AI models for pharmaceutical and life sciences industries.",
    url: "/ai-model-demo",
    type: "webpage",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "AI Model Demo", url: "/ai-model-demo" }
    ],
    faqs: [
      {
        question: "What can I expect from the AI model demo?",
        answer: "Our interactive demo showcases various AI models including natural language processing, predictive analytics, and computer vision tailored for pharmaceutical applications."
      },
      {
        question: "Is the AI demo free to use?",
        answer: "Yes, our AI model demo is free to use and provides a hands-on experience of our technology capabilities."
      },
      {
        question: "How do I access the AI model demo?",
        answer: "Simply visit this page and follow the instructions to interact with our AI models. No registration is required for the basic demo experience."
      }
    ]
  })

  return <AiModelDemo />
}

export default AiModelDemoWithSchema
