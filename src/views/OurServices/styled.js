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
`

export const List = styled(Flex)`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`
export const ServicesWrapper = styled(Flex)`
  flex-direction: column;
`

export const Service = styled.div`
  background: ${({ theme }) => theme.colors.lightBg};
  border-radius: 10px;
  padding: 24px 24px;
  margin-top: 24px;
`
export const ServiceHeader = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
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
export const ServiceList = styled.ul`
  list-style: disc;
  padding-top: 2px;
`
export const ServiceListItem = styled.li`
  margin-top: 22px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const ListItem = styled(Flex)`
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
