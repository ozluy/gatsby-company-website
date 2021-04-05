import media from 'common/media'
import { Flex } from 'components/CoreElements'
import styled from 'styled-components'

export const TripletWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 70px;

  ${media.tablet`
  flex-direction: column;
  margin-top: 0;
  `};
`

export const Triplet = styled(Flex)`
  padding: 40px 38px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 360px;
  height: 400px;

  ${media.tablet`
 &:not(:first-child){
  margin: 20px auto 0 auto;
 }

  `};
`
