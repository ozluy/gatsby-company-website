import ArrowButtons from 'components/ChevronButtons'
import Container from 'components/Container'
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
import React from 'react'
import antalya from './antalya.png'
import { List, ListItem } from './styled'

const Intercity = () => {
  const processSteps = [
    {
      from: 'Istanbul',
      to: 'Ankara'
    },
    {
      from: 'Istanbul',
      to: 'Gaziantep'
    },
    {
      from: 'Istanbul',
      to: 'Antalya'
    },
    {
      from: 'Istanbul',
      to: 'Nevşehir'
    },
    {
      from: 'Istanbul',
      to: 'Trabzon'
    }
  ]
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
          <ArrowButtons disableBefore />
        </Flex>
        <List>
          {processSteps.map(({ from, to }) => (
            <ListItem key={`${from}-${to}`}>
              <Img src={antalya} />
              <Flex
                mt="32px"
                width="100%"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Headline>
                    <I mr="8px" color="secondary">
                      <MapMarker />
                    </I>
                    {to}
                  </Headline>
                  <Paragraph color="greyLight" mt="3px">
                    Evden eve nakliyat
                  </Paragraph>
                </Flex>
                <IconButton />
              </Flex>
            </ListItem>
          ))}
        </List>
        <Flex mt="80px" flexDirection="row" justifyContent="center">
          <Button light>Tümünü Görüntüle</Button>
        </Flex>
      </Container>
    </Section>
  )
}

export default Intercity
