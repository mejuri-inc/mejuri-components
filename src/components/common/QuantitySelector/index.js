import React from 'react'
import PropTypes from 'prop-types'
import { Btn, Quantity, Wrapper } from './styled'

export const QuantitySelector = ({ backOrderable, value, itemId, updateQuantity, stock }) => {
  const decreaseValue = value > stock ? value - 1 : stock
  return (
    <Wrapper>
      <Btn onClick={() => { updateQuantity(itemId, decreaseValue) }}>-</Btn>
      <Quantity>{value}</Quantity>
      <Btn
        onClick={() => { updateQuantity(itemId, value + 1) }}
        disabled={value + 1 > stock && !backOrderable}
      >+</Btn>
    </Wrapper>
  )
}

QuantitySelector.propTypes = {
  backOrderable: PropTypes.bool,
  value: PropTypes.number,
  itemId: PropTypes.number,
  stock: PropTypes.number,
  updateQuantity: PropTypes.func
}

QuantitySelector.defaultProps = {
  value: 1
}

export default QuantitySelector
//
// const mapDispatchToProps = (dispatch) => ({
//   updateQuantity: (itemId, quantity) => dispatch(
//     setCurrentOrderItemQuantity(itemId, quantity)
//   )
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(QuantitySelector)
