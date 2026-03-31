import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import ContactUs from './ContactUs'

const ContactUsWithMeta: FC = () => {
  // Set canonical URL for contact page
  useCanonicalUrlWithPath('/contact-us')
  
  usePageMetaManager({
    title: "Contact IndustryIceberg | AI Solutions for Pharma",
    description: "Contact IndustryIceberg to explore AI-powered solutions for pharma, compliance, and enterprise transformation with expert support.",
    keywords: "contact IndustryIceberg, pharma AI solutions contact, life sciences AI support, compliance solutions inquiry, enterprise AI services, pharma technology consulting",
    ogTitle: "Contact IndustryIceberg | AI Solutions for Pharma",
    ogDescription: "Contact IndustryIceberg to explore AI-powered solutions for pharma, compliance, and enterprise transformation with expert support.",
    twitterTitle: "Contact IndustryIceberg | AI Solutions for Pharma",
    twitterDescription: "Contact IndustryIceberg to explore AI-powered solutions for pharma, compliance, and enterprise transformation with expert support."
  })

  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: "Contact IndustryIceberg | AI Solutions for Pharma",
    description: "Contact IndustryIceberg to explore AI-powered solutions for pharma, compliance, and enterprise transformation with expert support.",
    url: "/contact-us",
    type: "contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact-us" }
    ],
    faqs: [
      {
        question: "How can I contact IndustryIceberg for AI solutions?",
        answer: "You can contact IndustryIceberg through our contact form on this page, and our team will respond within 24 hours to discuss your AI solution needs."
      },
      {
        question: "What information should I provide when contacting IndustryIceberg?",
        answer: "Please provide your company name, contact information, and a brief description of your AI solution requirements or compliance challenges you're facing."
      },
      {
        question: "Does IndustryIceberg offer consultations for AI implementation?",
        answer: "Yes, we offer free initial consultations to assess your needs and recommend the most suitable AI solutions for your pharmaceutical or life sciences company."
      }
    ]
  })

  return <ContactUs />
}

export default ContactUsWithMeta
