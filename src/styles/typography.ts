import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.25,
  googleFonts: [
    {
      name: 'Mukta',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Mukta', 'sans-serif'],
})

export default typography
