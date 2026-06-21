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

        // 2026 warm-editorial redesign tokens (primary brand, per Todd Albert.dc.html).
        // Namespaced to avoid colliding with the legacy dark-theme tokens above.
        paper: {
          DEFAULT: '#F4EEE3', // page background
          card: '#FAF6EE', // card / panel surface on light
          alt: '#EFE7D8', // alternating section background (Range, Book)
          portrait: '#EBE2D2', // headshot frame backdrop
        },
        umber: {
          DEFAULT: '#26201A', // headings / near-black on light
          body: '#463C32', // primary body text
          muted: '#6B5F51', // secondary body text
          soft: '#74685A', // tertiary / nav
          faint: '#73695C', // faint inline notes (AA-tuned from spec #8A7E6E)
          label: '#746959', // uppercase row labels (AA-tuned from spec #A2937D)
          placeholder: '#CABBA0', // image placeholder text
        },
        hair: {
          DEFAULT: '#E4DACA', // hairline borders / grid gaps on light
          strong: '#D6C8B3', // card borders / button borders
        },
        clay: {
          DEFAULT: '#B45B3C', // terracotta accent — large display text + dots/borders
          ink: '#9F5135', // darker terracotta for SMALL accent text (AA ≥4.5 on light bgs)
          light: '#D08658', // accent on dark sections
          glow: '#E8C9A8', // accent hover glow on dark
        },
        night: {
          DEFAULT: '#271E16', // dark section background
          card: '#2E251B', // card surface on dark
          line: '#46392B', // borders / grid gaps on dark
          text: '#F1E9DB', // body text on dark
          bright: '#F6EFE2', // headings on dark
          muted: '#C3B6A0', // secondary text on dark
          body: '#BCAF99', // card body on dark
          label: '#9C8E78', // labels on dark
          faint: '#958874', // footer fine print (AA-tuned from spec #8A7C66)
        },
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        hanken: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        newsreader: ['var(--font-newsreader)', 'serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      maxWidth: {
        shell: '1180px', // spec content column
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
        // Pulsing dot in the nav wordmark / footer (spec @keyframes thapulse).
        thapulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(180,91,60,.45)' },
          '70%': { boxShadow: '0 0 0 8px rgba(180,91,60,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(180,91,60,0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
        thapulse: 'thapulse 2.8s ease-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
