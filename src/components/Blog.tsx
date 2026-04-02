import type { FC } from 'react'
import { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
import { blogData } from './blogData'
import { usePageMetaManager } from '../hooks/usePageMetaManager'

const Blog: FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Set proper meta tags for blog listing page
  usePageMetaManager({
    title: "Blog | Industry Iceberg",
    description: "Read the latest insights on regulatory compliance, AI in life sciences, and industry innovations from the Industry Iceberg team.",
    ogTitle: "Blog | Industry Iceberg",
    ogDescription: "Read the latest insights on regulatory compliance, AI in life sciences, and industry innovations from the Industry Iceberg team.",
    twitterTitle: "Blog | Industry Iceberg",
    twitterDescription: "Read the latest insights on regulatory compliance, AI in life sciences, and industry innovations from the Industry Iceberg team."
  })

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

  // Get recent blogs (last 5 posts)
  const recentBlogs = [...blogPosts]
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })
    .slice(0, 5)

  // Get unique categories with counts
  const categories = blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  // Filter posts by selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  // Get posts organized by category
  const postsByCategory = Object.keys(categories).map(category => ({
    category,
    count: categories[category],
    posts: blogPosts.filter(post => post.category === category).slice(0, 3) // Top 3 per category
  }))

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

      {/* Blog Posts Grid with Sidebar */}
      <section className="blog-content">
        <div className="blog-container blog-layout">
          {/* Main Content - Blog Posts */}
          <div className="blog-main">
            {/* Search Bar */}
            <div className="blog-search-container">
              <div className="blog-search-box">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search blogs by title, topic, or keyword..."
                  className="blog-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="search-clear-btn"
                    onClick={() => setSearchQuery('')}
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
              {searchQuery && (
                <span className="search-results-count">
                  {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} found
                </span>
              )}
            </div>

            {selectedCategory && (
              <div className="category-filter-bar">
                <span className="filter-label">Showing: {selectedCategory}</span>
                <button 
                  className="clear-filter-btn"
                  onClick={() => setSelectedCategory(null)}
                >
                  Clear Filter ✕
                </button>
              </div>
            )}
            
            <div className="blog-posts-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
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
                      href={`/blog/${post.slug}`}
                      className="blog-read-more"
                      onClick={(e) => {
                        e.preventDefault()
                        navigate(`/blog/${post.slug}`)
                      }}
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))
              ) : (
                <div className="no-results-message">
                  <svg className="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <h3>No blogs found</h3>
                  <p>Try adjusting your search or browse by category</p>
                  <button
                    className="clear-search-btn"
                    onClick={() => {setSearchQuery(''); setSelectedCategory(null);}}
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Categories Widget */}
            <div className="sidebar-widget categories-widget">
              <h3 className="widget-title">Categories</h3>
              <div className="categories-list">
                {postsByCategory.map(({ category, count }) => (
                  <div 
                    key={category}
                    className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  >
                    <span className="category-name">{category}</span>
                    <span className="category-count">({count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Blogs Widget */}
            <div className="sidebar-widget recent-blogs-widget">
              <h3 className="widget-title">Recent Blogs</h3>
              <div className="recent-blogs-list">
                {recentBlogs.map((post) => (
                  <div 
                    key={post.id} 
                    className="recent-blog-item"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    <div className="recent-blog-category">{post.category}</div>
                    <h4 className="recent-blog-title">{post.title}</h4>
                    <span className="recent-blog-date">{post.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category-wise Blogs Widget */}
            {!selectedCategory && postsByCategory.map(({ category, posts }) => (
              <div key={category} className="sidebar-widget category-section">
                <h3 className="widget-title">{category}</h3>
                <div className="category-posts-list">
                  {posts.map((post) => (
                    <div 
                      key={post.id}
                      className="category-post-item"
                      onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                      <h4 className="category-post-title">{post.title}</h4>
                      <span className="category-post-date">{post.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </aside>
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
