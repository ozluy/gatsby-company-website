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
import Container from 'components/Container'
import SwitchButtons from 'components/SwitchButtons'
import Button from 'components/Button'
import Home from 'components/Icons/home'
import service1 from './service_1.png'
import { List, ListItem, IconWrapper } from './styled'

const PopulerServices = () => {
  const services = [
    {
      title: 'Evden Eve Nakliyat',
      desc:
        'Yıllardır kurumlara sağladığımız sorunsuz hizmet artık sizlerin evleri için geliyor',
      Icon: Home
    },
    {
      title: 'Parça Eşya Sevkiyatı',
      desc:
        'Eşya Paketleme ve Ambalajlama Hizmeti Tüm nakliyat hizmetlerinin en...',
      Icon: Home
    },
    {
      title: 'Asansörlü Nakliyat',
      desc:
        'Asansörlü Evden Eve Nakliyat ve Eşya Taşımacılık Nakliyat hizmetleri...',
      Icon: Home
    },
    {
      title: 'Eşya Depolama',
      desc:
        'Özel Depolarda Eşya Depolama Hizmeti Eşyalarınızı bir süreliğine güv ...',
      Icon: Home
    },
    {
      title: 'Ambalaj ve Paketleme',
      desc:
        'Özel Depolarda Eşya Depolama Hizmeti Eşyalarınızı bir süreliğine güv ...',
      Icon: Home
    }
  ]
  return (
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
          {services.map(({ title, desc, Icon }) => (
            <ListItem key={title}>
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
export default PopulerServices
