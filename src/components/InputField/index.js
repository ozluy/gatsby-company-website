import React, { useState, useRef } from 'react'
import useOnClickOutside from 'common/useOnClickOutside'
import { Wrapper, Input, Placeholder, ErrorMessage } from './styled'

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
