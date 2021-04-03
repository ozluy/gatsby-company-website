import { Flex } from 'components/CoreElements'
import styled, { css } from 'styled-components'
import { height, space } from 'styled-system'

export const Wrapper = styled(Flex)`
  position: relative;
  height: 65px;
  padding-top: 20px;
  flex-direction: column;
  ${height};
  ${space};
`

export const Input = styled.input`
  border: solid 1px ${({ theme }) => theme.colors.border};
  border-width: 0 0 1px 0;
  width: 100%;
  padding: 0;
  outline: none;
  height: 25px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.transparent};
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  height: 20px;
  margin: 0;
`

export const Placeholder = styled.label`
  height: 20px;
  padding: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  top: 15px;
  font-size: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  transition: all 0.2s ease-in;

  ${({ active }) =>
    active &&
    css`
      top: 0;
      font-size: ${({ theme }) => theme.typography.small};
    `}
`
