import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import { sectionConceptsProps } from 'types/api'
import * as S from './styles'

type Props = {
  sectionConcepts: sectionConceptsProps
}

const SectionConcepts = ({ sectionConcepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionConcepts.title}</Heading>
      <S.List>
        {sectionConcepts.concepts.map(({ id, title }) => (
          <S.Item key={id}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
