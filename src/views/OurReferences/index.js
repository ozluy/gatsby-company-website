import SEO from 'components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Banner from './Banner'
import ReferenceList from './ReferenceList'

const OurReferencesPage = () => {
  const { graphCmsSeoPage } = useStaticQuery(graphql`
    {
      graphCmsSeoPage(slug: { eq: "referanslarimiz" }) {
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
      <ReferenceList />
    </>
  )
}

export default OurReferencesPage
