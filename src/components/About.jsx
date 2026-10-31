import { services, stack, profile } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  const loop = [...stack, ...stack]
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Every project includes{' '}
            <span className="font-serif font-normal italic">architecture, integrations, deployment and monitoring.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid border-t border-ink md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="border-b border-line py-8 md:border-b-0 md:pr-8">
              <p className="font-mono text-xs text-mute">{s.n}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 max-w-xs text-mute">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="marquee mt-20 overflow-hidden border-y border-ink py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {loop.map((s, i) => (
            <span key={i} className="flex items-center gap-10 text-3xl font-semibold tracking-tight md:text-5xl">
              {s}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Reveal className="mx-auto mt-28 max-w-7xl px-5 text-center md:px-10">
        <p className="mx-auto max-w-3xl font-serif text-3xl italic leading-tight md:text-6xl">“{profile.statement}”</p>
      </Reveal>
    </section>
  )
}
