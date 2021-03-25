import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import {
  Div,
  H1,
  H2,
  Headline,
  Img,
  Section,
  RicTextContent
} from 'components/CoreElements'
import Wrapper from './styled'
import bannerImage from './sertifikalarimiz_banner.svg'

const CertificatesPage = () => {
  const { allGraphCmsPage } = useStaticQuery(graphql`
    {
      allGraphCmsPage(filter: { title: { eq: "Sertifikalarımız" } }) {
        nodes {
          title
          header
          content {
            html
          }
        }
      }
    }
  `)

  const {
    content: { html },
    title,
    header
  } = allGraphCmsPage.nodes[0]

  return (
    <>
      <Section p="0 0 0 0">
        <Container>
          <Wrapper>
            <Div>
              <Headline color="secondary">Destan Nakilyat ile</Headline>
              <H1 mt="15px">{title}</H1>
            </Div>
            <Img src={bannerImage} />
          </Wrapper>
        </Container>
      </Section>
      <Section bg="white">
        <Container>
          <H2>{header}</H2>

          <RicTextContent dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Section>
    </>
  )
}
export default CertificatesPage
