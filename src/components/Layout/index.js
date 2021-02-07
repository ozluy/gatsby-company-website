import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import appTheme, { cssVariables } from 'common/theme'
import hexToRGBA from 'common/hexToRGBA'
import Footer from './Footer'
import Header from './Header'
import Main from './styled'
import avertacyBoldWoff from '../../assets/fonts/avertacy-bold-webfont.woff'
import avertacyBoldWoff2 from '../../assets/fonts/avertacy-bold-webfont.woff2'
import avertacySemiboldWoff from '../../assets/fonts/avertacy-semibold-webfont.woff'
import avertacySemiboldWoff2 from '../../assets/fonts/avertacy-semibold-webfont.woff2'
import avertacyRegularWoff from '../../assets/fonts/avertacy-regular-webfont.woff'
import avertacyRegularWoff2 from '../../assets/fonts/avertacy-regular-webfont.woff2'

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
  ${cssVariables}


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
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    color: unset;
    text-decoration: none;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <>
      <Helmet>
        <meta httpEquiv="Content-Language" content="tr" />
        <title>Destan Nakliyat | Profesyonel Ev Ofis Nakliyatı</title>
      </Helmet>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout
