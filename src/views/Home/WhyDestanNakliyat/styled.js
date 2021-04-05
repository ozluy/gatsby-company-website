import styled, { css } from 'styled-components'
import { InlineFlex } from 'components/CoreElements'
import media from 'common/media'

export const TwinBox = styled.ul`
  height: 320px;
  padding: 48px 20px 48px 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
  width: 513px;

  ${media.desktop`
  width: 100%;
  `};
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;

  svg {
    margin-right: 15px;
  }

  &:nth-child(odd) {
    background: rgba(9, 198, 107, 0.04);
    box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
    border-radius: 10px;
  }

  ${({ negative }) =>
    negative &&
    css`
      &:nth-child(odd) {
        background: rgba(255, 237, 230, 0.59);
      }
    `}
`

export const VS = styled(InlineFlex)`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.blue100};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.large};
  align-items: center;
  justify-content: center;
`

export const ComparisonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  flex-direction: row;

  ${media.desktop`
  flex-direction: column;

  ul{

    height: auto;
    svg {
      min-width: 20px;
    }
  }
  `};
`
