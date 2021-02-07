import { InlineFlex, Section } from 'components/CoreElements'
import styled from 'styled-components'
import homeBannerBg from './banner.png'

export const ActionWrapper = styled(InlineFlex)`
  padding: 15px;
  box-shadow: 0 15px 18px rgba(31, 72, 143, 0.08);
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 586px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const BannerWrapper = styled(Section)`
  background-image: url(${homeBannerBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 100%;
  height: calc(100vh - 145px);
`
