import React from 'react'
import { useTheme } from 'styled-components'
import { Helmet } from 'react-helmet'
import Banner from './Banner'
import ContactForm from './ContactForm'

const ContactPage = () => {
  const theme = useTheme()
  const { darkBg, white, secondary } = theme.colors
  return (
    <>
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
