# Google Tag Manager Analytics Setup Guide

## Overview
This guide explains how to configure GTM and GA4 for the React SPA analytics implementation.

## Prerequisites
- GTM container ID: `GTM-P8PJBTFP` (already implemented in index.html)
- GA4 Measurement ID: Get from your Google Analytics 4 property
- Admin access to Google Tag Manager and Google Analytics 4

---

## Step 1: Google Tag Manager Configuration

### 1.1 GA4 Configuration Tag
1. Go to Google Tag Manager
2. Select your container `GTM-P8PJBTFP`
3. Click **Tags** → **New**
4. **Tag Configuration** → **Google Analytics: GA4 Configuration**
5. **Measurement ID**: Enter your GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
6. **Triggering**: Choose **All Pages**
7. Name: `GA4 Configuration - All Pages`
8. Save

### 1.2 Custom Event Triggers
Create these triggers for custom events:

#### Pageview Trigger
1. **Triggers** → **New**
2. **Trigger Configuration** → **Custom Event**
3. **Event Name**: `pageview`
4. **This trigger fires on**: All Custom Events
5. Name: `Custom Event - pageview`
6. Save

#### CTA Click Trigger
1. **Triggers** → **New**
2. **Trigger Configuration** → **Custom Event**
3. **Event Name**: `cta_click`
4. **This trigger fires on**: All Custom Events
5. Name: `Custom Event - cta_click`
6. Save

#### Form Submit Trigger
1. **Triggers** → **New**
2. **Trigger Configuration** → **Custom Event**
3. **Event Name**: `form_submit`
4. **This trigger fires on**: All Custom Events
5. Name: `Custom Event - form_submit`
6. Save

#### Conversion Trigger
1. **Triggers** → **New**
2. **Trigger Configuration** → **Custom Event**
3. **Event Name**: `conversion`
4. **This trigger fires on**: All Custom Events
5. Name: `Custom Event - conversion`
6. Save

### 1.3 GA4 Event Tags
Create these GA4 event tags:

#### Pageview Event Tag
1. **Tags** → **New**
2. **Tag Configuration** → **Google Analytics: GA4 Event**
3. **Measurement ID**: Same as configuration tag
4. **Event Name**: `pageview`
5. **Event Parameters**:
   - `page` = `{{Event}}`
   - `title` = `{{Page Title}}`
   - `location` = `{{Page URL}}`
6. **Triggering**: `Custom Event - pageview`
7. Name: `GA4 Event - pageview`
8. Save

#### CTA Click Event Tag
1. **Tags** → **New**
2. **Tag Configuration** → **Google Analytics: GA4 Event**
3. **Measurement ID**: Same as configuration tag
4. **Event Name**: `cta_click`
5. **Event Parameters**:
   - `button_name` = `{{button_name}}`
   - `button_text` = `{{button_text}}`
   - `page` = `{{page}}`
   - `page_title` = `{{page_title}}`
   - `location` = `{{location}}`
6. **Triggering**: `Custom Event - cta_click`
7. Name: `GA4 Event - cta_click`
8. Save

#### Form Submit Event Tag
1. **Tags** → **New**
2. **Tag Configuration** → **Google Analytics: GA4 Event**
3. **Measurement ID**: Same as configuration tag
4. **Event Name**: `form_submit`
5. **Event Parameters**:
   - `form_name` = `{{form_name}}`
   - `page` = `{{page}}`
   - `page_title` = `{{page_title}}`
   - `form_location` = `{{form_location}}`
6. **Triggering**: `Custom Event - form_submit`
7. Name: `GA4 Event - form_submit`
8. Save

#### Conversion Event Tag
1. **Tags** → **New**
2. **Tag Configuration** → **Google Analytics: GA4 Event**
3. **Measurement ID**: Same as configuration tag
4. **Event Name**: `conversion`
5. **Event Parameters**:
   - `conversion_type` = `{{conversion_type}}`
   - `form_name` = `{{form_name}}`
   - `value` = `{{value}}`
   - `currency` = `{{currency}}`
   - `page` = `{{page}}`
6. **Triggering**: `Custom Event - conversion`
7. Name: `GA4 Event - conversion`
8. Save

### 1.4 Data Layer Variables
Create these Data Layer variables:

#### button_name Variable
1. **Variables** → **New**
2. **Variable Configuration** → **Data Layer Variable**
3. **Data Layer Variable Name**: `button_name`
4. **Data Layer Version**: Version 2
5. Name: `DLV - button_name`
6. Save

#### button_text Variable
1. **Variables** → **New**
2. **Variable Configuration** → **Data Layer Variable**
3. **Data Layer Variable Name**: `button_text`
4. **Data Layer Version**: Version 2
5. Name: `DLV - button_text`
6. Save

#### page Variable
1. **Variables** → **New**
2. **Variable Configuration** → **Data Layer Variable**
3. **Data Layer Variable Name**: `page`
4. **Data Layer Version**: Version 2
5. Name: `DLV - page`
6. Save

