import React from 'react'
import { useTheme } from 'styled-components'
import { Helmet } from 'react-helmet'
import SEO from 'components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import Banner from './Banner'
import ContactForm from './ContactForm'

const ContactPage = () => {
  const theme = useTheme()
  const { darkBg, white, secondary } = theme.colors
  const { graphCmsSeoPage } = useStaticQuery(graphql`
    {
      graphCmsSeoPage(slug: { eq: "iletisim" }) {
        title
        metaDescription
      }
    }
  `)
  const { title, metaDescription } = graphCmsSeoPage
  return (
    <>
      <SEO title={title} description={metaDescription} />
      <Helmet>
        <style>
          {`
            #app_header {
            background-color: ${darkBg};
            }
            @media screen and (min-width: 1025px){
            #app_header nav  a{
                color: ${white} !important;
            }           
            #app_header nav  ul li:last-child a{
                color: ${secondary} !important;
                }
                }
            `}
        </style>
      </Helmet>
      <Banner />
      <ContactForm />
    </>
  )
}

export default ContactPage
