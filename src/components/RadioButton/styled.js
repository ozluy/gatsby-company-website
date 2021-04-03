import styled from 'styled-components'

export const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
`

export const RadioLabel = styled.label`
  padding-left: 16px;
  cursor: pointer;
`

export const Icon = styled.label`
  display: inline-block;
  border: solid 1px ${({ theme }) => theme.colors.greyLighter};
  min-height: 20px;
  min-width: 20px;
  max-height: 20px;
  max-width: 20px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`

export const RadioInput = styled.input`
  display: none;

  &:checked {
    ~ ${Icon} {
      border-color: ${({ theme }) => theme.colors.secondary};

      &::after {
        width: 8px;
        height: 8px;
        content: '';
        background-color: ${({ theme }) => theme.colors.secondary};
        position: absolute;
        top: 5px;
        left: 5px;
        border-radius: 50%;
      }
    }
  }
`
