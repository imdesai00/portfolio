import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react'
import { profile } from '../data/content'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

const tiles = [
  { ch: '</>', cls: 'bg-lime', r: '-9deg', depth: 40 },
  { ch: '{ }', cls: 'bg-accent', r: '7deg', depth: -30 },
  { ch: '=>', cls: 'bg-ink text-paper', r: '-5deg', depth: 55 },
  { ch: '2.5+', cls: 'bg-paper border border-ink', r: '6deg', depth: -45 },
]

const ease = [0.2, 0.7, 0.2, 1]

function Tile({ t, mx, my, i }) {
  const x = useTransform(mx, (v) => v * t.depth)
  const y = useTransform(my, (v) => v * t.depth)
  return (
    <motion.span
      style={{ '--r': t.r, x, y }}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={{ opacity: 1, rotate: parseFloat(t.r) }}
      transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 160, damping: 14 }}
      whileHover={{ scale: 1.1, rotate: 0, y: -8 }}
      className={`grid h-20 w-20 place-items-center rounded-2xl font-mono text-xl font-medium md:h-24 md:w-24 ${t.cls}`}
    >
      {t.ch}
    </motion.span>
  )
}

export default function Hero({ ready }) {
  // Mouse parallax for the tiles; scroll parallax for the headline.
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 15 })
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 15 })
  const { scrollY } = useScroll()
  const headY = useTransform(scrollY, [0, 700], [0, -90])
  const fade = useTransform(scrollY, [0, 600], [1, 0.25])

  const onMove = (e) => {
    mx.set(e.clientX / window.innerWidth - 0.5)
    my.set(e.clientY / window.innerHeight - 0.5)
  }

  const lines = profile.headline.map((l) => l.split(' '))
  let wordIndex = 0

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col justify-end px-5 pb-12 pt-32 md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="grid h-16 w-16 place-items-center rounded-full bg-ink font-serif text-2xl text-paper md:h-20 md:w-20">
            {profile.initials}
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-mute">
            {profile.name}
            <br />
            {profile.role}
          </p>
        </motion.div>

        <motion.h1
          style={{ y: headY, opacity: fade }}
          className="text-[clamp(3rem,10.5vw,10rem)] font-semibold leading-[0.92] tracking-tighter"
        >
          {lines.map((words, li) => (
            <span key={li} className={`block ${li === lines.length - 1 ? 'font-serif font-normal italic' : ''}`}>
              {words.map((w, wi) => {
                const idx = wordIndex++
                return (
                  <span key={wi} className="mr-[0.22em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                    <motion.span
                      className="inline-block"
                      initial={{ y: '115%', rotate: 4 }}
                      animate={ready ? { y: 0, rotate: 0 } : {}}
                      transition={{ delay: 0.08 * idx, duration: 0.9, ease }}
                    >
                      {w}
                    </motion.span>
                  </span>
                )
              })}
            </span>
          ))}
        </motion.h1>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8, ease }}
            className="max-w-md"
          >
            <p className="text-lg leading-snug text-ink/80">{profile.intro}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mute">{profile.availability}</p>
            <div className="mt-6 flex gap-3 text-sm font-medium">
              <Magnetic>
                <a href="#work" className="block rounded-full bg-ink px-5 py-2 text-paper transition-colors hover:bg-accent hover:text-ink">
                  View work
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.resumeUrl} download className="block rounded-full border border-ink px-5 py-2 transition-colors hover:bg-lime">
                  Résumé PDF ↓
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <div className="flex gap-3" aria-hidden="true">
            {ready && tiles.map((t, i) => <Tile key={t.ch} t={t} mx={mx} my={my} i={i} />)}
          </div>
        </div>

        <Reveal className="mt-14 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-mute">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
          Scroll
        </Reveal>
      </div>
    </section>
  )
}
