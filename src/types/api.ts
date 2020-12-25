export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type sectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type sectionTechProps = {
  title: string
  techIcons: [
    {
      id: string
      title: string
      icon: {
        alternativeText: string
        url: string
      }
    }
  ]
}

export type sectionConceptsProps = {
  title: string
  concepts: [
    {
      id: string
      title: string
    }
  ]
}

export type sectionModulesProps = {
  title: string
  modules: [
    {
      id: string
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type sectionAgendaProps = {
  title: string
  description: string
}

export type pricingBoxProps = {
  totalPrice: string
  numberInstallments: string
  priceInstallment: string
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type sectionAboutUsProps = {
  title: string
  authors: [
    {
      id: string
      name: string
      description: string
      role: string
      photo: {
        url: string
        alternativeText: string
      }
      socialLinks: [
        {
          id: string
          title: string
          url: string
        }
      ]
    }
  ]
}

export type sectionReviewsProps = {
  title: string
  reviews: [
    {
      id: string
      name: string
      text: string
      photo: {
        alternativeText: string
        url: string
      }
    }
  ]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
  sectionTech: sectionTechProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
  sectionAgenda: sectionAgendaProps
  pricingBox: pricingBoxProps
  sectionAboutUs: sectionAboutUsProps
  sectionReviews: sectionReviewsProps
}
