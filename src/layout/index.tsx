import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'

import Head from '../components/Head'

interface ILayoutProps {
  children: any
}

const Wrapper = styled.div`
  display: flex;
`

export default ({ children }: ILayoutProps) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Head pathname="moi" />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Wrapper>
  )
}
