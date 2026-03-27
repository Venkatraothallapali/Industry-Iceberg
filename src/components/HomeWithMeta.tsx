import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import ValueProposition from './ValueProposition'
import WhoWeAre from './WhoWeAre'
import ProductsShowcase from './ProductsShowcase'

const HomeWithMeta: FC = () => {
  usePageMetaManager({
    title: "IndustryIceberg - AI-Driven Enterprise Solutions",
    description: "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation. Transform your business with our intelligent automation platforms.",
    ogTitle: "IndustryIceberg - AI-Driven Enterprise Solutions",
    ogDescription: "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation. Transform your business with our intelligent automation platforms.",
    twitterTitle: "IndustryIceberg - AI-Driven Enterprise Solutions",
    twitterDescription: "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation. Transform your business with our intelligent automation platforms."
  })

  return (
    <>
      <ValueProposition />
      <WhoWeAre />
      <ProductsShowcase />
    </>
  )
}

export default HomeWithMeta
