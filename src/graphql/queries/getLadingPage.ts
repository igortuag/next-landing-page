const GET_LADING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  query GET_LADING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`

export default GET_LADING_PAGE
