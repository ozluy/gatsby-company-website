import React from 'react'
import SEO from 'components/Seo'
import { graphql, useStaticQuery } from 'gatsby'
import Banner from './Banner'
import TwentyYearsOfExperience from './TwentyYearsOfExperience'
import WhyDestanNakliyat from './WhyDestanNakliyat'
import MovingProcess from './MovingProcess'
import Intercity from './Intercity'
import PopularServices from './PopularServices'
import Solutions from './Solutions'
import Covid from './Covid'
import Guides from './Guides'
import Testimonials from './Testimonials'

const HomePage = () => {
  const { graphCmsSeoPage } = useStaticQuery(graphql`
    {
      graphCmsSeoPage(slug: { eq: "index" }) {
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
      <WhyDestanNakliyat />
      <TwentyYearsOfExperience />
      <MovingProcess />
      <Intercity />
      <PopularServices />
      <Solutions />
      <Guides />
      <Covid />
      <Testimonials />
    </>
  )
}

export default HomePage
