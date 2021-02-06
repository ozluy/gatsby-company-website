import React, { useState } from 'react'
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

const Guides = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const guides = [
    {
      title: 'Taşınma Öncesi Rehberi',
      items: [
        'Yeni Eviniz için Yeni Dekorasyon Önerileri',
        'Eşyaları Kolilerden Çıkarırken Dikkat Etmeniz Gerekenler',
        'Yeni Evinizin Güvenliği İçin Dikkat Etmeniz Gerekenler',
        'Taşınma Süreci Sonrasında Abonelik İşlemleri '
      ]
    },
    {
      title: 'Taşınma Öncesi Rehberi',
      items: [
        'Yeni Eviniz için Yeni Dekorasyon Önerileri',
        'Eşyaları Kolilerden Çıkarırken Dikkat Etmeniz Gerekenler',
        'Yeni Evinizin Güvenliği İçin Dikkat Etmeniz Gerekenler',
        'Taşınma Süreci Sonrasında Abonelik İşlemleri '
      ]
    },
    {
      title: 'Taşınma Sonrası  Rehberi',
      items: [
        'Yeni Eviniz için Yeni Dekorasyon Önerileri',
        'Eşyaları Kolilerden Çıkarırken Dikkat Etmeniz Gerekenler',
        'Yeni Evinizin Güvenliği İçin Dikkat Etmeniz Gerekenler',
        'Taşınma Süreci Sonrasında Abonelik İşlemleri '
      ]
    },
    {
      title: 'Yeni Ev Kiralama Rehberi',
      items: [
        'Yeni Eviniz için Yeni Dekorasyon Önerileri',
        'Eşyaları Kolilerden Çıkarırken Dikkat Etmeniz Gerekenler',
        'Yeni Evinizin Güvenliği İçin Dikkat Etmeniz Gerekenler',
        'Taşınma Süreci Sonrasında Abonelik İşlemleri '
      ]
    }
  ]

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
        <Flex mt="50px" alignItems="center" justifyContent="space-between">
          <GuidesWrapper>
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
          <Img src={howto} />
        </Flex>
      </Container>
    </Section>
  )
}

export default Guides
