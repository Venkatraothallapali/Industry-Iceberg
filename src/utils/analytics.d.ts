export declare const trackEvent: (eventName: string, data?: Record<string, any>) => void;
export declare const trackButtonClick: (buttonName: string, buttonText?: string, additionalData?: Record<string, any>) => void;
export declare const trackFormSubmission: (formName: string, formData?: Record<string, any>, additionalData?: Record<string, any>) => void;
export declare const trackNavigation: (destination: string, linkText?: string) => void;
export declare const trackDownload: (fileName: string, fileUrl: string) => void;
export declare const trackVideoInteraction: (videoName: string, action: string, currentTime?: number) => void;
export declare const trackFormInteraction: (formName: string, fieldName: string, action: string, fieldType?: string) => void;
export declare const trackContentEngagement: (contentType: string, contentId: string, action: string, additionalData?: Record<string, any>) => void;
export declare const trackSearchBehavior: (searchTerm: string, searchType: string, resultsCount?: number, selectedResult?: string) => void;
export declare const trackSocialEngagement: (platform: string, action: string, contentUrl?: string) => void;
export declare const trackErrorEncounter: (errorType: string, errorMessage: string, context?: Record<string, any>) => void;
export declare const trackFeatureUsage: (featureName: string, action: string, additionalData?: Record<string, any>) => void;
export declare const trackSessionQuality: (qualityMetric: string, value: number, additionalData?: Record<string, any>) => void;

declare const analytics: {
  trackEvent: typeof trackEvent;
  trackButtonClick: typeof trackButtonClick;
  trackFormSubmission: typeof trackFormSubmission;
  trackNavigation: typeof trackNavigation;
  trackDownload: typeof trackDownload;
  trackVideoInteraction: typeof trackVideoInteraction;
  trackFormInteraction: typeof trackFormInteraction;
  trackContentEngagement: typeof trackContentEngagement;
  trackSearchBehavior: typeof trackSearchBehavior;
  trackSocialEngagement: typeof trackSocialEngagement;
  trackErrorEncounter: typeof trackErrorEncounter;
  trackFeatureUsage: typeof trackFeatureUsage;
  trackSessionQuality: typeof trackSessionQuality;
};

export default analytics;
