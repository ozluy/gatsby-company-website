import React from 'react'
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
import Container from 'components/Container'
import SwitchButtons from 'components/SwitchButtons'
import Button from 'components/Button'
import service1 from './service_1.png'
import { List, ListItem, IconWrapper } from './styled'
import services from './data'

const PopulerServices = () => (
  <Section>
    <Container>
      <Flex justifyContent="space-between" alignItems="center">
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
        {services.map(({ title, desc, Icon }, index) => (
          <Animator
            component={ListItem}
            key={title}
            customConfig={{
              distance: `${50 + index * 50}px`,
              delay: 50 + index * 100,
              duration: 500 + index * 100
            }}
          >
            <Img src={service1} />
            <Div mt="-15px">
              <IconWrapper>
                <Icon />
              </IconWrapper>
              <H5
                fontWeight="var(--font-weight-bold)"
                fontSize="var(--typography-medium)"
                margin="24px 0 16px 0"
              >
                {title}
              </H5>
              <Paragraph>{desc}</Paragraph>
            </Div>
          </Animator>
        ))}
      </List>
      <Flex mt="80px" flexDirection="row" justifyContent="center">
        <Button light>Tümünü Görüntüle</Button>
      </Flex>
    </Container>
  </Section>
)

export default PopulerServices
