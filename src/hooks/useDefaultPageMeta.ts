import { useEffect } from 'react'

const GA_TRACKING_ID = 'G-SMN2K1HHVV'

export const useDefaultPageMeta = (pageTitle: string, pageDescription?: string) => {
  useEffect(() => {
    // Update document title
    document.title = `${pageTitle} | Industry Iceberg`

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']")
    if (metaDescription) {
      const defaultDescription = pageDescription || "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation."
      metaDescription.setAttribute("content", defaultDescription)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector("meta[property='og:title']")
    if (ogTitle) {
      ogTitle.setAttribute("content", `${pageTitle} | Industry Iceberg`)
    }

    const ogDescription = document.querySelector("meta[property='og:description']")
    if (ogDescription) {
      const defaultDescription = pageDescription || "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation."
      ogDescription.setAttribute("content", defaultDescription)
    }

    const ogUrl = document.querySelector("meta[property='og:url']")
    if (ogUrl) {
      ogUrl.setAttribute("content", window.location.href)
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector("meta[name='twitter:title']")
    if (twitterTitle) {
      twitterTitle.setAttribute("content", `${pageTitle} | Industry Iceberg`)
    }

    const twitterDescription = document.querySelector("meta[name='twitter:description']")
    if (twitterDescription) {
      const defaultDescription = pageDescription || "Industry Iceberg provides AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation."
      twitterDescription.setAttribute("content", defaultDescription)
    }

    // Track page view with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: window.location.pathname,
        page_title: `${pageTitle} | Industry Iceberg`,
      })
    }
  }, [pageTitle, pageDescription])
}
