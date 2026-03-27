# Analytics Implementation Examples

This document provides examples of how to implement analytics tracking in various components.

---

## Button Click Tracking Examples

### 1. Primary CTA Buttons
```tsx
import { trackButtonClick } from '../utils/analytics'

// Example: Get Started Button
<button
  className="btn-primary"
  onClick={() => {
    trackButtonClick('Get Started', 'Get Started', {
      location: 'hero_section',
      button_type: 'primary_cta'
    })
    // Your existing logic
    navigate('/signup')
  }}
>
  Get Started
</button>

// Example: Download Button
<button
  className="btn-secondary"
  onClick={() => {
    trackButtonClick('Download', 'Download Whitepaper', {
      location: 'resources_section',
      file_type: 'pdf',
      file_name: 'whitepaper.pdf'
    })
    // Your existing logic
    handleDownload()
  }}
>
  Download Whitepaper
</button>
```

### 2. Navigation Links
```tsx
import { trackNavigation } from '../utils/analytics'

// Example: Product Navigation
<Link
  to="/products/complisense"
  onClick={() => {
    trackNavigation('/products/complisense', 'CompliSense')
  }}
>
  CompliSense
</Link>

// Example: External Links
<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    trackNavigation('https://external-site.com', 'External Resource', {
      external: true,
      category: 'partnership'
    })
  }}
>
  Partner Resources
</a>
```

---

## Form Tracking Examples

### 1. Contact Form with Validation
```tsx
import { trackFormSubmission, trackEvent } from '../utils/analytics'

const ContactForm = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    
    try {
      // Track form start
      trackEvent('form_start', {
        form_name: 'Contact Form',
        form_fields: Object.keys(data).length
      })
      
      const response = await submitForm(data)
      
      if (response.success) {
        // Track successful submission
        trackFormSubmission('Contact Form', {
          full_name: data.fullName,
          company_name: data.companyName,
          email_domain: data.email?.split('@')[1],
          service_interest: data.serviceInterest,
          message_length: data.message?.length || 0
        }, {
          form_location: 'contact_page',
          submission_method: 'api',
          response_time: Date.now() - startTime
        })
        
        // Reset form
        e.currentTarget.reset()
        showSuccessMessage()
      } else {
        // Track form error
        trackEvent('form_error', {
          form_name: 'Contact Form',
          error_type: 'api_error',
          error_message: response.error
        })
        showErrorMessage()
      }
    } catch (error) {
      // Track form exception
      trackEvent('form_error', {
        form_name: 'Contact Form',
        error_type: 'exception',
        error_message: error.message
      })
      showErrorMessage()
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  )
}
```

### 2. Newsletter Subscription
```tsx
import { trackFormSubmission } from '../utils/analytics'

const NewsletterForm = () => {
  const handleSubscribe = async (email: string) => {
    try {
      await subscribeToNewsletter(email)
      
      // Track newsletter subscription
      trackFormSubmission('Newsletter Form', {
        email_domain: email.split('@')[1],
        subscription_source: 'footer'
      }, {
        form_location: 'footer',
        subscription_type: 'newsletter'
      })
      
      // Track newsletter specific conversion
      trackEvent('newsletter_signup', {
        email_domain: email.split('@')[1],
        source: 'footer'
      })
      
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
    }
  }
  
  return (
    // Newsletter form JSX
  )
}
```

---

## File Download Tracking

### 1. Document Downloads
```tsx
import { trackDownload } from '../utils/analytics'

const DownloadButton = ({ fileName, fileUrl, fileType }) => {
  const handleDownload = () => {
    // Track download event
    trackDownload(fileName, fileUrl)
    
    // Additional tracking for specific file types
    if (fileType === 'pdf') {
      trackEvent('pdf_download', {
        file_name: fileName,
        file_url: fileUrl,
        page: window.location.pathname
      })
    }
    
    // Trigger actual download
    window.open(fileUrl, '_blank')
  }
  
  return (
    <button onClick={handleDownload}>
      Download {fileName}
    </button>
  )
}
```

---

## Video Tracking Examples

### 1. Video Player Analytics
```tsx
import { trackVideoInteraction } from '../utils/analytics'

const VideoPlayer = ({ videoName, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  
  const handlePlay = () => {
    if (!hasStarted) {
      // Track first play
      trackVideoInteraction(videoName, 'play', currentTime)
      setHasStarted(true)
    } else {
      // Track resume
      trackVideoInteraction(videoName, 'resume', currentTime)
    }
    setIsPlaying(true)
  }
  
  const handlePause = () => {
    trackVideoInteraction(videoName, 'pause', currentTime)
    setIsPlaying(false)
  }
  
  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time)
    
    // Track milestones (25%, 50%, 75%, 100%)
    const progress = (time / duration) * 100
    if (progress >= 25 && progress < 26) {
      trackVideoInteraction(videoName, 'milestone_25', time)
    } else if (progress >= 50 && progress < 51) {
      trackVideoInteraction(videoName, 'milestone_50', time)
    } else if (progress >= 75 && progress < 76) {
      trackVideoInteraction(videoName, 'milestone_75', time)
    } else if (progress >= 99) {
      trackVideoInteraction(videoName, 'complete', time)
    }
  }
  
  return (
    <video
      src={videoUrl}
      onPlay={handlePlay}
      onPause={handlePause}
      onTimeUpdate={(e) => handleTimeUpdate(e.currentTarget.currentTime)}
      onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
    />
  )
}
```

