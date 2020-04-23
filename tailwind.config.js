module.exports = {
  theme: {
    extend: {
      width: {
        'sm': '150px',
        'md': '250px',
        'lg': '350px',
        '7/10': '70%'
      },
      height: {
        '2/5-screen': '40vh',
        '3/5-screen': '60vh',
        '4/5-screen': '80vh',
        'sm': '150px',
        'md': '250px',
        'lg': '350px',
        'about': '800px'
      },
      maxHeight: {
        '1/2': '50%'
      },
      fontSize: {
        'huge': '15rem',
        'very-big': '10rem'
      },
      inset: {
        '1/2': '50%'
      }
    },
    fontFamily: {
      display: ['Supply', 'Consolas', 'monospace'],
      body: ['"Object Sans"', '"Avenir Next"', 'Avenir', '"Century Gothic"', 'Helvetica', 'Arial', 'sans-serif']
    },
    borderRadius: {
      'theme': '13px'
    }
  },
  variants: {
    fontStyle: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
