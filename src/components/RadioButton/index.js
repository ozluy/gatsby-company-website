import React from 'react'
import { Wrapper } from 'components/InputField/styled'
import { InnerWrapper, RadioInput, RadioLabel, Icon } from './styled'

const RadioButton = ({ id, label, ...rest }) => (
  <Wrapper pt="18px" height="auto">
    <InnerWrapper>
      <RadioInput id={id} {...rest} type="radio" />
      <Icon htmlFor={id} /> <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </InnerWrapper>
  </Wrapper>
)

export default RadioButton
