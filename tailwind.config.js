const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--poppins-font)', ...fontFamily.sans],
        Hind: ['var(--hind-font)', ...fontFamily.serif]
      },
      colors: {
        blackOne: '#121212',
        blackFondo: '#191a1d',
        grisOne: '#2b2f36',
        grisTwo: '#26292f',
        grisClaro: '#97999d'
      }
    }
  },
  plugins: []
}
