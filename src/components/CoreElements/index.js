import styled, { css } from 'styled-components'
import {
  typography,
  space,
  color,
  background,
  flexbox,
  opacity
} from 'styled-system'

const sharedAttrs = css`
  ${typography};
  ${space};
  ${color};
  ${background};
  ${opacity};
`

export const Div = styled.div`
  ${sharedAttrs};
`
export const H1 = styled.h1`
  ${sharedAttrs};
`
export const H2 = styled.h2`
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
  ${sharedAttrs};
`

export const Button = styled.button`
  ${sharedAttrs};
`

export const Anchor = styled.a`
  ${sharedAttrs};
`
