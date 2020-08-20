import React from 'react'
import PropTypes from 'prop-types'
import { Col, Wrapper } from './styled'
import { FormattedMessage } from 'react-intl'
import Checkbox from 'components/common/Checkbox'

export const ItemPOS = ({
  itemId,
  pickUp,
  quantity,
  setPickUp,
  available,
  forcePickup
}) => (
  <Wrapper>
    <Col>
      {available && (
        <Checkbox
          label='cart.items.walkOut'
          onChange={() => setPickUp(itemId, quantity, !pickUp)}
          checked={pickUp || forcePickup}
          disabled={forcePickup}
        />
      )}
    </Col>
    <Col>
      <div>
        <FormattedMessage id='cart.items.availability' />
        {available ? (
          <FormattedMessage id='cart.items.inStore' />
        ) : (
          <FormattedMessage id='cart.items.online' />
        )}
      </div>
    </Col>
  </Wrapper>
)

ItemPOS.propTypes = {
  available: PropTypes.bool,
  itemId: PropTypes.number,
  pickUp: PropTypes.bool,
  forcePickup: PropTypes.bool,
  quantity: PropTypes.number,
  setPickUp: PropTypes.func
}

export default ItemPOS
