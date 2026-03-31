import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import EnterpriseLLMSolutionsWithMeta from './EnterpriseLLMSolutionsWithMeta'

const EnterpriseLLMSolutionsWithSchema: FC = () => {
  // Set canonical URL for Enterprise LLM Solutions page
  useCanonicalUrlWithPath('/enterprise-llm-solutions')
  
  usePageMetaManager({
    title: "Enterprise LLM Solutions – Large Language Models | Industry Iceberg",
    description: "Enterprise LLM solutions for pharmaceutical and life sciences industries, including custom large language models, AI integration, and enterprise AI deployment.",
    keywords: "Enterprise LLM, large language models, enterprise AI, LLM solutions, pharma LLM, life sciences AI, custom language models, enterprise AI deployment",
    ogTitle: "Enterprise LLM Solutions – Large Language Models | Industry Iceberg",
    ogDescription: "Enterprise LLM solutions for pharmaceutical and life sciences industries, including custom large language models, AI integration, and enterprise AI deployment.",
    twitterTitle: "Enterprise LLM Solutions – Large Language Models | Industry Iceberg",
    twitterDescription: "Enterprise LLM solutions for pharmaceutical and life sciences industries, including custom large language models, AI integration, and enterprise AI deployment."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Enterprise LLM Solutions – Industry Iceberg",
    description: "Enterprise LLM solutions for pharmaceutical and life sciences industries, including custom large language models, AI integration, and enterprise AI deployment.",
    url: "/enterprise-llm-solutions",
    type: "service",
    serviceType: "Enterprise LLM Solutions",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Enterprise LLM Solutions", url: "/enterprise-llm-solutions" }
    ],
    faqs: [
      {
        question: "What are Enterprise LLM solutions?",
        answer: "Enterprise LLM solutions are customized large language models designed for specific business needs, offering secure, scalable AI capabilities for enterprise operations."
      },
      {
        question: "How do you implement LLMs in pharmaceutical companies?",
        answer: "We implement LLMs with proper data security, regulatory compliance, and integration with existing pharmaceutical systems for tasks like document analysis, research, and customer support."
      },
      {
        question: "Are your LLM solutions HIPAA compliant?",
        answer: "Yes, our enterprise LLM solutions are designed with HIPAA compliance and data security in mind, ensuring patient data protection and regulatory adherence."
      }
    ]
  })

  return <EnterpriseLLMSolutionsWithMeta />
}

export default EnterpriseLLMSolutionsWithSchema
