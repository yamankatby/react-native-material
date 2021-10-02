const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/index.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6200EE',
        'primary-variant': '#3700b3',
        'on-primary': 'white',
        'secondary-variant': '#018786',
        background: 'white',
        'on-background': 'black',
        gray: colors.trueGray
      },
      fontFamily: {
        serif: `'Urbanist', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
