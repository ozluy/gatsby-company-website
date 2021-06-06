import media from 'common/media'
import { Flex, Headline } from 'components/CoreElements'
import styled from 'styled-components'

export const List = styled(Flex)`
  flex-wrap: wrap;
  align-self: center;
`

export const ListItem = styled.div`
  width: 360px;
  margin: 20px 12px;

  > img {
    width: 100%;
    height: auto;
  }

  ${Headline} {
    line-height: 20px;
    margin: 12px 0;
    font-size: ${({ theme }) => theme.typography.subline};
  }

  ${media.tablet`
  width: 100%;
  `}
`

export const TextGroup = styled.div`
  margin-top: 12px;
`
