import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { contact } from '../../data/content'

// Appears after the hero so the primary action is always one tap away.
export default function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-line bg-surface/95 p-3 backdrop-blur md:inset-x-auto md:bottom-6 md:right-6 md:rounded-full md:border md:p-2 md:shadow-xl"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <a href={contact.helplineHref} className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold md:flex-none">
            <Phone size={16} /> Call
          </a>
          <a href="#enquire" className="flex-1 rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-[#14295e] md:flex-none">
            Enquire Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
