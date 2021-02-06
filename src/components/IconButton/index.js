import React from 'react'
import styled from 'styled-components'
import ArrowRight from 'components/Icons/arrowRight'

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.greyLighter};
  border: solid 1px ${({ theme }) => theme.colors.greyLighter};
`

const IconButton = ({ icon, ...rest }) => (
  <StyledButton {...rest}>{icon || <ArrowRight />}</StyledButton>
)

export default IconButton
