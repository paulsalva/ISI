import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'ISI Communications has delivered premium fiber optic infrastructure in Northern Illinois for over 20 years. Learn about our network, our team, and our commitment to uptime.',
}

const whyIsi = [
  {
    title: 'Regional Expertise',
    body: 'ISI has operated fiber infrastructure in Northern Illinois for over two decades. We know the terrain, the carriers, and the specific challenges of connecting enterprises in this region.',
  },
  {
    title: 'Custom Engineering',
    body: 'Every ISI solution is designed from the ground up for your organization. We don\'t adapt commodity packages — we engineer to your operational requirements.',
  },
  {
    title: 'Dedicated Support',
    body: 'You get a dedicated ISI representative who knows your account, your infrastructure, and your team. Not a call center.',
  },
  {
    title: 'SLA Accountability',
    body: 'Our SLA terms are straightforward. We stand behind network performance with financial guarantees — not marketing language.',
  },
  {
    title: 'Carrier Independence',
    body: 'ISI maintains diverse, redundant BGP connections to multiple Tier 1 carriers. Our network doesn\'t depend on a single provider\'s performance.',
  },
  {
    title: 'Scalable Infrastructure',
    body: 'From 10 Mbps to 100 Gbps, ISI infrastructure scales with your growth. You don\'t need to re-engineer your network as your business evolves.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 40px 64px',
          borderBottom: '1px solid var(--color-border)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        <div>
          <p className="section-label">About ISI</p>
          <h1
            className="display"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)', marginBottom: '24px' }}
          >
            Twenty Years of<br />
            <span className="display-italic">Uncompromising</span><br />
            Infrastructure.
          </h1>
          <div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
            {[
              { num: '20+', label: 'Years' },
              { num: '100G', label: 'Max Capacity' },
              { num: 'Tier 1', label: 'BGP' },
            ].map((s) => (
              <div key={s.label}>
                <div className="display" style={{ fontSize: '32px', lineHeight: 1 }}>{s.num}</div>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-dim)',
                    marginTop: '5px',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--color-fg-muted)',
              lineHeight: '1.85',
              marginBottom: '20px',
            }}
          >
            ISI Communications, Inc. is the premier provider of fiber optic, high-performance
            networking solutions in Northern Illinois. Founded on the conviction that regional
            enterprises deserve the same quality of network infrastructure as major metro markets,
            ISI has spent over 20 years building and operating the fiber backbone that Northern
            Illinois institutions depend on.
          </p>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--color-fg-muted)',
              lineHeight: '1.85',
              marginBottom: '20px',
            }}
          >
            Today, ISI delivers customized solutions to healthcare systems, financial services
            firms, commercial enterprises, cloud infrastructure operators, government agencies,
            and educational institutions. Our network delivers Wavelengths, Content Video
            Transport, Ethernet, Internet Access, Private Networks, and bandwidth across
            the Northern Illinois region — up to 100 Gbps.
          </p>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--color-fg-muted)',
              lineHeight: '1.85',
            }}
          >
            ISI's approach is distinguished by direct engagement with client IT leadership,
            custom engineering, and a culture that puts the customer first. Our processes
            are straightforward. Our representatives are dedicated. Our commitments are kept.
          </p>
        </div>
      </section>

      {/* Why ISI */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 40px',
        }}
      >
        <p className="section-label">Why ISI</p>
        <h2
          className="display"
          style={{ fontSize: '38px', marginBottom: '48px' }}
        >
          What Sets Us Apart
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--color-border)',
            border: '1px solid var(--color-border)',
          }}
        >
          {whyIsi.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'var(--color-bg)',
                padding: '32px 28px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-fg)',
                  marginBottom: '12px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--color-fg-muted)',
                  lineHeight: '1.75',
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Network + SLA */}
      <section
        style={{
          background: 'var(--color-bg-surface)',
          padding: '72px 40px',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
          }}
        >
          <div>
            <p className="section-label">Network Footprint</p>
            <h2
              className="display"
              style={{ fontSize: '30px', marginBottom: '16px' }}
            >
              Northern Illinois Coverage
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-fg-muted)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              ISI's fiber network connects Chicago, the Western Suburbs, and enterprises
              throughout Northern Illinois. Our topology is engineered for diversity and
              resilience — no single point of failure between your location and the internet.
            </p>
            <Link href="/resources" className="btn-outline">
              Download Network Map
            </Link>
          </div>
          <div>
            <p className="section-label">Service Level Agreement</p>
            <h2
              className="display"
              style={{ fontSize: '30px', marginBottom: '16px' }}
            >
              Commitments We Stand Behind
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-fg-muted)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              ISI's SLA terms are straightforward and contractually binding. We commit to
              specific uptime targets, response times, and performance thresholds — with
              financial accountability if we fall short. No fine print. No exceptions.
            </p>
            <Link href="/resources" className="btn-outline">
              Review SLA Terms
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '64px 40px',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <p className="section-label">Network Partners</p>
        <h2
          className="display"
          style={{ fontSize: '30px', marginBottom: '16px' }}
        >
          Carrier &amp; Support Affiliations
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--color-fg-muted)',
            lineHeight: '1.8',
            maxWidth: '600px',
          }}
        >
          ISI maintains relationships with leading Tier 1 carriers, regional fiber operators,
          and technology partners to ensure our customers benefit from the broadest possible
          network reach and the most current infrastructure technologies.
        </p>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          background: 'var(--color-accent)',
          padding: '72px 40px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '36px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          20 years of experience available{' '}
          <span style={{ fontStyle: 'italic', opacity: 0.75 }}>to your organization.</span>
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '36px',
          }}
        >
          Start with a consultation. No commitment, no sales pressure.
        </p>
        <Link href="/contact" className="btn-white">
          Get in Touch
        </Link>
      </section>
    </>
  )
}
