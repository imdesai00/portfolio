import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { lockScroll, unlockScroll } from '../lib/smooth'

const ease = [0.2, 0.7, 0.2, 1]

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export default function ProjectModal({ project, tone, index, total, originSlug, prev, next, onPrev, onNext, onClose }) {
  const sheet = useRef(null)
  const closeBtn = useRef(null)
  const scroller = useRef(null)

  // Lock page scroll, focus the dialog, restore focus on close.
  useEffect(() => {
    const opener = document.activeElement
    lockScroll()
    document.documentElement.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => {
      unlockScroll()
      document.documentElement.style.overflow = ''
      opener?.focus?.()
    }
  }, [])

  // Esc closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onNext()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'Tab' && sheet.current) {
        const f = sheet.current.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')
        if (!f.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, onNext, onPrev])

  // Back to the top when moving between projects.
  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 })
  }, [project.slug])

  const meta = [
    ['Role', project.role],
    ['Company', project.company],
    ['Period', project.period],
    ['Type', project.kind],
  ].filter(([, v]) => v)

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label={`${project.title} details`}>
      <motion.div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
      />

      <motion.div
        ref={sheet}
        className="absolute inset-x-0 bottom-0 top-3 mx-auto flex max-w-6xl flex-col overflow-hidden rounded-t-[28px] bg-paper md:top-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div ref={scroller} data-lenis-prevent className="h-full overflow-y-auto overscroll-contain">
          {/* Header block: morphs from the card that was clicked. */}
          <motion.div
            key={project.slug}
            layoutId={project.slug === originSlug ? `block-${project.slug}` : undefined}
            initial={project.slug === originSlug ? undefined : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease }}
            style={{ borderRadius: 24 }}
            className={`relative m-3 flex min-h-[38vh] flex-col justify-between p-6 md:m-4 md:min-h-[44vh] md:p-10 ${tone}`}
          >
            <div className="flex items-start gap-4 font-mono text-xs uppercase tracking-widest opacity-70">
              <span>{project.year}</span>
              <span>
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
            <h2 className="max-w-4xl text-[clamp(2.6rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tighter">
              {project.title}
            </h2>
          </motion.div>

          <div className="px-5 pb-10 pt-8 md:px-12">
            <motion.div key={project.slug + '-body'} variants={list} initial="hidden" animate="show">
              <motion.dl variants={item} className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-line pb-8 md:grid-cols-4">
                {meta.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-mute">{k}</dt>
                    <dd className="mt-1 font-medium leading-snug">{v}</dd>
                  </div>
                ))}
              </motion.dl>

              <motion.p variants={item} className="mt-8 max-w-3xl text-2xl leading-snug tracking-tight md:text-3xl">
                {project.overview}
              </motion.p>

              <motion.h3 variants={item} className="mt-12 font-mono text-xs uppercase tracking-widest text-mute">
                What I did
              </motion.h3>
              <ul className="mt-4 border-t border-ink">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    variants={item}
                    className="grid grid-cols-12 gap-4 border-b border-line py-4 md:py-5"
                  >
                    <span className="col-span-2 font-mono text-xs text-mute md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="col-span-10 text-lg leading-snug md:col-span-11">{h}</span>
                  </motion.li>
                ))}
              </ul>

              {project.stack.length > 0 && (
                <motion.div variants={item} className="mt-10">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-mute">Built with</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <li key={s} className="rounded-full border border-ink px-4 py-1.5 font-mono text-xs">
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>

            <div className="mt-14 grid gap-3 border-t border-ink pt-6 md:grid-cols-2">
              <button
                type="button"
                onClick={onPrev}
                className="group rounded-2xl border border-line p-5 text-left transition-colors hover:bg-ink hover:text-paper"
              >
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">← Previous</span>
                <span className="mt-1 block text-xl font-semibold tracking-tight">{prev.title}</span>
              </button>
              <button
                type="button"
                onClick={onNext}
                className="group rounded-2xl border border-line p-5 text-left transition-colors hover:bg-ink hover:text-paper md:text-right"
              >
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">Next →</span>
                <span className="mt-1 block text-xl font-semibold tracking-tight">{next.title}</span>
              </button>
            </div>
          </div>
        </div>

        <button
          ref={closeBtn}
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 z-10 rounded-full bg-paper px-4 py-1.5 text-sm font-medium text-ink shadow-sm hover:bg-lime md:right-8 md:top-8"
        >
          Close ✕
        </button>
      </motion.div>
    </div>
  )
}
