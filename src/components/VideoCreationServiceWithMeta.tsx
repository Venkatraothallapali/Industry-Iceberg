import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import VideoCreationService from './VideoCreationService'

const VideoCreationServiceWithMeta: FC = () => {
  usePageMetaManager({
    title: "Video Creation Service | Industry Iceberg",
    description: "Professional video creation services for life sciences and healthcare organizations. We produce engaging medical videos, training content, and marketing materials that comply with regulatory standards and effectively communicate complex scientific concepts.",
    ogTitle: "Video Creation Service | Industry Iceberg",
    ogDescription: "Professional video creation services for life sciences and healthcare organizations. We produce engaging medical videos, training content, and marketing materials that comply with regulatory standards and effectively communicate complex scientific concepts.",
    twitterTitle: "Video Creation Service | Industry Iceberg",
    twitterDescription: "Professional video creation services for life sciences and healthcare organizations. We produce engaging medical videos, training content, and marketing materials that comply with regulatory standards and effectively communicate complex scientific concepts."
  })

  return <VideoCreationService />
}

export default VideoCreationServiceWithMeta
