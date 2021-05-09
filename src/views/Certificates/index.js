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
  RicTextContent,
  Flex,
  InlineFlex
} from 'components/CoreElements'
import { Banner, AssetContent, TextContent } from './styled'
import bannerImage from './sertifikalarimiz_banner.svg'

const CertificatesPage = () => {
  const { allGraphCmsPage } = useStaticQuery(graphql`
    {
      allGraphCmsPage(
        filter: { remoteId: { eq: "ckmj4nw8wcx0i0b03nx1gkrph" } }
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
          asset2 {
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
    asset1,
    asset2
  } = allGraphCmsPage.nodes[0]

  return (
    <>
      <Section p="0 0 0 0">
        <Container>
          <Banner>
            <Div>
              <Headline color="secondary">Destan Nakilyat ile</Headline>
              <H1 mt="15px">{title}</H1>
            </Div>
            <Img src={bannerImage} />
          </Banner>
        </Container>
      </Section>
      <Section bg="lightBg">
        <Container>
          <InlineFlex>
            <H2 borderBottom="solid 2px" borderColor="secondary">
              {header}
            </H2>
          </InlineFlex>
          <Flex flexDirection={['column', 'column', 'row']}>
            <TextContent>
              <RicTextContent dangerouslySetInnerHTML={{ __html: html }} />
            </TextContent>
            <AssetContent>
              <Img src={asset1.url} />
              <Img src={asset2.url} />
            </AssetContent>
          </Flex>
        </Container>
      </Section>
    </>
  )
}
export default CertificatesPage
