import Link from 'next/link'

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg-deep)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '48px 40px 36px',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '40px',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-fg)',
                marginBottom: '12px',
              }}
            >
              ISI<span style={{ color: 'var(--color-accent)' }}>.</span>Communications
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--color-fg-dim)',
                lineHeight: '1.7',
              }}
            >
              Premier fiber optic infrastructure for Northern Illinois enterprises.
              Over 20 years of mission-critical network delivery.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                display: 'flex',
                gap: '24px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                flexWrap: 'wrap',
              }}
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-fg-dim)',
                marginBottom: '10px',
              }}
            >
              Get in Touch
            </div>
            <a
              href="tel:18005054742"
              style={{
                display: 'block',
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--color-fg)',
                textDecoration: 'none',
                marginBottom: '6px',
              }}
            >
              800-505-ISIC
            </a>
            <a
              href="mailto:info@isicommunications.com"
              style={{
                fontSize: '13px',
                color: 'var(--color-accent)',
                textDecoration: 'none',
              }}
            >
              info@isicommunications.com
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '24px',
            borderTop: '1px solid var(--color-border)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              color: 'var(--color-fg-faint)',
            }}
          >
            © {new Date().getFullYear()} ISI Communications, Inc. All rights reserved.
          </p>
          <p
            style={{
              fontSize: '11px',
              color: 'var(--color-fg-faint)',
              textAlign: 'right',
            }}
          >
            P.O. Box 754, West Chicago, IL 60185 &nbsp;·&nbsp; T: 800-505-ISIC (4742) &nbsp;·&nbsp; F: 630-824-0199
          </p>
        </div>
      </div>
    </footer>
  )
}
