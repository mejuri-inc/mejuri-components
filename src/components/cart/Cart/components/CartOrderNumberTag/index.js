import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CartOrderNumberWrapper, OrderNumberParagraph } from './styled'

export class CartOrderNumberTag extends PureComponent {
  render() {
    return (
      <CartOrderNumberWrapper>
        <a
          href={'/shop/admin/orders/' + this.props.orderNumber + '/edit'}
          rel='noreferrer'
          target='_blank'
        >
          <OrderNumberParagraph>{this.props.orderNumber}</OrderNumberParagraph>
        </a>
      </CartOrderNumberWrapper>
    )
  }
}

CartOrderNumberTag.propTypes = {
  orderNumber: PropTypes.string
}

export default CartOrderNumberTag
