import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { contact, formOptions } from '../../data/content'

const field = 'w-full rounded-2xl border border-line bg-bg px-4 py-3 text-ink outline-none transition focus:border-accent'

export default function EnquirySection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Demo only: wire this to your admissions API / CRM in production.
    setSent(true)
  }

  return (
    <section id="enquire" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Admissions" title="Enquire Now!" sub="Share your details and our admissions team will get in touch." />
          <Reveal className="space-y-4 text-muted">
            <Reveal.Item as="a" href={contact.helplineHref} className="flex items-center gap-3 hover:text-ink">
              <Phone size={18} className="text-accent" /> Admission Helpline No. {contact.helplineLabel}
            </Reveal.Item>
            <Reveal.Item as="a" href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-ink">
              <Mail size={18} className="text-accent" /> {contact.email}
            </Reveal.Item>
            <Reveal.Item as="a" href={contact.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-ink">
              <MapPin size={18} className="mt-1 shrink-0 text-accent" /> {contact.address}
            </Reveal.Item>
          </Reveal>
        </div>

        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} className="py-12 text-center">
                <CheckCircle2 size={48} className="mx-auto text-accent" />
                <p className="mt-4 font-display text-2xl font-extrabold text-brand">Thank you!</p>
                <p className="mt-2 text-muted">We have received your enquiry.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-4">
                <label className="block">
                  <span className="sr-only">Parent name</span>
                  <input required name="name" placeholder="Parent / Guardian name" className={field} />
                </label>
                <label className="block">
                  <span className="sr-only">Phone number</span>
                  <input required name="phone" type="tel" inputMode="tel" pattern="[0-9+\s-]{10,15}" placeholder="+91 Phone number" className={field} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="sr-only">Select class</span>
                    <select required name="class" defaultValue="" className={field}>
                      <option value="" disabled>Select Class</option>
                      {formOptions.classes.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="sr-only">Select state</span>
                    <select required name="state" defaultValue="" className={field}>
                      <option value="" disabled>Select State</option>
                      {formOptions.states.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                </div>
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input required type="checkbox" className="mt-1 accent-[#f5b800]" />
                  I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun
                </label>
                <Button type="submit" className="w-full">Enquire Now</Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
