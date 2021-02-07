import React, { useState, useRef } from 'react'
import { Flex } from 'components/CoreElements'
import styled, { css } from 'styled-components'
import useOnClickOutside from 'common/useOnClickOutside'

const Wrapper = styled(Flex)`
  position: relative;
  height: 60px;
  padding-top: 20px;
  flex-direction: column;
`

const Input = styled.input`
  border: solid 1px ${({ theme }) => theme.colors.border};
  border-width: 0 0 1px 0;
  width: 100%;
  padding: 0;
  outline: none;
  height: 20px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.transparent};
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  height: 20px;
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
  transition: all 0.3s ease-in-out;
  ${({ focused }) =>
    focused &&
    css`
      top: 0;
      font-size: ${({ theme }) => theme.typography.small};
    `}
`

const InputField = ({
  wrapperProps,
  errorMessage,
  placeholder,
  onBlur,
  onFocus,
  value,
  ...rest
}) => {
  const [focused, setFocused] = useState(false)
  const inputRef = useRef()
  useOnClickOutside(inputRef, () => setFocused(false))
  return (
    <Wrapper ref={inputRef} {...wrapperProps}>
      <Placeholder focused={focused || Boolean(value)}>
        {placeholder}&nbsp;
      </Placeholder>
      <Input
        value={value}
        onFocus={() => {
          onFocus && onFocus()
          setFocused(true)
        }}
        onBlur={() => {
          onBlur && onBlur()
          setFocused(false)
        }}
        {...rest}
      />
      <ErrorMessage>{errorMessage}&nbsp;</ErrorMessage>
    </Wrapper>
  )
}

export default InputField
