import styled, { css } from 'styled-components'
import {
  typography,
  space,
  color,
  background,
  flexbox,
  opacity
} from 'styled-system'

export const shared = css`
  ${typography};
  ${space};
  ${color};
  ${background};
  ${opacity};
`

export const Div = styled.div`
  ${shared};
`
export const H1 = styled.h1`
  ${shared};
`
export const H2 = styled.h2`
  ${shared};
`

export const Flex = styled(Div)`
  display: flex;
  ${flexbox};
`

export const Small = styled.small`
  ${shared};
  font-size: ${({ theme }) => theme.typography.small};
`

export const InlineFlex = styled(Div)`
  display: inline-flex;
  ${flexbox};
`

export const Paragraph = styled.p`
  ${shared};
`

export const Button = styled.button`
  ${shared};
`

export const Anchor = styled.a`
  ${shared};
`
