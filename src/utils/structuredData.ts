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
  "url": "https://industryiceberg.com",
  "logo": "https://industryiceberg.com/assets/LOGO_WEB.ico",
  "description": "AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation",
  "sameAs": [
    // Add social media URLs when available
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://industryiceberg.com/contact"
  }
})

export const createWebsiteData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Industry Iceberg",
  "url": "https://industryiceberg.com",
  "description": "AI-driven enterprise solutions for regulatory compliance, quality management, and life sciences innovation",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://industryiceberg.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})

export const createServiceData = (serviceName: string, title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": title,
  "description": description,
  "url": `https://industryiceberg.com${url}`,
  "identifier": serviceName,
  "provider": {
    "@type": "Organization",
    "name": "Industry Iceberg",
    "url": "https://industryiceberg.com"
  },
  "serviceType": "Professional Services",
  "category": "Regulatory Compliance & Life Sciences"
})

export const createBreadcrumbData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://industryiceberg.com${crumb.url}`
  }))
})
