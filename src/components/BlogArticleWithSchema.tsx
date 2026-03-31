import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import { useParams } from 'react-router-dom'
import BlogArticle from './BlogArticle'
import { blogData } from './blogData'

const BlogArticleWithSchema: FC = () => {
  const { slug } = useParams()
  
  // Find the current blog article
  const article = blogData.find(post => post.slug === slug)
  
  // Set canonical URL for blog article page
  useCanonicalUrlWithPath(`/blog/${slug}`)
  
  usePageMetaManager(article ? {
    title: `${article.title} | Industry Iceberg`,
    description: article.metaDescription,
    keywords: `${article.category}, ${article.title}, Industry Iceberg, AI solutions, pharmaceutical AI, regulatory compliance`,
    ogTitle: `${article.title} | Industry Iceberg`,
    ogDescription: article.metaDescription,
    twitterTitle: `${article.title} | Industry Iceberg`,
    twitterDescription: article.metaDescription
  } : {
    title: "Industry Iceberg Blog – AI Solutions & Regulatory Insights",
    description: "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries, regulatory compliance, and digital transformation.",
    keywords: "Industry Iceberg blog, AI insights, pharmaceutical AI, regulatory compliance, life sciences technology, digital transformation, industry analysis, expert articles",
    ogTitle: "Industry Iceberg Blog – AI Solutions & Regulatory Insights",
    ogDescription: "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries, regulatory compliance, and digital transformation.",
    twitterTitle: "Industry Iceberg Blog – AI Solutions & Regulatory Insights",
    twitterDescription: "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries, regulatory compliance, and digital transformation."
  })

  // Convert date string to ISO format for schema
  const parseDate = (dateStr: string): string => {
    const dateMap: Record<string, string> = {
      'January 2026': '2026-01-01',
      'December 2025': '2025-12-01',
      'November 2025': '2025-11-01',
      'October 2025': '2025-10-01',
      'September 2025': '2025-09-01',
      'April 2025': '2025-04-01',
      'March 2025': '2025-03-01',
      'February 2025': '2025-02-01',
      'January 2025': '2025-01-01',
      'December 2024': '2024-12-01',
      'September 2024': '2024-09-01'
    }
    return dateMap[dateStr] || '2024-01-01'
  }

  // Build article body from overview, summary, and personal insight
  const buildArticleBody = (article: typeof blogData[0]): string => {
    const parts: string[] = []
    if (article.overview) parts.push(article.overview)
    if (article.summary) parts.push(article.summary)
    if (article.personalInsight) parts.push(article.personalInsight)
    return parts.join('\n\n')
  }

  // Add comprehensive advanced schema markup with Article schema
  useAdvancedSchema(article ? {
    title: article.title,
    description: article.metaDescription,
    url: `/blog/${slug}`,
    type: "article",
    author: article.author,
    datePublished: parseDate(article.date),
    dateModified: parseDate(article.date),
    articleBody: buildArticleBody(article),
    keywords: `${article.category}, AI solutions, pharmaceutical AI, regulatory compliance, life sciences`,
    category: article.category,
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: article.title, url: `/blog/${slug}` }
    ],
    faqs: [
      {
        question: "What topics does IndustryIceberg blog cover?",
        answer: "Our blog covers AI solutions, regulatory compliance, pharmaceutical technology, life sciences innovation, and digital transformation topics."
      },
      {
        question: "How often is the blog updated?",
        answer: "We regularly update our blog with fresh insights, industry analysis, and expert perspectives on emerging trends in pharmaceutical AI."
      },
      {
        question: "Can I contribute to the IndustryIceberg blog?",
        answer: "We welcome guest contributions from industry experts. Please contact us through our contact form to discuss collaboration opportunities."
      }
    ]
  } : {
    title: "Industry Iceberg Blog Article",
    description: "Expert insights on AI solutions for pharmaceutical and life sciences industries.",
    url: `/blog/${slug}`,
    type: "webpage",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: "Article", url: `/blog/${slug}` }
    ],
    faqs: [
      {
        question: "What topics does IndustryIceberg blog cover?",
        answer: "Our blog covers AI solutions, regulatory compliance, pharmaceutical technology, life sciences innovation, and digital transformation topics."
      },
      {
        question: "How often is the blog updated?",
        answer: "We regularly update our blog with fresh insights, industry analysis, and expert perspectives on emerging trends in pharmaceutical AI."
      },
      {
        question: "Can I contribute to the IndustryIceberg blog?",
        answer: "We welcome guest contributions from industry experts. Please contact us through our contact form to discuss collaboration opportunities."
      }
    ]
  })

  return <BlogArticle />
}

export default BlogArticleWithSchema