---

## E-commerce Tracking Examples

### 1. Product Interactions
```tsx
import { trackEvent } from '../utils/analytics'

const ProductCard = ({ product }) => {
  const handleProductClick = () => {
    trackEvent('product_click', {
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      product_price: product.price,
      currency: 'USD'
    })
  }
  
  const handleAddToCart = () => {
    trackEvent('add_to_cart', {
      product_id: product.id,
      product_name: product.name,
      product_category: product.category,
      product_price: product.price,
      currency: 'USD',
      quantity: 1
    })
  }
  
  return (
    <div className="product-card">
      <h3 onClick={handleProductClick}>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}
```

---

## Custom Event Tracking

### 1. Feature Usage
```tsx
import { trackEvent } from '../utils/analytics'

const FeatureToggle = ({ featureName, isEnabled, onToggle }) => {
  const handleToggle = () => {
    const newState = !isEnabled
    
    // Track feature usage
    trackEvent('feature_toggle', {
      feature_name: featureName,
      previous_state: isEnabled ? 'enabled' : 'disabled',
      new_state: newState ? 'enabled' : 'disabled',
      page: window.location.pathname
    })
    
    onToggle(newState)
  }
  
  return (
    <button onClick={handleToggle}>
      {featureName}: {isEnabled ? 'ON' : 'OFF'}
    </button>
  )
}
```

### 2. Search Interactions
```tsx
import { trackEvent } from '../utils/analytics'

const SearchComponent = () => {
  const handleSearch = (query: string) => {
    // Track search event
    trackEvent('search', {
      search_query: query,
      search_term_length: query.length,
      page: window.location.pathname
    })
    
    // Perform search
    performSearch(query)
  }
  
  const handleSearchResultClick = (result: SearchResult) => {
    // Track search result click
    trackEvent('search_result_click', {
      search_result_id: result.id,
      search_result_title: result.title,
      search_result_position: result.position,
      search_query: result.query
    })
  }
  
  return (
    // Search component JSX
  )
}
```

---

## Error Tracking

### 1. JavaScript Error Tracking
```tsx
import { trackEvent } from '../utils/analytics'

// Global error handler
window.addEventListener('error', (event) => {
  trackEvent('javascript_error', {
    error_message: event.message,
    error_filename: event.filename,
    error_lineno: event.lineno,
    error_colno: event.colno,
    page: window.location.pathname,
    user_agent: navigator.userAgent
  })
})

// Promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  trackEvent('promise_rejection', {
    error_reason: event.reason,
    page: window.location.pathname
  })
})
```

### 2. API Error Tracking
```tsx
import { trackEvent } from '../utils/analytics'

const apiClient = {
  async request(url: string, options: RequestInit) {
    try {
      const response = await fetch(url, options)
      
      if (!response.ok) {
        // Track API error
        trackEvent('api_error', {
          url: url,
          method: options.method || 'GET',
          status_code: response.status,
          status_text: response.statusText,
          page: window.location.pathname
        })
      }
      
      return response
    } catch (error) {
      // Track network error
      trackEvent('network_error', {
        url: url,
        error_message: error.message,
        page: window.location.pathname
      })
      throw error
    }
  }
}
```

---

## Best Practices

### 1. When to Track
- **User interactions**: Clicks, form submissions, navigation
- **Content engagement**: Video plays, scroll depth, file downloads
- **Conversions**: Form submissions, purchases, signups
- **Errors**: JavaScript errors, API failures, form validation errors

### 2. Data to Include
- **Page context**: Current page, page title
- **User context**: User ID (if available), session info
- **Event context**: Location on page, element type, interaction type
- **Business context**: Product info, form data, search terms

### 3. Privacy Considerations
- **No PII**: Avoid personally identifiable information
- **Consent**: Respect user consent preferences
- **Data minimization**: Only collect necessary data
- **Anonymization**: Use hashed IDs when possible

### 4. Performance
- **Async tracking**: Don't block user interactions
- **Error handling**: Prevent tracking errors from breaking functionality
- **Batching**: Group related events when possible
- **Debouncing**: Avoid duplicate events for rapid interactions

These examples provide a comprehensive foundation for implementing analytics tracking throughout your React application.
