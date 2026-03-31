// Advanced Schema Markup for Search Engine Visibility
// Based on Google's recommended best practices for rich snippets

export const createAdvancedOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.industryiceberg.com/#organization",
  "name": "Industry Iceberg",
  "url": "https://www.industryiceberg.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.industryiceberg.com/assets/LOGO_WEB.ico",
    "width": 512,
    "height": 512
  },
  "description": "AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation",
  "foundingDate": "2023",
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "knowsAbout": [
    "AI Solutions",
    "Regulatory Compliance",
    "Life Sciences",
    "Pharmaceutical Technology",
    "Quality Management",
    "Document Automation",
    "Clinical Research",
    "eCTD Submissions",
    "Learning Management Systems"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/industryiceberg"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://www.industryiceberg.com/contact-us",
    "availableLanguage": "English"
  }
})

export const createAdvancedWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.industryiceberg.com/#website",
  "url": "https://www.industryiceberg.com/",
  "name": "Industry Iceberg",
  "description": "AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation",
  "publisher": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.industryiceberg.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})

export const createAdvancedWebPageSchema = (url: string, name: string, description: string, breadcrumb?: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://www.industryiceberg.com${url}#webpage`,
  "url": `https://www.industryiceberg.com${url}`,
  "name": name,
  "description": description,
  "isPartOf": {
    "@id": "https://www.industryiceberg.com/#website"
  },
  "about": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "breadcrumb": breadcrumb ? { "@id": breadcrumb } : undefined,
  "lastReviewed": new Date().toISOString(),
  "inLanguage": "en-US"
})

export const createAdvancedSoftwareSchema = (url: string, name: string, description: string, category: string, features: string[]) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `https://www.industryiceberg.com${url}#software`,
  "name": name,
  "url": `https://www.industryiceberg.com${url}`,
  "applicationCategory": category,
  "operatingSystem": "Web",
  "description": description,
  "provider": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "featureList": features,
  "offers": {
    "@type": "Offer",
    "url": `https://www.industryiceberg.com${url}`,
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
})

export const createAdvancedServiceSchema = (url: string, name: string, description: string, serviceType: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://www.industryiceberg.com${url}#service`,
  "name": name,
  "url": `https://www.industryiceberg.com${url}`,
  "description": description,
  "provider": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "serviceType": serviceType,
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceLocation": {
      "@type": "Place",
      "name": "Online"
    }
  }
})

export const createAdvancedBreadcrumbSchema = (url: string, breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `https://www.industryiceberg.com${url}#breadcrumb`,
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://www.industryiceberg.com${crumb.url}`
  }))
})

export const createAdvancedFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

// Enhanced TechArticle schema with complete structured data
export const createAdvancedTechArticleSchema = (
  url: string,
  headline: string,
  description: string,
  datePublished?: string,
  dateModified?: string,
  imageUrl?: string
) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `https://www.industryiceberg.com${url}#article`,
  "url": `https://www.industryiceberg.com${url}`,
  "headline": headline,
  "description": description,
  "image": {
    "@type": "ImageObject",
    "url": imageUrl || "https://www.industryiceberg.com/assets/og-image.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Organization",
    "name": "Industry Iceberg",
    "url": "https://www.industryiceberg.com"
  },
  "publisher": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "mainEntityOfPage": {
    "@id": `https://www.industryiceberg.com${url}#webpage`,
    "@type": "WebPage"
  },
  "datePublished": datePublished || new Date().toISOString(),
  "dateModified": dateModified || new Date().toISOString()
})

export const createAdvancedContactSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.industryiceberg.com/contact-us#webpage",
  "url": "https://www.industryiceberg.com/contact-us",
  "name": "Contact Industry Iceberg",
  "description": "Contact IndustryIceberg to explore AI-powered solutions for pharma, compliance, and enterprise transformation with expert support.",
  "isPartOf": {
    "@id": "https://www.industryiceberg.com/#website"
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "breadcrumb": {
    "@id": "https://www.industryiceberg.com/contact-us#breadcrumb"
  }
})

