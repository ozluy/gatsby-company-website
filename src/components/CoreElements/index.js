import styled, { css } from 'styled-components'
import {
  typography,
  space,
  color,
  background,
  flexbox,
  opacity,
  border,
  layout,
  shadow,
  display
} from 'styled-system'

export const sharedAttrs = css`
  ${typography};
  ${space};
  ${color};
  ${background};
  ${opacity};
  ${border}
  ${layout}
  ${shadow};
`

export const Div = styled.div`
  ${sharedAttrs};
`

export const Section = styled.section`
  padding: 100px 0;
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

export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.typography.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 0;
  ${sharedAttrs};
`

export const Flex = styled(Div)`
  display: flex;
  ${display};
  ${flexbox};
`

export const I = styled.i`
  ${sharedAttrs};
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

export const RicTextContent = styled(Div)`
  line-height: 24px;
`

export const Paragraph = styled.p`
  margin: 0;
  ${sharedAttrs};
`

export const Anchor = styled.a`
  ${sharedAttrs};
`

export const Img = styled.img`
  ${sharedAttrs};
`
