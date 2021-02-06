import { Flex } from 'components/CoreElements'
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
  overflow: hidden;
  padding: 0 38px 40px 38px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  min-width: 360px;
  margin-left: 28px;
`
