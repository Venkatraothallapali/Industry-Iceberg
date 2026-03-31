import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import ComplaintSiteSearch from './ComplaintSiteSearch'

const ComplaintSiteSearchWithSchema: FC = () => {
  // Set canonical URL for Complaint Site Search page
  useCanonicalUrlWithPath('/complaint-site-search')
  
  usePageMetaManager({
    title: "Complaint-Based Site Selection | IndustryIceberg AI",
    description: "IndustryIceberg AI helps pharma teams select compliant manufacturing sites using complaint data, quality metrics, and risk-based analysis.",
    keywords: "Complaint-based site selection, manufacturing site evaluation, pharma site performance, quality metrics analysis, regulatory compliance site selection, risk-based site assessment, multi-site comparison",
    ogTitle: "Complaint-Based Site Selection | IndustryIceberg AI",
    ogDescription: "IndustryIceberg AI helps pharma teams select compliant manufacturing sites using complaint data, quality metrics, and risk-based analysis.",
    twitterTitle: "Complaint-Based Site Selection | IndustryIceberg AI",
    twitterDescription: "IndustryIceberg AI helps pharma teams select compliant manufacturing sites using complaint data, quality metrics, and risk-based analysis."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Complaint Site Search – Industry Iceberg",
    description: "Search multiple complaint platforms at once to uncover hidden customer issues and protect your brand reputation.",
    url: "/complaint-site-search",
    type: "complaint-search",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Complaint Site Search", url: "/complaint-site-search" }
    ],
    faqs: [
      {
        question: "What is Complaint Site Search?",
        answer: "Complaint Site Search is a tool that scans multiple complaint platforms to identify customer issues and brand risks."
      },
      {
        question: "How does Complaint Site Search work?",
        answer: "Our tool searches across multiple complaint websites simultaneously, aggregating results to provide comprehensive brand monitoring."
      },
      {
        question: "Why is complaint monitoring important?",
        answer: "Early detection of customer issues helps protect brand reputation, improve customer service, and address problems before they escalate."
      }
    ]
  })

  return <ComplaintSiteSearch />
}

export default ComplaintSiteSearchWithSchema
