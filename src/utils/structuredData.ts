// Structured Data (JSON-LD) for SEO
export const addStructuredData = (type: string, data: any) => {
  // Remove existing structured data of the same type
  const existingScript = document.querySelector(`script[data-structured-data="${type}"]`)
  if (existingScript) {
    existingScript.remove()
  }

  // Create new structured data script
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-structured-data', type)
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export const createOrganizationData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Industry Iceberg",
  "url": "https://www.industryiceberg.com",
  "logo": "https://www.industryiceberg.com/assets/LOGO_WEB.ico",
  "description": "AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation",
  "foundingDate": "2023",
  "areaServed": "Worldwide",
  "language": "English",
  "knowsAbout": [
    "AI Solutions",
    "Regulatory Compliance",
    "Life Sciences",
    "Pharmaceutical Technology",
    "Quality Management",
    "Document Automation",
    "Clinical Research"
  ],
  "sameAs": [
    // Add social media URLs when available
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://www.industryiceberg.com/contact-us",
    "availableLanguage": "English"
  }
})

export const createWebsiteData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Industry Iceberg",
  "url": "https://www.industryiceberg.com",
  "description": "AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.industryiceberg.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Industry Iceberg",
    "url": "https://www.industryiceberg.com"
  }
})

export const createWebPageData = (title: string, description: string, url: string, lastModified?: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": `https://www.industryiceberg.com${url}`,
  "lastReviewed": lastModified || new Date().toISOString(),
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Industry Iceberg",
    "url": "https://www.industryiceberg.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Industry Iceberg",
    "url": "https://www.industryiceberg.com"
  }
})

export const createProductData = (name: string, description: string, url: string, category: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": name,
  "description": description,
  "url": `https://www.industryiceberg.com${url}`,
  "applicationCategory": category,
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Industry Iceberg",
    "url": "https://www.industryiceberg.com"
  }
})

export const createServiceData = (serviceName: string, title: string, description: string, url: string, provider?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": title,
  "description": description,
  "url": `https://www.industryiceberg.com${url}`,
  "provider": {
    "@type": "Organization",
    "name": provider || "Industry Iceberg",
    "url": "https://www.industryiceberg.com"
  },
  "serviceType": serviceName,
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `https://www.industryiceberg.com${url}`
  }
})

export const createBreadcrumbData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://www.industryiceberg.com${crumb.url}`
  }))
})

export const createFAQData = (faqs: Array<{question: string, answer: string}>) => ({
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

export const createContactData = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Industry Iceberg",
  "description": "Contact IndustryIceberg to explore AI-powered solutions for pharma, compliance, and enterprise transformation with expert support.",
  "url": "https://www.industryiceberg.com/contact-us",
  "mainEntity": {
    "@type": "Organization",
    "name": "Industry Iceberg",
    "url": "https://www.industryiceberg.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  }
})

export const createArticleData = (title: string, description: string, url: string, author?: string, datePublished?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": `https://www.industryiceberg.com${url}`,
  "datePublished": datePublished || new Date().toISOString(),
  "dateModified": new Date().toISOString(),
  "author": {
    "@type": "Organization",
    "name": author || "Industry Iceberg"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Industry Iceberg",
    "url": "https://www.industryiceberg.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.industryiceberg.com${url}`
  }
})
