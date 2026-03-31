import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import EnterpriseLLMDemo from './EnterpriseLLMDemo'

const EnterpriseLLMDemoWithSchema: FC = () => {
  // Set canonical URL for Enterprise LLM Demo page
  useCanonicalUrlWithPath('/enterprise-llm-demo')
  
  usePageMetaManager({
    title: "Enterprise LLM Demo – Large Language Model Demo | Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's enterprise large language models for pharmaceutical and life sciences industries. Experience enterprise AI capabilities.",
    keywords: "Enterprise LLM demo, large language model demo, enterprise AI demo, LLM technology demo, pharma LLM demo, IndustryIceberg LLM demo",
    ogTitle: "Enterprise LLM Demo – Large Language Model Demo | Industry Iceberg",
    ogDescription: "Interactive demo of IndustryIceberg's enterprise large language models for pharmaceutical and life sciences industries. Experience enterprise AI capabilities.",
    twitterTitle: "Enterprise LLM Demo – Large Language Model Demo | Industry Iceberg",
    twitterDescription: "Interactive demo of IndustryIceberg's enterprise large language models for pharmaceutical and life sciences industries. Experience enterprise AI capabilities."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Enterprise LLM Demo – Industry Iceberg",
    description: "Interactive demo of IndustryIceberg's enterprise large language models for pharmaceutical and life sciences industries.",
    url: "/enterprise-llm-demo",
    type: "webpage",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Enterprise LLM Demo", url: "/enterprise-llm-demo" }
    ],
    faqs: [
      {
        question: "What does the Enterprise LLM demo showcase?",
        answer: "Our Enterprise LLM demo showcases custom large language models designed for pharmaceutical applications, including document analysis, research assistance, and compliance support."
      },
      {
        question: "Is the Enterprise LLM demo secure?",
        answer: "Yes, our demo uses secure, sandboxed environments with no real patient data, ensuring confidentiality while demonstrating enterprise capabilities."
      },
      {
        question: "Can I try the Enterprise LLM demo without registration?",
        answer: "Yes, basic demo features are available without registration. Full access may require signing up for a personalized demo experience."
      }
    ]
  })

  return <EnterpriseLLMDemo />
}

export default EnterpriseLLMDemoWithSchema
