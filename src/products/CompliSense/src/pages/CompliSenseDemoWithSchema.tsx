import type { FC } from 'react'
import { usePageMetaManager } from '../../../../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../../../../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../../../../hooks/useAdvancedSchema'
import RequestDemo from './ComplisenseRequestDemo'

const CompliSenseDemoWithSchema: FC = () => {
  // Set canonical URL
  useCanonicalUrlWithPath('/complisense/request-demo')
  
  usePageMetaManager({
    title: "Request CompliSense Demo | cGMP Intelligence Platform | Industry Iceberg",
    description: "Schedule a personalized demo of CompliSense cGMP intelligence platform. Experience real-time FDA 483 insights, GMP trend analysis, and compliance analytics for your operations.",
    keywords: "CompliSense demo, cGMP intelligence demo, FDA 483 demo, GMP analytics demo, compliance dashboard demo, regulatory intelligence demo",
    ogTitle: "Request CompliSense Demo | cGMP Intelligence Platform | Industry Iceberg",
    ogDescription: "Schedule a personalized demo of CompliSense cGMP intelligence platform. Experience real-time FDA 483 insights, GMP trend analysis, and compliance analytics for your operations.",
    twitterTitle: "Request CompliSense Demo | cGMP Intelligence Platform | Industry Iceberg",
    twitterDescription: "Schedule a personalized demo of CompliSense cGMP intelligence platform. Experience real-time FDA 483 insights, GMP trend analysis, and compliance analytics for your operations."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Request CompliSense Demo | cGMP Intelligence Platform",
    description: "Schedule a personalized demo of CompliSense cGMP intelligence platform for real-time FDA 483 insights and compliance analytics.",
    url: "/complisense/request-demo",
    type: "contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "CompliSense", url: "/complisense" },
      { name: "Request Demo", url: "/complisense/request-demo" }
    ],
    faqs: [
      {
        question: "What will I see in the CompliSense demo?",
        answer: "You'll see live demonstrations of real-time FDA 483 analytics, GMP trend monitoring, compliance dashboards, observation pattern analysis, and risk assessment tools tailored to your industry."
      },
      {
        question: "How does CompliSense analyze FDA 483 observations?",
        answer: "CompliSense uses AI to analyze thousands of FDA 483 observations, identifying trends, common deficiencies, and risk patterns to help you proactively address compliance gaps."
      },
      {
        question: "Can I track specific GMP areas in the dashboard?",
        answer: "Yes, you can customize your dashboard to focus on specific CFR sections, inspection types, facility types, or therapeutic areas relevant to your operations."
      },
      {
        question: "How often is the FDA inspection data updated?",
        answer: "Our FDA inspection data is updated daily with the latest 483 observations, warning letters, and inspection classifications to ensure you have current intelligence."
      },
      {
        question: "Does CompliSense provide competitor intelligence?",
        answer: "Yes, you can monitor inspection trends across companies, facilities, and industry segments to benchmark your compliance performance against peers."
      },
      {
        question: "What support is included with CompliSense?",
        answer: "All CompliSense subscriptions include onboarding training, dedicated support, regular data updates, and access to compliance webinars and industry insights."
      }
    ]
  })

  return <RequestDemo />
}

export default CompliSenseDemoWithSchema
