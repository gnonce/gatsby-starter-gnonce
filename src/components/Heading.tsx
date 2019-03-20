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
  color: white;
`

const Title = styled.h1`
  margin-top: 30px;
`

const Subtitle = styled.p``

export default (props: IHeadingProps) => {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
