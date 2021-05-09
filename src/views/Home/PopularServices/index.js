import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import {
  Div,
  Flex,
  H2,
  H5,
  Headline,
  Img,
  Paragraph,
  Section
} from 'components/CoreElements'
import Animator from 'components/Animator'
import ScrollContainer from 'react-indiana-drag-scroll'
import Container from 'components/Container'
import SwitchButtons from 'components/SwitchButtons'
import Button from 'components/Button'
import { List, ListItem, IconWrapper } from './styled'

const PopulerServices = () => {
  const { allGraphCmsService } = useStaticQuery(graphql`
    {
      allGraphCmsService(limit: 5) {
        nodes {
          name
          summary
          image {
            url
          }
          icon {
            url
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Container>
        <Flex
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          alignItems="center"
        >
          <Div maxWidth="343px">
            <Headline color="secondary">Destan Nakliyat ile</Headline>
            <H2 mt="15px">Size özel öne çıkan hizmetler</H2>
          </Div>
          <SwitchButtons
            buttons={[
              {
                children: 'Bireysel'
              },
              {
                children: 'Kurumsal'
              }
            ]}
          />
        </Flex>
        <List>
          <ScrollContainer
            className="scrollable__content"
            horizontal
            vertical={false}
            hideScrollbars={false}
          >
            {allGraphCmsService.nodes.map(
              (
                {
                  name,
                  summary,
                  image: { url: imageUrl },
                  icon: { url: iconUrl }
                },
                index
              ) => {
                const ItemComponent = index < 5 ? Animator : ListItem
                return (
                  <ItemComponent
                    component={ListItem}
                    key={name}
                    customConfig={{
                      distance: `${50 + index * 50}px`,
                      delay: 50 + index * 100,
                      duration: 500 + index * 100
                    }}
                  >
                    <Img src={imageUrl} />
                    <Div mt="-15px">
                      <IconWrapper>
                        <Img src={iconUrl} />
                      </IconWrapper>
                      <H5
                        fontWeight="var(--font-weight-bold)"
                        fontSize="var(--typography-medium)"
                        margin="24px 0 16px 0"
                      >
                        {name}
                      </H5>
                      <Paragraph>{summary}</Paragraph>
                    </Div>
                  </ItemComponent>
                )
              }
            )}
          </ScrollContainer>
        </List>
        <Flex mt="80px" flexDirection="row" justifyContent="center">
          <Link to="/hizmetlerimiz">
            <Button light>Tümünü Görüntüle</Button>
          </Link>
        </Flex>
      </Container>
    </Section>
  )
}
export default PopulerServices
