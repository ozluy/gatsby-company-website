import hexToRGBA from 'common/hexToRGBA'
import Button from 'components/Button'
import Container from 'components/Container'
import { Div, H3, Img, Section, Flex } from 'components/CoreElements'
import React from 'react'
import { useTheme } from 'styled-components'
import covid from './covid.png'

const Covid = () => {
  const theme = useTheme()

  return (
    <Section p="0" bg={hexToRGBA(theme.colors.green, 0.13)}>
      <Container>
        <Flex
          alignItems="center"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
        >
          <Div maxWidth="672px">
            <H3 color="grey" mb="45px">
              Covid-19 kapsamında gerekli önlemleri alarak bu süreçte sizin için
              hizmet vermeye devam ediyoruz.
            </H3>
            <Button black>Hemen Hizmet Al</Button>
          </Div>
          <Img src={covid} />
        </Flex>
      </Container>
    </Section>
  )
}
export default Covid
