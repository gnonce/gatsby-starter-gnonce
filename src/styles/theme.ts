export interface ITheme {
  palette: {
    darkPrimary: string
    primary: string
    midPrimary: string
    lightPrimary: string
    black: string
    white: string
  }
  spacing: {
    unit: number
  }
}

const mainTheme = {
  palette: {
    darkPrimary: '#FF8515',
    primary: '#FA9F4B',
    white: '#FFFFFF',
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
