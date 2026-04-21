import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'ISI Communications serves healthcare, financial services, government, higher education, commercial enterprise, and cloud infrastructure organizations across Northern Illinois.',
}

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    tagline: 'Network performance is patient care.',
    body: `Healthcare organizations depend on network reliability for electronic health records, medical imaging, telemedicine, and mission-critical clinical systems. Downtime isn't an inconvenience — it directly affects patient outcomes.

ISI provides healthcare institutions across Northern Illinois with fiber infrastructure designed to the highest standards of availability, security, and compliance. Our managed solutions give clinical IT teams the performance and peace of mind to focus on care delivery.`,
    clients: ['AmitaHealth'],
    needs: ['EHR/EMR connectivity', 'HIPAA-compliant private networking', 'Medical imaging transport', 'Telemedicine infrastructure'],
  },
  {
    id: 'financial',
    title: 'Financial Services',
    tagline: 'Latency has a dollar value.',
    body: `Financial institutions require ultra-low latency, deterministic throughput, and airtight security. Whether you're processing transactions, running real-time risk systems, or maintaining regulatory compliance, your network is your infrastructure.

ISI's fiber-based solutions provide the predictable, high-performance connectivity that financial operations demand — with SLA guarantees and dedicated support that match the stakes.`,
    clients: [],
    needs: ['Low-latency transaction connectivity', 'Private network isolation', 'Redundant failover', 'Regulatory compliance support'],
  },
  {
    id: 'government',
    title: 'Government',
    tagline: 'Public trust requires reliable infrastructure.',
    body: `Government agencies at the county, municipal, and state level require secure, resilient network connectivity to serve their constituents and coordinate operations. Legacy Telco networks weren't built for modern government workloads.

ISI's regional expertise and purpose-built fiber infrastructure makes us the natural choice for Northern Illinois government organizations requiring custom-engineered, secure network solutions.`,
    clients: ['Kane County Government'],
    needs: ['Secure inter-agency connectivity', 'Redundant public service networks', 'Fixed wireless for rural coverage', 'E-Rate eligible services'],
  },
  {
    id: 'education',
    title: 'Higher Education',
    tagline: 'Research and learning demand bandwidth without limits.',
    body: `Universities and colleges are among the most bandwidth-intensive organizations in any region. Research computing, distance learning, student residential networks, and administrative systems all compete for capacity. ISI provides educational institutions with scalable fiber infrastructure that grows with enrollment and research demands.

Our wavelength and Ethernet services give campus IT teams the flexibility to allocate bandwidth where it's needed without the cost ceiling of traditional Telco services.`,
    clients: ['Northern Illinois University', 'Robert Morris University'],
    needs: ['High-capacity campus connectivity', 'Research network transport', 'Multi-campus private networking', 'Scalable internet access'],
  },
  {
    id: 'enterprise',
    title: 'Commercial Enterprise',
    tagline: 'Operational performance starts with the network.',
    body: `For commercial enterprises, network performance directly drives revenue. From multi-site retail to corporate headquarters, ISI delivers customized fiber solutions that eliminate the bottlenecks and unpredictability of commodity internet and legacy Telco services.

We work directly with your IT leadership to understand your operational footprint and engineer a network that performs at the level your business requires.`,
    clients: ['Bar Louie', 'Syndeo'],
    needs: ['Multi-site WAN connectivity', 'SD-WAN ready infrastructure', 'SIP trunking and unified communications', 'Colocation and cloud on-ramp'],
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    tagline: 'The on-ramp matters as much as the destination.',
    body: `Cloud-first organizations require high-bandwidth, low-latency connectivity between their facilities and cloud providers. ISI's colocation center and fiber backbone provide the ideal interconnection layer — directly connected to Chicago carrier hotels and major cloud on-ramps.

For companies building or operating cloud infrastructure in Northern Illinois, ISI is the regional transport partner that bridges your deployment to the global internet.`,
    clients: [],
    needs: ['Carrier hotel connectivity', 'Cloud on-ramp access', 'Colocation with on-net connectivity', 'Wavelength services for data center interconnect'],
  },
]

export default function IndustriesPage() {
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
        <p className="section-label">Industries</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)', maxWidth: '600px', marginBottom: '16px' }}
        >
          Sector-Specific<br />
          <span className="display-italic">Network Expertise</span>
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-fg-muted)',
            maxWidth: '520px',
            lineHeight: '1.8',
          }}
        >
          ISI has served Northern Illinois enterprises for over 20 years across six
          critical sectors. The requirements are different in each one — and so is
          our approach.
        </p>
      </section>

      {/* Industry sections */}
      {industries.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
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
              0{i + 1}
            </div>
            <h2
              className="display"
              style={{ fontSize: '28px', lineHeight: '1.2', marginBottom: '10px' }}
            >
              {ind.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '16px',
                fontStyle: 'italic',
                color: 'var(--color-fg-dim)',
                lineHeight: '1.4',
                marginBottom: '20px',
              }}
            >
              {ind.tagline}
            </p>
            {ind.clients.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-faint)',
                    marginBottom: '8px',
                  }}
                >
                  ISI Clients
                </div>
                {ind.clients.map((c) => (
                  <div
                    key={c}
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-fg-dim)',
                      marginBottom: '4px',
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {ind.body.split('\n\n').map((para, j) => (
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
            <div
              style={{
                marginTop: '28px',
                padding: '24px',
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-fg-dim)',
                  marginBottom: '16px',
                }}
              >
                Common Requirements
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {ind.needs.map((need, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
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
                        flexShrink: 0,
                      }}
                    />
                    {need}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
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
          Your industry has specific requirements.{' '}
          <span style={{ fontStyle: 'italic', opacity: 0.75 }}>So do we.</span>
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '36px',
          }}
        >
          ISI engineers consult directly with your team to understand your operational context before recommending any solution.
        </p>
        <Link href="/contact" className="btn-white">
          Start the Conversation
        </Link>
      </section>
    </>
  )
}
