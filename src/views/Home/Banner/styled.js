import media from 'common/media'
import { InlineFlex, Section } from 'components/CoreElements'
import styled from 'styled-components'

export const ActionWrapper = styled(InlineFlex)`
  padding: 15px;
  box-shadow: 0 15px 18px rgba(31, 72, 143, 0.08);
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 586px;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet`  
  width: auto;
  `};
`

export const BgWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: -20.3%;
  z-index: -1;

  svg {
    width: 100%;
    height: auto;
  }
`

export const BannerWrapper = styled(Section)`
  height: calc(100vh - 145px);
  position: relative;
  overflow: hidden;
`
