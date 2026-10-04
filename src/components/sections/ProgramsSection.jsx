import { BookOpen, Dumbbell, Home, Sparkles } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Card from '../ui/Card'
import { programs } from '../../data/content'

const icons = [BookOpen, Home, Dumbbell, Sparkles]

export default function ProgramsSection() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Programs" title="Learning that goes beyond the classroom" />
      <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p, i) => {
          const Icon = icons[i]
          return (
            <Reveal.Item key={p.title}>
              <Card>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-[#14295e] transition group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={24} />
                </span>
                <span className="mt-5 inline-block rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">{p.tag}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold text-brand">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Card>
            </Reveal.Item>
          )
        })}
      </Reveal>
    </section>
  )
}
