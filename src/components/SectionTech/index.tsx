import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { sectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

type Props = {
  sectionTech: sectionTechProps
}

const SectionTech = ({ sectionTech }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{sectionTech.title}</Heading>
      <S.IconsContainer>
        {sectionTech.techIcons.map(({ title, id, icon }) => (
          <S.Icon key={id}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={icon.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
