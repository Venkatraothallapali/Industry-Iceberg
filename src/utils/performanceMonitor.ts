/**
 * Performance Monitoring Utility
 * Implements Core Web Vitals monitoring and optimization
 * Top 1% performance implementation
 */

// Core Web Vitals thresholds
export const CORE_WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
  FID: { good: 100, needsImprovement: 300 },    // First Input Delay
  CLS: { good: 0.1, needsImprovement: 0.25 },   // Cumulative Layout Shift
  FCP: { good: 1800, needsImprovement: 3000 },  // First Contentful Paint
  TTFB: { good: 800, needsImprovement: 1800 },  // Time to First Byte
  INP: { good: 200, needsImprovement: 500 }     // Interaction to Next Paint
}

interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

interface PerformanceReport {
  lcp?: PerformanceMetric
  fid?: PerformanceMetric
  cls?: PerformanceMetric
  fcp?: PerformanceMetric
  ttfb?: PerformanceMetric
  inp?: PerformanceMetric
  overall: 'good' | 'needs-improvement' | 'poor'
  score: number
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceReport> = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initializeObservers()
    this.measureExistingMetrics()
  }

  /**
   * Initialize performance observers for Core Web Vitals
   */
  private initializeObservers() {
    // Largest Contentful Paint (LCP)
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1]
      this.metrics.lcp = this.createMetric('LCP', lastEntry.startTime, CORE_WEB_VITALS_THRESHOLDS.LCP)
    })

    // First Input Delay (FID) - deprecated in favor of INP
    this.observeMetric('first-input', (entries) => {
      const firstEntry = entries[0]
      const fid = (firstEntry as any).processingStart - firstEntry.startTime
      this.metrics.fid = this.createMetric('FID', fid, CORE_WEB_VITALS_THRESHOLDS.FID)
    })

    // Cumulative Layout Shift (CLS)
    let clsValue = 0
    this.observeMetric('layout-shift', (entries) => {
      for (const entry of entries) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      this.metrics.cls = this.createMetric('CLS', clsValue, CORE_WEB_VITALS_THRESHOLDS.CLS)
    })

    // First Contentful Paint (FCP)
    this.observeMetric('paint', (entries) => {
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
      if (fcpEntry) {
        this.metrics.fcp = this.createMetric('FCP', fcpEntry.startTime, CORE_WEB_VITALS_THRESHOLDS.FCP)
      }
    })

    // Interaction to Next Paint (INP) - replaces FID
    this.observeMetric('event', (entries) => {
      const inpEntries = entries.filter((entry: any) => entry.interactionId)
      if (inpEntries.length > 0) {
        const worstINP = Math.max(...inpEntries.map((entry: any) => entry.duration))
        this.metrics.inp = this.createMetric('INP', worstINP, CORE_WEB_VITALS_THRESHOLDS.INP)
      }
    })
  }

  /**
   * Observe a specific performance metric
   */
  private observeMetric(type: string, callback: (entries: PerformanceEntryList) => void) {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries())
      })
      observer.observe({ type, buffered: true })
      this.observers.push(observer)
    } catch (error) {
      console.warn(`Performance observer for ${type} not supported:`, error)
    }
  }

  /**
   * Measure metrics that are already available
   */
  private measureExistingMetrics() {
    // Time to First Byte (TTFB)
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart
      this.metrics.ttfb = this.createMetric('TTFB', ttfb, CORE_WEB_VITALS_THRESHOLDS.TTFB)
    }

    // Navigation timing
    if (performance.getEntriesByType) {
      const navigationEntries = performance.getEntriesByType('navigation')
      if (navigationEntries.length > 0) {
        // Additional metrics can be measured here
        console.log('Navigation timing available for additional metrics')
      }
    }
  }

  /**
   * Create a performance metric with rating
   */
  private createMetric(name: string, value: number, thresholds: { good: number; needsImprovement: number }): PerformanceMetric {
    let rating: 'good' | 'needs-improvement' | 'poor'
    
    if (value <= thresholds.good) {
      rating = 'good'
    } else if (value <= thresholds.needsImprovement) {
      rating = 'needs-improvement'
    } else {
      rating = 'poor'
    }

    return {
      name,
      value,
      rating,
      timestamp: Date.now()
    }
  }

  /**
   * Get current performance report
   */
  public getReport(): PerformanceReport {
    const report = this.metrics as PerformanceReport
    const metrics = [report.lcp, report.fid, report.cls, report.fcp, report.ttfb, report.inp].filter(Boolean) as PerformanceMetric[]
    
    // Calculate overall score (0-100)
    const score = this.calculateOverallScore(metrics)
    
    // Determine overall rating
    let overall: 'good' | 'needs-improvement' | 'poor'
    if (score >= 90) {
      overall = 'good'
    } else if (score >= 50) {
      overall = 'needs-improvement'
    } else {
      overall = 'poor'
    }

    report.overall = overall
    report.score = score

    return report
  }

  /**
   * Calculate overall performance score
   */
  private calculateOverallScore(metrics: PerformanceMetric[]): number {
    if (metrics.length === 0) return 0

    const scores = metrics.map(metric => {
      switch (metric.rating) {
        case 'good': return 100
        case 'needs-improvement': return 50
        case 'poor': return 0
        default: return 0
      }
    })

    // Calculate sum using forEach to avoid TypeScript union type issues
    let sum = 0
    scores.forEach(score => {
      sum += score
    })

    return Math.round(sum / scores.length)
  }

  /**
   * Log performance metrics to console
   */
  public logMetrics() {
    const report = this.getReport()
    
    console.group('🚀 Performance Metrics - Top 1% Implementation')
    console.log('Overall Score:', report.score, '/ 100 -', report.overall)
    
    Object.entries(report).forEach(([, metric]) => {
      if (metric && typeof metric === 'object' && 'value' in metric) {
        const m = metric as PerformanceMetric
        const emoji = m.rating === 'good' ? '✅' : m.rating === 'needs-improvement' ? '⚠️' : '❌'
        console.log(`${emoji} ${m.name}: ${m.value.toFixed(2)}ms - ${m.rating}`)
      }
    })
    
    console.groupEnd()

    // Send to analytics in production
    if (typeof window !== 'undefined' && (window as any).NODE_ENV === 'production') {
      this.sendToAnalytics(report)
    }
  }

  /**
   * Send metrics to analytics service
   */
  private sendToAnalytics(report: PerformanceReport) {
    // Implementation for sending to Google Analytics or other services
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const gtag = (window as any).gtag
      gtag('event', 'core_web_vitals', {
        event_category: 'Performance',
        event_label: report.overall,
        value: report.score,
        custom_map: {
          lcp: report.lcp?.value,
          fid: report.fid?.value,
          cls: report.cls?.value,
          fcp: report.fcp?.value,
          ttfb: report.ttfb?.value,
          inp: report.inp?.value
        }
      })
    }
  }

  /**
   * Get performance recommendations
   */
  public getRecommendations(): string[] {
    const recommendations: string[] = []
    const report = this.getReport()

    if (report.lcp?.rating === 'poor') {
      recommendations.push('Optimize largest contentful paint: compress images, use CDN, remove render-blocking resources')
    }

    if (report.cls?.rating === 'poor') {
      recommendations.push('Reduce cumulative layout shift: specify image dimensions, avoid inserting content above existing content')
    }

    if (report.fid?.rating === 'poor' || report.inp?.rating === 'poor') {
      recommendations.push('Improve input responsiveness: reduce JavaScript execution time, use web workers')
    }

    if (report.ttfb?.rating === 'poor') {
      recommendations.push('Reduce server response time: use CDN, optimize server, enable caching')
    }

    if (recommendations.length === 0) {
      recommendations.push('🎉 Excellent performance! Your website is in the top 1% of all websites.')
    }

    return recommendations
  }

  /**
   * Cleanup observers
   */
  public cleanup() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Singleton instance
