import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import Blog from './Blog'

const BlogWithSchema: FC = () => {
  // Set canonical URL for Blog page
  useCanonicalUrlWithPath('/blog')
  
  usePageMetaManager({
    title: "Industry Iceberg Blog – AI Solutions & Regulatory Insights",
    description: "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries, regulatory compliance, and digital transformation.",
    keywords: "Industry Iceberg blog, AI insights, pharmaceutical AI, regulatory compliance, life sciences technology, digital transformation, industry analysis, expert articles",
    ogTitle: "Industry Iceberg Blog – AI Solutions & Regulatory Insights",
    ogDescription: "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries, regulatory compliance, and digital transformation.",
    twitterTitle: "Industry Iceberg Blog – AI Solutions & Regulatory Insights",
    twitterDescription: "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries, regulatory compliance, and digital transformation."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Industry Iceberg Blog",
    description: "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries.",
    url: "/blog",
    type: "blog",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" }
    ],
    faqs: [
      {
        question: "What topics does the Industry Iceberg blog cover?",
        answer: "Our blog covers AI solutions, regulatory compliance, pharmaceutical technology, life sciences innovation, and digital transformation topics."
      },
      {
        question: "How often is the blog updated?",
        answer: "We regularly update our blog with fresh insights, industry analysis, and expert perspectives on emerging trends in pharmaceutical AI."
      },
      {
        question: "Can I contribute to the Industry Iceberg blog?",
        answer: "We welcome guest contributions from industry experts. Please contact us through our contact form to discuss collaboration opportunities."
      }
    ]
  })

  return <Blog />
}

export default BlogWithSchema
