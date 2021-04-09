import React from 'react'
import { Div, Flex, H1, Headline, Img, Section } from 'components/CoreElements'
import { Helmet } from 'react-helmet'
import { useTheme } from 'styled-components'
import Animator from 'components/Animator'
import hexToRGBA from 'common/hexToRGBA'
import Container from 'components/Container'
import banner from './banner.svg'

const Banner = () => {
  const theme = useTheme()
  const bgColor = hexToRGBA(theme.colors.blueBg)
  return (
    <Section pb="0" bg={bgColor}>
      <Helmet>
        <style>{`#app_header { background-color: ${bgColor}}`}</style>
      </Helmet>
      <Container>
        <Flex justifyContent="space-between" flexDirection="row">
          <Animator
            component={Div}
            customConfig={{ origin: 'left' }}
            maxWidth="215px"
          >
            <Headline>Destan nakliyat ile</Headline>
            <H1>Referanslarımız</H1>
          </Animator>
          <Animator
            component={Img}
            display={['none', 'none', 'block']}
            src={banner}
          />
        </Flex>
      </Container>
    </Section>
  )
}

export default Banner
