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
        <img className="brand__mark" src="/seg-logo.png" alt="" />
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
          <img src="/seg-search.png" alt="" />
        </button>
      </nav>
    </header>
  )
}
