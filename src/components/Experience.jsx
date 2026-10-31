import { experience, profile } from '../data/content'
import Reveal from './Reveal'

export default function Experience({ onContact }) {
  return (
    <section id="experience" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            The <span className="font-serif font-normal italic">path</span> so far
          </h2>
        </Reveal>

        <ol className="mt-14 border-t border-ink">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.role + e.period} delay={i * 80} className="grid gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-6">
              <p className="font-mono text-xs uppercase tracking-widest text-mute md:col-span-3">{e.period}</p>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noreferrer" className="text-mute underline decoration-line underline-offset-4 hover:text-ink">
                    {e.org} ↗
                  </a>
                ) : (
                  <p className="text-mute">{e.org}</p>
                )}
              </div>
              <p className="max-w-md md:col-span-5">{e.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="mx-auto mt-32 max-w-7xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-mute">Next chapter</p>
        <button
          onClick={onContact}
          className="mt-4 text-[clamp(3rem,11vw,10rem)] font-semibold leading-none tracking-tighter hover:text-accent"
        >
          Let’s talk<span className="font-serif font-normal italic">.</span>
        </button>
        <p className="mt-4 text-mute">{profile.availability}</p>
      </Reveal>
    </section>
  )
}
