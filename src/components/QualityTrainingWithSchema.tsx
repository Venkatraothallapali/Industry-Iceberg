import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import QualityTrainingWithMeta from './QualityTrainingWithMeta'

const QualityTrainingWithSchema: FC = () => {
  // Set canonical URL for Quality Training page
  useCanonicalUrlWithPath('/quality-training')
  
  usePageMetaManager({
    title: "Quality Training – Professional Compliance Education | Industry Iceberg",
    description: "Professional quality training and compliance education for pharmaceutical and life sciences industries, including GMP, regulatory compliance, and best practices.",
    keywords: "Quality Training, GMP training, regulatory compliance education, pharmaceutical training, life sciences education, compliance certification, quality systems training, regulatory affairs",
    ogTitle: "Quality Training – Professional Compliance Education | Industry Iceberg",
    ogDescription: "Professional quality training and compliance education for pharmaceutical and life sciences industries, including GMP, regulatory compliance, and best practices.",
    twitterTitle: "Quality Training – Professional Compliance Education | Industry Iceberg",
    twitterDescription: "Professional quality training and compliance education for pharmaceutical and life sciences industries, including GMP, regulatory compliance, and best practices."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Quality Training – Industry Iceberg",
    description: "Professional quality training and compliance education for pharmaceutical and life sciences industries, including GMP, regulatory compliance, and best practices.",
    url: "/quality-training",
    type: "quality-training",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Quality Training", url: "/quality-training" }
    ],
    faqs: [
      {
        question: "What quality training programs do you offer?",
        answer: "We offer comprehensive training programs including GMP, regulatory compliance, quality systems, and best practices for pharmaceutical and life sciences industries."
      },
      {
        question: "Who should attend quality training?",
        answer: "Quality assurance professionals, manufacturing staff, regulatory affairs teams, and anyone involved in pharmaceutical or life sciences operations."
      },
      {
        question: "Are your training programs certified?",
        answer: "Our training programs meet industry standards and are designed to help professionals maintain compliance with regulatory requirements."
      }
    ]
  })

  return <QualityTrainingWithMeta />
}

export default QualityTrainingWithSchema
