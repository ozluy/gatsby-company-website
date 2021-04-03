import React, { useState } from 'react'
import Button from 'components/Button'
import { Div, Flex, H2, H5, Img } from 'components/CoreElements'
import Container from 'components/Container'
import { graphql, useStaticQuery } from 'gatsby'
import {
  FAQsWrapper,
  FAQ,
  FAQHeader,
  Wrapper,
  StateIcon,
  FAQSubCategory
} from './styled'
import sssSrc from './sss.svg'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { allGraphCmsFaqCateroy, allGraphCmsFaq } = useStaticQuery(graphql`
    {
      allGraphCmsFaq {
        nodes {
          answer {
            html
          }
          question
          category
        }
      }
      allGraphCmsFaqCateroy {
        nodes {
          label
          connectedEnum
        }
      }
    }
  `)

  const faqs = allGraphCmsFaq.nodes
  const faqCategories = allGraphCmsFaqCateroy.nodes

  const [currentCategory, setCurrentCategy] = useState(
    faqCategories[0].connectedEnum
  )

  return (
    <Wrapper>
      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Img src={sssSrc} />
          <H2 m="40px 0" color="primary">
            Sıkça Sorulan Sorular
          </H2>
          <Div>
            {faqCategories.map(({ label, connectedEnum }) => (
              <Button
                rounded
                m="15px"
                {...(currentCategory === connectedEnum
                  ? { green: true }
                  : { passive: true })}
                key={connectedEnum}
                onClick={() => setCurrentCategy(connectedEnum)}
              >
                {label}
              </Button>
            ))}
          </Div>
        </Flex>

        <FAQsWrapper>
          {faqs.map(({ question, answer: { html }, category }, index) => {
            if (category !== currentCategory) {
              return null
            }
            const isActive = activeIndex === index
            return (
              <FAQ key={question} isActive={isActive}>
                <FAQHeader
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                >
                  <H5 color={isActive ? 'secondary' : 'primary'}>{question}</H5>
                  <StateIcon> {isActive ? '-' : '+'}</StateIcon>
                </FAQHeader>
                {isActive && (
                  <FAQSubCategory dangerouslySetInnerHTML={{ __html: html }} />
                )}
              </FAQ>
            )
          })}
        </FAQsWrapper>
      </Container>
    </Wrapper>
  )
}

export default FAQSection
