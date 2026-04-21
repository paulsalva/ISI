import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Download ISI Communications data sheets, network maps, SLA terms, and service documentation.',
}

const documents = [
  {
    category: 'Company',
    items: [
      {
        title: 'Our Story',
        description: 'History and overview of ISI Communications.',
        filename: 'isi-our-story.pdf',
        href: '/docs/isi-our-story.pdf',
      },
      {
        title: 'Why ISI',
        description: 'How ISI can help your business — the value case.',
        filename: 'isi-why-isi.pdf',
        href: '/docs/isi-why-isi.pdf',
      },
    ],
  },
  {
    category: 'Network',
    items: [
      {
        title: 'Network Map',
        description: 'ISI fiber footprint across Northern Illinois.',
        filename: 'isi-network-map.pdf',
        href: '/docs/isi-network-map.pdf',
      },
      {
        title: 'Products & Data Sheets',
        description: 'Technical specifications for all ISI services.',
        filename: 'isi-data-sheets.pdf',
        href: '/docs/isi-data-sheets.pdf',
      },
    ],
  },
  {
    category: 'Legal & Service',
    items: [
      {
        title: 'Service Level Agreement',
        description: 'ISI SLA terms, uptime commitments, and credits.',
        filename: 'isi-sla.pdf',
        href: '/docs/isi-sla.pdf',
      },
      {
        title: 'Terms and Conditions of Service',
        description: 'Full terms governing ISI service agreements.',
        filename: 'isi-terms.pdf',
        href: '/docs/isi-terms.pdf',
      },
      {
        title: 'VOIP / SIP Trunking Details',
        description: 'Technical and commercial details for SIP trunking services.',
        filename: 'isi-sip-trunking.pdf',
        href: '/docs/isi-sip-trunking.pdf',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 40px 64px',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <p className="section-label">Resources</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)', maxWidth: '560px', marginBottom: '16px' }}
        >
          Documentation &amp;<br />
          <span className="display-italic">Technical Materials</span>
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-fg-muted)',
            maxWidth: '480px',
            lineHeight: '1.8',
          }}
        >
          Data sheets, network maps, SLA terms, and service documentation.
          Everything your IT and procurement team needs to evaluate ISI.
        </p>
      </section>

      {/* Documents */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px' }}>
        {documents.map((group) => (
          <div key={group.category} style={{ marginBottom: '56px' }}>
            <h2
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-fg-dim)',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {group.category}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {group.items.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <div>
                    <div
                      style={{
                        fontSize: '15px',
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontWeight: 600,
                        color: 'var(--color-fg)',
                        marginBottom: '4px',
                      }}
                    >
                      {doc.title}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'var(--color-fg-muted)',
                      }}
                    >
                      {doc.description}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                      }}
                    >
                      Download PDF
                    </span>
                    <span style={{ color: 'var(--color-accent)', fontSize: '14px' }}>↓</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div
          style={{
            padding: '28px',
            background: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            marginTop: '16px',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-fg-muted)',
              lineHeight: '1.7',
            }}
          >
            <strong style={{ color: 'var(--color-fg)', fontWeight: 500 }}>Note:</strong>{' '}
            PDFs are added by uploading files to the <code>/public/docs/</code> directory
            in the repository. File names must match the href values above. Contact{' '}
            <a
              href="mailto:info@isicommunications.com"
              style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
            >
              info@isicommunications.com
            </a>{' '}
            for any documents not yet listed here.
          </p>
        </div>
      </section>
    </>
  )
}
