import { css, ThemedCssFunction } from 'styled-components'
import { ITheme } from './theme'

const sizes = {
  xl: 1366,
  lg: 1024,
  md: 768,
  sm: 480,
}

export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${emSize}em) {
        ${css(first, ...interpolations)}
      }
    `
    return accumulator
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<ITheme> }
)

export const px2rem = (px: number) => `${px / 16}rem`
