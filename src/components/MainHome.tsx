import type { FC } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ValueProposition from './ValueProposition'
import WhoWeAre from './WhoWeAre'
import ProductsShowcase from './ProductsShowcase'
import Footer from './Footer'

const MainHome: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProposition />
      <WhoWeAre />
      <ProductsShowcase />
      <Footer />
    </>
  )
}

export default MainHome
