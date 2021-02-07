import { Div, Headline, Paragraph } from 'components/CoreElements'
import styled, { css } from 'styled-components'

export const SideList = styled.ul`
  margin-top: 44px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`

export const SideListItem = styled.li`
  font-size: ${({ theme }) => theme.typography.subline};
  margin-top: 20px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}
`

export const Content = styled(Div)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 80px 60px;
  border-radius: 0 15px 15px 15px;
  filter: drop-shadow(0px 15px 20px rgba(31, 72, 143, 0.02));

  ${Paragraph} {
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 20px;
  }

  ${Headline} {
    margin: 32px 0 20px 0;
    font-size: ${({ theme }) => theme.typography.subline};
  }
`
