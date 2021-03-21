import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
import Dropdown from 'components/Dropdown'
import { ButtonWithArrow } from 'components/Button'
import ArrowRight from 'components/Icons/arrowRight'
import {
  List,
  Service,
  ServiceHeader,
  ServiceSubCategory,
  ServicesWrapper,
  StateIcon,
  IconWrapper,
  ListItem,
  StyledSection,
  VerticalCalculator
} from './styled'

const OurServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const { allGraphCmsService } = useStaticQuery(graphql`
    {
      allGraphCmsService(limit: 5) {
        nodes {
          name
          summary
          subcategories {
            html
          }
          image {
            url
          }
          icon {
            url
          }
        }
      }
    }
  `)
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
              {allGraphCmsService.nodes.map(
                ({ name, subcategories: { html } }, index) => {
                  const isActive = activeIndex === index
                  return (
                    <Service key={name}>
                      <ServiceHeader
                        onClick={() => setActiveIndex(isActive ? -1 : index)}
                      >
                        <H5>{name}</H5>
                        <StateIcon> {isActive ? '-' : '+'}</StateIcon>
                      </ServiceHeader>
                      {isActive && (
                        <ServiceSubCategory
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      )}
                    </Service>
                  )
                }
              )}
            </ServicesWrapper>
          </Flex>
          <List>
            {allGraphCmsService.nodes.map(
              ({
                name,
                summary,
                image: { url: imageUrl },
                icon: { url: iconUrl }
              }) => (
                <ListItem key={name}>
                  <Img src={imageUrl} />
                  <Div mt="-15px">
                    <IconWrapper>
                      <Img src={iconUrl} />
                    </IconWrapper>
                    <H5
                      fontWeight="var(--font-weight-bold)"
                      fontSize="var(--typography-medium)"
                      margin="24px 0 16px 0"
                    >
                      {name}
                    </H5>
                    <Paragraph>{summary}</Paragraph>
                  </Div>
                </ListItem>
              )
            )}
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
