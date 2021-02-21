import React from 'react'
import Select from 'react-select'
import {
  Wrapper,
  Placeholder,
  ErrorMessage
} from 'components/InputField/styled'

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    borderWidth: '0 0 1px 0',
    boxShadow: 'none',
    borderColor: 'var(--color-border)',
    paddingLeft: 0,
    borderRadius: 0,
    marginTop: '-13px',
    backgroundColor: 'transparent'
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: 0
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  })
}

const Dropdown = ({
  wrapperProps,
  focused,
  value,
  title,
  errorMessage,
  ...rest
}) => (
  <Wrapper {...wrapperProps}>
    {' '}
    <Placeholder focused>{title}&nbsp;</Placeholder>
    <Select styles={customStyles} {...rest} />
    <ErrorMessage>{errorMessage}&nbsp;</ErrorMessage>
  </Wrapper>
)

export default Dropdown
