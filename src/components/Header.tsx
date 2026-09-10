import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const links = [
  { hash: 'home', label: 'Home' },
  { hash: 'design', label: 'Design' },
  { hash: 'specs', label: 'Specs' },
  { hash: 'tech', label: 'Tech' },
  { hash: 'contact', label: 'Contact' },
]

export default function Header() {
  const { pathname, hash } = useLocation()
  const isHome = pathname === '/'
  const activeHash = hash.replace('#', '') || 'home'

  return (
    <header className={isHome ? 'header header--overlay' : 'header header--bar'}>
      <Link to="/" className="brand">
        <svg className="brand__mark" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#d5a13c" />
          <path d="M12 5.2 6.4 17.4h2.9l2.7-6.6 2.7 6.6h2.9L12 5.2Z" fill="#2b2723" />
          <path d="M9.9 13.6h4.2l.9 2.2H9L9.9 13.6Z" fill="#2b2723" />
        </svg>
        <span>
          HARVEST
          <small>fictional company</small>
        </span>
      </Link>

      <nav className="nav" aria-label="Main">
        {links.map((link) => (
          <Link
            key={link.hash}
            to={`/#${link.hash}`}
            className={isHome && activeHash === link.hash ? 'nav__link is-active' : 'nav__link'}
          >
            {link.label}
          </Link>
        ))}
        <button className="search" type="button" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M20 20l-4.6-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
