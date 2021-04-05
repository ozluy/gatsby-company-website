import media from 'common/media'
import { Flex, I } from 'components/CoreElements'
import styled, { css } from 'styled-components'

export const ImgList = styled(Flex)`
  flex-direction: column;
  position: relative;

  small {
    position: absolute;
    top: 310px;
    left: 220px;
    z-index: 3;
  }

  figure {
    &:nth-child(1) {
      margin-left: 200px;
      max-width: 296px;
    }

    &:nth-child(2) {
      margin-top: -50px;
      max-width: 276px;
      z-index: 2;
    }

    &:nth-child(3) {
      margin-top: -70px;
      margin-left: 250px;
      max-width: 282px;
      z-index: 3;
    }
  }
`

export const BoxList = styled(Flex)`
  flex-direction: column;
`

export const IconWrapper = styled(I)`
  width: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 10px;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const BoxItem = styled(Flex)`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 24px 26px;
  cursor: pointer;
  width: 480px;

  ${media.desktop`
  width: 100%;
  `};

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 18px 34px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      ${IconWrapper} {
        background-color: ${({ theme }) => theme.colors.blueDarker};
      }
    `};
`
