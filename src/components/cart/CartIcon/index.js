import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Badge } from './styled'
import BagIcon from 'resources/icons/Bag'

function CartIcon({ itemsCount, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <BagIcon />
      {itemsCount > 0 && <Badge>{itemsCount}</Badge>}
    </Wrapper>
  )
}

CartIcon.propTypes = {
  itemsCount: PropTypes.number,
  onClick: PropTypes.func
}

export default CartIcon
