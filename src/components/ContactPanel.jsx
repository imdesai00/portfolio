import { useEffect, useState } from 'react'
import { profile, channels, faqs } from '../data/content'

function LocalTime() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  let text = ''
  try {
    text = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: profile.timeZone,
    }).format(now)
  } catch {
    text = now.toLocaleTimeString()
  }
  return (
    <span className="font-mono">
      {text} <span className="text-mute">· {profile.location}</span>
    </span>
  )
}

export default function ContactPanel({ open, onClose }) {
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-xl flex-col overflow-y-auto bg-paper p-6 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:p-10 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">Connect</p>
          <button onClick={onClose} className="rounded-full border border-ink px-4 py-1.5 text-sm hover:bg-ink hover:text-paper">
            Close
          </button>
        </div>

        <h2 className="mt-10 text-4xl font-semibold leading-none tracking-tight md:text-5xl">
          Say <span className="font-serif font-normal italic">hello.</span>
        </h2>

        <button
          onClick={copy}
          className="mt-8 flex w-full items-center justify-between rounded-2xl bg-ink px-6 py-5 text-left text-paper hover:bg-accent hover:text-ink"
        >
          <span className="text-lg font-medium md:text-2xl">{profile.email}</span>
          <span className="font-mono text-xs uppercase">{copied ? 'Copied ✓' : 'Copy'}</span>
        </button>

        <div className="mt-6 flex items-center justify-between border-b border-line pb-4 text-sm">
          <span className="text-mute">Local time</span>
          <LocalTime />
        </div>

        <ul className="mt-6 flex flex-wrap gap-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a href={c.href} target="_blank" rel="noreferrer" className="rounded-full border border-ink px-4 py-1.5 text-sm hover:bg-lime">
                {c.label} ↗
              </a>
            </li>
          ))}
          {profile.resumeUrl && (
            <li>
              <a href={profile.resumeUrl} download className="rounded-full border border-ink px-4 py-1.5 text-sm hover:bg-lime">
                Résumé ↓
              </a>
            </li>
          )}
        </ul>

        <h3 className="mt-12 font-mono text-xs uppercase tracking-widest text-mute">FAQ</h3>
        <ul className="mt-3 border-t border-ink">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i
            return (
              <li key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium"
                >
                  {f.q}
                  <span className="font-mono text-xs">{isOpen ? 'Close' : 'Open'}</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden text-mute">{f.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}
