import React from 'react'
import styled from 'styled-components'

interface IHeadingProps {
  title: string
  subtitle: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h1``

const Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
`

export default (props: IHeadingProps) => {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
