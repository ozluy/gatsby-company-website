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
import Animator from 'components/Animator'

const Banner = () => {
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
    <Section bg="darkBg">
      <Container>
        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="center"
        >
          <Animator
            customConfig={{ origin: 'left' }}
            component={Flex}
            flexDirection="column"
          >
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
          </Animator>
          <Animator component={Flex} color="secondary" flexDirection="column">
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
          </Animator>
        </Flex>
      </Container>
    </Section>
  )
}

export default Banner
