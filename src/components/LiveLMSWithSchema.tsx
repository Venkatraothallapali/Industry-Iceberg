import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import LiveLMS from './LiveLMS'

const LiveLMSWithSchema: FC = () => {
  // Set canonical URL for Live LMS page
  useCanonicalUrlWithPath('/live-lms')
  
  usePageMetaManager({
    title: "Live LMS-Videobased: Pharma Training Platform | IndustryIceberg",
    description: "IndustryIceberg Live LMS delivers interactive, video-based pharma training with real-time tracking, quizzes, certifications, and audit-ready reporting.",
    keywords: "Video-based LMS, pharma training platform, interactive e-learning, GMP training, SOP compliance, audit-ready LMS, employee certification, compliance training software",
    ogTitle: "Live LMS-Videobased: Pharma Training Platform | IndustryIceberg",
    ogDescription: "IndustryIceberg Live LMS delivers interactive, video-based pharma training with real-time tracking, quizzes, certifications, and audit-ready reporting.",
    twitterTitle: "Live LMS-Videobased: Pharma Training Platform | IndustryIceberg",
    twitterDescription: "IndustryIceberg Live LMS delivers interactive, video-based pharma training with real-time tracking, quizzes, certifications, and audit-ready reporting."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Live LMS – Industry Iceberg",
    description: "Live LMS is a real-time learning management system offering structured industry education, live sessions, and interactive insights.",
    url: "/live-lms",
    type: "live-lms",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Live LMS", url: "/live-lms" }
    ],
    faqs: [
      {
        question: "What is Live LMS?",
        answer: "Live LMS is a real-time learning management system for industry-focused education."
      },
      {
        question: "What makes Live LMS different from other learning platforms?",
        answer: "Live LMS offers real-time interactive classes, industry-specific content, and structured career-oriented learning modules."
      },
      {
        question: "Who can use Live LMS?",
        answer: "Professionals in pharmaceutical, life sciences, and related industries seeking structured education and skill development."
      }
    ]
  })

  return <LiveLMS />
}

export default LiveLMSWithSchema
