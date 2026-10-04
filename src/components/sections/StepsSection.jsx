import { FileText, MessageCircle, School } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Card from '../ui/Card'
import { steps } from '../../data/content'

const icons = [MessageCircle, School, FileText]

export default function StepsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Admissions" title="Getting started takes three steps" />
      <Reveal className="grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = icons[i]
          return (
            <Reveal.Item key={s.title}>
              <Card className="p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-[#14295e] transition group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={26} />
                  </span>
                  <span className="font-display text-7xl font-extrabold leading-none text-accent/25 transition group-hover:text-accent/60">{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-brand">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </Card>
            </Reveal.Item>
          )
        })}
      </Reveal>
    </section>
  )
}
