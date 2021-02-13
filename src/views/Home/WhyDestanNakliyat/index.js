import React from 'react'
import Animator from 'components/Animator'
import {
  Div,
  H2,
  Headline,
  Img,
  Paragraph,
  Section
} from 'components/CoreElements'
import Container from 'components/Container'
import Negative from 'components/Icons/negative'
import Positive from 'components/Icons/positive'
import awardSrc from './award.png'
import { ListItem, TwinBox, VS, ComparisonWrapper } from './styled'

const WhyDestanNakliyat = () => {
  const destanNakliyat = [
    '18 Yıllık deneyim ve profesyonel kadro',
    'Uzun yıllar birlikte çalıştığımız 40+ deneyimli personel',
    'Firmamız bünyesine ait nakliye araçları ve gereçler',
    'Google My Business’ta 300+ olumlu müşteri değerlendirmesi'
  ]
  const others = [
    'Yeni ve deneyimsiz şirketler',
    'Gündelik olarak çalışan sigortasız personeller',
    'Geçici araçlar ve deneyimsiz sürücüler',
    'Puan ve yorumlarını göremediğiniz müşteri deneyimleri'
  ]
  return (
    <Section bg="whiteBg">
      <Container>
        <Div textAlign="center">
          <Img
            height="85px"
            width="85px"
            src={awardSrc}
            alt="en iyi taşımacı"
          />
          <H2 m="24px 0">Neden en iyisiyiz?</H2>
          <Paragraph fontSize="var(--typography-large)">
            Müşterilerimizin %78`i bizi arkadaşlarına ve yakınlarına tavsiye
            ediyor
          </Paragraph>
        </Div>
        <ComparisonWrapper>
          <Animator component={TwinBox} customConfig={{ origin: 'bottom' }}>
            <Headline mb="8px" color="secondary">
              Destan Nakliyat
            </Headline>
            {destanNakliyat.map((item) => (
              <ListItem key={item}>
                <Positive />
                {item}
              </ListItem>
            ))}
          </Animator>
          <Animator
            component={VS}
            customConfig={{ origin: 'bottom', delay: 150 }}
          >
            VS
          </Animator>
          <Animator
            component={TwinBox}
            customConfig={{ origin: 'bottom', delay: 200 }}
          >
            <Headline mb="8px" color="grey">
              Diğer firmalar
            </Headline>
            {others.map((item) => (
              <ListItem negative key={item}>
                <Negative />
                {item}
              </ListItem>
            ))}
          </Animator>
        </ComparisonWrapper>
      </Container>
    </Section>
  )
}
export default WhyDestanNakliyat
