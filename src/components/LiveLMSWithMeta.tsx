import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import LiveLMS from './LiveLMS'

const LiveLMSWithMeta: FC = () => {
  usePageMetaManager({
    title: "Live LMS | Industry Iceberg",
    description: "Live Learning Management System for healthcare and life sciences organizations. Our LMS platform delivers interactive training, compliance education, and professional development with real-time tracking and regulatory compliance features.",
    ogTitle: "Live LMS | Industry Iceberg",
    ogDescription: "Live Learning Management System for healthcare and life sciences organizations. Our LMS platform delivers interactive training, compliance education, and professional development with real-time tracking and regulatory compliance features.",
    twitterTitle: "Live LMS | Industry Iceberg",
    twitterDescription: "Live Learning Management System for healthcare and life sciences organizations. Our LMS platform delivers interactive training, compliance education, and professional development with real-time tracking and regulatory compliance features."
  })

  return <LiveLMS />
}

export default LiveLMSWithMeta
