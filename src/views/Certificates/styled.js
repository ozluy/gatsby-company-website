import styled from 'styled-components'
import { Div, Flex } from 'components/CoreElements'
import media from 'common/media'

export const Banner = styled(Flex)`
  height: 350px;
  align-items: flex-start;

  img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  ${media.tablet`
  height: auto;
  `};
`

export const TextContent = styled(Div)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 80px 80px;
  width: 60%;

  ${media.tablet`
  width: 100%;
  padding: 16px 16px;
  `};
`
export const AssetContent = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue50};
  width: 40%;

  ${media.tablet`
  width: 100%;
  margin-top: 32px;
  `};
`
