import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { profile } from '../data/content'

// Name reveal + counter, then the curtain lifts. Skipped for reduced motion.
export default function Preloader({ onDone }) {
  const reduce =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [visible, setVisible] = useState(!reduce)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduce) {
      onDone()
      return
    }
    document.documentElement.style.overflow = 'hidden'
    const start = performance.now()
    const dur = 1500
    let raf
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setVisible(false), 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.style.overflow = ''
        onDone()
      }}
    >
      {visible && (
        <motion.div
          key="pre"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-6 text-paper md:p-10"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-paper/60">{profile.role}</p>
          <div className="overflow-hidden">
            <h1 className="flex flex-wrap text-[clamp(3rem,13vw,11rem)] font-semibold leading-[0.95] tracking-tighter">
              {profile.name.split('').map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    {ch === ' ' ? ' ' : ch}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
          <div className="flex items-end justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-paper/60">{profile.location}</p>
            <p className="font-mono text-5xl tabular-nums md:text-7xl">{String(count).padStart(3, '0')}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
