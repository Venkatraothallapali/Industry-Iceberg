import { Routes, Route } from "react-router-dom"
import { DemoProvider } from "./context/DemoContext"
import Landing from "./pages/Landing"
import TemplateSelection from "./pages/TemplateSelection"
import DataSourceSimulation from "./pages/DataSourceSimulation"
import ReviewPage from "./pages/ReviewPage"
import VeritaScribeDemoWithSchema from "./pages/VeritaScribeDemoWithSchema"
import AIDrafting from "./pages/AIDrafting"
import DocumentPreview from "./pages/DocumentPreview"
import NotFound from "../../../components/NotFound"
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
          <Route path="demo" element={<VeritaScribeDemoWithSchema />} />
          <Route path="drafting" element={<AIDrafting />} />
          <Route path="preview" element={<DocumentPreview />} />

          {/* Unknown Routes - Show 404 */}
          <Route path="*" element={<NotFound />} />
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