import SectionHeading from '../ui/SectionHeading'
import { sports } from '../../data/content'

export default function SportsSection() {
  const loop = [...sports.list, ...sports.list]

  return (
    <section id="sports" className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Sports" title={sports.heading} sub={sports.sub} />
      </div>
      <div className="marquee" aria-label="Sports offered at TIS">
        <ul className="marquee-track flex w-max gap-4">
          {loop.map((s, i) => (
            <li
              key={i}
              aria-hidden={i >= sports.list.length}
              data-cursor
              className="rounded-full border border-line bg-surface px-8 py-4 font-display text-xl font-semibold text-brand transition hover:border-accent hover:bg-accent hover:text-[#14295e]"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
