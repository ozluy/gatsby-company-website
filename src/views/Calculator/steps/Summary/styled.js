import { Flex, InlineFlex } from 'components/CoreElements'
import styled from 'styled-components'

export const Wrapper = styled(Flex)`
  margin: -20px -20px 30px -20px;
  justify-content: space-between;
  flex-direction: row;
`
export const Item = styled(InlineFlex)`
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 20%;

  &:not(:last-child) {
    &::after {
      position: absolute;
      content: '';
      width: 50%;
      top: 9px;
      left: 75%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`
export const IconWrapper = styled(InlineFlex)`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`
export const Label = styled.label`
  line-height: 23.87px;
  margin-top: 4px;
`
