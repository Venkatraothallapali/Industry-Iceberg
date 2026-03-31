import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  createAdvancedOrganizationSchema,
  createAdvancedWebsiteSchema,
  createAdvancedWebPageSchema,
  createAdvancedSoftwareSchema,
  createAdvancedServiceSchema,
  createAdvancedBreadcrumbSchema,
  createAdvancedFAQSchema,
  createAdvancedTechArticleSchema,
  createAdvancedContactSchema,
  createAdvancedBlogSchema,
  createArticleSchema,
  createLocalBusinessSchema,
  createVideoObjectSchema,
  createHowToSchema,
  createImageObjectSchema,
  createAggregateRatingSchema,
  createSpeakableSpecification
} from '../utils/advancedSchema'

interface AdvancedSchemaConfig {
  title: string
  description: string
  url: string
  type: 'homepage' | 'product' | 'service' | 'contact' | 'blog' | 'ectd-ai' | 'live-lms' | 'complaint-search' | 'quality-training' | 'video-service' | 'webpage' | 'demo' | 'legal' | 'article' | 'localbusiness'
  breadcrumbs?: Array<{name: string, url: string}>
  faqs?: Array<{question: string, answer: string}>
  features?: string[]
  serviceType?: string
  applicationCategory?: string
  // Article-specific properties
  author?: string
  datePublished?: string
  dateModified?: string
  articleBody?: string
  keywords?: string
  category?: string
  // HowTo properties
  steps?: Array<{name: string; text: string}>
  totalTime?: string
  // Video properties
  videoThumbnail?: string
  videoUploadDate?: string
  // Image properties
  imageUrl?: string
  imageWidth?: number
  imageHeight?: number
  imageCaption?: string
}

