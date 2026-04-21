import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact ISI Communications to discuss fiber infrastructure solutions for your Northern Illinois enterprise. Speak with an engineer.',
}

export default function ContactPage() {
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
        <p className="section-label">Contact</p>
        <h1
          className="display"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)', maxWidth: '560px', marginBottom: '16px' }}
        >
          Let&apos;s Talk About<br />
          <span className="display-italic">Your Network</span>
        </h1>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--color-fg-muted)',
            maxWidth: '480px',
            lineHeight: '1.8',
          }}
        >
          Every engagement starts with a direct conversation between your IT leadership
          and an ISI engineer. No sales scripts. No pre-packaged pitches.
        </p>
      </section>

      {/* Contact layout */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '72px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Contact info */}
        <div>
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-fg-dim)',
                marginBottom: '10px',
              }}
            >
              Phone
            </div>
            <a
              href="tel:18005054742"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '32px',
                fontWeight: 600,
                color: 'var(--color-fg)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              800-505-ISIC
            </a>
            <span style={{ fontSize: '13px', color: 'var(--color-fg-dim)' }}>
              800-505-4742
            </span>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-fg-dim)',
                marginBottom: '10px',
              }}
            >
              Fax
            </div>
            <span style={{ fontSize: '18px', color: 'var(--color-fg-muted)' }}>
              630-824-0199
            </span>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-fg-dim)',
                marginBottom: '10px',
              }}
            >
              Email
            </div>
            <a
              href="mailto:info@isicommunications.com"
              style={{
                fontSize: '18px',
                color: 'var(--color-accent)',
                textDecoration: 'none',
              }}
            >
              info@isicommunications.com
            </a>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-fg-dim)',
                marginBottom: '10px',
              }}
            >
              Mailing Address
            </div>
            <address
              style={{
                fontStyle: 'normal',
                fontSize: '15px',
                color: 'var(--color-fg-muted)',
                lineHeight: '1.7',
              }}
            >
              ISI Communications, Inc.<br />
              P.O. Box 754<br />
              West Chicago, IL 60185
            </address>
          </div>

          <div
            style={{
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
                marginBottom: '10px',
              }}
            >
              Existing Customers — Support
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-fg-muted)', lineHeight: '1.7', marginBottom: '12px' }}>
              For network support, outage reporting, or SLA inquiries, contact your
              dedicated ISI representative directly or call our main line.
            </p>
            <a
              href="tel:18005054742"
              style={{ fontSize: '13px', color: 'var(--color-accent)', textDecoration: 'none' }}
            >
              800-505-ISIC →
            </a>
          </div>
        </div>

        {/* Form */}
        {/* 
          To enable form submissions, connect this to a form handler.
          Options: Formspree (formspree.io), Netlify Forms (add netlify attribute), 
          or a custom API route. Replace the action attribute with your endpoint.
        */}
        <div>
          <h2
            className="display"
            style={{ fontSize: '26px', marginBottom: '8px' }}
          >
            Request a Consultation
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-fg-muted)',
              marginBottom: '36px',
              lineHeight: '1.7',
            }}
          >
            Tell us about your organization and network requirements. An ISI engineer
            will follow up within one business day.
          </p>

          <form
            action="mailto:info@isicommunications.com"
            method="POST"
            encType="text/plain"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="form-label" htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="form-input"
                  placeholder="Job title"
                />
              </div>
            </div>

            <div>
              <label className="form-label" htmlFor="org">Organization</label>
              <input
                id="org"
                name="organization"
                type="text"
                className="form-input"
                placeholder="Company or institution name"
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="you@organization.com"
                  required
                />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>
            </div>

            <div>
              <label className="form-label" htmlFor="service">Service of Interest</label>
              <select
                id="service"
                name="service"
                className="form-input"
                style={{ cursor: 'pointer' }}
              >
                <option value="">Select a service</option>
                <option value="metro-ethernet">Metro Ethernet Services</option>
                <option value="private-optical">Private Optical Networking</option>
                <option value="wavelength">Wavelength Services</option>
                <option value="colocation">Collocation Services</option>
                <option value="internet">Business Class Internet</option>
                <option value="voip">VoIP / SIP Trunking</option>
                <option value="not-sure">Not sure — need guidance</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="message">Tell us about your requirements</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="form-input"
                placeholder="Describe your current infrastructure challenges, bandwidth requirements, locations, or anything else that's relevant."
                style={{ resize: 'vertical', minHeight: '120px' }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
