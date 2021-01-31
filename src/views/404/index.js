import React from 'react'
import { Link } from 'gatsby'
import { Wrapper, H1, Paragraph } from './styled'

const NotFoundPage = () => (
  <Wrapper>
    <H1> 404 Page Not Found</H1>
    <Paragraph>
      The page you are looking for does not exist. Go to{' '}
      <Link to="/">Home Page</Link>.
    </Paragraph>
  </Wrapper>
)

export default NotFoundPage
