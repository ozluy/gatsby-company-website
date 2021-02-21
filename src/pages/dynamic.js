import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Container from 'components/Container'

export default function Template() {
  return (
    <StaticQuery
      query={graphql`
        query markdownPosts {
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  title
                  date
                  path
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Container>
          {data.allMarkdownRemark.edges.map(
            ({
              node: {
                frontmatter: { title, date },
                html
              }
            }) => (
              <div key={title} className="blog-post">
                <h1>{title}</h1>
                <h2>{date}</h2>
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            )
          )}
        </Container>
      )}
    />
  )
}
