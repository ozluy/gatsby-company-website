import React, { useState } from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import {
  Div,
  Flex,
  H1,
  H2,
  H5,
  Headline,
  Img,
  Paragraph,
  RicTextContent
} from 'components/CoreElements'
import SEO from 'components/Seo'
import Container from 'components/Container'
import Dropdown from 'components/Dropdown'
import { ButtonWithArrow } from 'components/Button'
import ArrowRight from 'components/Icons/arrowRight'
import Animator from 'components/Animator'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [isCurrentIndex, setIsCurrentIndex] = useState(0)
  const [activeContent, setActiveContent] = useState(null)
  const [cityFrom, setCityFrom] = useState()
  const [cityTo, setCityTo] = useState()
  const [selectedService, setSelectedService] = useState()
  const {
    allGraphCmsService,
    allGraphCmsSehirler,
    allGraphCmsServicesCategory,
    graphCmsSeoPage
  } = useStaticQuery(graphql`
    {
      graphCmsSeoPage(slug: { eq: "hizmetlerimiz" }) {
        title
        metaDescription
      }
      allGraphCmsService {
        nodes {
          id
          name
          summary
          category
          pageContent {
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
      allGraphCmsSehirler {
        nodes {
          citiesInTurkey
        }
      }
      allGraphCmsServicesCategory {
        nodes {
          title
          relatedEnum
        }
      }
    }
  `)

  const { title: metaTitle, metaDescription } = graphCmsSeoPage
  const allServices = allGraphCmsService.nodes
  const allServiceCategories = allGraphCmsServicesCategory.nodes.map(
    ({ title, relatedEnum }) => {
      const items =
        allServices.filter(({ category }) => category === relatedEnum) || []

      return { title, relatedEnum, items }
    }
  )

  const { citiesInTurkey } = allGraphCmsSehirler.nodes[0]
  return (
    <StyledSection>
      <SEO title={metaTitle} description={metaDescription} />
      <Container>
        <Animator
          component={Headline}
          customConfig={{ origin: 'bottom' }}
          color="secondary"
          textAlign="center"
        >
          Destan Nakliyat ile
        </Animator>
        <Animator
          component={H1}
          customConfig={{ origin: 'bottom' }}
          textAlign="center"
        >
          Hizmetlerimiz
        </Animator>
        <Flex mt="100px" flexDirection={['column', 'column', 'row']}>
          <Animator
            component={ServicesWrapper}
            customConfig={{ origin: 'left' }}
          >
            {allServiceCategories.map(({ title, items }, index) => {
              const isActive = activeIndex === index && isCurrentIndex === index
              return (
                <Service key={title}>
                  <ServiceHeader
                    onClick={() => {
                      setActiveIndex(index)
                      setIsCurrentIndex(isActive ? -1 : index)
                      setActiveContent(null)
                    }}
                  >
                    <H5 color={isActive ? 'secondary' : 'primary'}>{title}</H5>
                    <StateIcon> {isActive ? '-' : '+'}</StateIcon>
                  </ServiceHeader>
                  {isActive && (
                    <ServiceSubCategory>
                      <ul>
                        {items.map(({ name, pageContent }) => (
                          <li
                            key={name}
                            onClick={() => setActiveContent(pageContent.html)}
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    </ServiceSubCategory>
                  )}
                </Service>
              )
            })}
          </Animator>
          {activeContent ? (
            <RicTextContent
              p={[0, 0, '40px']}
              bg="white"
              mt="24px"
              m={['0', '0', '24px 0 0 24px']}
              boxShadow="0px 15px 20px rgba(31, 72, 143, 0.02)"
              borderRadius="20px"
              dangerouslySetInnerHTML={{ __html: activeContent }}
            />
          ) : (
            <Animator component={List} customConfig={{ origin: 'right' }}>
              {allServiceCategories[activeIndex].items.map(
                ({
                  name,
                  summary,
                  image: { url: imageUrl },
                  icon: { url: iconUrl },
                  pageContent
                }) => (
                  <ListItem
                    key={name}
                    onClick={() => setActiveContent(pageContent.html)}
                  >
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
            </Animator>
          )}
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
          <Dropdown
            options={citiesInTurkey}
            onChange={(val) => setCityTo(val)}
            placeholder="Nereden seçin"
          />
          <ArrowRight />
          <Dropdown
            options={citiesInTurkey}
            onChange={(val) => setCityFrom(val)}
            placeholder="Nereye seçin"
          />
          <Dropdown
            options={allServices.map(({ name, id }) => ({
              label: name,
              value: id
            }))}
            onChange={(val) => setSelectedService(val)}
            placeholder="Hizmeti belirtin"
          />
          <ButtonWithArrow
            disabled={!cityFrom || !cityTo || !selectedService}
            onClick={() =>
              navigate('/hesap-makinesi', {
                state: { cityFrom, cityTo, selectedService }
              })
            }
          >
            Fiyat Hesapla
          </ButtonWithArrow>
        </VerticalCalculator>
      </Container>
    </StyledSection>
  )
}
export default OurServicesPage
