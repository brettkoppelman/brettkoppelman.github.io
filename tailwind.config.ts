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
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        bg: '#F7F4EF',
        ink: '#1C1917',
        muted: '#78716C',
        subtle: '#A8A29E',
        border: '#E7E5E4',
        accent: '#92400E',
      },
    },
  },
  plugins: [],
}
export default config
