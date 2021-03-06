import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import client from 'graphql/client'
import GET_LADING_PAGE from 'graphql/queries/getLadingPage'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  pricingBox,
  sectionAboutUs,
  sectionReviews,
  sectionFaq
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject sectionAboutProject={sectionAboutProject} />
    <SectionTech sectionTech={sectionTech} />
    <SectionConcepts sectionConcepts={sectionConcepts} />
    <SectionModules sectionModules={sectionModules} />
    <SectionAgenda sectionAgenda={sectionAgenda} />
    <PricingBox pricingBox={pricingBox} />
    <SectionAboutUs sectionAboutUs={sectionAboutUs} />
    <SectionReviews sectionReviews={sectionReviews} />
    <SectionFaq sectionFaq={sectionFaq} />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LADING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
