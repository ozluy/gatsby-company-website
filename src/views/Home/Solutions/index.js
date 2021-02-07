import React from 'react'
import {
  Div,
  Flex,
  H2,
  Headline,
  Img,
  Paragraph,
  Section
} from 'components/CoreElements'
import Container from 'components/Container'
import Bookmark from 'components/Icons/bookmark'
import { ButtonWithArrow } from 'components/Button'
import solution1 from './solution_1.png'
import solution2 from './solution_2.png'
import solution3 from './solution_3.png'
import { BoxItem, BoxList, IconWrapper, ImgList } from './styled'
import HashTag from './HashTag'

const Solutions = () => {
  const tariffs = [
    {
      title: 'Destan Standart',
      desc:
        'Yüzlerce kurumdan ve binlerce taşıma hikayesinden edindiğimiz deneyim artık bireysel müşterilerin emrinde.',
      Icon: Bookmark
    },
    {
      title: 'Destan Vip',
      desc:
        'Anahtarınızı teslim ederek, yeni evinize/ofisinize doğru yola çıkacağınız bir iş ortağı mı arıyorsanız paketleme ve taşıma işlemleri VIP’te.',
      Icon: Bookmark
    },
    {
      title: 'Destan Kurumlar',
      desc:
        'Başta kamu kurumları olmak üzere, özel sektörün de onlarca yıllık tercihi olan Destan Kurumlar sayesinde, sorunsuz bir işyerine taşınmak mümkün.',
      Icon: Bookmark
    }
  ]

  return (
    <Section bg="blue25">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Div maxWidth="309px">
            <Headline color="secondary">Destan Nakliyat ile</Headline>
            <H2 mt="15px">Size özel sunulan çözümler</H2>
          </Div>
        </Flex>
        <Flex mt="80px" justifyContent="space-between" alignItems="center">
          <ImgList>
            <Img src={solution1} />
            <Img src={solution2} />
            <Img src={solution3} />
            <HashTag />
          </ImgList>
          <BoxList>
            {tariffs.map(({ title, Icon, desc }) => (
              <BoxItem key={title}>
                <Flex alignItems="center" justifyContent="flex-start">
                  <IconWrapper>
                    <Icon />
                  </IconWrapper>
                  <Headline color="secondary">{title}</Headline>
                </Flex>
                <Paragraph color="greyLight" pl="86px">
                  {desc}
                </Paragraph>
              </BoxItem>
            ))}
            <Flex mt="80px" alignItems="center" justifyContent="center">
              <ButtonWithArrow green> Hemen Fiyat Hesapla</ButtonWithArrow>
            </Flex>
          </BoxList>
        </Flex>
      </Container>
    </Section>
  )
}

export default Solutions