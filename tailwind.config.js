/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8ea',
          100: '#f6efc8',
          200: '#eddca1',
          300: '#e1c373',
          400: '#d5aa4b',
          500: '#c5932d',
          600: '#a87522',
          700: '#84551d',
          800: '#6d451e',
          900: '#5c3a1e',
        },
        obsidian: {
          950: '#070709',
          900: '#0c0d12',
          850: '#111219',
          800: '#161822',
          700: '#222534',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
