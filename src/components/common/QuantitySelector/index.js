import React, { useState, useCallback, useEffect } from 'react'
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
  track
}) => {
  const [quantity, setQuantity] = useState(value)

  const debouncedUpdate = useCallback(
    debounce((newQty, cb) => {
      updateQuantity(itemId, newQty)
      setQuantity(newQty)
      cb?.()
    }, requestDelay),
    []
  )

  useEffect(() => {
    setQuantity(value)
  }, [value])

  function handleDecrease() {
    const decreased = quantity - 1 > 0 ? quantity - 1 : quantity
    debouncedUpdate(decreased, () => track?.(decreased))
    setQuantity(decreased)
  }

  function handleIncrease() {
    const increased = quantity < stock || backOrderable ? quantity + 1 : stock
    debouncedUpdate(increased, () => track?.(increased))
    setQuantity(increased)
  }

  return (
    <Wrapper>
      <Btn onClick={handleDecrease} data-h='cart-decrease-line-item-btn'>
        -
      </Btn>
      <Quantity>{quantity}</Quantity>
      <Btn
        onClick={handleIncrease}
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
