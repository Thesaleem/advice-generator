/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        // transparent: 'transparent',
        // current: 'currentColor',
        'grayish-blue': '#4E5D73',
        'dark-grayish-blue': '#323A49',
        'dark-blue': '#1F2632',
        'light-cyan': '#CEE3E9',
        'neon-green': '#52FFA8',
      },
      fontFamily:{
        'manrope': 'Manrope, sans-serif',
      },
      backgroundImage:{
        'pattern-divider-desktop': "url('../images/pattern-divider-desktop.svg')",
        'pattern-divider-mobile': "url('../images/pattern-divider-mobile.svg')"
      },
      // letterSpacing:{
      //   'tracking-large': '0.3em'
      // },
    },
  },
  plugins: [],
}
