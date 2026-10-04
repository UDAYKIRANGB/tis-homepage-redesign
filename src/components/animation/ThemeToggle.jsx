import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className="relative flex h-9 w-16 items-center rounded-full border border-line bg-surface p-1 focus-visible:outline-2 focus-visible:outline-accent"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[#14295e]"
        style={{ marginLeft: dark ? 'auto' : 0 }}
      >
        <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
          {dark ? <Moon size={15} /> : <Sun size={15} />}
        </motion.span>
      </motion.span>
    </button>
  )
}
