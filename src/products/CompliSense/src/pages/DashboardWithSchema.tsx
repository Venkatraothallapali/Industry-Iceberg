import { useCanonicalUrlWithPath } from '../../../../hooks/useCanonicalUrl'
import { useAdvancedSchema } from '../../../../hooks/useAdvancedSchema'
import Dashboard from './ComplisenseDashboard'

const DashboardWithSchema = () => {
  
  // Set canonical URL
  useCanonicalUrlWithPath('/complisense/dashboard')
  
  // Add comprehensive advanced schema markup
  useAdvancedSchema({
    title: 'cGMP Intelligence Dashboard | CompliSense | Industry Iceberg',
    description: 'Real-time FDA 483 insights, GMP trend analysis, and compliance analytics dashboard. Monitor regulatory compliance metrics and make data-driven decisions.',
    url: '/complisense/dashboard',
    type: 'product',
    applicationCategory: 'BusinessApplication',
    features: [
      'Real-time FDA 483 analytics',
      'GMP trend monitoring',
      'Compliance score tracking',
      'Observation pattern analysis',
      'Regulatory intelligence dashboard',
      'Risk assessment tools',
      'Historical data analysis',
      'Custom reporting capabilities'
    ],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'CompliSense', url: '/complisense' },
      { name: 'Dashboard', url: '/complisense/dashboard' }
    ],
    faqs: [
      {
        question: 'What data does the CompliSense dashboard display?',
        answer: 'The dashboard displays real-time FDA 483 insights, GMP inspection trends, compliance analytics, observation patterns, and risk assessment metrics for pharmaceutical and life sciences companies.'
      },
      {
        question: 'How often is the dashboard data updated?',
        answer: 'Dashboard data is updated continuously with the latest FDA inspection data, GMP trends, and regulatory intelligence to ensure you have current insights for decision-making.'
      },
      {
        question: 'Can I customize the dashboard views?',
        answer: 'Yes, the CompliSense dashboard offers customizable views, filters, and reporting options to focus on specific compliance areas, time periods, or regulatory jurisdictions.'
      },
      {
        question: 'Is the dashboard suitable for global compliance?',
        answer: 'The dashboard provides insights relevant to FDA compliance primarily, with capabilities to support global regulatory compliance through customizable monitoring and reporting features.'
      }
    ]
  })

  return <Dashboard />
}

export default DashboardWithSchema
