import hexToRGBA from 'common/hexToRGBA'
import styled from 'styled-components'

export const Wrapper = styled.footer``

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
