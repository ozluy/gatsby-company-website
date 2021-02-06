import React from 'react'
import { Link } from 'gatsby'
import { H1, Paragraph } from 'components/CoreElements'
import Container from 'components/Container'

const NotFoundPage = () => (
  <Container>
    <H1> 404 Page Not Found</H1>
    <Paragraph>
      The page you are looking for does not exist. Go to{' '}
      <Link to="/">Home Page</Link>.
    </Paragraph>
  </Container>
)

export default NotFoundPage
