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
        'on-primary': 'white',
        'secondary-variant': '#018786',
        background: 'white',
        'on-background': 'black'
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
