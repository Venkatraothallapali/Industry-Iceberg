import React, { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}

/**
 * Optimized Image Component with lazy loading and responsive features
 * Implements top 1% image optimization practices
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    const extensions = ['.png', '.jpg', '.jpeg', '.webp']
    const ext = extensions.find(e => baseSrc.toLowerCase().endsWith(e)) || '.png'
    const baseWithoutExt = baseSrc.slice(0, -ext.length)
    
    const sizes = [320, 640, 768, 1024, 1200, 1920]
    return sizes
      .map(size => `${baseWithoutExt}_${size}w${ext} ${size}w`)
      .join(', ')
  }

  // Generate WebP sources for better compression
  const generateWebPSrcSet = (baseSrc: string) => {
    const ext = baseSrc.toLowerCase().split('.').pop() || 'png'
    const baseWithoutExt = baseSrc.slice(0, -(ext.length + 1))
    
    const sizes = [320, 640, 768, 1024, 1200, 1920]
    return sizes
      .map(size => `${baseWithoutExt}_${size}w.webp ${size}w`)
      .join(', ')
  }

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.1
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Handle image error
  const handleError = () => {
    setHasError(true)
    console.warn(`Failed to load image: ${src}`)
  }

  // Generate low-quality placeholder (LQIP)
  const placeholderStyle: React.CSSProperties = {
    filter: 'blur(20px)',
    transform: 'scale(1.1)',
    transition: 'filter 0.3s ease, transform 0.3s ease'
  }

  const loadedStyle: React.CSSProperties = {
    filter: 'blur(0px)',
    transform: 'scale(1)'
  }

  if (hasError) {
    return (
      <div 
        className={`image-error ${className}`}
        style={{
          width: width || '100%',
          height: height || 'auto',
          backgroundColor: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6b7280',
          fontSize: '14px',
          border: '1px dashed #d1d5db'
        }}
      >
        Image not available
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`optimized-image-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: width || '100%',
        height: height || 'auto'
      }}
    >
      {/* Low-quality placeholder */}
      {isInView && !isLoaded && (
        <div
          className="image-placeholder"
          style={{
            ...placeholderStyle,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}

      {/* Main image with WebP support */}
      {isInView && (
        <picture>
          {/* WebP source for modern browsers */}
          <source
            srcSet={generateWebPSrcSet(src)}
            sizes={sizes}
            type="image/webp"
          />
          
          {/* Fallback to original format */}
          <img
            ref={imgRef}
            src={src}
            srcSet={generateSrcSet(src)}
            sizes={sizes}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.3s ease',
              opacity: isLoaded ? 1 : 0,
              ...(!isLoaded ? placeholderStyle : loadedStyle)
            }}
          />
        </picture>
      )}

      {/* Loading skeleton */}
      {!isInView && (
        <div
          className="loading-skeleton"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            backgroundImage: 'linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  )
}

export default OptimizedImage
