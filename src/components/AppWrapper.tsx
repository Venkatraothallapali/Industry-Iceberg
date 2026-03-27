import type { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { useDefaultPageMeta } from '../hooks/useDefaultPageMeta'

interface AppWrapperProps {
  children: React.ReactNode
  pageTitle?: string
  pageDescription?: string
}

const AppWrapper: FC<AppWrapperProps> = ({ children, pageTitle = "Home", pageDescription }) => {
  const location = useLocation()
  
  // Don't apply default meta tags on blog pages (they have their own)
  const isBlogPage = location.pathname.startsWith('/blog')
  
  // Always call the hook, but pass default values for blog pages
  useDefaultPageMeta(!isBlogPage ? pageTitle : "Home", !isBlogPage ? pageDescription : undefined)
  
  return <>{children}</>
}

export default AppWrapper
