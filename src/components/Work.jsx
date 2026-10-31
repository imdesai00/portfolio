import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Work() {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Selected <span className="font-serif font-normal italic">work</span>
          </h2>
          <p className="hidden max-w-xs text-right text-sm text-mute md:block">
            Real problems, shipped solutions, and the details that made them hold up.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <article className="group flex h-full flex-col">
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-3xl ${p.tone} transition-transform duration-500 group-hover:-translate-y-2`}
                >
                  <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-widest opacity-70">
                    {p.year}
                  </span>
                  <span className="absolute bottom-5 left-5 right-5 text-4xl font-semibold leading-none tracking-tighter md:text-5xl">
                    {p.title}
                  </span>
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-mute">{p.kind}</p>
                  <p className="mt-2 text-base leading-snug">{p.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px]">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-5 text-sm font-medium">
                    <a href={p.live} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                      View live ↗
                    </a>
                    <a href={p.repo} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                      Source ↗
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
