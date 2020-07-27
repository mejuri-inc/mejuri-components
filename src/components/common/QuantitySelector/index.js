import React from 'react'
import PropTypes from 'prop-types'
import { Btn, Quantity, Wrapper } from './styled'

export const QuantitySelector = ({
  backOrderable,
  value,
  itemId,
  updateQuantity,
  stock,
  trackIncrease,
  trackDecrease
}) => {
  const decreaseValue = value <= stock ? value - 1 : stock
  return (
    <Wrapper>
      <Btn
        onClick={() => {
          updateQuantity(itemId, decreaseValue)
          trackDecrease(1)
        }}
        data-h='cart-decrease-line-item-btn'
      >
        -
      </Btn>
      <Quantity>{value}</Quantity>
      <Btn
        onClick={() => {
          updateQuantity(itemId, value + 1)
          trackIncrease(1)
        }}
        disabled={value + 1 > stock && !backOrderable}
        data-h='cart-increase-line-item-btn'
      >
        +
      </Btn>
    </Wrapper>
  )
}

QuantitySelector.propTypes = {
  backOrderable: PropTypes.bool,
  value: PropTypes.number,
  itemId: PropTypes.number,
  stock: PropTypes.number,
  updateQuantity: PropTypes.func,
  trackIncrease: PropTypes.func,
  trackDecrease: PropTypes.func
}

QuantitySelector.defaultProps = {
  value: 1,
  trackIncrease: () => {},
  trackDecrease: () => {}
}

export default QuantitySelector
