'use client'

import Link from 'next/link'
import Image from 'next/image'
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
        <Link href="/" style={{ textDecoration: 'none' }} aria-label="ISI Communications home">
          <Image src="/logo.png" alt="ISI Communications" width={160} height={40} />
        </Link>

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

        <Link href="/contact" className="btn-outline" style={{ padding: '9px 22px' }}>
          Contact Us
        </Link>
      </nav>
    </header>
  )
}
