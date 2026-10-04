import Reveal from '../ui/Reveal'
import { campus } from '../../data/content'

export default function CampusSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <Reveal>
        <Reveal.Item as="h2" className="font-display text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
          {campus.heading}
        </Reveal.Item>
        <Reveal.Item as="p" className="mt-6 text-lg leading-relaxed text-muted">{campus.body}</Reveal.Item>
        <Reveal.Item as="p" className="mt-6 font-display text-2xl font-extrabold text-accent">{campus.punch}</Reveal.Item>
      </Reveal>
    </section>
  )
}