export const useAdvancedSchema = (config: AdvancedSchemaConfig) => {
  const location = useLocation()

  useEffect(() => {
    // Only run if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Remove all existing schema scripts
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        script.remove()
      })

    // Base schemas for all pages
    const organizationSchema = createAdvancedOrganizationSchema()
    const websiteSchema = createAdvancedWebsiteSchema()

    // Create breadcrumb schema
    const breadcrumbId = `https://www.industryiceberg.com${config.url}#breadcrumb`
    const breadcrumbSchema = config.breadcrumbs ? 
      createAdvancedBreadcrumbSchema(config.url, config.breadcrumbs) : null

    // Page-specific schemas
    const schemas: any[] = [organizationSchema, websiteSchema]

    // Add main webpage schema
    const webpageSchema = createAdvancedWebPageSchema(
      config.url,
      config.title,
      config.description,
      breadcrumbId
    )
    schemas.push(webpageSchema)

    // Add breadcrumb schema if available
    if (breadcrumbSchema) {
      schemas.push(breadcrumbSchema)
    }

    // Add type-specific schemas
    switch (config.type) {
      case 'homepage': {
        // Add speakable specification for voice search optimization on homepage
        const speakableSchema = createSpeakableSpecification([
          '.hero-title',
          '.hero-description',
          '.feature-title',
          '.feature-description'
        ])
        schemas.push(speakableSchema)
        break
      }

      case 'product': {
        if (config.features && config.applicationCategory) {
          const softwareSchema = createAdvancedSoftwareSchema(
            config.url,
            config.title,
            config.description,
            config.applicationCategory,
            config.features
          )
          schemas.push(softwareSchema)
          
          // Add AggregateRating for product star ratings
          const aggregateRatingSchema = createAggregateRatingSchema(4.8, 127)
          schemas.push(aggregateRatingSchema)

          // Add TechArticle for products
          const techArticleSchema = createAdvancedTechArticleSchema(
            config.url,
            `${config.title} – Transforming Industry with AI`,
            `Learn how ${config.title} leverages artificial intelligence to streamline workflows and improve efficiency in pharmaceutical and life sciences industries.`
          )
          schemas.push(techArticleSchema)
        }
        break
      }

      case 'service': {
        if (config.serviceType) {
          const serviceSchema = createAdvancedServiceSchema(
            config.url,
            config.title,
            config.description,
            config.serviceType
          )
          schemas.push(serviceSchema)
        }
        break
      }

      case 'contact': {
        const contactSchema = createAdvancedContactSchema()
        schemas.push(contactSchema)
        
        // Add LocalBusiness schema for enhanced local SEO
        const localBusinessSchema = createLocalBusinessSchema()
        schemas.push(localBusinessSchema)
        break
      }

      case 'blog': {
        const blogSchema = createAdvancedBlogSchema()
        schemas.push(blogSchema)
        break
      }

      case 'ectd-ai': {
        const ectdSoftwareSchema = createAdvancedSoftwareSchema(
          config.url,
          'eCTD AI',
          'eCTD AI is an AI-powered regulatory submission and lifecycle management platform designed to streamline electronic Common Technical Document (eCTD) workflows, automate compliance, and enhance pharmaceutical submission efficiency.',
          'BusinessApplication',
          [
            'AI-assisted regulatory document generation',
            'Automated eCTD lifecycle management',
            'Submission validation and compliance checks',
            'Structured dossier organization',
            'Real-time collaboration and workflow automation'
          ]
        )
        schemas.push(ectdSoftwareSchema)

        const ectdTechArticleSchema = createAdvancedTechArticleSchema(
          config.url,
          'eCTD AI – Transforming Regulatory Submissions with Artificial Intelligence',
          'Learn how eCTD AI leverages artificial intelligence to streamline regulatory submissions, automate workflows, and improve compliance in pharmaceutical and biotech industries.'
        )
        schemas.push(ectdTechArticleSchema)
        break
      }

      case 'live-lms': {
        const liveLMSSoftwareSchema = createAdvancedSoftwareSchema(
          config.url,
          'Live LMS',
          'Live LMS is a real-time learning management system offering structured industry education, live sessions, and interactive insights.',
          'EducationalApplication',
          [
            'Live interactive classes',
            'Industry-focused learning modules',
            'Structured career-oriented content',
            'Real-time engagement tools'
          ]
        )
        schemas.push(liveLMSSoftwareSchema)
        break
      }

      case 'complaint-search': {
        const complaintServiceSchema = createAdvancedServiceSchema(
          config.url,
          'Complaint Site Search',
          'Complaint Site Search is a tool that allows users to scan multiple complaint and review platforms to identify negative mentions, customer issues, and potential reputation risks.',
          'Online Reputation Management'
        )
        schemas.push(complaintServiceSchema)

        // Add WebApplication schema
        const webAppSchema = {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `https://industryiceberg.com${config.url}#app`,
          "name": "Complaint Site Search Tool",
          "url": `https://industryiceberg.com${config.url}`,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "A web-based tool for searching across complaint websites and identifying brand-related issues, enabling proactive reputation management.",
          "provider": {
            "@id": "https://industryiceberg.com/#organization"
          },
          "featureList": [
            "Search across multiple complaint websites",
            "Identify negative brand mentions",
            "Monitor online reputation risks",
            "Centralized complaint discovery",
            "Quick brand audit capability"
          ]
        }
        schemas.push(webAppSchema)
        break
      }

      case 'quality-training': {
        const qualityServiceSchema = createAdvancedServiceSchema(
          config.url,
          'Quality Training',
          'Professional quality training and compliance education for pharmaceutical and life sciences industries, including GMP, regulatory compliance, and best practices.',
          'Educational Services'
        )
        schemas.push(qualityServiceSchema)
        break
      }

      case 'video-service': {
        const videoServiceSchema = createAdvancedServiceSchema(
          config.url,
          'Video Creation Service',
          'Professional video creation service for marketing, education, and brand storytelling, including scriptwriting, editing, and production.',
          'Video Production & Content Creation'
        )
        schemas.push(videoServiceSchema)

        // Add enhanced VideoObject schema
        const videoSchema = createVideoObjectSchema(
          config.videoThumbnail ? 'Video Creation Service Demo' : 'Video Creation Service Overview',
          'Professional video creation services for marketing, education, and brand storytelling',
          config.videoThumbnail || 'https://www.industryiceberg.com/assets/Video_Gen_Background_Img.png',
          config.videoUploadDate || '2024-01-01'
        )
        schemas.push(videoSchema)
        
        // Add HowTo schema for video production process
        const howToSchema = createHowToSchema(
          'Video Creation Process',
          'Step-by-step guide to professional video creation with Industry Iceberg',
          [
            { name: 'Script Development', text: 'Create compelling scripts tailored to your audience and message' },
            { name: 'Storyboarding', text: 'Visual planning and scene composition for effective storytelling' },
            { name: 'Production', text: 'Professional filming with quality equipment and expert direction' },
            { name: 'Post-Production', text: 'Editing, effects, sound design, and final polish' },
            { name: 'Delivery', text: 'Multiple format delivery optimized for your platforms' }
          ],
          'P5D'
        )
        schemas.push(howToSchema)
        break
      }

      case 'webpage':
        // Generic webpage - already has WebPage schema added above
        break

      case 'demo':
        // Demo pages - already has WebPage schema added above
        break

      case 'legal':
        // Legal pages - already has WebPage schema added above
        break

      case 'article': {
        // Article pages - add Article schema with blog data
        if (config.author && config.datePublished && config.articleBody) {
          const articleSchema = createArticleSchema(
            config.url,
            config.title,
            config.description,
            config.author,
            config.datePublished,
            config.dateModified || config.datePublished,
            config.articleBody,
            config.keywords || '',
            config.category || 'Blog'
          )
          schemas.push(articleSchema)
        }
        
        // Add ImageObject schema if image properties provided
        if (config.imageUrl) {
          const imageSchema = createImageObjectSchema(
            config.imageUrl,
            config.imageWidth || 1200,
            config.imageHeight || 630,
            config.imageCaption || config.title,
            config.title
          )
          schemas.push(imageSchema)
        }
        break
      }

      default:
        break
    }

    // Add FAQ schema if provided
    if (config.faqs && config.faqs.length > 0) {
      const faqSchema = createAdvancedFAQSchema(config.faqs)
      schemas.push(faqSchema)
    }

    // Inject all schemas into the page using @graph structure for cleaner JSON-LD
    if (schemas.length > 0) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      
      // Use @graph structure when multiple schemas exist for better organization
      const schemaData = schemas.length === 1 
        ? schemas[0]
        : {
            "@context": "https://schema.org",
            "@graph": schemas
          }
      
      script.textContent = JSON.stringify(schemaData, null, 2)
      script.id = 'structured-data-graph'
      document.head.appendChild(script)
    }
    }
  }, [location.pathname, config])
}
