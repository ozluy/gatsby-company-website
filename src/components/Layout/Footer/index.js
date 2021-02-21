import Animator from 'components/Animator'
import Button from 'components/Button'
import Container from 'components/Container'
import { Anchor, Flex, H3 } from 'components/CoreElements'
import Facebook from 'components/Icons/facebook'
import Instagram from 'components/Icons/instagram'
import Twitter from 'components/Icons/twitter'
import React, { useMemo } from 'react'
import logoFooter from './logo_footer.svg'
import {
  Logo,
  NavGroup,
  NavItem,
  NavList,
  SocialItem,
  Socials,
  Wrapper
} from './styled'

const Footer = (props) => {
  const renderSocialMedia = useMemo(
    () => (
      <Socials>
        {[
          {
            href: 'https://facebook.com/destankurumsalnakliyat',
            Icon: Facebook
          },
          {
            href: 'https://twitter.com',
            Icon: Twitter
          },
          {
            href: 'https://instagram.com',
            Icon: Instagram
          }
        ].map(({ Icon, href }) => (
          <SocialItem key={href}>
            <Anchor
              color="blue"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon />
            </Anchor>
          </SocialItem>
        ))}
      </Socials>
    ),
    []
  )

  const NAV_LIST = [
    [
      'Çalıştığımız Şehirler',
      'İstanbul Nakliyat',
      'Ankara Nakliyat',
      'Izmir Nakliyat',
      'Bursa Nakliyat',
      'Antalya Nakliyat'
    ],
    [
      'En Popüler Rotalar',
      'Istanbul -  Ankara',
      'Ankara - Istanbul',
      'Istanbul -  Izmir',
      'Istanbul -  Antalya'
    ],
    [
      'Popüler Hizmetler',
      'Evden Eve Nakliyat',
      'Asansörlü Nakliyat',
      'Eşya Depolama',
      'Parça Taşımacılık',
      'Şehirler Arası Nakliyat'
    ],
    [
      'Taşınma Rehberi',
      'Taşınma Oncesi',
      'Taşınma Sonrası',
      'Yeni ev alırken',
      'Yeni ev Kiralarken'
    ],
    ['Kurumsal', 'Kariyer', 'Referanslarımız', 'Bize Ulaşın']
  ]

  return (
    <Wrapper {...props}>
      <Animator component={Container} customConfig={{ origin: 'bottom' }}>
        <Flex alignItems="center" justifyContent="space-between">
          <H3 maxWidth="672px" color="grey">
            Destan Nakliyat ile hemen taşınmak iletişime geçin.
          </H3>
          <Button black>Hemen Hizmet Al</Button>
        </Flex>
        <NavGroup>
          {NAV_LIST.map((navRow, rowIndex) => (
            <NavList key={rowIndex}>
              {navRow.map((navItem) => (
                <NavItem key={navItem}>{navItem}</NavItem>
              ))}
            </NavList>
          ))}
        </NavGroup>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo src={logoFooter} />
          {renderSocialMedia}
        </Flex>
      </Animator>
    </Wrapper>
  )
}

export default Footer
