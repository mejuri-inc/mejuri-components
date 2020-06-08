import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Badge } from './styled'
import BagIcon from 'resources/icons/Bag'

export default class CartIcon extends PureComponent {
  static propTypes = {
    itemsCount: PropTypes.number,
    onClick: PropTypes.func
  }

  render() {
    const { itemsCount, onClick } = this.props

    return (
      <Wrapper onClick={onClick}>
        <BagIcon />
        <Badge>{itemsCount}</Badge>
      </Wrapper>
    )
  }
}
