import productRoutes from "./routes/productRoutes";
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomeWithMeta from './components/HomeWithMeta'
import Footer from './components/Footer'
import GMPComplianceWithMeta from './components/GMPComplianceWithMeta'
import ComplaintSiteSearch from './components/ComplaintSiteSearch'
import QualityTrainingWithMeta from './components/QualityTrainingWithMeta'
import Blog from './components/Blog'
import BlogArticle from './components/BlogArticle'
import RedirectToSlug from './components/RedirectToSlug'
import ContactUsWithMeta from './components/ContactUsWithMeta'
import VideoCreationService from './components/VideoCreationService'
import LiveLMS from './components/LiveLMS'
import AiModelDevelopment from './components/AiModelDevelopment'
import EnterpriseLLMSolutionsWithMeta from './components/EnterpriseLLMSolutionsWithMeta'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import ScheduleDemo from './components/ScheduleDemo'
import ECTDAI from './components/ECTDAI'
import ECTDDemo from './components/ECTDDemo'
import LiveLMSDemo from './components/LiveLMSDemo'
import AiModelDemo from './components/AiModelDemo'
import EnterpriseLLMDemo from './components/EnterpriseLLMDemo'
import ScrollToTop from './components/ScrollToTop'

// Analytics imports
import { usePageTracking } from './hooks/usePageTracking'

import './App.css'
import './index.css'

function App() {
  // Global page tracking for SPA
  usePageTracking();

  return (
    <>
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
            <ECTDAI />
          </div>
        } />

        <Route path="/demo" element={
          <div className="main-app">
            <Navbar />
            <ScheduleDemo />
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
            <ComplaintSiteSearch />
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
            <Blog />
            <Footer />
          </div>
        } />

        <Route path="/blog/:slug" element={
          <div className="main-app">
            <Navbar />
            <BlogArticle />
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
            <VideoCreationService />
          </div>
        } />

        <Route path="/ai-technologies-services" element={
          <div className="main-app">
            <Navbar />
            <AiModelDevelopment />
          </div>
        } />

        <Route path="/enterprise-llm-solutions" element={
          <div className="main-app">
            <Navbar />
            <EnterpriseLLMSolutionsWithMeta />
          </div>
        } />

        <Route path="/live-lms" element={
          <div className="main-app">
            <Navbar />
            <LiveLMS />
          </div>
        } />

        <Route path="/privacy-policy" element={
          <div className="main-app">
            <Navbar />
            <PrivacyPolicy />
            <Footer />
          </div>
        } />

        <Route path="/terms-of-use" element={
          <div className="main-app">
            <Navbar />
            <TermsOfUse />
            <Footer />
          </div>
        } />

        <Route path="/schedule-demo" element={
          <div className="main-app">
            <ScheduleDemo />
          </div>
        } />

        <Route path="/ai-model-demo" element={
          <div className="main-app">
            <AiModelDemo />
          </div>
        } />

        <Route path="/enterprise-llm-demo" element={
          <div className="main-app">
            <EnterpriseLLMDemo />
          </div>
        } />

        <Route path="/ectd-ai-demo" element={
          <div className="main-app">
            <ECTDDemo />
          </div>
        } />

        <Route path="/live-lms-demo" element={
          <div className="main-app">
            <LiveLMSDemo />
          </div>
        } />

        <Route path="/templates" element={<Navigate to="/veritascribe/templates" replace />} />

      </Routes>
    </>
  )
}

export default App