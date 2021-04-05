import media from 'common/media'
import { Flex, I, Section } from 'components/CoreElements'
import styled from 'styled-components'

export const StyledSection = styled(Section)`
  position: relative;

  &::after {
    background-color: ${({ theme }) => theme.colors.lighterBg};
    position: absolute;
    z-index: -1;
    content: '';
    height: 50%;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export const VerticalCalculator = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 744px;
  padding: 15px;
  box-shadow: 0 15px 18px rgba(31, 72, 143, 0.08);
  border-radius: 20px;
  margin: 50px auto 0 auto;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};

  > svg {
    min-width: 16px;
    max-width: 16px;
  }

  > div {
    flex-basis: 20%;
  }

  ${media.tablet`
  flex-direction: column;
  
  > div {
    flex-basis: 100%;
    width: 100%;

   
  }
  > svg{
      transform: rotate(90deg);
  }
  `};
`

export const List = styled(Flex)`
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`
export const ServicesWrapper = styled(Flex)`
  flex-direction: column;
  width: 300px;

  ${media.tablet`
  width: auto;
  `}
`

export const Service = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 24px 24px;
  margin-top: 24px;
`
export const ServiceHeader = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  cursor: pointer;
`
export const TitleIcon = styled(I)`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 24px;
  background-color: ${({ isActive, theme }) =>
    theme.colors[isActive ? 'red' : 'secondary']};
`

export const StateIcon = styled(I)`
  font-size: ${({ theme }) => theme.typography.large};
  font-style: normal;
  background: ${({ theme }) => theme.colors.greyLighter};
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin-left: auto;
  cursor: pointer;
`
export const ServiceSubCategory = styled.div`
  ul {
    padding-top: 2px;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }

  li {
    color: ${({ theme }) => theme.colors.black};
    margin-top: 22px;
    margin-left: 0;
    cursor: pointer;
  }
`

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0 32px 32px 32px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 264px;
  max-width: 264px;
  margin-top: 22px;
  margin-left: 22px;
  overflow: hidden;

  img {
    max-width: unset;
  }

  ${media.tablet`
  margin-left:  auto;
  margin-right:  auto;
  `}
`

export const IconWrapper = styled(I)`
  width: 29px;
  height: 29px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`
