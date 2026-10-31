import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

// Follower ring for mouse users. It grows over anything interactive.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 450, damping: 36, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 450, damping: 36, mass: 0.4 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const t = e.target.closest?.('a, button, [data-cursor]')
      setActive(!!t)
      setLabel(t?.getAttribute?.('data-cursor') || '')
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] grid place-items-center rounded-full bg-accent font-mono text-[10px] uppercase tracking-widest text-ink mix-blend-normal"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: label ? 84 : active ? 44 : 14,
          height: label ? 84 : active ? 44 : 14,
          opacity: active ? 0.92 : 0.85,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        {label}
      </motion.div>
    </>
  )
}
