import { Flex } from 'components/CoreElements'
import styled from 'styled-components'

export const Img = styled.div`
  padding: 40px 40px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Banner = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
`