export const createAdvancedBlogSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.industryiceberg.com/blog#webpage",
  "url": "https://www.industryiceberg.com/blog",
  "name": "Industry Iceberg Blog",
  "description": "Insights, updates, and expert analysis on AI solutions for pharmaceutical and life sciences industries.",
  "publisher": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "inLanguage": "en-US",
  "breadcrumb": {
    "@id": "https://www.industryiceberg.com/blog#breadcrumb"
  }
})

export const createArticleSchema = (
  url: string,
  headline: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  articleBody: string,
  keywords: string,
  category: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `https://www.industryiceberg.com${url}#article`,
  "url": `https://www.industryiceberg.com${url}`,
  "headline": headline,
  "description": description,
  "image": {
    "@type": "ImageObject",
    "url": "https://www.industryiceberg.com/assets/og-image.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Organization",
    "name": author,
    "url": "https://www.industryiceberg.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.industryiceberg.com/assets/LOGO_WEB.ico"
    }
  },
  "publisher": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "mainEntityOfPage": {
    "@id": `https://www.industryiceberg.com${url}#webpage`,
    "@type": "WebPage"
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "dateCreated": datePublished,
  "articleSection": category,
  "articleBody": articleBody,
  "wordCount": articleBody ? articleBody.split(' ').length : 0,
  "keywords": keywords,
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "https://www.industryiceberg.com/blog#webpage"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".blog-article-title", ".blog-article-section-title", ".section-content"]
  }
})

// LocalBusiness schema for contact page - enhances local SEO
export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.industryiceberg.com/#localbusiness",
  "name": "Industry Iceberg",
  "url": "https://www.industryiceberg.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.industryiceberg.com/assets/LOGO_WEB.ico",
    "width": 512,
    "height": 512
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://www.industryiceberg.com/assets/og-image.jpg"
  },
  "description": "AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide"
  },
  "sameAs": [
    "https://www.linkedin.com/company/industryiceberg"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  }
})

// VideoObject schema for video creation service
export const createVideoObjectSchema = (
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string
) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": `https://www.industryiceberg.com/video-creation-service#video`,
  "name": name,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "uploadDate": uploadDate,
  "duration": "PT2M30S",
  "contentUrl": "https://www.industryiceberg.com/video-creation-service",
  "embedUrl": "https://www.industryiceberg.com/video-creation-service",
  "publisher": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "productionCompany": {
    "@id": "https://www.industryiceberg.com/#organization"
  },
  "inLanguage": "en-US"
})

// HowTo schema for service pages with step-by-step processes
export const createHowToSchema = (
  name: string,
  description: string,
  steps: Array<{ name: string; text: string }>,
  totalTime: string
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `https://www.industryiceberg.com${name.toLowerCase().replace(/\s+/g, '-')}-howto`,
  "name": name,
  "description": description,
  "totalTime": totalTime,
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "Contact for pricing"
  },
  "supply": [],
  "tool": [],
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "url": `https://www.industryiceberg.com/video-creation-service#step${index + 1}`
  }))
})

// AggregateRating schema for product reviews and ratings
export const createAggregateRatingSchema = (
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5
) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": ratingValue.toString(),
  "reviewCount": reviewCount.toString(),
  "bestRating": bestRating.toString()
})

// Review schema for individual customer reviews
export const createReviewSchema = (
  authorName: string,
  reviewText: string,
  ratingValue: number,
  datePublished?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": authorName
  },
  "reviewBody": reviewText,
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": ratingValue.toString(),
    "bestRating": "5"
  },
  "datePublished": datePublished || new Date().toISOString()
})

// SpeakableSpecification for voice search optimization
export const createSpeakableSpecification = (
  cssSelectors: string[]
) => ({
  "@context": "https://schema.org",
  "@type": "SpeakableSpecification",
  "cssSelector": cssSelectors
})

// End of file
export const createImageObjectSchema = (
  url: string,
  width: number,
  height: number,
  caption: string,
  name: string
) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `https://www.industryiceberg.com${url}#image`,
  "contentUrl": `https://www.industryiceberg.com${url}`,
  "url": `https://www.industryiceberg.com${url}`,
  "width": width,
  "height": height,
  "caption": caption,
  "name": name,
  "representativeOfPage": true,
  "inLanguage": "en-US"
})
