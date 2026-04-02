import { Routes, Route } from "react-router-dom"
import "./styles/index.css"

import Home from "./components/Home"
import Services from "./components/Services"
import ComplianceLoopDemoWithSchema from "./components/ComplianceLoopDemoWithSchema"
import NotFound from "../../../components/NotFound"
import { useProductPageMeta } from "../../../hooks/useProductPageMeta"

export default function ComplianceApp() {
  // Use product-specific meta tags for all Compliance Loop pages
  useProductPageMeta()
  
  return (
    <div className="complianceloop-app">
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="services" element={<Services />} />
        
        {/* Dynamic Service Routes */}
        <Route path="services/:serviceId" element={<Services />} />

        {/* Contact / Demo Page */}
        <Route path="contact" element={<ComplianceLoopDemoWithSchema />} />
        <Route path="demo" element={<ComplianceLoopDemoWithSchema />} />

        {/* Unknown Routes - Show 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
