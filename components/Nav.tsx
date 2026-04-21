'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(12, 15, 26, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ textDecoration: 'none' }}
          aria-label="ISI Communications home"
        >
          <span
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-fg)',
            }}
          >
            ISI<span style={{ color: 'var(--color-accent)' }}>.</span>Communications
          </span>
        </Link>

        {/* Links */}
        <ul
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${pathname === href ? 'nav-link-active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className="btn-outline" style={{ padding: '9px 22px' }}>
          Contact Us
        </Link>
      </nav>
    </header>
  )
}
