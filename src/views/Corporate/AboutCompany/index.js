import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import { Section, Flex, H2, Div } from 'components/CoreElements'
import Animator from 'components/Animator'
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
        <Flex flexDirection={['column', 'column', 'row']}>
          <SideList>
            {allGraphCmsKurumsal.nodes.map(({ title }, index) => (
              <Animator
                component={SideListItem}
                customConfig={{ delay: index * 100, origin: 'bottom' }}
                onClick={() => setActiveIndex(index)}
                active={index === activeIndex}
                key={title}
              >
                {index + 1}. {title}
              </Animator>
            ))}
          </SideList>
          <Animator
            component={Div}
            customConfig={{ origin: 'bottom' }}
            mt={['20px', '20px', 0]}
            key={subtitle}
          >
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
          </Animator>
        </Flex>
      </Container>
    </Section>
  )
}

export default Banner
