import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import QualityTraining from './QualityTraining'

const QualityTrainingWithMeta: FC = () => {
  usePageMetaManager({
    title: "Quality Training | Industry Iceberg",
    description: "Professional quality training and compliance education for life sciences organizations. Our training programs cover GMP, GLP, GCP, regulatory compliance, and quality systems to ensure your team meets industry standards and regulatory requirements.",
    ogTitle: "Quality Training | Industry Iceberg",
    ogDescription: "Professional quality training and compliance education for life sciences organizations. Our training programs cover GMP, GLP, GCP, regulatory compliance, and quality systems to ensure your team meets industry standards and regulatory requirements.",
    twitterTitle: "Quality Training | Industry Iceberg",
    twitterDescription: "Professional quality training and compliance education for life sciences organizations. Our training programs cover GMP, GLP, GCP, regulatory compliance, and quality systems to ensure your team meets industry standards and regulatory requirements."
  })

  return <QualityTraining />
}

export default QualityTrainingWithMeta
