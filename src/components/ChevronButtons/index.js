import React from 'react'
import styled, { css } from 'styled-components'
import { Div } from 'components/CoreElements'
import hexToRGBA from 'common/hexToRGBA'
import ChevronRight from 'components/Icons/chevronRight'

const ChevronButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.whiteBg};
  border: solid 1px ${({ theme }) => theme.colors.black};
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => hexToRGBA(theme.colors.blueBg, 0.2)};
      border: solid 1px ${({ theme }) => hexToRGBA(theme.colors.blueBg, 0.2)};
    `};
  ${({ left }) =>
    left &&
    css`
      transform: rotate(-180deg);
      margin-right: 16px;
    `}
`

const ChevronButtons = ({
  onNextClick,
  onBeforeClick,
  disableBefore,
  disableNext
}) => (
  <Div width="144px">
    <ChevronButton left disabled={disableBefore} onClick={onBeforeClick}>
      <ChevronRight />
    </ChevronButton>
    <ChevronButton onClick={onNextClick} disabled={disableNext}>
      <ChevronRight />
    </ChevronButton>
  </Div>
)

export default ChevronButtons
