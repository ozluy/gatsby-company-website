import hexToRGBA from 'common/hexToRGBA'
import media from 'common/media'
import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  padding: 140px 0 56px 0;

  ${media.tablet`
  padding: 35px 0 14px 0;
  `};
`

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`

export const SocialItem = styled.li`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => hexToRGBA(theme.colors.blueBg)};
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 24px;
  }
`

export const Logo = styled.img``

export const NavGroup = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  padding: 96px 0;
  margin: 96px 0;
  border: solid 1px ${({ theme }) => hexToRGBA(theme.colors.grey, 0.4)};
  border-width: 1px 0;

  ${media.desktop`
    flex-direction: column; 
    padding: 24px 0;
    margin: 24px 0;
  `};
`

export const NavItem = styled.li`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:first-child {
    font-size: ${({ theme }) => theme.typography.medium};
    line-height: 17px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 32px;
  }

  svg {
    display: none;
  }

  ${media.desktop`
  svg {
    display: inline-block;
  }
  `};
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.desktop`
    width: 100%;
    ${NavItem} {
        cursor: pointer;
        &:first-child {
        color: ${({ theme }) => theme.colors.primary};    
        }
        &:not(:first-child) {
          display: none;
        }
        }

    ${({ isOpen }) =>
      isOpen &&
      css`
        ${NavItem} {
          margin-bottom: 20px;
          &:first-child {
            color: ${({ theme }) => theme.colors.blue};
          }
          &:not(:first-child) {
            display: flex;
          }
          svg {
            transform: rotate(90deg);
          }
        }
      `};
  `};
`
