# ISI Communications Website

Next.js 14 site for ISI Communications, Inc. Deployed via Vercel.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** via `next/font/google` (Cormorant Garamond + DM Sans — bundled at build, no runtime CDN)

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select this repo
4. Leave all settings at defaults (Vercel auto-detects Next.js)
5. Click Deploy

That's it. Vercel auto-deploys on every push to `main`.

## Custom Domain

In Vercel → Project → Settings → Domains — add `isicweb.com` and follow the DNS instructions.

## Site Structure

```
/                   Home
/solutions          Six services with full detail
/industries         Six industry sectors
/about              Company story, why ISI, network, SLA
/contact            Contact form + info
/resources          PDF downloads and documents
```

## Adding PDF Documents

1. Place PDF files in `/public/docs/`
2. Files should match these names:
   - `isi-our-story.pdf`
   - `isi-why-isi.pdf`
   - `isi-network-map.pdf`
   - `isi-data-sheets.pdf`
   - `isi-sla.pdf`
   - `isi-terms.pdf`
   - `isi-sip-trunking.pdf`

## Contact Form

The current form uses `mailto:` which opens the user's email client. 
For a proper server-side form, replace the form action with one of:

- **Formspree**: Sign up at formspree.io, get a form endpoint, replace `action` attribute
- **Resend + API route**: Add `/app/api/contact/route.ts` using the Resend SDK
- **Netlify Forms**: If hosting on Netlify, add `netlify` attribute to the `<form>` tag

## Customization

**Colors** — edit CSS custom properties in `app/globals.css`  
**Copy** — all page content is in the page files under `app/`  
**Navigation links** — edit `components/Nav.tsx`  
**Footer** — edit `components/Footer.tsx`  

## Responsive Notes

The grid layouts (services, stats, industries) use CSS grid with fixed columns. 
For full mobile responsiveness, wrap grid styles in `@media` queries in `globals.css`
or convert to Tailwind responsive classes. The current build targets desktop-first
(most ISI traffic is likely desktop B2B).
