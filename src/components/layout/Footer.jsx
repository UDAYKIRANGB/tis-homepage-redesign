import { contact } from '../../data/content'

const links = ['FAQ', 'Privacy Policy', 'Terms & Conditions', 'Disclaimer']
const paths = ['/faq/', '/privacy-policy/', '/terms-conditions/', '/disclaimer/']

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold text-brand">Tulas International School</p>
          <address className="mt-3 text-sm not-italic text-muted">
            <a href={contact.mapUrl} target="_blank" rel="noreferrer" className="hover:text-ink">
              {contact.address}
            </a>
          </address>
        </div>
        <div className="space-y-1 text-sm text-muted">
          <p>
            Landline:{' '}
            {contact.landlines.map((l, i) => (
              <span key={l}>
                <a href={`tel:${l}`} className="hover:text-ink">{l}</a>
                {i < contact.landlines.length - 1 && ', '}
              </span>
            ))}
          </p>
          <p>
            Admission Helpline: <a href={contact.helplineHref} className="hover:text-ink">{contact.helplineLabel}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} className="hover:text-ink">{contact.email}</a>
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm text-muted">
          {links.map((l, i) => (
            <li key={l}>
              <a href={`https://tis.edu.in${paths[i]}`} className="hover:text-ink">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
