import styled, { css } from 'styled-components'
import { Flex, I, RicTextContent, Section } from 'components/CoreElements'
import hexToRGBA from 'common/hexToRGBA'

export const Wrapper = styled(Section)`
  margin-top: -40px;
  background-color: ${({ theme }) => theme.colors.lightBg};
`

export const FAQsWrapper = styled(Flex)`
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`

export const FAQ = styled.div`
  border-radius: 10px;
  padding: 24px 24px;
  margin-top: 24px;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => hexToRGBA(theme.colors.greyLighter)};
    `}
`
export const FAQHeader = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

export const StateIcon = styled(I)`
  font-size: ${({ theme }) => theme.typography.large};
  font-style: normal;
  background: ${({ theme }) => theme.colors.greyLighter};
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin-left: auto;
  cursor: pointer;
`
export const FAQSubCategory = styled(RicTextContent)`
  ul {
    padding-top: 2px;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }

  li {
    color: ${({ theme }) => theme.colors.black};
    margin-top: 22px;
    margin-left: 0;
  }
`
