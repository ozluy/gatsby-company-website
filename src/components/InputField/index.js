import React, { useState, useRef, forwardRef } from 'react'
import useOnClickOutside from 'common/useOnClickOutside'
import { Wrapper, Input, Placeholder, ErrorMessage } from './styled'

const InputField = forwardRef(
  (
    {
      wrapperProps,
      errorMessage,
      placeholder,
      onBlur,
      onFocus,
      onChange,
      value,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false)
    const inputRef = useRef()
    useOnClickOutside(inputRef, () => setFocused(false))
    const isActive = Boolean(value) || focused
    return (
      <Wrapper ref={inputRef} {...wrapperProps}>
        <Placeholder active={isActive}>{placeholder}&nbsp;</Placeholder>
        <Input
          value={value}
          onChange={onChange}
          ref={ref}
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
)

InputField.displayName = 'InputField'

export default InputField
