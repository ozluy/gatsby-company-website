import React, { useState } from 'react'
import {
  Div,
  Flex,
  H1,
  H5,
  Headline,
  Img,
  Paragraph,
  Section
} from 'components/CoreElements'
import Container from 'components/Container'
import services from 'views/Home/PopularServices/data'
import { IconWrapper, ListItem } from 'views/Home/PopularServices/styled'
import service1 from 'views/Home/PopularServices/service_1.png'
import {
  Guide,
  GuideHeader,
  GuideList,
  GuideListItem,
  GuidesWrapper,
  StateIcon
} from 'views/Home/Guides/styled'
import { List } from './styled'

const OurServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <Section>
      <Container>
        <Headline color="secondary" textAlign="center">
          Destan Nakliyat ile
        </Headline>
        <H1 textAlign="center">Hizmetlerimiz</H1>
        <Flex mt="100px">
          <Flex>
            <GuidesWrapper width="300px">
              {services.map(({ title }, index) => {
                const isActive = activeIndex === index
                return (
                  <Guide key={title}>
                    <GuideHeader
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                    >
                      <H5>{title}</H5>
                      <StateIcon> {isActive ? '-' : '+'}</StateIcon>
                    </GuideHeader>
                    {isActive && (
                      <GuideList>
                        {services.map((item) => (
                          <GuideListItem key={item.title}>
                            <Paragraph color="grey">{item.title}</Paragraph>
                          </GuideListItem>
                        ))}
                      </GuideList>
                    )}
                  </Guide>
                )
              })}
            </GuidesWrapper>
          </Flex>
          <List>
            {services.map(({ title, desc, Icon }) => (
              <ListItem key={title}>
                <Img src={service1} />
                <Div mt="-15px">
                  <IconWrapper>
                    <Icon />
                  </IconWrapper>
                  <H5
                    fontWeight="var(--font-weight-bold)"
                    fontSize="var(--typography-medium)"
                    margin="24px 0 16px 0"
                  >
                    {title}
                  </H5>
                  <Paragraph>{desc}</Paragraph>
                </Div>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Container>
    </Section>
  )
}
export default OurServicesPage
