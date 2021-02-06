import styled, { css } from 'styled-components'
import {
  typography,
  space,
  color,
  background,
  flexbox,
  opacity,
  width,
  height,
  maxWidth,
  maxHeight
} from 'styled-system'

const sharedAttrs = css`
  ${typography};
  ${space};
  ${color};
  ${background};
  ${opacity};
  ${width};
  ${height};
  ${maxWidth};
  ${maxHeight}
`

export const Div = styled.div`
  ${sharedAttrs};
`
export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: -2px;
  margin: 0;
  ${sharedAttrs};
`
export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
  ${sharedAttrs};
`

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
  ${sharedAttrs};
`

export const Headline = styled.h4`
  font-size: ${({ theme }) => theme.typography.headline};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin: 0;
  ${sharedAttrs};
`

export const Flex = styled(Div)`
  display: flex;
  ${flexbox};
`

export const Small = styled.small`
  ${sharedAttrs};
  font-size: ${({ theme }) => theme.typography.small};
`

export const InlineFlex = styled(Div)`
  display: inline-flex;
  ${flexbox};
`

export const Paragraph = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.large};
  ${sharedAttrs};
`

export const Button = styled.button`
  ${sharedAttrs};
`

export const Anchor = styled.a`
  ${sharedAttrs};
`

export const Img = styled.img`
  ${sharedAttrs};
`
