import { Navigate } from 'react-router-dom'
import { blogData } from './blogData'

const RedirectToSlug = () => {
  // Extract the numeric ID from the URL
  const urlParts = window.location.pathname.split('/')
  const idParam = urlParts[urlParts.length - 1]
  const numericId = parseInt(idParam, 10)

  // Find the blog post with this ID
  const blog = blogData.find(post => post.id === numericId)

  // If blog found, redirect to slug-based URL
  if (blog) {
    return <Navigate to={`/blog/${blog.slug}`} replace />
  }

  // If not found, redirect to main blog page
  return <Navigate to="/blog" replace />
}

export default RedirectToSlug
