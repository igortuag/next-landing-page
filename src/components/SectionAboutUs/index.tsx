import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import { sectionAboutUsProps } from 'types/api'
import * as S from './styles'

type Props = {
  sectionAboutUs: sectionAboutUsProps
}

const SectionAboutUs = ({ sectionAboutUs }: Props) => (
  <Container>
    <Heading reverseColor>{sectionAboutUs.title}</Heading>

    <S.Content>
      {sectionAboutUs.authors.map((author) => (
        <ProfileCard
          key={author.name}
          name={author.name}
          role={author.role}
          photo={author.photo}
          socialLinks={author.socialLinks}
          description={author.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
