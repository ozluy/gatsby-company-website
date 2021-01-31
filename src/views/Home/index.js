import React from 'react'
import Container from 'components/Container'
import Button from 'components/Button'
import { Wrapper, Paragraph } from './styled'

const HomePage = () => (
  <Wrapper>
    <Container>
      <Paragraph> This is home page!</Paragraph>
      <Button>Primary</Button>
      <Button black>Black</Button>
      <Button green>Green</Button>
    </Container>
  </Wrapper>
)

export default HomePage
