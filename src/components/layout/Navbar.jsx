import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Dumbbell, Home, Info, Menu, Phone, Send, Star, Trophy, X } from 'lucide-react'

const linkIcons = [Info, BookOpen, Home, Dumbbell, Trophy, Star, Send]
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'
import { contact, navItems } from '../../data/content'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-1 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 transition-all duration-300 sm:px-6 ${
          scrolled ? 'rounded-full border border-line bg-surface/85 shadow-lg backdrop-blur-md lg:mx-6 xl:mx-auto' : ''
        }`}
      >
        <a href="#top" className="font-display text-xl font-extrabold text-brand">
          Tulas<span className="text-accent"> TIS</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="group relative text-sm font-medium text-ink">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href={contact.applyUrl} className="hidden sm:inline-flex !py-2">
            Apply Now
          </Button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-line bg-surface p-2 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="block">
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="relative mx-4 mt-2 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b3a86] via-[#14295e] to-[#0a1126] p-6 text-white shadow-2xl shadow-black/40 lg:hidden"
            >
              <motion.div aria-hidden="true" animate={{ x: [0, 20, 0], y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }} className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/30 blur-3xl" />
              <motion.div aria-hidden="true" animate={{ x: [0, -16, 0], y: [0, -18, 0] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }} className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
                className="relative flex flex-col"
              >
                {navItems.map((n, i) => {
                  const Icon = linkIcons[i]
                  return (
                  <motion.li
                    key={n.href}
                    variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href={n.href} onClick={() => setOpen(false)} className="group flex items-center gap-4 rounded-2xl px-2 py-2.5 text-lg font-medium text-white transition hover:bg-white/10 hover:pl-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-accent transition group-hover:bg-accent group-hover:text-[#14295e]"><Icon size={18} /></span>
                      <span className="flex-1">{n.label}</span>
                      <ArrowUpRight size={18} className="text-accent opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </motion.li>
                  )
                })}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="relative mt-5 flex flex-col gap-3 border-t border-white/10 pt-5"
              >
                <Button href={contact.applyUrl}>Apply Now</Button>
                <Button href={contact.helplineHref} variant="ghost" className="!border-white/20 !bg-white/10 !text-white hover:!border-accent">
                  <Phone size={16} /> {contact.helplineLabel}
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
