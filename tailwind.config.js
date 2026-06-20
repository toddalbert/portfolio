/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 2026 homepage redesign tokens (executive authority brand)
      colors: {
        ink: {
          DEFAULT: '#0E1A22', // primary dark background
          deep: '#0B151C', // ribbon / book / footer background
          panel: '#16252E', // hero portrait panel
        },
        cream: {
          DEFAULT: '#ECE6D8', // primary text on dark
          bright: '#F4EFE4', // headings on dark
        },
        sand: {
          DEFAULT: '#F3EDE1', // light section background
          card: '#FBF7EF', // card surface on light
          ink: '#221E18', // text on light
          muted: '#5C564B', // body text on light
          label: '#8A8272', // mono labels on light
          eyebrow: '#A67528', // section eyebrows on light
        },
        slate: {
          1: '#B9C2C6',
          2: '#9FB2BA',
          3: '#8E9BA1',
          4: '#C8CDD0',
          5: '#C2CACE',
        },
        accent: {
          DEFAULT: '#D99A45',
          hover: '#E8AE5C',
          soft: '#D8B98A',
        },
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        newsreader: ['var(--font-newsreader)', 'serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
