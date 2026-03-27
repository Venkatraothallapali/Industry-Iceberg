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

export default {
  trackEvent,
  trackButtonClick,
  trackFormSubmission,
  trackNavigation,
  trackDownload,
  trackVideoInteraction
};
