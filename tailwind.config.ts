import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        dm: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0C0F1A',
          deep: '#060810',
          surface: '#080B14',
          card: '#111420',
        },
        fg: {
          DEFAULT: '#F0EDE6',
        },
        accent: '#1A6FFF',
        border: 'rgba(240, 237, 230, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
