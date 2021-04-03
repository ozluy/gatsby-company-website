import React from 'react'
import styled from 'styled-components'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import tr from 'date-fns/locale/tr'

registerLocale('tr', tr)

export const Wrapper = styled.div`
  .react-datepicker__input-container {
    input {
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 16px;
      padding: 16px 12px;
      margin: 12px 0;
      outline: none;
    }
  }
`

const DatePicker = (props) => (
  <Wrapper>
    <ReactDatePicker {...props} locale="tr" />
  </Wrapper>
)

export default DatePicker
