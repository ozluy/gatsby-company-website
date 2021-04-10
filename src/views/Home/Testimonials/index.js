import Animator from 'components/Animator'
import Container from 'components/Container'
import {
  Anchor,
  Div,
  Flex,
  H2,
  Img,
  Paragraph,
  Section
} from 'components/CoreElements'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import {
  TestimonialImg,
  TestimonialInfoGroup,
  TestimonialList,
  TestimonialListItem,
  TestimonialName,
  TestimonialQuote,
  TestimonialTitle
} from './styled'

const Testimonials = () => {
  const {
    allGraphCmsReferanslar,
    allGraphCmsTestimonial
  } = useStaticQuery(graphql`
    {
      allGraphCmsReferanslar(limit: 7) {
        nodes {
          name
          website
          logo {
            url
          }
          servicecategory
        }
      }
      allGraphCmsTestimonial {
        nodes {
          photo {
            url
          }
          name
          title
          quote
        }
      }
    }
  `)

  const testimonials = allGraphCmsTestimonial.nodes
  return (
    <Section bg="white">
      <Container>
        <Animator
          customConfig={{ origin: 'bottom' }}
          component={Div}
          maxWidth={['unset', 'unset', '500px']}
        >
          <H2>Müşterilerimizin Gözünde Destan Nakliyat</H2>
          <Paragraph
            m="30px 0 80px 0"
            maxWidth={['unset', 'unset', '350px']}
            color="greyLight"
          >
            Yılların biriktirdiği taşıma deneyimi artık sizlerle: Destan -
            Taşınma Rehberi
          </Paragraph>
        </Animator>
        <TestimonialList>
          {testimonials.map(({ photo: { url }, name, title, quote }, index) => (
            <Animator
              component={TestimonialListItem}
              customConfig={{ origin: index % 2 === 0 ? 'left' : 'right' }}
              key={name}
            >
              <TestimonialInfoGroup>
                <TestimonialImg src={url} />
                <div>
                  <TestimonialName>{name}</TestimonialName>
                  <TestimonialTitle>{title}</TestimonialTitle>
                </div>
              </TestimonialInfoGroup>
              <TestimonialQuote>{quote}</TestimonialQuote>
            </Animator>
          ))}
        </TestimonialList>

        <Flex bg="white" justifyContent="center" flexWrap="wrap">
          {allGraphCmsReferanslar.nodes.map(
            ({ name, website, logo: { url } }, index) => (
              <Animator
                component={Anchor}
                customConfig={{ delay: 100 * index }}
                href={website}
                key={name}
                rel="noopener noreferrer"
              >
                <Img height={['auto', 'auto', 90]} src={url} alt={name} />
              </Animator>
            )
          )}
        </Flex>
      </Container>
    </Section>
  )
}

export default Testimonials
