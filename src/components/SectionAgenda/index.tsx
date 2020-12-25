import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { sectionAgendaProps } from 'types/api'

type Props = {
  sectionAgenda: sectionAgendaProps
}

const SectionAgenda = ({ sectionAgenda }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{sectionAgenda.title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: sectionAgenda.description }} />
  </Container>
)

export default SectionAgenda
