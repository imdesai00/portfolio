import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { projects, lab } from '../data/content'
import Reveal from './Reveal'
import ProjectModal from './ProjectModal'

const tones = ['bg-accent text-ink', 'bg-lime text-ink', 'bg-ink text-paper']
const ease = [0.2, 0.7, 0.2, 1]

function Card({ p, i, onOpen }) {
  // 3D tilt that follows the pointer over the card.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 18 })
  const sy = useSpring(my, { stiffness: 180, damping: 18 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-9, 9])
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7])

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const leave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <Reveal delay={(i % 3) * 120}>
      <button
        type="button"
        onClick={() => onOpen(i)}
        onMouseMove={move}
        onMouseLeave={leave}
        data-cursor="Open"
        aria-label={`Open details for ${p.title}`}
        className="group flex h-full w-full flex-col text-left"
      >
        <motion.div style={{ rotateX, rotateY, transformPerspective: 900 }} className="will-change-transform">
          <motion.div
            layoutId={`block-${p.slug}`}
            style={{ borderRadius: 24 }}
            className={`relative aspect-[4/3] overflow-hidden ${tones[i % tones.length]}`}
          >
            <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-widest opacity-70">
              {p.year}
            </span>
            <span className="absolute right-5 top-5 translate-y-1 rounded-full bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              View ↗
            </span>
            <span className="absolute bottom-5 left-5 right-5 text-3xl font-semibold leading-none tracking-tighter transition-transform duration-500 group-hover:-translate-y-1 md:text-4xl">
              {p.title}
            </span>
          </motion.div>
        </motion.div>

        <div className="mt-5 flex flex-1 flex-col">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">
            {p.kind}
            {p.company ? ` · ${p.company}` : ''}
          </p>
          <p className="mt-2 text-base leading-snug">{p.summary}</p>
          {p.stack.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.slice(0, 5).map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] transition-colors group-hover:border-ink">
                  {s}
                </li>
              ))}
            </ul>
          )}
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
            <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">
              Read the story
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </button>
    </Reveal>
  )
}

export default function Work() {
  const [active, setActive] = useState(null) // index of the open project
  const [origin, setOrigin] = useState(null) // slug of the card it opened from
  const n = projects.length

  const open = useCallback((i) => {
    setOrigin(projects[i].slug)
    setActive(i)
  }, [])
  const close = useCallback(() => setActive(null), [])
  const next = useCallback(() => setActive((a) => (a === null ? a : (a + 1) % n)), [n])
  const prev = useCallback(() => setActive((a) => (a === null ? a : (a - 1 + n) % n)), [n])

  const p = active === null ? null : projects[active]

  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Selected <span className="font-serif font-normal italic">work</span>
          </h2>
          <p className="hidden max-w-xs text-right text-sm text-mute md:block">
            Click any project for the full story: my role, what I built and the stack behind it.
          </p>
        </Reveal>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <Card key={proj.slug} p={proj} i={i} onOpen={open} />
          ))}
        </div>

        <Reveal className="mt-20 border-t border-ink pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">Automation lab</p>
          <ul className="mt-4 grid gap-6 md:grid-cols-3">
            {lab.map((l, i) => (
              <motion.li
                key={l.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease }}
                className="rounded-2xl border border-line p-5 transition-colors hover:border-ink"
              >
                <span className="font-mono text-xs text-mute">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{l.title}</h3>
                <p className="mt-1 text-mute">{l.text}</p>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>

      <AnimatePresence>
        {p && (
          <ProjectModal
            key="project-modal"
            project={p}
            tone={tones[active % tones.length]}
            index={active}
            total={n}
            originSlug={origin}
            prev={projects[(active - 1 + n) % n]}
            next={projects[(active + 1) % n]}
            onPrev={prev}
            onNext={next}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
