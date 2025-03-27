/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FF',
          100: '#DCEAFF',
          200: '#B9D5FF',
          300: '#96BFFF',
          400: '#73A9FF',
          500: '#3B82F6',
          600: '#0A5BDB',
          700: '#0747B0',
          800: '#053385',
          900: '#031F5A',
        },
      },
    },
  },
  plugins: [],
}
