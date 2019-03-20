import { createGlobalStyle } from 'styled-components'
import { media } from './styleUtils'

export default createGlobalStyle`
  body{
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background: #FBFBFB; 
  }

  ${media.sm`
    h1 {
      font-size: 45px;
    }
  `}
`
