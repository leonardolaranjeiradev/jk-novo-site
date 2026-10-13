import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import TrabalheConosco from './components/TrabalheConosco'
import CTA from './components/CTA'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services onModalToggle={setIsGalleryOpen} />
        <TrabalheConosco />
        <CTA />      
      </main>
      <Footer />
      <FloatingWhatsApp hidden={isGalleryOpen} />
    </>
  )
}

export default App