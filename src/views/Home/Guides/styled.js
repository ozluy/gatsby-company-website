import { Flex, I } from 'components/CoreElements'
import styled from 'styled-components'

export const GuidesWrapper = styled(Flex)`
  flex-direction: column;
`

export const Guide = styled.div`
  background: ${({ theme }) => theme.colors.lightBg};
  border-radius: 10px;
  padding: 24px 24px;
  margin-top: 24px;
`
export const GuideHeader = styled(Flex)`
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
export const GuideList = styled.div`
  ul {
    list-style: disc;
    padding-top: 2px;
  }

  li {
    margin-top: 22px;
    color: ${({ theme }) => theme.colors.secondary};

    p {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`
