import styled from 'styled-components'

export default styled.textarea`
  border: solid 1px ${({ theme }) => theme.colors.border};
  width: 100%;
  outline: none;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.transparent};
  resize: none;
  height: 200px;
  border-radius: 16px;
  padding: 16px 16px;
  line-height: 21px;
  font-size: ${({ theme }) => theme.typography.primary};
`
