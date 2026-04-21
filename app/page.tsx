import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISI Communications — Premier Fiber Infrastructure, Northern Illinois',
}

const services = [
  {
    num: '01',
    title: 'Metro Ethernet Services',
    body: 'Carrier-class Ethernet with next-generation metro area transport. Reliable, restorable, managed — ready to scale with your applications.',
    href: '/solutions#metro-ethernet',
  },
  {
    num: '02',
    title: 'Private Optical Networking',
    body: 'Fully managed, custom-designed optical networks supplementing your IT staff. Dedicated support and a guaranteed SLA.',
    href: '/solutions#private-optical',
  },
  {
    num: '03',
    title: 'Wavelength Services',
    body: 'Uninterrupted data flow between Chicago, the Western Suburbs, and Northern Illinois at 1GE, 10GE, and 100GE.',
    href: '/solutions#wavelength',
  },
  {
    num: '04',
    title: 'Collocation Services',
    body: 'Secure, state-of-the-art colocation with redundant power and cooling. Direct access to carrier hotels, data centers, and cloud providers.',
    href: '/solutions#colocation',
  },
  {
    num: '05',
    title: 'Business Class Internet',
    body: 'High-capacity diverse fiber with fully redundant BGP connections to top Tier 1 providers. Hassle-free access, better value.',
    href: '/solutions#internet',
  },
  {
    num: '06',
    title: 'VoIP / SIP Trunking',
    body: 'Enterprise-grade SIP trunking available since 2006. Flexible and cost-effective. Compatible with any IP service provider.',
    href: '/solutions#voip',
  },
]

const industries = [
  'Healthcare',
  'Financial Services',
  'Government',
  'Higher Education',
  'Commercial Enterprise',
  'Cloud Infrastructure',
]

const clients = [
  'Northern Illinois University',
  'AmitaHealth',
  'Kane County Government',
  'Robert Morris University',
  'Syndeo',
  'Bar Louie',
]

const stats = [
  { num: '20+', label: 'Years in Service' },
  { num: '100G', label: 'Max Throughput' },
  { num: 'Tier 1', label: 'BGP Redundancy' },
  { num: 'SLA', label: 'Guaranteed Uptime' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="grid-texture"
        style={{
          position: 'relative',
          padding: '100px 40px 90px',
          maxWidth: '1280px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <p className="section-label">Northern Illinois · Fiber Infrastructure</p>

        <h1
          className="display"
          style={{ fontSize: 'clamp(44px, 6vw, 72px)', maxWidth: '700px', marginBottom: '28px' }}
        >
          Mission-Critical Networks<br />
          for <span className="display-italic">Demanding</span> Enterprises
        </h1>

        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-fg-muted)',
            maxWidth: '480px',
            lineHeight: '1.8',
            marginBottom: '44px',
          }}
        >
          ISI designs and operates fiber optic infrastructure trusted by healthcare
          systems, financial institutions, and government agencies across Northern
          Illinois — with over 20 years of uncompromising uptime.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
          <Link href="/about" className="btn-ghost">
            View Network Coverage <span style={{ fontSize: '16px' }}>→</span>
          </Link>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '28px 40px',
                borderRight: i < stats.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <div
                className="display"
                style={{ fontSize: '36px', lineHeight: 1 }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-fg-dim)',
                  marginTop: '6px',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px 0' }}>
        <p className="section-label">Our Solutions</p>
        <h2
          className="display"
          style={{ fontSize: 'clamp(30px, 4vw, 42px)', marginBottom: '12px' }}
        >
          Infrastructure Built<br />to Specification
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--color-fg-muted)',
            maxWidth: '480px',
            lineHeight: '1.75',
            marginBottom: '48px',
          }}
        >
          Every ISI deployment is engineered to your operational requirements — not
          adapted from a commodity product catalog.
        </p>
      </section>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--color-border)',
          borderLeft: '1px solid var(--color-border)',
        }}
      >
        {services.map((svc) => (
          <div key={svc.num} className="service-card">
            <div
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '13px',
                color: 'var(--color-accent-dim)',
                letterSpacing: '0.1em',
                marginBottom: '18px',
              }}
            >
              {svc.num}
            </div>
            <h3
              className="display"
              style={{ fontSize: '22px', marginBottom: '12px', lineHeight: 1.2 }}
            >
              {svc.title}
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--color-fg-muted)',
                lineHeight: '1.75',
                marginBottom: '20px',
              }}
            >
              {svc.body}
            </p>
            <Link
              href={svc.href}
              style={{
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                textDecoration: 'none',
              }}
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>

      {/* ── Industries ── */}
      <section
        style={{
          background: 'var(--color-bg-surface)',
          marginTop: '0',
          padding: '60px 40px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-fg-dim)',
              marginBottom: '32px',
            }}
          >
            Industries Served
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              borderTop: '1px solid var(--color-border)',
              borderLeft: '1px solid var(--color-border)',
            }}
          >
            {industries.map((ind) => (
              <Link
                href="/industries"
                key={ind}
                style={{ textDecoration: 'none' }}
                className="industry-card"
              >
                <div
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    marginBottom: '14px',
                  }}
                />
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-fg-muted)',
                    lineHeight: '1.4',
                  }}
                >
                  {ind}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section
        style={{
          padding: '56px 40px',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-fg-faint)',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Trusted By
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            {clients.map((name, i) => (
              <span
                key={i}
                style={{
                  fontSize: '12px',
                  color: 'rgba(240, 237, 230, 0.28)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: 'var(--color-accent)',
          padding: '72px 40px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: '1.15',
              maxWidth: '480px',
            }}
          >
            Ready to engineer your{' '}
            <span style={{ fontStyle: 'italic', opacity: 0.75 }}>
              next-generation
            </span>{' '}
            network?
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Speak with an Engineer
            </span>
            <a
              href="tel:18005054742"
              style={{
                fontSize: '26px',
                fontWeight: 500,
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              800-505-ISIC
            </a>
            <Link href="/contact" className="btn-white">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
