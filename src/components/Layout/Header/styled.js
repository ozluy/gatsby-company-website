import { Div, Flex } from 'components/CoreElements'
import styled from 'styled-components'

export const Wrapper = styled.header`
  padding: 45px 0;
`
export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NavItem = styled.li`
  text-transform: capitalize;

  a {
    color: ${({ theme }) => theme.colors.primary};

    &.nav__active {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &:not(:last-child) {
    margin-right: 45px;
  }
`
export const HeadphonesWrapper = styled(Flex)`
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`

export const PhoneNumber = styled(Div)`
  font-size: ${({ theme }) => theme.typography.medium};
  color: ${({ theme }) => theme.colors.primary};
`

export const CallCenter = styled(Flex)`
  width: 200px;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 11px 19px rgba(46, 48, 84, 0.06);
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`
