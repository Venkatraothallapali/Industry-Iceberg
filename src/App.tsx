import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ValueProposition from './components/ValueProposition'
import WhoWeAre from './components/WhoWeAre'
import ProductsShowcase from './components/ProductsShowcase'
import Footer from './components/Footer'
import GMPCompliance from './components/GMPCompliance'
import ComplaintSiteSearch from './components/ComplaintSiteSearch'
import QualityTraining from './components/QualityTraining'
import Blog from './components/Blog'
import BlogArticle from './components/BlogArticle'
import ContactUs from './components/ContactUs'
import VideoCreationService from './components/VideoCreationService'
import LiveLMS from './components/LiveLMS'
import AiModelDevelopment from './components/AiModelDevelopment'
import EnterpriseLLMSolutions from './components/EnterpriseLLMSolutions'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import ScheduleDemo from './components/ScheduleDemo'
import ECTDAI from './components/ECTDAI'
import ECTDDemo from './components/ECTDDemo'
import LiveLMSDemo from './components/LiveLMSDemo'
import AiModelDemo from './components/AiModelDemo'
import EnterpriseLLMDemo from './components/EnterpriseLLMDemo'
import ScrollToTop from './components/ScrollToTop'

import VeritaScribeApp from './products/VeritaScribe/src/veritascribeApp'
import ComplianceApp from './products/ComplianceLoop/src/ComplianceApp'
import CompliSenseApp from './products/CompliSense/src/CompliSenseApp'

import './App.css'
import './index.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="main-app">
            <Navbar />
            <ValueProposition />
            <WhoWeAre />
            <ProductsShowcase />
            <Footer />
          </div>
        } />
        <Route path="/veritascribe/*" element={<VeritaScribeApp />} />
        <Route path="/compliance-loop/*" element={<ComplianceApp />} />
        <Route path="/complisense/*" element={<CompliSenseApp />} />
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
            <GMPCompliance />
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
            <QualityTraining />
          </div>
        } />
        <Route path="/blog" element={
          <div className="main-app">
            <Navbar />
            <Blog />
            <Footer />
          </div>
        } />
        <Route path="/blog/:id" element={
          <div className="main-app">
            <Navbar />
            <BlogArticle />
            <Footer />
          </div>
        } />
        <Route path="/contact-us" element={
          <div className="main-app">
            <Navbar />
            <ContactUs />
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
            <EnterpriseLLMSolutions />
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
