import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin: 10px;
`

const Tagline = styled.p`
  margin: 0;
  font-size: 20px;
`

export default (props: IndexPageProps) => {
  const { name, tagline } = props.data.site.siteMetadata
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Tagline>{tagline}</Tagline>
    </Wrapper>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`
