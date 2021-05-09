import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Div, H2, Headline, Paragraph, Section } from 'components/CoreElements'
import Container from 'components/Container'
import Animator from 'components/Animator'
import kamyon from './kamyon.svg'

const EnhancedContainer = styled(Container)`
  position: relative;
`

const EnhancedDiv = styled.div`
  background-image: url(${kamyon});
  background-position: right top;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const TwentyYearsOfExperience = () => (
  <Section bgColor="blue50">
    <EnhancedContainer>
      <Animator
        component={Div}
        customConfig={{ origin: 'left' }}
        maxWidth="400px"
      >
        <Headline color="secondary">20 yıllık tecrübe</Headline>
        <H2 mt="15px">
          Türkiye’nin <br /> en iyi lojistik firması
        </H2>
        <Paragraph mt="36px" lineHeight="26.88px">
          Uzun yıllardır nakliyat alanında olan firmamızla eşyalarınız emin
          ellerde. Destan Nakliyat olarak sizlere en iyi hizmeti vermek için
          çalışmaktayız. Sizlerin isteklerini, memnuniyetini ön plana alarak
          çalışmalarımızı devam ettirmekte ve kendimizi geliştirmekteyiz.
        </Paragraph>
        <Paragraph mt="36px" lineHeight="26.88px">
          Her hizmet alanında %100 müşteri memnuniyet kalitesini hedefleyerek en
          iyi ekipmanlar ve alanında uzman personel kadromuz ile tüm Türkiye
          geneline şehir içi, şehirlerarası sigortalı, marangozlu, ambalajlı
          taşımacılık hizmeti sağlamaktadır.
        </Paragraph>
        <Paragraph mt="36px" lineHeight="26.88px">
          <Link to="/kurumsal">Daha fazla bilgi alın</Link>
        </Paragraph>
      </Animator>
      <Animator component={EnhancedDiv} />
    </EnhancedContainer>
  </Section>
)

export default TwentyYearsOfExperience
