import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import { Section, Flex, H2, Div } from 'components/CoreElements'
import { Content, SideList, SideListItem } from './styled'

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const { allGraphCmsKurumsal } = useStaticQuery(graphql`
    {
      allGraphCmsKurumsal {
        nodes {
          title
          subtitle
          content {
            html
          }
        }
      }
    }
  `)

  const {
    subtitle,
    content: { html }
  } = allGraphCmsKurumsal.nodes[activeIndex]

  return (
    <Section bg="lighterBg">
      <Container>
        <Flex>
          <SideList>
            {allGraphCmsKurumsal.nodes.map(({ title }, index) => (
              <SideListItem
                onClick={() => setActiveIndex(index)}
                active={index === activeIndex}
                key={title}
              >
                {index + 1}. {title}
              </SideListItem>
            ))}
          </SideList>
          <Div>
            <H2
              pl="15px"
              pb="10px"
              borderBottom="solid 2px"
              borderColor="secondary"
              display="inline-block"
            >
              {subtitle}
            </H2>
            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </Div>
        </Flex>
      </Container>
    </Section>
  )
}

export default Banner
