import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import appTheme from 'common/theme'
import hexToRGBA from 'common/hexToRGBA'
import Footer from './Footer'
import Header from './Header'
import Main from './styled'

const GlobalStyles = createGlobalStyle`
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
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <>
      <Helmet>
        <meta httpEquiv="Content-Language" content="tr" />
        <title>Destan Nakliyat | Profesyonel Ev Ofis Nakliyatı</title>
        <desc>Profesyonel Ev Ofis Nakliyatı</desc>
      </Helmet>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout
