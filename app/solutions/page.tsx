import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'ISI Communications delivers Metro Ethernet, Private Optical Networking, Wavelength Services, Collocation, Business Internet, and VoIP/SIP Trunking across Northern Illinois.',
}

const solutions = [
  {
    id: 'metro-ethernet',
    num: '01',
    title: 'Metro Ethernet Services',
    tagline: 'Carrier-class reliability. Next-generation metro transport.',
    body: `ISI's Ethernet services deliver the reliability of Carrier-class Ethernet with next-generation metro area transport technology. The result is an efficient, restorable, managed network ready for any application requirement.

The flexibility of Ethernet allows you to choose the bandwidth you need to support your applications within budget today, with the assurance that it scales in the future. ISI's managed approach eliminates the overhead of building and operating your own infrastructure while delivering measurably better performance.`,
    bullets: [
      'Scalable bandwidth from 10 Mbps to 10 Gbps',
      'Fully managed and monitored 24/7',
      'Restorable architecture with automatic failover',
      'SLA-backed uptime guarantee',
    ],
  },
  {
    id: 'private-optical',
    num: '02',
    title: 'Private Optical Networking',
    tagline: 'Custom-engineered. Fully managed. Guaranteed.',
    body: `A managed private optical network from ISI supplements your IT staff with flexible, custom-designed solutions to meet demanding technical and business requirements. Your customers will be able to access ISI's reliable network, the latest optical technologies, and experienced support staff — delivering a turnkey, fully managed network solution.

Security is guaranteed with our rock-solid SLA. ISI takes full ownership of the network's performance, giving your team back the time and resources to focus on core business operations.`,
    bullets: [
      'Custom-engineered to your exact specifications',
      'Dedicated ISI support staff included',
      'Rock-solid SLA with financial guarantees',
      'Fully managed — zero operational overhead for your IT team',
    ],
  },
  {
    id: 'wavelength',
    num: '03',
    title: 'Wavelength Services',
    tagline: 'Uninterrupted flow at 1GE, 10GE, and 100GE.',
    body: `ISI's wavelength service is ideal for any enterprise requiring uninterrupted data flow between Chicago, the Western Suburbs, and further into the Northern Illinois region. With current wavelength service sized at 1GE and 10GE — with 100GE available — ISI is prepared for the high-capacity business demands of network-intensive applications.

This is point-to-point, dedicated optical transport. No contention. No throttling. Pure throughput between your locations.`,
    bullets: [
      '1GE, 10GE, and 100GE wavelengths available',
      'Dedicated, uncontended point-to-point transport',
      'Chicago to Western Suburbs and Northern Illinois coverage',
      'Ideal for data center interconnect, cloud backhaul, and HPC',
    ],
  },
  {
    id: 'colocation',
    num: '04',
    title: 'Collocation Services',
    tagline: 'Secure. Redundant. Strategically positioned.',
    body: `ISI provides customers with a secure, state-of-the-art colocation center within the ISI network footprint. The facility is strategically positioned to promote high-bandwidth connectivity to key business locations including carrier hotels, data centers, and cloud providers.

Our secure facilities are engineered to protect your servers and communications equipment in a clean, controlled environment with redundant power and cooling systems. On-net colocation means your equipment runs on the same fiber backbone we use for our most demanding customers.`,
    bullets: [
      'Redundant power and precision cooling',
      'Direct on-net connectivity to ISI fiber backbone',
      'Proximity to Chicago carrier hotels and cloud on-ramps',
      'Physical security with controlled access',
    ],
  },
  {
    id: 'internet',
    num: '05',
    title: 'Business Class Internet',
    tagline: 'Tier 1 BGP redundancy. No compromises.',
    body: `ISI's high-capacity, diverse fiber network combined with high-speed connections to key carrier POPs ensures availability and responsiveness for your employees and clients. With fully redundant BGP connections to top Tier 1 providers, ISI Internet Access services deliver a hassle-free experience and a better overall value than legacy Telco or cable alternatives.

This is not consumer-grade internet re-labeled for business. This is enterprise access with enterprise SLAs, dedicated support, and the backbone to back it up.`,
    bullets: [
      'Fully redundant BGP connections to multiple Tier 1 providers',
      'High-capacity diverse fiber backbone',
      'Static IP addressing and custom routing available',
      'SLA-backed with dedicated support',
    ],
  },
  {
    id: 'voip',
    num: '06',
    title: 'VoIP / SIP Trunking',
    tagline: 'Enterprise SIP trunking since 2006.',
    body: `ISI has offered SIP trunking for business customers since 2006. SIP Trunks are a flexible and more cost-effective alternative to dedicated T1 type service. ISI's SIP Trunks are available to customers with ISI network solutions or other service provider IP services — including commodity internet service.

Replace aging PRI/T1 circuits with a modern, scalable SIP infrastructure. Consolidate voice and data on a single connection. ISI's SIP trunking is carrier-grade and built on the same reliable infrastructure as all our network services.`,
    bullets: [
      'Available on any ISI network or existing IP service',
      'Direct replacement for PRI/T1 voice circuits',
      'Scalable channel counts — add capacity on demand',
      'Carrier-grade quality with low latency routing',
    ],
  },
]

export default function SolutionsPage() {
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
        <p className="section-label">Solutions</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)', maxWidth: '600px', marginBottom: '16px' }}
        >
          Powerful Bandwidth.<br />
          <span className="display-italic">Purpose-Built</span> for You.
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-fg-muted)',
            maxWidth: '520px',
            lineHeight: '1.8',
          }}
        >
          Six core service offerings, each custom-configured to your operational
          requirements. No templates. No commodity packages.
        </p>
      </section>

      {/* Solutions list */}
      {solutions.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '64px 40px',
            borderBottom: '1px solid var(--color-border)',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '64px',
            alignItems: 'start',
            background: i % 2 === 1 ? 'rgba(8, 11, 20, 0.5)' : 'transparent',
          }}
        >
          {/* Left: label + title */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '13px',
                color: 'var(--color-accent-dim)',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              {svc.num}
            </div>
            <h2
              className="display"
              style={{ fontSize: '28px', lineHeight: '1.2', marginBottom: '10px' }}
            >
              {svc.title}
            </h2>
            <p
              style={{
                fontStyle: 'italic',
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '16px',
                color: 'var(--color-fg-dim)',
                lineHeight: '1.4',
              }}
            >
              {svc.tagline}
            </p>
          </div>

          {/* Right: body + bullets */}
          <div>
            {svc.body.split('\n\n').map((para, j) => (
              <p
                key={j}
                style={{
                  fontSize: '14px',
                  color: 'var(--color-fg-muted)',
                  lineHeight: '1.8',
                  marginBottom: '16px',
                }}
              >
                {para}
              </p>
            ))}
            <ul
              style={{
                marginTop: '28px',
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {svc.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '13px',
                    color: 'var(--color-fg-muted)',
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--color-accent)',
                      marginTop: '7px',
                      flexShrink: 0,
                    }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        style={{
          background: 'var(--color-bg-surface)',
          padding: '72px 40px',
          textAlign: 'center',
        }}
      >
        <p className="section-label" style={{ textAlign: 'center' }}>
          Not sure which solution fits?
        </p>
        <h2
          className="display"
          style={{ fontSize: '36px', marginBottom: '16px' }}
        >
          Let&apos;s engineer the right answer together.
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--color-fg-muted)',
            marginBottom: '36px',
          }}
        >
          ISI engineers consult directly with your IT leadership to design the optimal solution.
        </p>
        <Link href="/contact" className="btn-primary">
          Request a Consultation
        </Link>
      </section>
    </>
  )
}
