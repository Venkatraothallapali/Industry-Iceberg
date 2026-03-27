import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views in a React SPA
 * Sends pageview events to Google Tag Manager on route changes
 */
export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Ensure dataLayer is available
    window.dataLayer = window.dataLayer || [];
    
    // Push pageview event to GTM
    window.dataLayer.push({
      event: 'pageview',
      page: location.pathname,
      title: document.title,
      location: window.location.href
    });
  }, [location.pathname]);
};

export default usePageTracking;
