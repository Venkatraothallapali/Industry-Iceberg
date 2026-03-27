import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_TRACKING_ID = 'G-SMN2K1HHVV'

const defaultMeta = {
  title: "IndustryIceberg - AI-Driven Enterprise Solutions",
  description: "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation.",
  ogTitle: "IndustryIceberg - AI-Driven Enterprise Solutions",
  ogDescription: "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation.",
  ogUrl: "https://industryiceberg.com",
  twitterTitle: "IndustryIceberg - AI-Driven Enterprise Solutions",
  twitterDescription: "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation."
}

export const usePageMetaManager = (customMeta?: {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
}) => {
  const location = useLocation()
  const isBlogArticlePage = location.pathname.startsWith('/blog/') && location.pathname !== '/blog'

  useEffect(() => {
    // If on blog article page without custom meta, don't override with default
    if (isBlogArticlePage && !customMeta) return

    // Use custom meta if provided, otherwise use default
    const meta = customMeta || defaultMeta

    // Update document title
    if (meta.title) {
      document.title = meta.title
    }

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']")
    if (metaDescription && meta.description) {
      metaDescription.setAttribute("content", meta.description)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector("meta[property='og:title']")
    if (ogTitle && meta.ogTitle) {
      ogTitle.setAttribute("content", meta.ogTitle)
    }

    const ogDescription = document.querySelector("meta[property='og:description']")
    if (ogDescription && meta.ogDescription) {
      ogDescription.setAttribute("content", meta.ogDescription)
    }

    const ogUrl = document.querySelector("meta[property='og:url']")
    if (ogUrl) {
      ogUrl.setAttribute("content", meta.ogUrl || window.location.href)
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector("meta[name='twitter:title']")
    if (twitterTitle && meta.twitterTitle) {
      twitterTitle.setAttribute("content", meta.twitterTitle)
    }

    const twitterDescription = document.querySelector("meta[name='twitter:description']")
    if (twitterDescription && meta.twitterDescription) {
      twitterDescription.setAttribute("content", meta.twitterDescription)
    }

    // Track page view with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: window.location.pathname,
        page_title: meta.title,
      })
    }
  }, [location.pathname, customMeta, isBlogArticlePage])
}
