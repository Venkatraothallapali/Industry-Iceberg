import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import GMPCompliance from './GMPCompliance'

const GMPComplianceWithMeta: FC = () => {
  usePageMetaManager({
    title: "GMP Compliance | Industry Iceberg",
    description: "Good Manufacturing Practice compliance solutions for pharmaceutical and biotechnology companies. Our GMP consulting services ensure regulatory compliance, quality system implementation, and operational excellence for FDA, EMA, and global regulatory requirements.",
    ogTitle: "GMP Compliance | Industry Iceberg",
    ogDescription: "Good Manufacturing Practice compliance solutions for pharmaceutical and biotechnology companies. Our GMP consulting services ensure regulatory compliance, quality system implementation, and operational excellence for FDA, EMA, and global regulatory requirements.",
    twitterTitle: "GMP Compliance | Industry Iceberg",
    twitterDescription: "Good Manufacturing Practice compliance solutions for pharmaceutical and biotechnology companies. Our GMP consulting services ensure regulatory compliance, quality system implementation, and operational excellence for FDA, EMA, and global regulatory requirements."
  })

  return <GMPCompliance />
}

export default GMPComplianceWithMeta
