import Animator from 'components/Animator'
import Container from 'components/Container'
import {
  H1,
  Headline,
  Img,
  Paragraph,
  Section,
  Small,
  InlineFlex
} from 'components/CoreElements'
import SEO from 'components/Seo'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { List, ListItem, TextGroup } from './styled'

const BlogPage = () => {
  const { allGraphCmsBlogPost, graphCmsSeoPage } = useStaticQuery(graphql`
    {
      graphCmsSeoPage(slug: { eq: "haberler-ve-gonderiler" }) {
        title
        metaDescription
      }
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

  const blogPosts = allGraphCmsBlogPost.nodes
  const { metaTitle, metaDescription } = graphCmsSeoPage
  return (
    <Section>
      <SEO title={metaTitle} description={metaDescription} />
      <Container>
        <H1>Bütün haberler ve gönderiler</H1>
        <List>
          {blogPosts.map(
            ({ id, title, bannerPhoto, blogType, content, slug }, index) => (
              <Animator
                component={Link}
                customConfig={{ delay: index * 100, origin: 'bottom' }}
                key={id}
                to={`/haberler-ve-gonderiler/detail?post-title=${slug}`}
              >
                <ListItem>
                  <Img src={bannerPhoto.url} />
                  <TextGroup>
                    <Small color="blue">{blogType.title}</Small>
                    <Headline>{title}</Headline>
                    <Paragraph mb="12px" color="grey">
                      {content.html
                        .replace(/(<([^>]+)>)/gi, '')
                        .substring(0, 100)}
                      ...
                    </Paragraph>
                    <InlineFlex style={{ textDecoration: 'underline' }}>
                      Hikayeyi okuyun
                    </InlineFlex>
                  </TextGroup>
                </ListItem>
              </Animator>
            )
          )}
        </List>
      </Container>
    </Section>
  )
}

export default BlogPage
