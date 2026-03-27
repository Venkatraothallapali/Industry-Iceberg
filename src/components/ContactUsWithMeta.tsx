import type { FC } from 'react'
import { usePageMetaManager } from '../hooks/usePageMetaManager'
import ContactUs from './ContactUs'

const ContactUsWithMeta: FC = () => {
  usePageMetaManager({
    title: "Contact Us | Industry Iceberg",
    description: "Get in touch with Industry Iceberg for AI-driven enterprise solutions, regulatory compliance consulting, and life sciences innovation. Our experts are ready to help transform your business.",
    ogTitle: "Contact Us | Industry Iceberg",
    ogDescription: "Get in touch with Industry Iceberg for AI-driven enterprise solutions, regulatory compliance consulting, and life sciences innovation. Our experts are ready to help transform your business.",
    twitterTitle: "Contact Us | Industry Iceberg",
    twitterDescription: "Get in touch with Industry Iceberg for AI-driven enterprise solutions, regulatory compliance consulting, and life sciences innovation. Our experts are ready to help transform your business."
  })

  return <ContactUs />
}

export default ContactUsWithMeta
