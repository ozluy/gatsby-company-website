import React, { useMemo, useState } from 'react'
import { Link } from 'gatsby'
import Container from 'components/Container'
import { Flex, Small } from 'components/CoreElements'
import Headphones from 'components/Icons/headphones'
import HeaderLogo from './logo'
import {
  Wrapper,
  NavList,
  NavItem,
  CallCenter,
  PhoneNumber,
  HeadphonesWrapper,
  Hamburger
} from './styled'

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navList = useMemo(
    () => (
      <NavList isOpen={mobileMenuOpen}>
        {[
          { title: 'Kurumsal', url: '/kurumsal' },
          { title: 'Hizmetlerimiz', url: '/hizmetlerimiz' },
          { title: 'Referanslarımız', url: '/referanslarimiz' },
          { title: 'İletişim', url: '/iletisim' }
        ].map(({ title, url }) => (
          <NavItem key={title}>
            <Link activeClassName="nav__active" to={url}>
              {title}
            </Link>
          </NavItem>
        ))}
      </NavList>
    ),
    [mobileMenuOpen]
  )
  return (
    <Wrapper {...props} id="app_header">
      <Container>
        <nav>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Hamburger
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span />
              <span />
              <span />
            </Hamburger>
            <Link style={{ color: '#1F2147' }} to="/">
              <HeaderLogo />
            </Link>
            {navList}
            <CallCenter>
              <HeadphonesWrapper>
                <Headphones />
              </HeadphonesWrapper>
              <Flex flexDirection="column" alignItems="center">
                <Small color="black" opacity="0.6">
                  Türkiye’nin her yerinden
                </Small>
                <PhoneNumber> 0 312 332 16 96</PhoneNumber>
              </Flex>
            </CallCenter>
          </Flex>
        </nav>
      </Container>
    </Wrapper>
  )
}

export default Header
