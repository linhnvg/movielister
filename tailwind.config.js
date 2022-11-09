const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: `'Poppins', ${defaultConfig.theme.fontFamily['sans']}`,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '5rem',
          lg: '8rem',
        },
      },
      aspectRatio: {
        poster: '2/3',
        backdrop: '16/9',
      },
      animation: {
        'fade-in': 'fade-in 300ms linear',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        primary: {
          50: '#EBE9FE',
          100: '#DEDBFD',
          200: '#BEB7FB',
          300: '#9C92F8',
          400: '#7B6EF6',
          500: '#5A4AF4',
          600: '#483BC3',
          700: '#362C92',
          800: '#251E62',
          900: '#251E62',
        },
        secondary: {
          50: '#E4F4FF',
          100: '#D2ECFE',
          200: '#A5DBFE',
          300: '#78C8FD',
          400: '#4BB7FD',
          500: '#1EA5FC',
          600: '#1884CA',
          700: '#126297',
          800: '#0C4265',
          900: '#062032',
        },
        grey: {
          50: '#EBEEF5',
          100: '#C3C8D4',
          200: '#A8AEBF',
          300: '#8E95A9',
          400: '#767E94',
          500: '#61697F',
          600: '#475069',
          700: '#323B54',
          800: '#20283E',
          900: '#121829',
        },
        white: {
          10: 'hsla(0, 0%, 100%, 0.1)',
          20: 'hsla(0, 0%, 100%, 0.2)',
          30: 'hsla(0, 0%, 100%, 0.3)',
          40: 'hsla(0, 0%, 100%, 0.4)',
          50: 'hsla(0, 0%, 100%, 0.5)',
          65: 'hsla(0, 0%, 100%, 0.65)',
          75: 'hsla(0, 0%, 100%, 0.75)',
          100: 'hsla(0, 0%, 100%, 1)',
        },
        black: {
          10: 'hsla(0, 0%, 0%, 0.1)',
          20: 'hsla(0, 0%, 0%, 0.2)',
          30: 'hsla(0, 0%, 0%, 0.3)',
          40: 'hsla(0, 0%, 0%, 0.4)',
          50: 'hsla(0, 0%, 0%, 0.5)',
          65: 'hsla(0, 0%, 0%, 0.65)',
          75: 'hsla(0, 0%, 0%, 0.75)',
          100: 'hsla(0, 0%, 0%, 1)',
        },
      },
    },
  },
  plugins: [],
}
