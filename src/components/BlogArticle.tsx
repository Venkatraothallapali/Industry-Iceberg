import type { FC } from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './BlogArticle.css'
import { blogData } from './blogData'

const BlogArticle: FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const articleId = id ? parseInt(id, 10) : null
  const article = articleId ? blogData.find(post => post.id === articleId) : null

  // Scroll to top when component mounts or article ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!article) {
    return (
      <div className="blog-article-page">
        <div className="blog-article-container">
          <h1>Article Not Found</h1>
          <button 
            onClick={() => {
              navigate('/blog')
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'auto' })
              }, 0)
            }} 
            className="back-button"
          >
            Back to Blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-article-page">
      <div className="blog-article-container">
        <article className="blog-article">
          <div className="blog-article-header">
            <span className="blog-article-category">{article.category}</span>
            <span className="blog-article-read-time">{article.readTime}</span>
          </div>

          <h1 className="blog-article-title">{article.title}</h1>

          <div className="blog-article-meta">
            <span className="blog-article-author">By: {article.author}</span>
            <span className="blog-article-date">{article.date}</span>
          </div>

          {article.overview && (
            <section className="blog-article-section">
              <h2 className="blog-article-section-title">Overview</h2>
              <div className="section-content">
                {article.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {article.summary && (
            <section className="blog-article-section">
              <h2 className="blog-article-section-title">Summary</h2>
              <div className="section-content">
                {article.summary.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {article.personalInsight && (
            <section className="blog-article-section">
              <h2 className="blog-article-section-title">Personal Insight</h2>
              <div className="section-content">
                {article.personalInsight.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {article.links && article.links.length > 0 && (
            <section className="blog-article-section">
              <h2 className="blog-article-section-title">Reference Links</h2>
              <div className="section-content">
                <ul className="blog-post-links">
                  {article.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <div className="blog-article-footer">
            <button 
              onClick={() => {
                navigate('/blog')
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'auto' })
                }, 0)
              }} 
              className="back-button"
            >
              ← Back to Blog
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogArticle
