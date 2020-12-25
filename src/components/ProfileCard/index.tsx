import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type socialLinks = {
  id: string
  title: string
  url: string
}

type Props = {
  name: string
  role: string
  photo: {
    url: string
    alternativeText: string
  }
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image>
      <source srcSet={getImageUrl(photo.url)} type="image/webp" />
      <source srcSet={getImageUrl(photo.url)} type="image/png" />
      <img
        src={getImageUrl(photo.url)}
        loading="lazy"
        alt={photo.alternativeText}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    {console.log(socialLinks)}
    {socialLinks && (
      <S.SocialLinks>
        {socialLinks.map((item) => (
          <S.Link key={item.id}>
            <a href={item.url} title={item.title}>
              {icons[item.title]}
            </a>
          </S.Link>
        ))}
      </S.SocialLinks>
    )}
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
