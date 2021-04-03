import React from 'react'
import styled, { css } from 'styled-components'
import { sharedAttrs } from 'components/CoreElements'
import ArrowRight from 'components/Icons/arrowRight'
import { borderRadius } from 'styled-system'

const Button = styled.button`
  height: 50px;
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.typography.primary};
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: solid 1px ${({ theme }) => theme.colors.secondary};
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  ${sharedAttrs};
  ${borderRadius};

  ${({ inline }) =>
    inline &&
    css`
      background-color: ${({ theme }) => theme.colors.transparent};
      border: solid 1px ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.black};
    `};

  ${({ passive }) =>
    passive &&
    css`
      background-color: ${({ theme }) => theme.colors.transparent};
      border: solid 1px ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.greyLighter};
    `};

  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.colors.black};
      border: solid 1px ${({ theme }) => theme.colors.black};
    `};

  ${({ green }) =>
    green &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
      border: solid 1px ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    `};

  ${({ light }) =>
    light &&
    css`
      background-color: ${({ theme }) => theme.colors.transparent};
      border: solid 1px ${({ theme }) => theme.colors.blueBg};
      color: ${({ theme }) => theme.colors.blueBg};
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 90px;
      padding: 16px 35px;
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.greyLighter};
      border: solid 1px ${({ theme }) => theme.colors.greyLighter};
      color: ${({ theme }) => theme.colors.white};
    `}
`

const StyledI = styled.i`
  margin-left: 17px;
  height: 13px;
`

export const ButtonWithArrow = ({ children, ...rest }) => (
  <Button {...rest}>
    {children}
    <StyledI rel="icon">
      <ArrowRight />
    </StyledI>
  </Button>
)

export default Button
