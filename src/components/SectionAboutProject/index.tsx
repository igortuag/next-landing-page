import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import { sectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Props = {
  sectionAboutProject: sectionAboutProjectProps
}

const SectionAboutProject = ({ sectionAboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        {sectionAboutProject.image && sectionAboutProject.image.url && (
          <S.Image>
            <source
              srcSet={getImageUrl(sectionAboutProject.image.url)}
              type="image/webp"
            />
            <source
              srcSet={getImageUrl(sectionAboutProject.image.url)}
              type="image/png"
            />
            <img
              src={getImageUrl(sectionAboutProject.image.url)}
              loading="lazy"
              alt={sectionAboutProject.image.alternativeText}
            />
          </S.Image>
        )}

        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: sectionAboutProject.description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
