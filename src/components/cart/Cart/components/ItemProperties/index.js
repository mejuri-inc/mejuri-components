import React from 'react'
import PropTypes from 'prop-types'
import { Name, Options, PriceBox, Wrapper, SpecialMessage } from './styled'
import QuantitySelector from 'components/common/QuantitySelector'
import { toCurrency } from 'helpers/currency'
import { FormattedMessage } from 'react-intl'

export const getItemDetails = (ringSize, engravings, material) => {
  if (!ringSize && !engravings && !material) return null

  // Join ring size, engravings and material into a single string
  const detailsArray = []
  if (ringSize) detailsArray.push(ringSize)
  if (engravings) detailsArray.push(engravings)
  if (material) detailsArray.push(material)
  const details = detailsArray.filter((e) => e && e.length > 1).join(', ')
  return details
}

export const ItemProperties = ({
  item,
  specialMessage,
  currency,
  updateQuantity,
  trackDecrease,
  trackIncrease
}) => {
  const {
    variant: { backorderable, slug, material, optionsText, sample },
    id,
    price,
    quantity,
    variantStock,
    displayEngravings
  } = item

  const formatedPrice = toCurrency(price * quantity, currency)
  const ringSize = optionsText && optionsText.replace('Ring ', '')
  return (
    <Wrapper>
      <Name>
        <a href={`/shop/products/${slug}`}>{item.accurateName}</a>
      </Name>
      <Options>{getItemDetails(ringSize, displayEngravings, material)}</Options>
      {
        !!specialMessage && (
          <SpecialMessage>
            <FormattedMessage id={specialMessage} />
          </SpecialMessage>
        )
      }
      {sample ? (
        <PriceBox>
          <span />
          <FormattedMessage id='displayFreeAmount' />
        </PriceBox>
      ) : (
        <PriceBox>
          <QuantitySelector
            itemId={id}
            value={quantity}
            stock={variantStock}
            backOrderable={backorderable}
            updateQuantity={updateQuantity}
            trackIncrease={trackIncrease}
            trackDecrease={trackDecrease}
          />
          <span>{formatedPrice}</span>
        </PriceBox>
      )}
    </Wrapper>
  )
}

ItemProperties.propTypes = {
  item: PropTypes.shape({
    variant: PropTypes.shape({
      backOrderable: PropTypes.bool,
      name: PropTypes.string,
      material: PropTypes.string,
      sample: PropTypes.bool
    }),
    id: PropTypes.number,
    price: PropTypes.string,
    quantity: PropTypes.number,
    variantStock: PropTypes.number
  }),
  currency: PropTypes.string,
  updateQuantity: PropTypes.func,
  trackIncrease: PropTypes.func,
  trackDecrease: PropTypes.func
}

export default ItemProperties
