import React from 'react'
import Container from 'components/Container'
import { ButtonWithArrow } from 'components/Button'
import { H1, Headline } from 'components/CoreElements'
import { ActionWrapper, BannerWrapper } from './styled'

const Banner = () => (
  <BannerWrapper>
    <Container>
      <Headline color="secondary">Evinizi veya ofisinizi taşırken</Headline>
      <H1 m="15px 0 50px 0" maxWidth="500px" color="primary">
        Paradan ve zamandan tasarruf edin
      </H1>

      <ActionWrapper>
        <div>Talep ettiğiniz hizmeti seçerek en uygun teklifi alın</div>
        <ButtonWithArrow>Fiyat hesapla</ButtonWithArrow>
      </ActionWrapper>
    </Container>
  </BannerWrapper>
)

export default Banner
