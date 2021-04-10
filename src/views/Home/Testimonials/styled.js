import media from 'common/media'
import { Flex, Img, Paragraph } from 'components/CoreElements'
import styled from 'styled-components'

export const TestimonialList = styled(Flex)`
  flex-direction: row;
  padding-bottom: 80px;

  ${media.desktop`
  flex-direction: column;  
  padding-bottom: 15px;
  `};
`
export const TestimonialListItem = styled.div`
  padding: 80px 80px;

  &:first-child {
    padding-left: 0;
  }

  ${media.desktop`
  padding: 15px 15px;  
  &:first-child {
    padding-left: 15px;
  }
  `};

  &:last-child {
    background-color: ${({ theme }) => theme.colors.lightBg};
  }
`
export const TestimonialInfoGroup = styled(Flex)`
  height: 100px;
  padding-top: 40px;
  align-items: center;
`
export const TestimonialImg = styled(Img)`
  margin-right: 24px;
`
export const TestimonialName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.medium};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`
export const TestimonialTitle = styled.div`
  color: ${({ theme }) => theme.colors.greyLight};
  margin-top: 5px;
`
export const TestimonialQuote = styled(Paragraph)`
  margin-top: 36px;
  color: ${({ theme }) => theme.colors.greyLight};
  line-height: 30.87px;
`
