import type { FC } from 'react'
import './CustomerStories.css'

interface CustomerStory {
  id: number
  name: string
  company: string
  role: string
  image: string
  testimonial: string
  industry: string
}

const CustomerStories: FC = () => {
  const stories: CustomerStory[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'PharmaCorp Inc.',
      role: 'Compliance Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      testimonial: 'The GMP Compliance Platform has revolutionized our audit preparation process. We\'ve reduced preparation time by 60% and significantly improved our FDA inspection outcomes.',
      industry: 'Pharmaceutical Manufacturing'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'BioTech Solutions',
      role: 'Quality Assurance Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      testimonial: 'IndustryIceberg\'s AI Drafting Platform has transformed our documentation workflow. The AI summarization feature alone saves us 20 hours per week while maintaining accuracy.',
      industry: 'Biotechnology'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'MedDevice Innovations',
      role: 'Regulatory Affairs Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      testimonial: 'The historical pattern analysis helped us identify recurring compliance issues we weren\'t aware of. This proactive approach has transformed our compliance strategy.',
      industry: 'Medical Devices'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Global Pharma Ltd.',
      role: 'VP of Quality',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      testimonial: 'Outstanding platform with exceptional support. The CAPA recommendations are precise and have helped us address compliance issues more effectively than ever before.',
      industry: 'Pharmaceuticals'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      company: 'HealthTech Industries',
      role: 'Documentation Manager',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      testimonial: 'The advanced search and track changes features make collaboration seamless. Our team productivity has increased dramatically since implementing IndustryIceberg solutions.',
      industry: 'Healthcare Technology'
    },
    {
      id: 6,
      name: 'Robert Kim',
      company: 'Advanced Therapeutics',
      role: 'Compliance Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      testimonial: 'The observation analysis tool is incredibly accurate. It\'s like having a compliance expert available 24/7. IndustryIceberg has become essential to our operations.',
      industry: 'Therapeutics'
    }
  ]

  return (
    <section className="customer-stories">
      <div className="stories-container">
        <div className="stories-header">
          <h2 className="stories-title">Customer Stories</h2>
          <p className="stories-subtitle">
            See how leading organizations are transforming their operations with IndustryIceberg solutions
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <p className="story-testimonial">"{story.testimonial}"</p>
              <div className="story-author">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="author-image"
                  loading="lazy"
                />
                <div className="author-info">
                  <div className="author-name">{story.name}</div>
                  <div className="author-role">{story.role}</div>
                  <div className="author-company">{story.company}</div>
                  <div className="author-industry">{story.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
