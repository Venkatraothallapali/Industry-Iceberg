import { Routes, Route, Navigate } from "react-router-dom"
import "./styles/index.css"

import Home from "./components/Home"
import Services from "./components/Services"
import DemoPage from "./components/DemoPage"

export default function ComplianceApp() {
  return (
    <div className="compliance-loop-app">
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="services" element={<Services />} />

        {/* Contact / Demo Page */}
        <Route path="contact" element={<DemoPage />} />

        {/* Redirect Unknown Routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
