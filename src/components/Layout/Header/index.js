import React, { useMemo, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from 'components/Container'
import { Flex, Small } from 'components/CoreElements'
import Headphones from 'components/Icons/headphones'
import HeaderLogo, { HeaderLogoMobile } from './logo'
import {
  Wrapper,
  NavList,
  NavItem,
  CallCenter,
  PhoneNumber,
  HeadphonesWrapper,
  Hamburger
} from './styled'
import BodyClassChanger from './BodyClassChanger'

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {
    allGraphCmsNavBarLink,
    allGraphCmsContactDetail
  } = useStaticQuery(graphql`
    {
      allGraphCmsNavBarLink {
        nodes {
          title
          link
        }
      }
      allGraphCmsContactDetail {
        nodes {
          phone
        }
      }
    }
  `)

  const navLinks = allGraphCmsNavBarLink?.nodes
  const { phone } = allGraphCmsContactDetail?.nodes[0]
  const navList = useMemo(
    () => (
      <NavList isOpen={mobileMenuOpen}>
        {navLinks.map(({ title, link }) => (
          <NavItem key={title}>
            <Link activeClassName="nav__active" to={`/${link}`}>
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
            {mobileMenuOpen && <BodyClassChanger />}
            <Link className="destan__logo" to="/">
              <HeaderLogo />
              <HeaderLogoMobile />
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
                <PhoneNumber>{phone}</PhoneNumber>
              </Flex>
            </CallCenter>
          </Flex>
        </nav>
      </Container>
    </Wrapper>
  )
}

export default Header
