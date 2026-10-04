import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Phone } from 'lucide-react'
import Button from '../ui/Button'
import { contact, hero, trust } from '../../data/content'

const word = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const blobY = useTransform(scrollY, [0, 600], [0, 120])
  const blobY2 = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6">
      <motion.div aria-hidden="true" style={{ y: blobY }} className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <motion.div aria-hidden="true" style={{ y: blobY2 }} className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-block rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
        >
          CBSE · Co-ed · Class IV – XII · Dehradun
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          className="font-display text-5xl font-extrabold leading-[1.05] text-brand sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.title.map((w, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span variants={word} className={`inline-block ${w === 'Tulas' ? 'text-accent' : ''}`}>
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 max-w-2xl space-y-3"
        >
          <p className="text-xl font-medium">{hero.lead}</p>
          <p className="text-lg text-muted">{hero.body}</p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button href={contact.applyUrl}>Apply Now</Button>
            <Button href="#enquire" variant="ghost">Enquire Now</Button>
            <Button href={contact.helplineHref} variant="ghost">
              <Phone size={16} /> {contact.helplineLabel}
            </Button>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted"
        >
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {t}
            </li>
          ))}
        </motion.ul>

        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="mt-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface"
        >
          <ArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  )
}
