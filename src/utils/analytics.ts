/**
 * Analytics utility for tracking events in Google Tag Manager
 * Provides reusable functions for different types of user interactions
 */

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Track custom events in GTM
 * @param eventName - Name of the event
 * @param data - Additional data to send with the event
 */
export const trackEvent = (eventName: string, data: Record<string, any> = {}): void => {
  // Ensure dataLayer is available
  window.dataLayer = window.dataLayer || [];
  
  // Push event to GTM
  window.dataLayer.push({
    event: eventName,
    ...data,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track button clicks with detailed information
 * @param buttonName - Name/label of the button
 * @param buttonText - Text displayed on the button
 * @param additionalData - Any additional tracking data
 */
export const trackButtonClick = (
  buttonName: string, 
  buttonText: string = '', 
  additionalData: Record<string, any> = {}
): void => {
  trackEvent('cta_click', {
    button_name: buttonName,
    button_text: buttonText,
    page: window.location.pathname,
    page_title: document.title,
    ...additionalData
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param formData - Form data (without sensitive information)
 * @param additionalData - Any additional tracking data
 */
export const trackFormSubmission = (
  formName: string, 
  additionalData: Record<string, any> = {}
): void => {
  // Track form submission event
  trackEvent('form_submit', {
    form_name: formName,
    page: window.location.pathname,
    page_title: document.title,
    ...additionalData
  });

  // Track conversion event
  trackEvent('conversion', {
    conversion_type: 'lead',
    form_name: formName,
    value: 1,
    currency: 'USD',
    page: window.location.pathname,
    ...additionalData
  });
};

/**
 * Track navigation events
 * @param destination - Where the user is navigating to
 * @param linkText - Text of the clicked link
 */
export const trackNavigation = (destination: string, linkText: string = ''): void => {
  trackEvent('navigation_click', {
    destination,
    link_text: linkText,
    page: window.location.pathname,
    page_title: document.title
  });
};

/**
 * Track file downloads
 * @param fileName - Name of the downloaded file
 * @param fileUrl - URL of the file
 */
export const trackDownload = (fileName: string, fileUrl: string): void => {
  trackEvent('file_download', {
    file_name: fileName,
    file_url: fileUrl,
    page: window.location.pathname,
    page_title: document.title
  });
};

/**
 * Track video interactions
 * @param videoName - Name of the video
 * @param action - Action performed (play, pause, complete, etc.)
 * @param currentTime - Current time in video (optional)
 */
export const trackVideoInteraction = (videoName: string, action: string, currentTime: number = 0): void => {
  trackEvent('video_interaction', {
    video_name: videoName,
    action,
    current_time: currentTime,
    page: window.location.pathname,
    page_title: document.title
  });
};

/**
 * Track form field interactions for enhanced user behavior analysis
 * @param formName - Name of the form
 * @param fieldName - Name of the field
 * @param action - Action performed (focus, blur, change, etc.)
 * @param fieldType - Type of field (text, email, select, etc.)
 */
export const trackFormInteraction = (
  formName: string, 
  fieldName: string, 
  action: string,
  fieldType: string = 'text'
): void => {
  trackEvent('form_interaction', {
    form_name: formName,
    field_name: fieldName,
    field_type: fieldType,
    action,
    page: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track content engagement (reading time, content interactions)
 * @param contentType - Type of content (blog, product, service)
 * @param contentId - ID or name of the content
 * @param action - Action performed (start_reading, finish_reading, share, etc.)
 * @param additionalData - Additional data about the interaction
 */
export const trackContentEngagement = (
  contentType: string,
  contentId: string,
  action: string,
  additionalData: Record<string, any> = {}
): void => {
  trackEvent('content_engagement', {
    content_type: contentType,
    content_id: contentId,
    action,
    page: window.location.pathname,
    page_title: document.title,
    ...additionalData,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track user search behavior
 * @param searchTerm - Search query
 * @param searchType - Type of search (site, product, service)
 * @param resultsCount - Number of results returned
 * @param selectedResult - Which result was clicked (if any)
 */
export const trackSearchBehavior = (
  searchTerm: string,
  searchType: string,
  resultsCount: number = 0,
  selectedResult: string = ''
): void => {
  trackEvent('search_behavior', {
    search_term: searchTerm,
    search_type: searchType,
    results_count: resultsCount,
    selected_result: selectedResult,
    page: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track social media engagement
 * @param platform - Social media platform (twitter, linkedin, facebook, etc.)
 * @param action - Action performed (share, like, follow, etc.)
 * @param contentUrl - URL being shared or engaged with
 */
export const trackSocialEngagement = (
  platform: string,
  action: string,
  contentUrl: string = window.location.href
): void => {
  trackEvent('social_engagement', {
    platform,
    action,
    content_url: contentUrl,
    page: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track error encounters for user experience analysis
 * @param errorType - Type of error (javascript, network, form_validation, etc.)
 * @param errorMessage - Error message
 * @param context - Additional context about when/where error occurred
 */
export const trackErrorEncounter = (
  errorType: string,
  errorMessage: string,
  context: Record<string, any> = {}
): void => {
  trackEvent('error_encounter', {
    error_type: errorType,
    error_message: errorMessage,
    page: window.location.pathname,
    page_title: document.title,
    user_agent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    ...context
  });
};

/**
 * Track feature usage for product analytics
 * @param featureName - Name of the feature
 * @param action - Action performed (use, enable, disable, etc.)
 * @param additionalData - Additional feature-specific data
 */
export const trackFeatureUsage = (
  featureName: string,
  action: string,
  additionalData: Record<string, any> = {}
): void => {
  trackEvent('feature_usage', {
    feature_name: featureName,
    action,
    page: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
    ...additionalData
  });
};

/**
 * Track user session quality indicators
 * @param qualityMetric - Type of quality metric (engagement_score, satisfaction, etc.)
 * @param value - Numeric value of the metric
 * @param additionalData - Additional context
 */
export const trackSessionQuality = (
  qualityMetric: string,
  value: number,
  additionalData: Record<string, any> = {}
): void => {
  trackEvent('session_quality', {
    quality_metric: qualityMetric,
    value,
    page: window.location.pathname,
    page_title: document.title,
    session_duration: Math.round((Date.now() - (window as any).sessionStart) / 1000),
    timestamp: new Date().toISOString(),
    ...additionalData
  });
};

export default {
  trackEvent,
  trackButtonClick,
  trackFormSubmission,
  trackNavigation,
  trackDownload,
  trackVideoInteraction,
  trackFormInteraction,
  trackContentEngagement,
  trackSearchBehavior,
  trackSocialEngagement,
  trackErrorEncounter,
  trackFeatureUsage,
  trackSessionQuality
};
