import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

interface IImageProps {
  img: {
    fluid: any
  }
}

const Wrapper = styled.div`
  display: flex;
`

const Image = styled(Img)`
  width: 200px;
  position: absolute;
`

export default (props: IImageProps) => {
  const { img } = props
  return (
    <Wrapper>
      <Image fluid={img.fluid} />
    </Wrapper>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
