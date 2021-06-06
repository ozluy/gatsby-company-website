import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import {
  Section,
  Flex,
  H1,
  Div,
  RicTextContent,
  Img,
  InlineFlex,
  Small
} from 'components/CoreElements'
import Animator from 'components/Animator'
import SEO from 'components/Seo'

const PostDetail = ({ location }) => {
  const { search } = location
  const postSlug = search.split('=')[1]
  const { allGraphCmsBlogPost } = useStaticQuery(graphql`
    {
      allGraphCmsBlogPost {
        nodes {
          slug
          id
          title
          content {
            html
          }
          blogAuthor {
            fullName
            avatar {
              url
            }
            jobtitle
          }
          blogType {
            title
          }
          bannerPhoto {
            url
          }
        }
      }
    }
  `)

  const {
    title,
    content: { html },
    blogType,
    blogAuthor,
    bannerPhoto
  } = allGraphCmsBlogPost.nodes.find(({ slug }) => slug === postSlug)

  return (
    <Section>
      <SEO title={title} />
      <Container>
        <Animator component={Flex} flexDirection="column" alignItems="center">
          <InlineFlex fontSize="20px" color="blue">
            {blogType.title}
          </InlineFlex>
          <H1 m="24px 0">{title}</H1>
          <Div>{blogAuthor.fullName}</Div>
          <Small color="grey" mt="4px">
            {blogAuthor.jobtitle}
          </Small>
          <Img width="100%" mt="50px" src={bannerPhoto.url} />
        </Animator>
        <Animator
          component={Div}
          customConfig={{ origin: 'bottom' }}
          mt={['20px', '20px', 0]}
        >
          <RicTextContent dangerouslySetInnerHTML={{ __html: html }} />
        </Animator>
      </Container>
    </Section>
  )
}

export default PostDetail
