import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from 'components/Seo'
import Banner from './Banner'
import AboutCompany from './AboutCompany'

const CorporatePage = () => {
  const { graphCmsSeoPage } = useStaticQuery(graphql`
    {
      graphCmsSeoPage(slug: { eq: "kurumsal" }) {
        title
        metaDescription
      }
    }
  `)
  const { title, metaDescription } = graphCmsSeoPage
  return (
    <>
      <SEO title={title} description={metaDescription} />
      <Banner />
      <AboutCompany />
    </>
  )
}

export default CorporatePage
