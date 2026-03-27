import { Routes, Route, Navigate } from "react-router-dom"
import { DemoProvider } from "./context/DemoContext"
import Landing from "./pages/Landing"
import TemplateSelection from "./pages/TemplateSelection"
import DataSourceSimulation from "./pages/DataSourceSimulation"
import ReviewPage from "./pages/ReviewPage"
import DemoPage from "./pages/DemoPage"
import AIDrafting from "./pages/AIDrafting"
import DocumentPreview from "./pages/DocumentPreview"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./styles/landing.css"
import { useProductPageMeta } from "../../../hooks/useProductPageMeta"

export default function App() {
  // Use product-specific meta tags for all VeritaScribe pages
  useProductPageMeta()
  
  return (
    <div className="veritascribe-app">
      <DemoProvider>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="templates" element={<TemplateSelection />} />
          <Route path="data-source" element={<DataSourceSimulation />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="drafting" element={<AIDrafting />} />
          <Route path="preview" element={<DocumentPreview />} />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </DemoProvider>
    </div>
  )
}