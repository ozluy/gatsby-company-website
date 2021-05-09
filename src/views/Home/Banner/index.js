import React from 'react'
import { Link } from 'gatsby'
import Animator from 'components/Animator'
import Container from 'components/Container'
import { ButtonWithArrow } from 'components/Button'
import { H1 } from 'components/CoreElements'
import { ActionWrapper, BannerWrapper, BgWrapper } from './styled'
import BgSvg from './BgSvg'

const Banner = () => (
  <BannerWrapper>
    <Animator component={Container} customConfig={{ origin: 'left' }}>
      <H1 m="15px 0 50px 0" maxWidth="500px" color="primary">
        Paradan ve zamandan tasarruf edin
      </H1>

      <ActionWrapper>
        <div>Talep ettiğiniz hizmeti seçerek en uygun teklifi alın</div>
        <Link to="/hesap-makinesi">
          <ButtonWithArrow>Fiyat hesapla</ButtonWithArrow>
        </Link>
      </ActionWrapper>
    </Animator>

    <Animator
      component={BgWrapper}
      customConfig={{ origin: 'bottom', duration: 1000 }}
    >
      <BgSvg />
    </Animator>
  </BannerWrapper>
)

export default Banner
