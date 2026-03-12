import type { FC } from 'react'
import { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
import { blogData } from './blogData'

const Blog: FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (email) {
      const subject = encodeURIComponent('Newsletter Subscription Request')
      const body = encodeURIComponent(`Subscribed for newsletter and receive the latest insights, industry updates.\n\nEmail: ${email}`)
      const mailtoLink = `mailto:parthasarathi.j@ectdglobal.com?subject=${subject}&body=${body}`
      
      window.location.href = mailtoLink
      
      // Reset form
      setEmail('')
    }
  }
  
  const blogPosts = blogData

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Industry Insights & Updates</h1>
          <p className="blog-hero-subtitle">
            Stay informed with the latest trends, best practices, and expert insights 
            in GMP compliance, quality management, and life sciences innovation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-content">
        <div className="blog-container">
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-header">
                  <span className="blog-post-category">{post.category}</span>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-footer">
                  <div className="blog-post-author">
                    <span className="blog-author-name">{post.author}</span>
                    <span className="blog-post-date">{post.date}</span>
                  </div>
                  <a 
                    href={`/blog/${post.id}`}
                    className="blog-read-more"
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(`/blog/${post.id}`)
                    }}
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter and receive the latest insights, 
              industry updates, and best practices delivered to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
