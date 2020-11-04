import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Back, Body } from './styled'
import BackArrow from 'resources/icons/ArrowLongLeft'
import CartIcon from 'components/cart/CartIcon'

export class CartHeader extends PureComponent {
  handleBackClick = () => {
    const { cartToggle } = this.props
    cartToggle(false)
  }

  render() {
    const { children, lineItems, cartToggle, isOpened, isBundle } = this.props
    const itemsCount = lineItems.reduce((acc, item) => acc + item.quantity, 0)
    return (
      <Wrapper>
        <Back
          onClick={this.handleBackClick}
          isOpened={isOpened}
          data-h='cart-back-btn'
        >
          <BackArrow />
        </Back>
        <Body isBundle={isBundle}>{children}</Body>
        <CartIcon
          itemsCount={itemsCount}
          onClick={cartToggle}
          data-h='cart-toggle-btn'
        />
      </Wrapper>
    )
  }
}

CartHeader.propTypes = {
  cartToggle: PropTypes.func,
  children: PropTypes.node,
  lineItems: PropTypes.array,
  isOpened: PropTypes.bool
}

export default CartHeader
