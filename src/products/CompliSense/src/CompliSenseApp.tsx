import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/ComplisenseNavbar';
import Dashboard from './pages/DashboardWithSchema';
import CompliSenseDemoWithSchema from './pages/CompliSenseDemoWithSchema';
import Login from './pages/ComplisenseLogin';
import ObservationAnalysis from './pages/ComplisenseObservationAnalysis';
import './ComplisenseApp.css';
import { useProductPageMeta } from '../../../hooks/useProductPageMeta';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.endsWith('/request-demo');

  // Use product-specific meta tags for all CompliSense pages
  useProductPageMeta();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="request-demo" element={<CompliSenseDemoWithSchema />} />
        <Route path="login" element={<Login />} />
        <Route path="observation-analysis" element={<ObservationAnalysis />} />
        
        {/* Redirect unknown routes to dashboard */}
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default App;
