import media from 'common/media'
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
  ${media.desktop`
  padding: 40px 0;

`};

  ${sharedAttrs};
`

const h1Styles = css`
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: -2px;
`

const h2Styles = css`
  font-size: ${({ theme }) => theme.typography.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
const h3Styles = css`
  font-size: ${({ theme }) => theme.typography.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
const h4Styles = css`
  font-size: ${({ theme }) => theme.typography.headline};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`
const h5Styles = css`
  font-size: ${({ theme }) => theme.typography.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`

export const H1 = styled.h1`
  margin: 0;
  ${h1Styles};
  ${sharedAttrs};
`
export const H2 = styled.h2`
  margin: 0;
  ${h2Styles};
  ${sharedAttrs};
`

export const H3 = styled.h3`
  margin: 0;
  ${h3Styles};
  ${sharedAttrs};
`

export const Headline = styled.h4`
  margin: 0;
  ${h4Styles};
  ${sharedAttrs};
`

export const H5 = styled.h5`
  margin: 0;
  ${h5Styles};
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

  p {
    color: ${({ theme }) => theme.colors.greyLight};

    a {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h1 {
    ${h1Styles};
  }

  h2 {
    ${h2Styles};
  }

  h3 {
    ${h3Styles};
  }

  h4 {
    ${h4Styles};
  }

  h5 {
    ${h5Styles};
  }
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
