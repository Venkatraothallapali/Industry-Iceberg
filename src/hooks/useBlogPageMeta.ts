import { useEffect } from 'react'
import type { BlogPost } from '../components/blogData'

const GA_TRACKING_ID = 'G-SMN2K1HHVV'

export const useBlogPageMeta = (article: BlogPost | null) => {
  useEffect(() => {
    if (!article) return

    // Store original values for cleanup
    const originalTitle = document.title
    const originalDescription = document.querySelector("meta[name='description']")?.getAttribute("content")
    const originalOgTitle = document.querySelector("meta[property='og:title']")?.getAttribute("content")
    const originalOgDescription = document.querySelector("meta[property='og:description']")?.getAttribute("content")
    const originalOgUrl = document.querySelector("meta[property='og:url']")?.getAttribute("content")
    const originalTwitterTitle = document.querySelector("meta[name='twitter:title']")?.getAttribute("content")
    const originalTwitterDescription = document.querySelector("meta[name='twitter:description']")?.getAttribute("content")

    // Update document title
    document.title = `${article.title} | Industry Iceberg`

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']")
    if (metaDescription) {
      metaDescription.setAttribute("content", article.metaDescription)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector("meta[property='og:title']")
    if (ogTitle) {
      ogTitle.setAttribute("content", article.title)
    }

    const ogDescription = document.querySelector("meta[property='og:description']")
    if (ogDescription) {
      ogDescription.setAttribute("content", article.metaDescription)
    }

    const ogUrl = document.querySelector("meta[property='og:url']")
    if (ogUrl) {
      ogUrl.setAttribute("content", window.location.href)
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector("meta[name='twitter:title']")
    if (twitterTitle) {
      twitterTitle.setAttribute("content", article.title)
    }

    const twitterDescription = document.querySelector("meta[name='twitter:description']")
    if (twitterDescription) {
      twitterDescription.setAttribute("content", article.metaDescription)
    }

    // Track page view with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: window.location.pathname,
        page_title: article.title,
      })
    }

    // Cleanup function to reset meta tags when component unmounts
    return () => {
      // Reset to default values
      document.title = originalTitle
      
      const resetMeta = document.querySelector("meta[name='description']")
      if (resetMeta && originalDescription) {
        resetMeta.setAttribute("content", originalDescription)
      }
      
      const resetOgTitle = document.querySelector("meta[property='og:title']")
      if (resetOgTitle && originalOgTitle) {
        resetOgTitle.setAttribute("content", originalOgTitle)
      }
      
      const resetOgDescription = document.querySelector("meta[property='og:description']")
      if (resetOgDescription && originalOgDescription) {
        resetOgDescription.setAttribute("content", originalOgDescription)
      }
      
      const resetOgUrl = document.querySelector("meta[property='og:url']")
      if (resetOgUrl && originalOgUrl) {
        resetOgUrl.setAttribute("content", originalOgUrl)
      }
      
      const resetTwitterTitle = document.querySelector("meta[name='twitter:title']")
      if (resetTwitterTitle && originalTwitterTitle) {
        resetTwitterTitle.setAttribute("content", originalTwitterTitle)
      }
      
      const resetTwitterDescription = document.querySelector("meta[name='twitter:description']")
      if (resetTwitterDescription && originalTwitterDescription) {
        resetTwitterDescription.setAttribute("content", originalTwitterDescription)
      }
    }
  }, [article])
}
