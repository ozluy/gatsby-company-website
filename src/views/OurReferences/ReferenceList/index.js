import React, { useState } from 'react'
import Container from 'components/Container'
import { Flex, H2, Img, Section } from 'components/CoreElements'
import SwitchButtons from 'components/SwitchButtons'
import logos from './logos'

const ReferenceList = () => {
  const buttons = [
    {
      children: 'Bireysel'
    },
    {
      children: 'Kurumsal'
    }
  ]
  const [activeCategory, setActiveCategory] = useState(buttons[0].children)

  return (
    <Section bg="white">
      <Container>
        <H2 mb="40px" textAlign="center">
          {activeCategory}
        </H2>
        <Flex justifyContent="center">
          <SwitchButtons
            buttons={buttons.map(({ children }) => ({
              children,
              onClick: () => setActiveCategory(children)
            }))}
          />
        </Flex>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          mt="65px"
        >
          {logos.map((logoSrc, index) => (
            <Img mt="20px" key={index} src={logoSrc} />
          ))}
        </Flex>
      </Container>
    </Section>
  )
}
export default ReferenceList
