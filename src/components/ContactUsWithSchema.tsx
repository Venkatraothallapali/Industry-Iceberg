import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import { useCanonicalUrlWithPath } from '../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../hooks/useAdvancedSchema'
import ContactUs from './ContactUs'

const ContactUsWithSchema: FC = () => {
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
    title: "Contact Industry Iceberg | AI Solutions for Pharma",
    description: "Contact Industry Iceberg to explore AI-powered solutions for pharmaceutical and life sciences industries.",
    url: "/contact-us",
    type: "contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact-us" }
    ],
    faqs: [
      {
        question: "How can I contact Industry Iceberg for AI solutions?",
        answer: "You can contact Industry Iceberg through our contact form, email, or phone. Our team responds within 24 hours to discuss your AI solution needs for pharmaceutical and life sciences industries."
      },
      {
        question: "What information should I provide when contacting Industry Iceberg?",
        answer: "Please provide your company name, contact information, and a brief description of your AI solution requirements, compliance challenges, or digital transformation goals. This helps us prepare a tailored response."
      },
      {
        question: "Does Industry Iceberg offer free consultations?",
        answer: "Yes, we offer free initial consultations to assess your needs and recommend suitable AI solutions for your pharmaceutical or life sciences company. Schedule a demo to learn more."
      },
      {
        question: "What industries does Industry Iceberg serve?",
        answer: "We serve pharmaceutical companies, biotechnology firms, medical device manufacturers, contract manufacturing organizations (CMOs), contract research organizations (CROs), and other life sciences companies."
      },
      {
        question: "How quickly can Industry Iceberg implement AI solutions?",
        answer: "Implementation timelines vary based on solution complexity and your specific requirements. Typical implementations range from 4-12 weeks. Contact us for a detailed project timeline."
      },
      {
        question: "Does Industry Iceberg provide ongoing support?",
        answer: "Yes, we provide comprehensive ongoing support including training, maintenance, updates, and continuous optimization of your AI solutions to ensure maximum value and compliance."
      }
    ]
  })

  return <ContactUs />
}

export default ContactUsWithSchema
