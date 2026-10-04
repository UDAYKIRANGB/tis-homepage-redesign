import { Trophy } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Card from '../ui/Card'
import { personalities, rankings } from '../../data/content'

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('')

export default function RankingsSection() {
  return (
    <section id="rankings" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Recognition" title="Ranked among the best boarding schools" />
      <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rankings.map((r) => (
          <Reveal.Item key={r.by}>
            <Card>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent transition group-hover:rotate-12 group-hover:bg-accent group-hover:text-[#14295e]">
                <Trophy size={22} />
              </span>
              <p className="mt-5 bg-gradient-to-br from-accent to-orange-500 bg-clip-text font-display text-6xl font-extrabold text-transparent">{r.rank}</p>
              <p className="mt-2 font-semibold text-brand">{r.where}</p>
              <p className="mt-2 text-sm text-muted">{r.by}</p>
            </Card>
          </Reveal.Item>
        ))}
      </Reveal>

      <h3 className="mb-6 mt-20 font-display text-2xl font-extrabold text-brand">Influential Personalities On Campus</h3>
      <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {personalities.map((p) => (
          <Reveal.Item key={p.name}>
            <Card>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-orange-500 font-display text-lg font-extrabold text-[#14295e] transition group-hover:scale-110">
                  {initials(p.name)}
                </span>
                <p className="font-display text-xl font-extrabold text-brand">{p.name}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.note}</p>
            </Card>
          </Reveal.Item>
        ))}
      </Reveal>
    </section>
  )
}
