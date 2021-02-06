import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from 'components/CoreElements'
import ArrowRight from 'components/Icons/arrowRight'

const StyledButton = styled(Button)`
  height: 50px;
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.typography.primary};
  border-radius: 10px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.colors.black};
    `}
  ${({ green }) =>
    green &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
    `}
`

const StyledI = styled.i`
  margin-left: 17px;
  height: 13px;
`

export const ButtonWithArrow = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    {children}
    <StyledI rel="icon">
      <ArrowRight />
    </StyledI>
  </StyledButton>
)

export default StyledButton
