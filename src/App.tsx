import productRoutes from "./routes/productRoutes";
import { Routes, Route, Navigate } from 'react-router-dom'
import { useCanonicalUrl } from './hooks/useCanonicalUrl'
import URLRedirectHandler from './components/URLRedirectHandler'

import Navbar from './components/Navbar'
import HomeWithMeta from './components/HomeWithMeta'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import GMPComplianceWithMeta from './components/GMPComplianceWithMeta'
import ComplaintSiteSearchWithSchema from './components/ComplaintSiteSearchWithSchema'
import QualityTrainingWithMeta from './components/QualityTrainingWithMeta'
import BlogWithSchema from './components/BlogWithSchema'
import BlogArticleWithSchema from './components/BlogArticleWithSchema'
import RedirectToSlug from './components/RedirectToSlug'
import ContactUsWithMeta from './components/ContactUsWithMeta'
import VideoCreationServiceWithSchema from './components/VideoCreationServiceWithSchema'
import LiveLMSWithSchema from './components/LiveLMSWithSchema'
import AiModelDevelopmentWithSchema from './components/AiModelDevelopmentWithSchema'
import EnterpriseLLMSolutionsWithSchema from './components/EnterpriseLLMSolutionsWithSchema'
import PrivacyPolicyWithSchema from './components/PrivacyPolicyWithSchema'
import TermsOfUseWithSchema from './components/TermsOfUseWithSchema'
import ScheduleDemoWithSchema from './components/ScheduleDemoWithSchema'
import ECTDAIWithSchema from './components/ECTDAIWithSchema'
import ECTDDemoWithSchema from './components/ECTDDemoWithSchema'
import LiveLMSDemoWithSchema from './components/LiveLMSDemoWithSchema'
import AiModelDemoWithSchema from './components/AiModelDemoWithSchema'
import EnterpriseLLMDemoWithSchema from './components/EnterpriseLLMDemoWithSchema'
import ScrollToTop from './components/ScrollToTop'

// Analytics imports
import { usePageTracking } from './hooks/usePageTracking'

import './App.css'
import './index.css'

function App() {
  // Global page tracking for SPA
  usePageTracking();
  
  // Global canonical URL management
  useCanonicalUrl();

  return (
    <>
      <URLRedirectHandler />
      <ScrollToTop />

      <Routes>

        {/* Homepage */}
        <Route path="/" element={
          <div className="main-app">
            <Navbar />
            <HomeWithMeta />
            <Footer />
          </div>
        } />

        {/* PRODUCT ROUTES (VeritaScribe, ComplianceLoop, Complisense) */}
        {productRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route path="/ectd-ai" element={
          <div className="main-app">
            <Navbar />
            <ECTDAIWithSchema />
          </div>
        } />

        <Route path="/demo" element={
          <div className="main-app">
            <Navbar />
            <ScheduleDemoWithSchema />
          </div>
        } />

        <Route path="/gmp-compliance" element={
          <div className="main-app">
            <Navbar />
            <GMPComplianceWithMeta />
          </div>
        } />

        <Route path="/complaint-site-search" element={
          <div className="main-app">
            <Navbar />
            <ComplaintSiteSearchWithSchema />
          </div>
        } />

        <Route path="/quality-training" element={
          <div className="main-app">
            <Navbar />
            <QualityTrainingWithMeta />
          </div>
        } />

        <Route path="/blog" element={
          <div className="main-app">
            <Navbar />
            <BlogWithSchema />
            <Footer />
          </div>
        } />

        <Route path="/blog/:slug" element={
          <div className="main-app">
            <Navbar />
            <BlogArticleWithSchema />
            <Footer />
          </div>
        } />

        <Route path="/blog/:id" element={
          <div className="main-app">
            <Navbar />
            <RedirectToSlug />
            <Footer />
          </div>
        } />

        <Route path="/contact-us" element={
          <div className="main-app">
            <Navbar />
            <ContactUsWithMeta />
            <Footer />
          </div>
        } />

        <Route path="/video-creation-service" element={
          <div className="main-app">
            <Navbar />
            <VideoCreationServiceWithSchema />
          </div>
        } />

        <Route path="/ai-technologies-services" element={
          <div className="main-app">
            <Navbar />
            <AiModelDevelopmentWithSchema />
          </div>
        } />

        <Route path="/enterprise-llm-solutions" element={
          <div className="main-app">
            <Navbar />
            <EnterpriseLLMSolutionsWithSchema />
          </div>
        } />

        <Route path="/live-lms" element={
          <div className="main-app">
            <Navbar />
            <LiveLMSWithSchema />
          </div>
        } />

        <Route path="/privacy-policy" element={
          <div className="main-app">
            <Navbar />
            <PrivacyPolicyWithSchema />
            <Footer />
          </div>
        } />

        <Route path="/terms-of-use" element={
          <div className="main-app">
            <Navbar />
            <TermsOfUseWithSchema />
            <Footer />
          </div>
        } />

        <Route path="/videoservice-schedule-demo" element={
          <div className="main-app">
            <ScheduleDemoWithSchema />
          </div>
        } />

        <Route path="/ai-model-demo" element={
          <div className="main-app">
            <AiModelDemoWithSchema />
          </div>
        } />

        <Route path="/enterprise-llm-demo" element={
          <div className="main-app">
            <EnterpriseLLMDemoWithSchema />
          </div>
        } />

        <Route path="/ectd-ai-demo" element={
          <div className="main-app">
            <ECTDDemoWithSchema />
          </div>
        } />

        <Route path="/live-lms-demo" element={
          <div className="main-app">
            <LiveLMSDemoWithSchema />
          </div>
        } />

        <Route path="/templates" element={<Navigate to="/veritascribe/templates" replace />} />

        {/* 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App