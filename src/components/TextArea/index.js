import React, { useState, useRef, forwardRef } from 'react'
import useOnClickOutside from 'common/useOnClickOutside'
import {
  Wrapper,
  Placeholder,
  ErrorMessage
} from 'components/InputField/styled'
import StyledTextArea from './styled'

const TextArea = forwardRef(
  (
    {
      wrapperProps,
      errorMessage,
      placeholder,
      onBlur,
      onFocus,
      onChange,
      value,
      title,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false)
    const inputRef = useRef()
    useOnClickOutside(inputRef, () => setFocused(false))
    const isActive = Boolean(value) || focused
    return (
      <Wrapper height="auto" ref={inputRef} {...wrapperProps}>
        {title && (
          <Placeholder active={isActive}>
            {title || placeholder}&nbsp;
          </Placeholder>
        )}
        <StyledTextArea
          key="editor1"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
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

TextArea.displayName = 'TextArea'

export default TextArea
