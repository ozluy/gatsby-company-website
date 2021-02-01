import React, { useMemo } from 'react'
import Container from 'components/Container'
import Facebook from 'components/Icons/facebook'
import Twitter from 'components/Icons/twitter'
import Instagram from 'components/Icons/instagram'
import { Anchor, Flex } from 'components/CoreElements'
import logoFooter from 'assets/images/logo_footer.svg'
import { Socials, Logo, Wrapper, SocialItem } from './styled'

const Footer = () => {
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

  return (
    <Wrapper>
      <Container>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo src={logoFooter} />
          {renderSocialMedia}
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default Footer
