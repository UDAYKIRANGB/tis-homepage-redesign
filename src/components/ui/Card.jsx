import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Interactive card: 3D tilt + cursor-following golden glow + animated top accent bar.
// Pointer effects run for mouse only, so touch scrolling is never hijacked.
export default function Card({ children, className = '' }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 220, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 220, damping: 20 })
  const gx = useTransform(mx, (v) => `${v * 100}%`)
  const gy = useTransform(my, (v) => `${v * 100}%`)
  const glow = useMotionTemplate`radial-gradient(260px circle at ${gx} ${gy}, rgba(245,184,0,0.22), transparent 65%)`

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const reset = () => { mx.set(0.5); my.set(0.5) }

  return (
    <motion.div
      data-cursor
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 ${className}`}
    >
      <motion.div aria-hidden="true" style={{ background: glow }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span aria-hidden="true" className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
