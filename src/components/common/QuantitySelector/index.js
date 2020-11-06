import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Btn, Quantity, Wrapper } from './styled'
import debounce from 'lodash.debounce'

const requestDelay = 1000

export const QuantitySelector = ({
  backOrderable,
  value,
  itemId,
  updateQuantity,
  stock,
  trackIncrease,
  trackDecrease
}) => {
  const [quantity, setQuantity] = useState(value)

  const debouncedAdd = useCallback(
    debounce(function (newQty) {
      console.log('bam!')
      updateQuantity(itemId, newQty)
      trackDecrease(newQty)
      setQuantity(newQty)
    }, requestDelay),
    []
  )

  function handleDecrease() {
    const decreased = quantity <= stock || backOrderable ? quantity - 1 : stock
    console.log({ decreased })
    if (decreased > 0) {
      debouncedAdd(decreased)
      setQuantity(decreased)
    }
  }

  console.log({ value })
  console.log({ quantity })

  return (
    <Wrapper>
      <Btn onClick={handleDecrease} data-h='cart-decrease-line-item-btn'>
        -
      </Btn>
      <Quantity>{quantity}</Quantity>
      <Btn
        onClick={() => {
          updateQuantity(itemId, value + 1)
          trackIncrease(value + 1)
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
