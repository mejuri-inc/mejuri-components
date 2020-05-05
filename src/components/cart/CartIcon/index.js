import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Badge, Icon } from './styled'
import BagIcon from '../../../../resources/svg/bag.svg'

export default class CartIcon extends PureComponent {
  static propTypes = {
    itemsCount: PropTypes.number,
    onClick: PropTypes.func
  }

  render () {
    const { itemsCount, onClick } = this.props

    return (
      <Wrapper onClick={onClick}>
        <Icon><img src={BagIcon} /></Icon>
        <Badge>{itemsCount}</Badge>
      </Wrapper>
    )
  }
}
