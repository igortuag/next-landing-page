import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import { sectionModulesProps } from 'types/api'
import * as S from './styles'

type Props = {
  sectionModules: sectionModulesProps
}

const SectionModules = ({ sectionModules }: Props) => (
  <Container>
    <Heading reverseColor>{sectionModules.title}</Heading>

    <S.Content>
      {sectionModules.modules.map(({ id, title, subtitle, description }) => (
        <CardModule key={id} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
