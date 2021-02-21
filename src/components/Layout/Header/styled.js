import media from 'common/media'
import { Div, Flex } from 'components/CoreElements'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  padding: 45px 0;
`
export const NavList = styled.ul`
  flex-direction: column;
  align-items: center;
  display: none;
  margin: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      position: fixed;
      width: 50%;
      right: 0;
      top: 0;
      bottom: 0;
      justify-content: space-evenly;
      background-color: ${({ theme }) => theme.colors.white};
      z-index: 10;
    `};

  ${media.desktop`
  flex-direction: row;
  display: flex;
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

  ${media.desktop`
    display: none;
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
