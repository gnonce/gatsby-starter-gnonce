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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(0, 53, 128);
`

export default ({ data, location }: IndexPageProps) => {
  const { image, site } = data
  return (
    <Layout location={location}>
      <Wrapper>
        <Image img={image.childImageSharp} />
        <Heading
          title="404 Page not found!"
          subtitle={site.siteMetadata.description}
        />
      </Wrapper>
    </Layout>
  )
}

export const NotFoundQuery = graphql`
  query NotFoundPageQuery {
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
