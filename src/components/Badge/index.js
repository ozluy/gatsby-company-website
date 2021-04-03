import hexToRGBA from 'common/hexToRGBA'
import { Flex, Img } from 'components/CoreElements'
import styled from 'styled-components'

const Badge = styled.span`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  background: ${({ theme }) => hexToRGBA(theme.colors.secondary)};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 11px 19px rgba(46, 48, 84, 0.06);
  color: ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;
  border-radius: 8px;
  height: 36px;
  font-size: 14px;
`

export const BadgeWithIcon = styled.span`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  height: 50px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  box-shadow: 0 11px 19px rgba(46, 48, 84, 0.06);
  border-radius: 16px;

  ${Img} {
    margin-right: 16px;
  }
`

export const BadgeGroup = styled(Flex)`
  flex-wrap: wrap;

  ${Badge}, ${BadgeWithIcon} {
    margin-top: 8px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

export default Badge