#### page_title Variable
1. **Variables** → **New**
2. **Variable Configuration** → **Data Layer Variable**
3. **Data Layer Variable Name**: `page_title`
4. **Data Layer Version**: Version 2
5. Name: `DLV - page_title`
6. Save

#### form_name Variable
1. **Variables** → **New**
2. **Variable Configuration** → **Data Layer Variable**
3. **Data Layer Variable Name**: `form_name`
4. **Data Layer Version**: Version 2
5. Name: `DLV - form_name`
6. Save

### 1.5 Submit and Publish
1. Click **Submit** in GTM
2. Add a version description (e.g., "Initial analytics setup")
3. Click **Publish**

---

## Step 2: Google Analytics 4 Configuration

### 2.1 Verify Data Stream
1. Go to Google Analytics 4
2. Select your property
3. Go to **Admin** → **Data Streams**
4. Ensure your web data stream is active
5. Copy the **Measurement ID** (starts with `G-`)

### 2.2 Configure Conversions
1. In GA4, go to **Admin** → **Conversions**
2. Click **New conversion event**
3. **Event name**: `conversion`
4. Click **Save**

### 2.3 Enable Enhanced Measurement
1. In GA4, go to **Admin** → **Data Streams** → Your Web Stream
2. Under **Enhanced measurement**, ensure these are enabled:
   - Page views (we're using custom, but keep as backup)
   - Scrolls
   - Outbound clicks
   - File downloads
   - Video engagement
   - Site search

---

## Step 3: Testing Instructions

### 3.1 GTM Preview Mode
1. In Google Tag Manager, click **Preview**
2. Enter your website URL
3. Click **Connect**
4. Your site will open with GTM debug panel

### 3.2 Test Page Tracking
1. Navigate through different pages
2. In GTM debug panel, look for:
   - **pageview** events in Data Layer
   - GA4 Configuration tag firing
   - GA4 Event - pageview tag firing

### 3.3 Test Button Clicks
1. Click "Contact Us" button
2. In GTM debug panel, look for:
   - **cta_click** event with button_name: "Contact Us"
   - GA4 Event - cta_click tag firing

3. Click "ii Sign In" button
4. Look for:
   - **cta_click** event with button_name: "Sign In"
   - GA4 Event - cta_click tag firing

### 3.4 Test Form Submission
1. Fill out and submit the contact form successfully
2. In GTM debug panel, look for:
   - **form_submit** event with form_name: "Contact Form"
   - **conversion** event with conversion_type: "lead"
   - Both GA4 Event tags firing

### 3.5 Verify in GA4 Realtime
1. Go to Google Analytics 4
2. Click **Reports** → **Realtime**
3. You should see:
   - Page views as you navigate
   - Events appearing when you click buttons
   - Conversion events when forms are submitted

---

## Step 4: Production Deployment

### 4.1 Final Verification
1. Test all tracking in staging environment
2. Verify GTM debug mode shows correct events
3. Check GA4 Realtime reports for data flow

### 4.2 Deploy to Production
1. Deploy your React application to production
2. Submit and publish GTM container if any changes made
3. Monitor GA4 Realtime for live data

### 4.3 Ongoing Monitoring
1. Check GA4 reports regularly:
   - **Reports** → **Engagement** → **Events**
   - **Reports** → **Acquisition** → **Traffic acquisition**
   - **Reports** → **Conversions**

2. Set up custom dashboards for key metrics:
   - Page views by page
   - CTA click rates
   - Form submission rates
   - Conversion rates

---

## Troubleshooting

### Common Issues

#### Events Not Firing
1. Check browser console for JavaScript errors
2. Verify GTM container is loaded (check network tab)
3. Ensure dataLayer is properly initialized
4. Check GTM preview mode for debug information

#### Data Not Appearing in GA4
1. Verify Measurement ID is correct in GTM
2. Check GA4 property is receiving data (Realtime report)
3. Ensure no ad blockers are interfering
4. Verify GTM container is published

#### Duplicate Events
1. Check if multiple GTM containers are loaded
2. Verify page tracking isn't duplicated
3. Check for multiple event listeners

### Debug Tools
- **GTM Preview Mode**: Real-time event debugging
- **GA4 DebugView**: Detailed event information
- **Browser Console**: Check for JavaScript errors
- **Network Tab**: Verify GTM script loading

---

## Code Quality Checklist

✅ **No index.html modifications** (already correct)
✅ **No duplicate GTM scripts**
✅ **No console errors**
✅ **No duplicate event firing**
✅ **Vite production build compatible**
✅ **TypeScript compatible**
✅ **React SPA routing support**
✅ **Error handling in tracking functions**

---

## Support

For issues with:
- **GTM Configuration**: Contact your GTM administrator
- **GA4 Setup**: Contact your GA4 administrator
- **Code Implementation**: Check the analytics utilities in `/src/utils/analytics.js`

This setup ensures comprehensive tracking of user interactions, page views, and conversions in your React SPA.
