import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/content'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => { node.textContent = Math.round(v) + suffix },
    })
    return () => controls.stop()
  }, [inView, value, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function StatsSection() {
  return (
    <section id="campus" className="bg-brand py-20 text-white dark:text-[#0a1126]">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <Reveal.Item key={s.label} className="text-center">
            <p className="font-display text-5xl font-extrabold text-accent dark:text-[#0a1126] md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest opacity-80">{s.label}</p>
          </Reveal.Item>
        ))}
      </Reveal>
    </section>
  )
}
