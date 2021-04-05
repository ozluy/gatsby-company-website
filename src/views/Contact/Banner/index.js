import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Anchor,
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

const Banner = () => {
  const theme = useTheme()
  const { darkBg, white, secondary } = theme.colors
  const { allGraphCmsContactDetail } = useStaticQuery(graphql`
    {
      allGraphCmsContactDetail {
        nodes {
          address
          email
          mapImage {
            url
          }
          mobile
          mapLink
          phone
          phone2
        }
      }
    }
  `)

  const {
    phone,
    phone2,
    email,
    address,
    mobile,
    mapImage: { url: mapImageSrc },
    mapLink
  } = allGraphCmsContactDetail.nodes[0]

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
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDirection="column">
            <H1 mb="70px" color="white">
              Nasıl yardımcı olabiliriz?
            </H1>
            <Anchor
              title="Google Maps'te aç"
              href={mapLink}
              target="_blank"
              rel="no-referrer no-opener"
            >
              <Img src={mapImageSrc} />
            </Anchor>
          </Flex>
          <Flex color="secondary" flexDirection="column">
            <Headline mt={['32px', '32px', 0]} mb="16px" color="white">
              İletişim Bilgileri
            </Headline>
            <Paragraph mt="16px">{email}</Paragraph>
            <Paragraph mt="16px">{phone}</Paragraph>
            <Paragraph mt="16px">{phone2}</Paragraph>
            <Paragraph mt="16px">{address}</Paragraph>
            <Headline m="40px 0 32px 0" color="white">
              24/7 Mobil Ulaşım
            </Headline>
            <Paragraph>{mobile}</Paragraph>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export default Banner
