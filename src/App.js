import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductSection from './components/ProductSection'
import SpecialistsSection from './components/SpecialistsSection'
import WelcomeSection from './components/WelcomeSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <ProductSection />
      <SpecialistsSection/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App