import styled, { css } from 'styled-components'

import { Button } from 'components/CoreElements'

export default styled(Button)`
  height: 50px;
  padding: 16px 20px;
  font-size: ${({ theme }) => theme.typography.primary};
  border-radius: 10px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
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
