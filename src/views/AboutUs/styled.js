import { RicTextContent, Section } from 'components/CoreElements'
import styled from 'styled-components'

export const Banner = styled(Section)`
  height: 580px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -145px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const TextContent = styled(RicTextContent)`
  max-width: 936px;
  padding: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  margin-top: -300px;
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
`

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  overflow: auto auto;
  margin: 75px 0 0 0;
  padding: 0;
`

export const ListItem = styled.li`
  width: 360px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;

  &:not(:last-child) {
    margin-right: 30px;
  }
`
