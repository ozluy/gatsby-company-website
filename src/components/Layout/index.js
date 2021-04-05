import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import appTheme, { cssVariables, colorClasses } from 'common/theme'
import hexToRGBA from 'common/hexToRGBA'
import useComponentDidMount from 'hooks/useComponentDidMount'
import Footer from './Footer'
import Header from './Header'
import Main from './styled'
import avertacyBoldWoff from '../../assets/fonts/avertacy-bold-webfont.woff'
import avertacyBoldWoff2 from '../../assets/fonts/avertacy-bold-webfont.woff2'
import avertacySemiboldWoff from '../../assets/fonts/avertacy-semibold-webfont.woff'
import avertacySemiboldWoff2 from '../../assets/fonts/avertacy-semibold-webfont.woff2'
import avertacyRegularWoff from '../../assets/fonts/avertacy-regular-webfont.woff'
import avertacyRegularWoff2 from '../../assets/fonts/avertacy-regular-webfont.woff2'
import 'react-datepicker/dist/react-datepicker.css'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Averta CY';
    font-weight: ${({ theme }) => theme.fontWeight.bold};;
    font-style: normal;
    src: url(${avertacyBoldWoff2}) format('woff2'), url(${avertacyBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Averta CY';
    font-weight: ${({ theme }) => theme.fontWeight.semibold};;
    font-style: normal;
    src: url(${avertacySemiboldWoff2}) format('woff2'), url(${avertacySemiboldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Averta CY';
    font-weight: ${({ theme }) => theme.fontWeight.regular};;
    font-style: normal;
    src: url(${avertacyRegularWoff2}) format('woff2'), url(${avertacyRegularWoff}) format('woff');
  }
  ${cssVariables};
  ${colorClasses};

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.primary};
    background-color: ${({ theme }) => hexToRGBA(theme.colors.blueBg)};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-family: 'Averta CY', helvatica, arial, sans-serif;

    &.mobile__nav__open {
      overflow: hidden;
      height: 100vh !important;
    }
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.greyLighter};
    font-size: ${({ theme }) => theme.typography.primary};
    line-height: 21px;
  }

  figure {
    margin: 0;
  }
`

const Layout = ({ children }) => {
  useComponentDidMount(() => {
    ScrollReveal().reveal('header.load-hidden')
    ScrollReveal().reveal('main.load-hidden')
    ScrollReveal().reveal('footer.load-hidden')
  })
  return (
    <ThemeProvider theme={appTheme}>
      <ParallaxProvider>
        <div className="sr">
          <Helmet>
            <meta httpEquiv="Content-Language" content="tr" />
            <title>Destan Nakliyat | Profesyonel Ev Ofis Nakliyatı</title>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
            <script src="https://unpkg.com/scrollreveal" />
            <style>
              {`
        div.sr .load-hidden {
        visibility: hidden;
          }`}
            </style>
          </Helmet>
          <GlobalStyles />
          <Header className="load-hidden" />
          <Main className="load-hidden">{children}</Main>
          <Footer className="load-hidden" />
        </div>
        <script>
          {`if (window.netlifyIdentity){' '}
      {window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })}`}
        </script>
      </ParallaxProvider>
    </ThemeProvider>
  )
}
export default Layout
