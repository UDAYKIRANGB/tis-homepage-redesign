import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Staggered scroll-triggered reveal. Wrap children in <Reveal.Item> for a stagger,
// or use <Reveal> alone for a single block. Durations stay within 0.3-0.6s.
export default function Reveal({ children, stagger = 0.1, className = '', as: Tag = 'div' }) {
  const Component = motion[Tag]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Component>
  )
}

Reveal.Item = function RevealItem({ children, className = '', as: Tag = 'div' }) {
  const Component = motion[Tag]
  return (
    <Component className={className} variants={item}>
      {children}
    </Component>
  )
}
