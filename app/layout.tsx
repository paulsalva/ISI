import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ISI Communications — Premier Fiber Infrastructure, Northern Illinois',
    template: '%s | ISI Communications',
  },
  description:
    'ISI designs and operates fiber optic infrastructure trusted by healthcare systems, financial institutions, and government agencies across Northern Illinois. Over 20 years of uncompromising uptime.',
  keywords: [
    'fiber optic', 'network infrastructure', 'Northern Illinois', 'metro ethernet',
    'private optical networking', 'wavelength services', 'colocation', 'SIP trunking',
    'business internet', 'ISI Communications',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://isicweb.com',
    siteName: 'ISI Communications',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
