import getCityId from 'common/getCityId'
import Animator from 'components/Animator'
import Button from 'components/Button'
import Container from 'components/Container'
import { Anchor, Flex, H3 } from 'components/CoreElements'
import ChevronRight from 'components/Icons/chevronRight'
import Facebook from 'components/Icons/facebook'
import Instagram from 'components/Icons/instagram'
import Twitter from 'components/Icons/twitter'
import { graphql, Link, navigate, useStaticQuery } from 'gatsby'
import React, { useMemo, useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(-1)
  const {
    allGraphCmsPopulerRotalar,
    allGraphCmsSehirler,
    allGraphCmsService,
    allGraphCmsMovingGuide
  } = useStaticQuery(graphql`
    {
      allGraphCmsMovingGuide {
        nodes {
          title
          detail {
            html
          }
        }
      }
      allGraphCmsSehirler {
        nodes {
          citiesInTurkey
        }
      }
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

  const guides = allGraphCmsMovingGuide.nodes
  const citiesMap = useMemo(() => {
    const { citiesInTurkey } = allGraphCmsSehirler.nodes[0]

    const mappedCities = new Map()
    citiesInTurkey.map((item) => {
      mappedCities.set(item.value, item)
      return item
    })
    return mappedCities
  })
  const populerRotalar = allGraphCmsPopulerRotalar?.nodes
  const popularServices = allGraphCmsService?.nodes

  const populerRotalarLinks = populerRotalar.map(
    ({ currentCity, destinationCity }) => {
      const fromCity = citiesMap.get(getCityId(currentCity))
      const toCity = citiesMap.get(getCityId(destinationCity))

      return {
        url: '/hesap-makinesi',
        title: `${fromCity.label} - ${toCity.label}`
      }
    }
  )
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
      { url: '/hesap-makinesi', title: 'İstanbul Nakliyat' },
      { url: '/hesap-makinesi', title: 'Ankara Nakliyat' },
      { url: '/hesap-makinesi', title: 'Izmir Nakliyat' },
      { url: '/hesap-makinesi', title: 'Bursa Nakliyat' },
      { url: '/hesap-makinesi', title: 'Antalya Nakliyat' }
    ],
    ['En Popüler Rotalar', ...populerRotalarLinks],
    [
      'Popüler Hizmetler',
      ...popularServices.map(({ name }) => ({
        url: '/hizmetlerimiz',
        title: name
      }))
    ],
    [
      'Taşınma Rehberi',
      ...guides.map(({ title }) => ({
        url: '/hizmetlerimiz',
        title
      }))
    ],
    [
      'Kurumsal',
      { url: '/kurumsal', title: 'Kurumsal' },
      { url: '/referanslarimiz', title: 'Referanslarımız' },
      { url: '/iletisim', title: 'Bize Ulaşın' },
      { url: '/hesap-makinesi', title: 'Hesap Makinesi' },
      { url: '/hakkimizda', title: 'Hakkımızda' },
      { url: '/sertifikalarimiz', title: 'Sertifikalarımız' },
      { url: '/haberler-ve-gonderiler', title: 'Haberler ve Gönderiler' }
    ]
  ]

  return (
    <Wrapper {...props}>
      <Animator component={Container} customConfig={{ origin: 'bottom' }}>
        <Flex
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          justifyContent="space-between"
        >
          <H3 maxWidth="672px" color="grey">
            Destan Nakliyat ile hemen taşınmak iletişime geçin.
          </H3>
          <Button
            onClick={() => navigate('/hesap-makinesi')}
            mt={['40px', '40px', '0']}
            black
          >
            Hemen Hizmet Al
          </Button>
        </Flex>
        <NavGroup>
          {NAV_LIST.map((navRow, rowIndex) => (
            <NavList
              key={rowIndex}
              onClick={() => {
                activeIndex === rowIndex
                  ? setActiveIndex(-1)
                  : setActiveIndex(rowIndex)
              }}
              isOpen={activeIndex === rowIndex}
            >
              {navRow.map((navItem, index) => {
                if (index === 0) {
                  return (
                    <NavItem key={navItem}>
                      <span>{navItem}</span>
                      <ChevronRight />
                    </NavItem>
                  )
                }

                return (
                  <NavItem key={navItem.title + index}>
                    <Link to={navItem.url}>{navItem.title}</Link>
                  </NavItem>
                )
              })}
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
