import { profile } from '../data/content'
import Reveal from './Reveal'

const tiles = [
  { ch: '</>', cls: 'bg-lime', r: '-9deg' },
  { ch: '{ }', cls: 'bg-accent', r: '7deg' },
  { ch: '=>', cls: 'bg-ink text-paper', r: '-5deg' },
  { ch: '12k', cls: 'bg-paper border border-ink', r: '6deg' },
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end px-5 pb-12 pt-32 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mb-8 flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-ink font-serif text-2xl text-paper md:h-20 md:w-20">
            {profile.initials}
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-mute">
            {profile.name}
            <br />
            {profile.role}
          </p>
        </Reveal>

        <h1 className="text-[clamp(3rem,10.5vw,10rem)] font-semibold leading-[0.92] tracking-tighter">
          {profile.headline.map((line, i) => (
            <Reveal as="span" key={line} delay={120 * (i + 1)} className="block">
              {i === profile.headline.length - 1 ? <span className="font-serif font-normal italic">{line}</span> : line}
            </Reveal>
          ))}
        </h1>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal delay={400} className="max-w-md">
            <p className="text-lg leading-snug text-ink/80">{profile.intro}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mute">{profile.availability}</p>
          </Reveal>

          <Reveal delay={500} className="flex gap-3" aria-hidden="true">
            {tiles.map((t) => (
              <span
                key={t.ch}
                style={{ '--r': t.r }}
                className={`tile grid h-20 w-20 place-items-center rounded-2xl font-mono text-xl font-medium md:h-24 md:w-24 ${t.cls}`}
              >
                {t.ch}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
