import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Back, Body } from './styled'
import BackArrow from 'resources/icons/ArrowLongLeft'
import CartIcon from 'components/cart/CartIcon'

export class CartHeader extends PureComponent {
  static propTypes = {
    cartToggle: PropTypes.func,
    children: PropTypes.node,
    lineItems: PropTypes.array
  }

  handleBackClick = () => {
    const { cartToggle } = this.props

    cartToggle(false)
  }

  render() {
    const { children, lineItems, cartToggle } = this.props
    const itemsCount = lineItems.reduce((acc, item) => acc + item.quantity, 0)
    return (
      <Wrapper>
        <Back onClick={this.handleBackClick}>
          <BackArrow />
        </Back>
        <Body>{children}</Body>
        <CartIcon itemsCount={itemsCount} onClick={cartToggle} />
      </Wrapper>
    )
  }
}

export default CartHeader