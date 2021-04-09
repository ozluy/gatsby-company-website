import Animator from 'components/Animator'
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
         @media screen and (min-width: 1025px){
          #app_header nav  a {
                color: ${white} !important;
            }
         }
            `}
        </style>
      </Helmet>
      <Banner backgroundImage={`url("${asset1.url}")`}>
        <Animator component={H1} customConfig={{ origin: 'bottom' }} pb="180px">
          {title}
        </Animator>
      </Banner>
      <Section bg="lightBg">
        <Container>
          <Animator component={TextContent} customConfig={{ origin: 'bottom' }}>
            <Headline color="secondary">{header}</Headline>
            <Div dangerouslySetInnerHTML={{ __html: html }} />
          </Animator>
        </Container>
      </Section>

      <Section bg="blue25">
        <Container>
          <Animator
            component={Flex}
            customConfig={{ origin: 'bottom' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Div maxWidth="300px">
              <Headline color="secondary"> Destan Nakliyat ile </Headline>
              <H2 mt="15px">Taşıdığımız Kamu Kurumları </H2>
            </Div>
            <ChevronButtons disableBefore />
          </Animator>
          <List>
            {allGraphCmsTasidigimizKamuKurumlari.nodes.map(
              ({ title: kurumTitle, photo: { url } }, index) => (
                <Animator
                  component={ListItem}
                  customConfig={{ delay: index * 100 }}
                  key={kurumTitle}
                >
                  <Img src={url} />
                  <H5 p="28px 32px">{kurumTitle}</H5>
                </Animator>
              )
            )}
          </List>
        </Container>
      </Section>
    </>
  )
}

export default AboutUsPage
