import { Flex, I } from 'components/CoreElements'
import styled from 'styled-components'

export const List = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 70px;
  width: 100%;
  overflow: scroll auto;
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
  margin-left: 28px;
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
