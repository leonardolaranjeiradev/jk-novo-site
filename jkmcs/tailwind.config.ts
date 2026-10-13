import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121417',
        'background-secondary': '#181B1F',
        graphite: '#1E2226',
        light: {
          DEFAULT: '#F4F2EF',
          muted: '#E9E6E1',
        },
        ink: {
          DEFAULT: '#14171A',
          soft: '#4A4F55',
        },
        primary: {
          DEFAULT: '#FF6A00',
          dark: '#E05F00',
        },
        'text-primary': '#FFFFFF',
        'text-secondary': '#B5B5B5',
        'border-subtle': '#2A2A2A',
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
