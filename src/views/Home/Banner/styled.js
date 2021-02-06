import { InlineFlex, Flex } from 'components/CoreElements'
import styled from 'styled-components'
import homeBannerBg from '../../../assets/images/home/home_banner_bg.png'

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

export const BannerWrapper = styled(Flex)`
  background-image: url(${homeBannerBg});
  background-repeat: no-repeat;
  background-size: cover auto;
  background-position: 0 100%;
  height: calc(100vh - 145px);
  padding-top: 88px;
`
