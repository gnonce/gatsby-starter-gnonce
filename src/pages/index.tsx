import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Layout
import Layout from '../layouts/index'

// Components
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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(0, 53, 128);
`

export default ({ data }: IndexPageProps) => {
  const { image, site } = data
  return (
    <Layout>
      <Wrapper>
        <Image img={image.childImageSharp} />
        <Heading
          title={site.siteMetadata.name}
          subtitle={site.siteMetadata.tagline}
        />
      </Wrapper>
    </Layout>
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
