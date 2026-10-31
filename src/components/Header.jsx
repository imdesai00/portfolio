import { profile } from '../data/content'
import Magnetic from './Magnetic'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
]

export default function Header({ onContact }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative hidden md:block">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <Magnetic>
            <button
              onClick={onContact}
              className="rounded-full border border-white/70 px-4 py-1.5 transition-colors hover:bg-white hover:text-black"
            >
              Connect
            </button>
          </Magnetic>
        </nav>
      </div>
    </header>
  )
}
