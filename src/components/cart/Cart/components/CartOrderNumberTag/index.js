import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, OrderNumber } from './styled'

export class CartOrderNumberTag extends PureComponent {
  render() {
    return (
      <Wrapper>
        <a
          href={'/shop/admin/orders/' + this.props.orderNumber + '/edit'}
          rel='noreferrer'
          target='_blank'
        >
          <OrderNumber>{this.props.orderNumber}</OrderNumber>
        </a>
      </Wrapper>
    )
  }
}

CartOrderNumberTag.propTypes = {
  orderNumber: PropTypes.string
}

export default CartOrderNumberTag
