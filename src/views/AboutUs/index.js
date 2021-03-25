import ChevronButtons from 'components/ChevronButtons'
import Container from 'components/Container'
import {
  Div,
  Flex,
  H1,
  H2,
  H5,
  Headline,
  Img,
  Section
} from 'components/CoreElements'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useTheme } from 'styled-components'
import { Banner, TextContent, List, ListItem } from './styled'

const AboutUsPage = () => {
  const theme = useTheme()
  const { white } = theme.colors
  const {
    allGraphCmsPage,
    allGraphCmsTasidigimizKamuKurumlari
  } = useStaticQuery(graphql`
    {
      allGraphCmsTasidigimizKamuKurumlari {
        nodes {
          title
          photo {
            url
          }
        }
      }
      allGraphCmsPage(
        filter: { remoteId: { eq: "ckmidjfgw9ul40b00nbsmwmz9" } }
      ) {
        nodes {
          title
          header
          content {
            html
          }
          asset1 {
            url
          }
        }
      }
    }
  `)
  const {
    content: { html },
    title,
    header,
    asset1
  } = allGraphCmsPage.nodes[0]

  return (
    <>
      <Helmet>
        <style>
          {`          
            nav  a{
                color: ${white} !important;
            }
            `}
        </style>
      </Helmet>
      <Banner backgroundImage={`url("${asset1.url}")`}>
        <H1 pb="180px">{title}</H1>
      </Banner>
      <Section bg="lightBg">
        <Container>
          <TextContent>
            <Headline color="secondary">{header}</Headline>
            <Div dangerouslySetInnerHTML={{ __html: html }} />
          </TextContent>
        </Container>
      </Section>

      <Section bg="blue25">
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <Div maxWidth="300px">
              <Headline color="secondary"> Destan Nakliyat ile </Headline>
              <H2 mt="15px">Taşıdığımız Kamu Kurumları </H2>
            </Div>
            <ChevronButtons disableBefore />
          </Flex>
          <List>
            {allGraphCmsTasidigimizKamuKurumlari.nodes.map(
              ({ title: kurumTitle, photo: { url } }) => (
                <ListItem key={kurumTitle}>
                  <Img src={url} />
                  <H5 p="28px 32px">{kurumTitle}</H5>
                </ListItem>
              )
            )}
          </List>
        </Container>
      </Section>
    </>
  )
}

export default AboutUsPage
