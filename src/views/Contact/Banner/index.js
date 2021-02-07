import React from 'react'
import {
  Flex,
  H1,
  Headline,
  Img,
  Paragraph,
  Section
} from 'components/CoreElements'
import Container from 'components/Container'
import { useTheme } from 'styled-components'
import { Helmet } from 'react-helmet'
import map from './map.png'

const Banner = () => {
  const theme = useTheme()
  const { darkBg, white, secondary } = theme.colors
  return (
    <Section bg={darkBg}>
      <Helmet>
        <style>
          {`
            #app_header {
            background-color: ${darkBg};
            }
            nav  a{
                color: ${white} !important;
            }           
            nav  ul li:last-child a{
                color: ${secondary} !important;
                }
            `}
        </style>
      </Helmet>
      <Container>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDirection="column">
            <H1 mb="70px" color="white">
              Nasıl yardımcı olabiliriz?
            </H1>
            <Img src={map} />
          </Flex>
          <Flex color="secondary" flexDirection="column">
            <Headline mb="16px" color="white">
              İletişim Bilgileri
            </Headline>
            <Paragraph mt="16px">info@destannakliyat.com.tr</Paragraph>
            <Paragraph mt="16px">0(312) 332 16 96</Paragraph>
            <Paragraph mt="16px">0(312) 346 67 87</Paragraph>
            <Paragraph mt="16px">
              Demetlale Mah., Bağdat Cad. No:32/3 Yenimahalle / ANKARA
            </Paragraph>
            <Headline m="40px 0 32px 0" color="white">
              24/7 Mobil Ulaşım
            </Headline>
            <Paragraph>0(506) 700 39 28</Paragraph>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default Banner
