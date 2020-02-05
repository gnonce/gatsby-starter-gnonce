import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Layout
import Layout from '../layout/index'

// Components
import Image from '../components/Image'
import Heading from '../components/Heading'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: {
        fluid: any
      }
    }
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.spacing.unit * 3}px;
  background: #003580;
`

export default ({ data, location }: IndexPageProps) => {
  const { image, site } = data
  return (
    <Layout location={location}>
      <Wrapper>
        <Image img={image.childImageSharp} />
        <Heading
          title={site.siteMetadata.title}
          subtitle={site.siteMetadata.description}
        />
      </Wrapper>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    image: file(relativePath: { eq: "icon.png" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
