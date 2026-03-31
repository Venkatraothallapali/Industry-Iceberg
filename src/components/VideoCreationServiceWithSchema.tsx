import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import VideoCreationService from './VideoCreationService'

const VideoCreationServiceWithSchema: FC = () => {
  // Set canonical URL for Video Creation Service page
  useCanonicalUrlWithPath('/video-creation-service')
  
  usePageMetaManager({
    title: "AI Video Creation for SOPs | IndustryIceberg",
    description: "Transform SOPs and training docs into engaging, compliant videos with AI-powered automation, voice-over, and multi-format delivery.",
    keywords: "AI video creation, SOP video automation, compliance training videos, AI-generated training videos, employee onboarding videos, GMP training videos, pharma e-learning, document-to-video AI",
    ogTitle: "AI Video Creation for SOPs | IndustryIceberg",
    ogDescription: "Transform SOPs and training docs into engaging, compliant videos with AI-powered automation, voice-over, and multi-format delivery.",
    twitterTitle: "AI Video Creation for SOPs | IndustryIceberg",
    twitterDescription: "Transform SOPs and training docs into engaging, compliant videos with AI-powered automation, voice-over, and multi-format delivery."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Video Creation Service – Industry Iceberg",
    description: "Create high-quality videos for marketing, education, and branding with Industry Iceberg's professional video creation service.",
    url: "/video-creation-service",
    type: "video-service",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Video Creation Service", url: "/video-creation-service" }
    ],
    faqs: [
      {
        question: "What video creation services do you offer?",
        answer: "We offer comprehensive video creation services including scriptwriting, filming, editing, animation, and post-production for marketing, educational, and corporate videos."
      },
      {
        question: "Do you specialize in pharmaceutical and life sciences videos?",
        answer: "Yes, we have extensive experience creating videos for pharmaceutical and life sciences industries, including compliance training, product demonstrations, and marketing content."
      },
      {
        question: "How long does video production take?",
        answer: "Production timelines vary based on complexity, but most projects are completed within 2-4 weeks from concept to final delivery."
      }
    ]
  })

  return <VideoCreationService />
}

export default VideoCreationServiceWithSchema
