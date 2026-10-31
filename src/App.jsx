import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import ContactPanel from './components/ContactPanel'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const open = useCallback(() => setContactOpen(true), [])
  const close = useCallback(() => setContactOpen(false), [])

  return (
    <>
      <Header onContact={open} />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience onContact={open} />
      </main>
      <Footer />
      <ContactPanel open={contactOpen} onClose={close} />
    </>
  )
}
