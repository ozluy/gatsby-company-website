import hexToRGBA from 'common/hexToRGBA'
import Button from 'components/Button'
import Container from 'components/Container'
import { Div, H3, Img, Section, Flex } from 'components/CoreElements'
import { navigate } from 'gatsby'
import React from 'react'
import { useTheme } from 'styled-components'
import covid from './covid.png'

const Covid = () => {
  const theme = useTheme()

  return (
    <Section p="0" bg={hexToRGBA(theme.colors.green, 0.13)}>
      <Container>
        <Flex
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          justifyContent="space-between"
        >
          <Div maxWidth="672px" textAlign={['center', 'center', 'left']}>
            <H3 color="grey" mb="45px">
              Covid-19 kapsamında gerekli önlemleri alarak bu süreçte sizin için
              hizmet vermeye devam ediyoruz.
            </H3>
            <Button onClick={() => navigate('/hesap-makinesi')} black>
              Hemen Hizmet Al
            </Button>
          </Div>
          <Img mt={['40px', '40px', 0]} src={covid} />
        </Flex>
      </Container>
    </Section>
  )
}
export default Covid
