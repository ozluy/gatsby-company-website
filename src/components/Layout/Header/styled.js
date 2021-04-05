import media from 'common/media'
import { Div, Flex } from 'components/CoreElements'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  padding: 45px 0;

  .destan__logo {
    svg {
      &:first-child {
        display: inline-block;
      }

      &:last-child {
        display: none;
      }
    }
  }

  ${media.tablet`
  padding: 20px 0;

  .destan__logo{
    svg {
      &:first-child {
        display: none;
      }
      &:last-child {
        display: inline-block;
      }
    }
  }
  `};
`
export const NavList = styled.ul`
  align-items: center;
  margin: 0;
  flex-direction: row;
  display: flex;
  list-style: none;

  ${media.desktop`
  flex-direction: column;
  align-items: center;
  display: none;
  `};

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex !important;
      position: fixed;
      width: 100%;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100vh;
      justify-content: space-evenly;
      background-color: ${({ theme }) => theme.colors.white};
      z-index: 10;
    `};
`

export const Hamburger = styled.button`
  height: 17px;
  width: 22px;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 11;
  margin-right: 15px;

  span {
    height: 2px;
    width: 22px;
    border-radius: 1px;
    display: block;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    transition: all 0.3s ease;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 8px;
      left: 0;
    }

    &:nth-child(3) {
      top: 15px;
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      span {
        &:nth-child(1) {
          transform: rotate(-45deg);
          top: 7px;
        }
        &:nth-child(2) {
          transform: translateX(-23px);
        }
        &:nth-child(3) {
          top: 7px;
          transform: rotate(45deg);
        }
      }
    `};
  display: none;
  ${media.desktop`
    display: inline-block;
  `};
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

  ${media.desktop`
  &:not(:last-child) {
    margin-right: 0;
  }

  a{
   color: ${({ theme }) => theme.colors.primary} !important;
  }
  `};
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
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  ${media.tablet`
  font-size: ${({ theme }) => theme.typography.primary};
  `}
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

  ${media.tablet`
  font-size: ${({ theme }) => theme.typography.small};
  padding: 8px;
  margin-left: auto;
  `}
`
