import media from 'common/media'
import { Flex } from 'components/CoreElements'
import styled from 'styled-components'

export const List = styled.div`
  margin-top: 70px;

  .scrollable__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    height: 500px;
  }
`

export const SwapWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 3;
`

export const CalculatorWrapper = styled.div`
  flex-direction: column;
  display: none;
`

export const Preview = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ItemBody = styled(Flex)`
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.white};
  padding: 32px 32px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
`

export const ListItem = styled(Flex)`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  min-width: 360px;
  position: relative;
  height: 480px;

  &:not(:first-child) {
    margin-left: 28px;
  }
  ${media.tablet`
      margin-left: 0 !important;
  `};

  img {
    transition: all 0.3s ease-in-out;
  }

  ${ItemBody} {
  }

  &:hover {
    img {
      margin-top: -50px;
    }

    ${ItemBody} {
      height: 250px;
      z-index: 2;
    }

    ${Preview} {
      display: none;
    }

    ${CalculatorWrapper} {
      display: flex;
    }
  }
`
