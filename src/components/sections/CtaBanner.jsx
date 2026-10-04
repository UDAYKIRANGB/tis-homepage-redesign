import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { contact } from '../../data/content'

export default function CtaBanner() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand p-10 text-center text-white sm:p-16 dark:text-[#0a1126]">
        <motion.div aria-hidden="true" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <Reveal.Item as="h2" className="relative font-display text-3xl font-extrabold sm:text-5xl">
          Give your child the Tulas advantage
        </Reveal.Item>
        <Reveal.Item as="p" className="relative mx-auto mt-4 max-w-xl text-lg opacity-90">
          Join a community that encourages leadership, innovation, and lifelong learning.
        </Reveal.Item>
        <Reveal.Item className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#enquire">Enquire Now</Button>
          <Button href={contact.helplineHref} variant="ghost"><Phone size={16} /> {contact.helplineLabel}</Button>
        </Reveal.Item>
      </Reveal>
    </section>
  )
}
