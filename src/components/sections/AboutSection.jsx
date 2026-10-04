import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Card from '../ui/Card'
import { about } from '../../data/content'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="About TIS" title={about.heading} />
      <Reveal className="grid gap-8 md:grid-cols-2">
        {about.body.map((p) => (
          <Reveal.Item key={p} as="p" className="text-lg leading-relaxed text-muted">{p}</Reveal.Item>
        ))}
        <Reveal.Item className="md:col-span-2">
          <Card className="p-8"><p className="font-display text-xl text-brand sm:text-2xl">{about.founded}</p></Card>
        </Reveal.Item>
      </Reveal>
    </section>
  )
}
