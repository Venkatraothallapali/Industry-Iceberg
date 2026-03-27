import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import AiModelDevelopment from './AiModelDevelopment'

const AiModelDevelopmentWithMeta: FC = () => {
  usePageMetaManager({
    title: "AI Model Development | Industry Iceberg",
    description: "Custom AI model development services for healthcare and life sciences. We build machine learning models, neural networks, and AI solutions tailored to your specific regulatory compliance, drug discovery, and clinical research needs.",
    ogTitle: "AI Model Development | Industry Iceberg",
    ogDescription: "Custom AI model development services for healthcare and life sciences. We build machine learning models, neural networks, and AI solutions tailored to your specific regulatory compliance, drug discovery, and clinical research needs.",
    twitterTitle: "AI Model Development | Industry Iceberg",
    twitterDescription: "Custom AI model development services for healthcare and life sciences. We build machine learning models, neural networks, and AI solutions tailored to your specific regulatory compliance, drug discovery, and clinical research needs."
  })

  return <AiModelDevelopment />
}

export default AiModelDevelopmentWithMeta
