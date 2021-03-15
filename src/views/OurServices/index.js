import React, { useState } from 'react'
import {
  Div,
  Flex,
  H1,
  H2,
  H5,
  Headline,
  Img,
  Paragraph
} from 'components/CoreElements'
import Container from 'components/Container'
import services from 'views/Home/PopularServices/data'
import service1 from 'views/Home/PopularServices/service_1.png'
import Dropdown from 'components/Dropdown'
import { ButtonWithArrow } from 'components/Button'
import ArrowRight from 'components/Icons/arrowRight'
import {
  List,
  Service,
  ServiceHeader,
  ServiceList,
  ServiceListItem,
  ServicesWrapper,
  StateIcon,
  IconWrapper,
  ListItem,
  StyledSection,
  VerticalCalculator
} from './styled'

const OurServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <StyledSection>
      <Container>
        <Headline color="secondary" textAlign="center">
          Destan Nakliyat ile
        </Headline>
        <H1 textAlign="center">Hizmetlerimiz</H1>
        <Flex mt="100px">
          <Flex>
            <ServicesWrapper width="300px">
              {services.map(({ title }, index) => {
                const isActive = activeIndex === index
                return (
                  <Service key={title}>
                    <ServiceHeader
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                    >
                      <H5>{title}</H5>
                      <StateIcon> {isActive ? '-' : '+'}</StateIcon>
                    </ServiceHeader>
                    {isActive && (
                      <ServiceList>
                        {services.map((item) => (
                          <ServiceListItem key={item.title}>
                            <Paragraph color="grey">{item.title}</Paragraph>
                          </ServiceListItem>
                        ))}
                      </ServiceList>
                    )}
                  </Service>
                )
              })}
            </ServicesWrapper>
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

        <Flex
          textAlign="center"
          m="50px auto 0 auto"
          maxWidth="350px"
          flexDirection="column"
        >
          <Headline color="secondary">Destan Nakliyat ile</Headline>
          <H2>Sana yardım etmek için burdayız</H2>
        </Flex>

        <VerticalCalculator>
          <Dropdown placeholder="Nereden seçin" />
          <ArrowRight />
          <Dropdown placeholder="Nereye seçin" />
          <Dropdown placeholder="Hizmeti belirtin" />
          <ButtonWithArrow>Fiyat Hesapla</ButtonWithArrow>
        </VerticalCalculator>
      </Container>
    </StyledSection>
  )
}
export default OurServicesPage
