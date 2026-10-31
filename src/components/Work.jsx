import { projects, lab } from '../data/content'
import Reveal from './Reveal'

const tones = ['bg-accent text-ink', 'bg-lime text-ink', 'bg-ink text-paper']

export default function Work() {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Selected <span className="font-serif font-normal italic">work</span>
          </h2>
          <p className="hidden max-w-xs text-right text-sm text-mute md:block">
            Systems for transport and mobility, plus the product I am building on the side.
          </p>
        </Reveal>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${tones[i % tones.length]} transition-transform duration-500 group-hover:-translate-y-2`}
                >
                  <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-widest opacity-70">
                    {p.year}
                  </span>
                  <span className="absolute bottom-5 left-5 right-5 text-3xl font-semibold leading-none tracking-tighter md:text-4xl">
                    {p.title}
                  </span>
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-mute">{p.kind}</p>
                  <p className="mt-2 text-base leading-snug">{p.summary}</p>
                  {p.stack.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px]">
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                  {(p.live || p.repo) && (
                    <div className="mt-5 flex gap-5 text-sm font-medium">
                      {p.live && (
                        <a href={p.live} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                          View live ↗
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                          Source ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-ink pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">Automation lab</p>
          <ul className="mt-4 grid gap-6 md:grid-cols-3">
            {lab.map((l) => (
              <li key={l.title}>
                <h3 className="text-lg font-semibold tracking-tight">{l.title}</h3>
                <p className="mt-1 text-mute">{l.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
