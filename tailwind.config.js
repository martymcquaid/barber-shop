/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#D4AF37',
          600: '#C0992A',
        },
        navy: '#0b1b44',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        md: '0 8px 24px rgba(0,0,0,.15)'
      },
    },
  },
  plugins: [],
}
