import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import { Anchor, Flex, H2, Img, Section } from 'components/CoreElements'
import SwitchButtons from 'components/SwitchButtons'

const ReferenceList = () => {
  const buttons = [
    {
      children: 'Bireysel'
    },
    {
      children: 'Kurumsal'
    }
  ]
  const [activeCategory, setActiveCategory] = useState(buttons[1].children)

  const { allGraphCmsReferanslar } = useStaticQuery(graphql`
    {
      allGraphCmsReferanslar {
        nodes {
          name
          website
          logo {
            url
          }
          servicecategory
        }
      }
    }
  `)

  return (
    <Section bg="white">
      <Container>
        <H2 mb="40px" textAlign="center">
          {activeCategory}
        </H2>
        <Flex justifyContent="center">
          <SwitchButtons
            startIndex={1}
            buttons={buttons.map(({ children }) => ({
              children,
              onClick: () => setActiveCategory(children)
            }))}
          />
        </Flex>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent={['center', 'center', 'flex-start']}
          mt="65px"
        >
          {allGraphCmsReferanslar.nodes
            .filter(({ servicecategory }) => servicecategory === activeCategory)
            .map(({ name, website, logo: { url } }) => (
              <Anchor
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                href={`//${website}`}
              >
                <Img
                  width={['100%', '100%', 'auto']}
                  mt="20px"
                  borderRadius="10px"
                  src={url}
                />
              </Anchor>
            ))}
        </Flex>
      </Container>
    </Section>
  )
}
export default ReferenceList
