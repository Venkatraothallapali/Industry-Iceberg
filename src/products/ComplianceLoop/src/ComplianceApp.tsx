import { Routes, Route, Navigate } from "react-router-dom"
import "./styles/index.css"

import Home from "./components/Home"
import Services from "./components/Services"
import DemoPage from "./components/DemoPage"
import { useProductPageMeta } from "../../../hooks/useProductPageMeta"

export default function ComplianceApp() {
  // Use product-specific meta tags for all Compliance Loop pages
  useProductPageMeta()
  
  return (
    <div className="compliance-loop-app">
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="services" element={<Services />} />
        
        {/* Dynamic Service Routes */}
        <Route path="services/:serviceId" element={<Services />} />

        {/* Contact / Demo Page */}
        <Route path="contact" element={<DemoPage />} />
        <Route path="demo" element={<DemoPage />} />

        {/* Redirect Unknown Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
