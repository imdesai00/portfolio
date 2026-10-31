import { skills, stack, profile } from '../data/content'
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

        <dl className="mt-16 border-t border-ink">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 50} className="grid gap-1 border-b border-line py-5 md:grid-cols-12 md:gap-6">
              <dt className="font-mono text-xs uppercase tracking-widest text-mute md:col-span-3 md:pt-1">{s.group}</dt>
              <dd className="text-lg tracking-tight md:col-span-9">{s.items}</dd>
            </Reveal>
          ))}
        </dl>
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
