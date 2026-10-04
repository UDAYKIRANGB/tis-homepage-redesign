import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useFinePointer } from '../../hooks/useFinePointer'

const INTERACTIVE = 'a, button, input, select, textarea, [data-cursor]'

export default function CustomCursor() {
  const fine = useFinePointer()
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 })

  useEffect(() => {
    if (!fine) return
    document.documentElement.classList.add('custom-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const over = (e) => setHovering(Boolean(e.target.closest?.(INTERACTIVE)))
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over, { passive: true })
    document.addEventListener('mouseleave', leave)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
    }
  }, [fine, x, y])

  if (!fine) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0 }}>
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0 -ml-5 -mt-5"
      >
        <motion.div
          animate={{ scale: hovering ? 1.9 : 1, backgroundColor: hovering ? 'rgba(245,184,0,0.25)' : 'rgba(245,184,0,0)' }}
          transition={{ duration: 0.25 }}
          className="h-10 w-10 rounded-full border-2 border-accent"
        />
      </motion.div>
      <motion.div style={{ x, y }} className="absolute left-0 top-0 -ml-1 -mt-1">
        <div className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>
    </div>
  )
}
