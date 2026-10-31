import { profile, channels, projects } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink px-5 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-mute">Sitemap</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="#work" className="hover:underline">Work</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-mute">Projects</p>
          <ul className="mt-3 space-y-1 text-sm">
            {projects.map((p) => (
              <li key={p.slug}><a href="#work" className="hover:underline">{p.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-mute">Channels</p>
          <ul className="mt-3 space-y-1 text-sm">
            {channels.map((c) => (
              <li key={c.label}><a href={c.href} target="_blank" rel="noreferrer" className="hover:underline">{c.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl font-mono text-xs text-mute">
        © {new Date().getFullYear()} {profile.name} · Built with React, Vite &amp; Tailwind
      </p>
    </footer>
  )
}
