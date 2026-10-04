import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, sub, align = 'left' }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal.Item as="p" className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </Reveal.Item>
      )}
      <Reveal.Item as="h2" className="font-display text-3xl font-extrabold leading-tight text-brand sm:text-4xl md:text-5xl">
        {title}
      </Reveal.Item>
      {sub && (
        <Reveal.Item as="p" className="mt-4 text-lg text-muted">
          {sub}
        </Reveal.Item>
      )}
    </Reveal>
  )
}
