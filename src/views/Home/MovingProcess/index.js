import { ButtonWithArrow } from 'components/Button'
import Container from 'components/Container'
import {
  Div,
  Flex,
  H2,
  Headline,
  Img,
  Paragraph,
  Section,
  H5
} from 'components/CoreElements'
import React from 'react'
import step1 from './process_1.png'
import step2 from './process_2.png'
import step3 from './process_3.png'
import { Triplet, TripletWrapper } from './styled'

const MovingProcess = () => {
  const processSteps = [
    {
      img: step1,
      title: 'Telefonla proje değerlendirme',
      desc:
        'Hizmet danışmanlarınız ihtiyaçlarınızı analiz ederek size en uygun tarihleri ve hizmetleri iletir.'
    },
    {
      img: step2,
      title: 'En Uygun Fiyatlandırma',
      desc:
        'Kurumsal şirketlerin elde ettiği sorunsuz nakliyat artık bireysel müşterilerimizin de hakkı.'
    },
    {
      img: step3,
      title: 'Taşınma Randevusu',
      desc:
        'Taşınma randevusunu oluşturduğumuz saatte yerine varan ekiplerimiz, titizlikle eşyalarınızı.'
    }
  ]
  return (
    <Section bg="whiteBg">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Div maxWidth="343px">
            <Headline color="secondary">Destan Nakliyat ile</Headline>
            <H2 mt="15px">Stressiz taşıma süreci nasıl işliyor?</H2>
          </Div>
          <ButtonWithArrow green>Hemen fiyat hesaplayın</ButtonWithArrow>
        </Flex>
        <TripletWrapper>
          {processSteps.map(({ title, desc, img }) => (
            <Triplet key={title}>
              <Img alt={title} src={img} />
              <H5 m="28px 0 12px 0">{title}</H5>
              <Paragraph color="grey">{desc}</Paragraph>
            </Triplet>
          ))}
        </TripletWrapper>
      </Container>
    </Section>
  )
}

export default MovingProcess
