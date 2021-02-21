import React from 'react'
import ArrowButtons from 'components/ChevronButtons'
import Container from 'components/Container'
import Dropdown from 'components/Dropdown'
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
import Swap from 'components/Icons/swap'
import IconButton from 'components/IconButton'
import Button, { ButtonWithArrow } from 'components/Button'
import InputField from 'components/InputField'
import MapMarker from 'components/Icons/mapMarker'
import Animator from 'components/Animator'
import antalya from './antalya.png'
import cities from './cities'
import {
  List,
  ListItem,
  CalculatorWrapper,
  ItemBody,
  Preview,
  SwapWrapper
} from './styled'

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
      from: 'Izmir',
      to: 'Antalya'
    }
  ]

  const Calculator = () => (
    <CalculatorWrapper>
      <InputField placeholder="Nereden" value="Istanbul" />
      <SwapWrapper>
        <IconButton icon={<Swap />} />
      </SwapWrapper>
      <Dropdown
        title="Nereye"
        options={cities}
        placeholder="Sehir Ara..."
        defaultValue={{ value: 6, label: 'Ankara' }}
        maxMenuHeight={90}
      />
      <ButtonWithArrow mt="20px"> Fiyat Hesapla</ButtonWithArrow>
    </CalculatorWrapper>
  )

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
          <ScrollContainer
            className="scrollable__content"
            vertical={false}
            hideScrollbars={false}
          >
            {processSteps.map(({ from, to }, index) => {
              const ItemComponent = index < 4 ? Animator : ListItem
              return (
                <ItemComponent
                  key={`${from}-${to}`}
                  component={ListItem}
                  customConfig={{
                    distance: `${50 + index * 50}px`,
                    delay: 50 + index * 100,
                    duration: 500 + index * 100
                  }}
                >
                  <Img src={antalya} />
                  <ItemBody>
                    <Calculator />
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
                          {to}
                        </Headline>
                        <Paragraph color="greyLight" mt="3px">
                          Evden eve nakliyat
                        </Paragraph>
                      </Flex>
                      <IconButton />
                    </Preview>
                  </ItemBody>
                </ItemComponent>
              )
            })}
          </ScrollContainer>
        </List>

        <Flex mt="80px" flexDirection="row" justifyContent="center">
          <Button light>Tümünü Görüntüle</Button>
        </Flex>
      </Container>
    </Section>
  )
}

export default Intercity
