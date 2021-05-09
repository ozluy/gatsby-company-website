import React, { useMemo } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import ChevronButtons from 'components/ChevronButtons'
import Container from 'components/Container'
import ScrollContainer from 'react-indiana-drag-scroll'
import {
  Div,
  Flex,
  H2,
  Headline,
  Paragraph,
  Section,
  I,
  Img
} from 'components/CoreElements'
import IconButton from 'components/IconButton'
import Button from 'components/Button'
import MapMarker from 'components/Icons/mapMarker'
import Animator from 'components/Animator'
import getCityId from 'common/getCityId'
import { List, ListItem, ItemBody, Preview } from './styled'
import Calculator from './Calculator'

const Intercity = () => {
  const {
    allGraphCmsPopulerRotalar,
    allGraphCmsSehirler
  } = useStaticQuery(graphql`
    {
      allGraphCmsSehirler {
        nodes {
          citiesInTurkey
        }
      }
      allGraphCmsPopulerRotalar {
        nodes {
          subText
          destinationCity
          currentCity
          photo {
            url
          }
        }
      }
    }
  `)

  const [cities, citiesMap] = useMemo(() => {
    const { citiesInTurkey } = allGraphCmsSehirler.nodes[0]

    const mappedCities = new Map()
    citiesInTurkey.map((item) => {
      mappedCities.set(item.value, item)
      return item
    })
    return [citiesInTurkey, mappedCities]
  })
  const populerRotalar = allGraphCmsPopulerRotalar?.nodes

  return (
    <Section bg="whiteBg">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Div maxWidth="568px">
            <Headline color="secondary">Destan Nakliyat ile</Headline>
            <H2 mt="15px">
              Şehirler arası “Evden Eve Nakliyat” için doğru seçim.
            </H2>
          </Div>
          <ChevronButtons disableBefore />
        </Flex>
        <List>
          <ScrollContainer
            className="scrollable__content"
            vertical={false}
            hideScrollbars={false}
          >
            {populerRotalar.map(
              ({ currentCity, destinationCity, photo, subText }, index) => {
                const ItemComponent = index < 4 ? Animator : ListItem
                const fromCity = citiesMap.get(getCityId(currentCity))
                const toCity = citiesMap.get(getCityId(destinationCity))

                return (
                  <ItemComponent
                    key={`${currentCity}-${destinationCity}`}
                    component={ListItem}
                    customConfig={{
                      distance: `${50 + index * 50}px`,
                      delay: 50 + index * 100,
                      duration: 500 + index * 100
                    }}
                  >
                    <Img src={photo.url} />
                    <ItemBody>
                      <Calculator
                        cities={cities}
                        citiesMap={citiesMap}
                        currentCity={fromCity}
                        destinationCity={toCity}
                      />
                      <Preview>
                        <Flex
                          flexDirection="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Headline>
                            <I mr="8px" color="secondary">
                              <MapMarker />
                            </I>
                            {fromCity.label}
                          </Headline>
                          <Paragraph color="greyLight" mt="3px">
                            {subText}
                          </Paragraph>
                        </Flex>
                        <IconButton />
                      </Preview>
                    </ItemBody>
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

export default Intercity
