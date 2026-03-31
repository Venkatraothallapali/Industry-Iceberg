import { useEffect, useRef, useCallback } from 'react'
import { trackEvent } from '../utils/analytics'

interface ScrollTrackingOptions {
  thresholds?: number[]
  trackTimeOnPage?: boolean
  timeThresholds?: number[]
}

/**
 * Custom hook for tracking scroll depth and time on page
 * Enhances analytics with user engagement metrics
 */
export const useScrollTracking = (options: ScrollTrackingOptions = {}) => {
  const {
    thresholds = [25, 50, 75, 90, 100],
    trackTimeOnPage = true,
    timeThresholds = [30, 60, 120, 300] // seconds
  } = options

  const trackedThresholds = useRef<Set<number>>(new Set())
  const trackedTimeThresholds = useRef<Set<number>>(new Set())
  const startTime = useRef<number>(0)
  const maxScrollDepth = useRef<number>(0)
  const hasTrackedMaxDepth = useRef<boolean>(false)

  useEffect(() => {
    // Initialize start time on mount
    startTime.current = Date.now()
  }, [])

  /**
   * Track scroll depth when user scrolls
   */
  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

    // Update maximum scroll depth
    if (scrollPercent > maxScrollDepth.current) {
      maxScrollDepth.current = scrollPercent
    }

    // Track threshold crossings
    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !trackedThresholds.current.has(threshold)) {
        trackedThresholds.current.add(threshold)
        
        trackEvent('scroll_depth', {
          threshold,
          scroll_percent: scrollPercent,
          max_depth: maxScrollDepth.current,
          page: window.location.pathname,
          page_title: document.title,
          timestamp: new Date().toISOString()
        })

        // Track maximum depth reached
        if (threshold === 100 && !hasTrackedMaxDepth.current) {
          hasTrackedMaxDepth.current = true
          trackEvent('scroll_to_bottom', {
            page: window.location.pathname,
            time_to_bottom: Math.round((Date.now() - startTime.current) / 1000),
            timestamp: new Date().toISOString()
          })
        }
      }
    })
  }, [thresholds])

  /**
   * Track time on page at intervals
   */
  const trackTimeOnPageIntervals = useCallback(() => {
    if (!trackTimeOnPage) return

    const currentTime = Math.round((Date.now() - startTime.current) / 1000)
    
    timeThresholds.forEach(threshold => {
      if (currentTime >= threshold && !trackedTimeThresholds.current.has(threshold)) {
        trackedTimeThresholds.current.add(threshold)
        
        trackEvent('time_on_page', {
          threshold_seconds: threshold,
          total_seconds: currentTime,
          max_scroll_depth: maxScrollDepth.current,
          page: window.location.pathname,
          page_title: document.title,
          timestamp: new Date().toISOString()
        })
      }
    })
  }, [trackTimeOnPage, timeThresholds])

  /**
   * Track page unload for final metrics
   */
  const handlePageUnload = useCallback(() => {
    const totalTime = Math.round((Date.now() - startTime.current) / 1000)
    
    trackEvent('page_engagement', {
      total_time_seconds: totalTime,
      max_scroll_depth: maxScrollDepth.current,
      thresholds_reached: Array.from(trackedThresholds.current),
      time_thresholds_reached: Array.from(trackedTimeThresholds.current),
      page: window.location.pathname,
      page_title: document.title,
      timestamp: new Date().toISOString()
    })
  }, [])

  useEffect(() => {
    // Start tracking
    startTime.current = Date.now()
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Set up time tracking interval
    const timeInterval = setInterval(trackTimeOnPageIntervals, 5000) // Check every 5 seconds
    
    // Add page unload listeners
    window.addEventListener('beforeunload', handlePageUnload)
    window.addEventListener('pagehide', handlePageUnload)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timeInterval)
      window.removeEventListener('beforeunload', handlePageUnload)
      window.removeEventListener('pagehide', handlePageUnload)
      
      // Final engagement tracking
      handlePageUnload()
    }
  }, [handleScroll, trackTimeOnPageIntervals, handlePageUnload])

  return {
    // Hook returns empty object - tracking happens via analytics events
    // Refs are not accessed during render to avoid React warnings
  }
}

export default useScrollTracking
