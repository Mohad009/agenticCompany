/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['"Cairo"', 'sans-serif'],
        tajawal: ['"Tajawal"', 'sans-serif'],
        almarai: ['"Almarai"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#daeefe',
          200: '#baddfc',
          300: '#89c5fa',
            400: '#52a5f6',
          500: '#2a86ef',
          600: '#1569db',
          700: '#1253b4',
          800: '#134792',
          900: '#153d77',
          950: '#0e274d'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
