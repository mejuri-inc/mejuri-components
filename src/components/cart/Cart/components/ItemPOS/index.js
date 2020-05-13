import React from 'react'
import PropTypes from 'prop-types'
import { Col, Wrapper } from './styled'
import { FormattedMessage } from 'react-intl'
import Checkbox from '../../../../../components/common/Checkbox'

export const ItemPOS = ({ itemId, pickUp, quantity, setPickUp, available }) => (
  <Wrapper>
    <Col>
      <Checkbox
        label='cart.items.walkOut'
        onChange={() => setPickUp(itemId, quantity, !pickUp)}
        checked={pickUp}
      />
    </Col>
    <Col>
      {available && <div>
        <FormattedMessage id='cart.items.availability' />
        <FormattedMessage id='cart.items.inStore' />
      </div>}
    </Col>
  </Wrapper>
)

ItemPOS.propTypes = {
  available: PropTypes.bool,
  itemId: PropTypes.number,
  pickUp: PropTypes.bool,
  quantity: PropTypes.number,
  setPickUp: PropTypes.func
}

export default ItemPOS
