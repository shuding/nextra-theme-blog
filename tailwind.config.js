module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          pre: {
            color: 'inherit',
            backgroundColor: 'whitesmoke',
            border: '1px solid #eaeaea'
          }
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
