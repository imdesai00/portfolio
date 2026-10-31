import Lenis from 'lenis'

// One shared Lenis instance so the modal can pause page scrolling.
export const smooth = { lenis: null }

export function startSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 })
  smooth.lenis = lenis
  let raf
  const loop = (t) => {
    lenis.raf(t)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  // Route in-page anchors through Lenis so #links glide too.
  const onClick = (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href')
    if (id.length < 2) return
    const el = document.querySelector(id)
    if (!el) return
    e.preventDefault()
    lenis.scrollTo(el, { offset: -20, duration: 1.4 })
  }
  document.addEventListener('click', onClick)

  return () => {
    cancelAnimationFrame(raf)
    document.removeEventListener('click', onClick)
    lenis.destroy()
    smooth.lenis = null
  }
}

export const lockScroll = () => smooth.lenis?.stop()
export const unlockScroll = () => smooth.lenis?.start()
