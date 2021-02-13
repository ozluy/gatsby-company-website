import React from 'react'
import Animator from 'components/Animator'
import Container from 'components/Container'
import { ButtonWithArrow } from 'components/Button'
import { H1, Headline } from 'components/CoreElements'
import { ActionWrapper, BannerWrapper, BgWrapper } from './styled'
import BgSvg from './BgSvg'

const Banner = () => (
  <BannerWrapper>
    <Container>
      <Animator
        customConfig={{ origin: 'left' }}
        component={Headline}
        color="secondary"
      >
        Evinizi veya ofisinizi taşırken
      </Animator>
      <Animator
        customConfig={{ origin: 'left' }}
        component={H1}
        m="15px 0 50px 0"
        maxWidth="500px"
        color="primary"
      >
        Paradan ve zamandan tasarruf edin
      </Animator>

      <ActionWrapper>
        <div>Talep ettiğiniz hizmeti seçerek en uygun teklifi alın</div>
        <ButtonWithArrow>Fiyat hesapla</ButtonWithArrow>
      </ActionWrapper>
    </Container>

    <Animator
      component={BgWrapper}
      customConfig={{ origin: 'bottom', duration: 1000 }}
    >
      <BgSvg />
    </Animator>
  </BannerWrapper>
)

export default Banner
