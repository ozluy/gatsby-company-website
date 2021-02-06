import React, { useMemo } from 'react'
import Container from 'components/Container'
import { Flex, Small } from 'components/CoreElements'
import Headphones from 'components/Icons/headphones'
import logo from './logo.svg'
import {
  Wrapper,
  Nav,
  NavList,
  NavItem,
  Logo,
  CallCenter,
  PhoneNumber,
  HeadphonesWrapper
} from './styled'

const Header = () => {
  const navList = useMemo(
    () => (
      <NavList>
        {['kurumsal', 'hizmetlerimiz', 'referanslarımız', 'iletişim'].map(
          (navItem) => (
            <NavItem key={navItem}> {navItem}</NavItem>
          )
        )}
      </NavList>
    ),
    []
  )
  return (
    <Wrapper>
      <Container>
        <Nav>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo src={logo} />
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
        </Nav>
      </Container>
    </Wrapper>
  )
}

export default Header
