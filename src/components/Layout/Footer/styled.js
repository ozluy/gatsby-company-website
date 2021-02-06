import hexToRGBA from 'common/hexToRGBA'
import styled from 'styled-components'

export const Wrapper = styled.footer`
  padding: 140px 0 56px 0;
`

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
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
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const NavItem = styled.li`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.grey};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:first-child {
    font-size: ${({ theme }) => theme.typography.medium};
    line-height: 17px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 32px;
  }
`
