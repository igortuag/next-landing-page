import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { pricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

type Props = {
  pricingBox: pricingBoxProps
}
const PricingBox = ({ pricingBox }: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{pricingBox.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{pricingBox.numberInstallments}x de</span>{' '}
        {pricingBox.priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: pricingBox.benefits }} />

    <Button href={pricingBox.button.url} onClick={onClick} withPrice>
      <p>{pricingBox.button.label}</p>
      <div>
        <S.ButtonFullPrice>R$549</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$449</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