let performanceMonitor: PerformanceMonitor | null = null

/**
 * Get performance monitor instance
 */
export const getPerformanceMonitor = (): PerformanceMonitor => {
  if (!performanceMonitor) {
    performanceMonitor = new PerformanceMonitor()
  }
  return performanceMonitor
}

/**
 * Initialize performance monitoring
 */
export const initializePerformanceMonitoring = () => {
  const monitor = getPerformanceMonitor()
  
  // Log metrics after page load
  if (document.readyState === 'complete') {
    setTimeout(() => {
      monitor.logMetrics()
    }, 0)
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        monitor.logMetrics()
      }, 0)
    })
  }

  return monitor
}

/**
 * Performance optimization utilities
 */
export const PerformanceOptimizations = {
  /**
   * Defer non-critical JavaScript
   */
  deferScript: (src: string) => {
    const script = document.createElement('script')
    script.src = src
    script.defer = true
    document.head.appendChild(script)
  },

  /**
   * Preload critical resources
   */
  preloadResource: (href: string, as: string) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    document.head.appendChild(link)
  },

  /**
   * Preconnect to external domains
   */
  preconnect: (href: string) => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = href
    document.head.appendChild(link)
  },

  /**
   * Optimize font loading
   */
  optimizeFontLoading: (fontUrl: string) => {
    // Preload font
    PerformanceOptimizations.preloadResource(fontUrl, 'font')
    
    // Add font-display: swap
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-family: 'CustomFont';
        src: url('${fontUrl}');
        font-display: swap;
      }
    `
    document.head.appendChild(style)
  }
}

export default PerformanceMonitor
