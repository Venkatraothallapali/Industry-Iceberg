import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import EnterpriseLLMSolutions from './EnterpriseLLMSolutions'

const EnterpriseLLMSolutionsWithMeta: FC = () => {
  usePageMetaManager({
    title: "Enterprise LLM Solutions | Industry Iceberg",
    description: "Enterprise Large Language Model solutions for healthcare and life sciences. Our LLM implementations provide intelligent document processing, regulatory compliance automation, and advanced data analysis for pharmaceutical and biotechnology companies.",
    ogTitle: "Enterprise LLM Solutions | Industry Iceberg",
    ogDescription: "Enterprise Large Language Model solutions for healthcare and life sciences. Our LLM implementations provide intelligent document processing, regulatory compliance automation, and advanced data analysis for pharmaceutical and biotechnology companies.",
    twitterTitle: "Enterprise LLM Solutions | Industry Iceberg",
    twitterDescription: "Enterprise Large Language Model solutions for healthcare and life sciences. Our LLM implementations provide intelligent document processing, regulatory compliance automation, and advanced data analysis for pharmaceutical and biotechnology companies."
  })

  return <EnterpriseLLMSolutions />
}

export default EnterpriseLLMSolutionsWithMeta
