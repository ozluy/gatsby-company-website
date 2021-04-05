import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import {
  Div,
  H2,
  H5,
  Img,
  Paragraph,
  Section,
  Flex
} from 'components/CoreElements'
import Container from 'components/Container'
import Book from 'components/Icons/book'
import OpenBook from 'components/Icons/openBook'
import {
  Guide,
  GuideList,
  GuideListItem,
  GuideHeader,
  StateIcon,
  TitleIcon,
  GuidesWrapper
} from './styled'
import howto from './howto.png'
import guides from './data'

const Guides = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <Section>
      <Container>
        <Div maxWidth="411px">
          <H2>Evden eve nakliyat rehberi</H2>
          <H5 mt="34px" color="grey">
            Yılların biriktirdiği taşıma deneyimi artık sizlerle: Destan -
            Taşınma Rehberi
          </H5>
        </Div>
        <Flex
          mt="50px"
          alignItems="flex-start"
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          justifyContent="space-between"
        >
          <GuidesWrapper width={['auto', 'auto', '456px']}>
            {guides.map(({ title, items }, index) => {
              const isActive = activeIndex === index
              return (
                <Guide key={title}>
                  <GuideHeader
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                  >
                    <TitleIcon isActive={isActive}>
                      {isActive ? <OpenBook /> : <Book />}
                    </TitleIcon>
                    <H5>{title}</H5>
                    <StateIcon> {isActive ? '-' : '+'}</StateIcon>
                  </GuideHeader>
                  {isActive && (
                    <GuideList>
                      {items.map((item) => (
                        <GuideListItem key={item}>
                          <Paragraph color="grey">{item}</Paragraph>
                        </GuideListItem>
                      ))}
                    </GuideList>
                  )}
                </Guide>
              )
            })}
          </GuidesWrapper>
          <Div borderRadius="10px" overflow="hidden" maxHeight="550px">
            <Parallax tagOuter="figure" y={[25, -25]}>
              <Img src={howto} />
            </Parallax>
          </Div>
        </Flex>
      </Container>
    </Section>
  )
}

export default Guides
