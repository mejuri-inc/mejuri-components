import React from 'react'
import PropTypes from 'prop-types'
import { Name, Options, PriceBox, Wrapper } from './styled'
import QuantitySelector from 'components/common/QuantitySelector'
import { toCurrency } from 'helpers/currency'

export const ItemProperties = ({ item, currency, updateQuantity }) => {
  const {
    variant: { backOrderable, name, material },
    id,
    price,
    quantity,
    variantStock
  } = item
  const formatedPrice = toCurrency(price * quantity, currency)

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Options>{material}</Options>
      <PriceBox>
        <QuantitySelector
          itemId={id}
          value={quantity}
          stock={variantStock}
          backOrderable={backOrderable}
          updateQuantity={updateQuantity}
        />
        <span>{formatedPrice}</span>
      </PriceBox>
    </Wrapper>
  )
}

ItemProperties.propTypes = {
  item: PropTypes.shape({
    variant: PropTypes.shape({
      backOrderable: PropTypes.bool,
      name: PropTypes.string,
      material: PropTypes.string
    }),
    id: PropTypes.number,
    price: PropTypes.string,
    quantity: PropTypes.number,
    variantStock: PropTypes.number
  }),
  currency: PropTypes.string,
  updateQuantity: PropTypes.func
}

export default ItemProperties
