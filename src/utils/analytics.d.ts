export declare const trackEvent: (eventName: string, data?: Record<string, any>) => void;
export declare const trackButtonClick: (buttonName: string, buttonText?: string, additionalData?: Record<string, any>) => void;
export declare const trackFormSubmission: (formName: string, formData?: Record<string, any>, additionalData?: Record<string, any>) => void;
export declare const trackNavigation: (destination: string, linkText?: string) => void;
export declare const trackDownload: (fileName: string, fileUrl: string) => void;
export declare const trackVideoInteraction: (videoName: string, action: string, currentTime?: number) => void;

declare const analytics: {
  trackEvent: typeof trackEvent;
  trackButtonClick: typeof trackButtonClick;
  trackFormSubmission: typeof trackFormSubmission;
  trackNavigation: typeof trackNavigation;
  trackDownload: typeof trackDownload;
  trackVideoInteraction: typeof trackVideoInteraction;
};

export default analytics;
