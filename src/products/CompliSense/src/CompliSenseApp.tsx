import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Navbar from './components/Navbar'
import Dashboard from './components/pages/Dashboard'
import RequestDemo from './components/pages/RequestDemo'
import Login from './components/pages/Login'
import ObservationAnalysis from './components/pages/ObservationAnalysis'
import Home from './components/pages/Home'
import './App.css'

function CompliSenseAppContent() {
  const location = useLocation()
  const currentPath = location.pathname.split('/').pop()
  const hideNavbar = currentPath === 'request-demo'

  return (
    <div className="complisense-app min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" style={{
      background: 'linear-gradient(to bottom right, rgb(248 250 252), rgb(239 246 255), rgb(224 231 255))'
    }}>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="request-demo" element={<RequestDemo />} />
        <Route path="login" element={<Login />} />
        <Route path="observation-analysis" element={<ObservationAnalysis />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </div>
  )
}

export default function CompliSenseApp() {
  return <CompliSenseAppContent />
}
