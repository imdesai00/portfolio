import { useCallback, useEffect, useState } from 'react'
import { MotionConfig } from 'motion/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import ContactPanel from './components/ContactPanel'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import { startSmoothScroll, lockScroll, unlockScroll } from './lib/smooth'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const open = useCallback(() => setContactOpen(true), [])
  const close = useCallback(() => setContactOpen(false), [])
  const onReady = useCallback(() => setReady(true), [])

  useEffect(() => startSmoothScroll(), [])
  useEffect(() => {
    contactOpen ? lockScroll() : unlockScroll()
  }, [contactOpen])

  return (
    <MotionConfig reducedMotion="user">
      <Preloader onDone={onReady} />
      <Cursor />
      <ScrollProgress />
      <Header onContact={open} />
      <main>
        <Hero ready={ready} />
        <Work />
        <About />
        <Experience onContact={open} />
      </main>
      <Footer />
      <ContactPanel open={contactOpen} onClose={close} />
    </MotionConfig>
  )
}
