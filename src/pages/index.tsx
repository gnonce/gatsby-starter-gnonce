import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Image from '../components/Image'
import Heading from '../components/Heading'

interface IndexPageProps {
  data: {
    image: {
      childImageSharp: {
        fluid: any
      }
    }
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

export default (props: IndexPageProps) => {
  const { image, site } = props.data
  return (
    <Wrapper>
      <Image img={image.childImageSharp} />
      <Heading
        title={site.siteMetadata.name}
        subtitle={site.siteMetadata.tagline}
      />
    </Wrapper>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    image: file(relativePath: { eq: "gnonce-icon.png" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`
