import React from 'react'
import PropTypes from 'prop-types'
import { Col, Wrapper } from './styled'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import Checkbox from 'components/common/Checkbox'

export const ItemPOS = ({
  itemId,
  walkout,
  quantity,
  setWalkout,
  available,
  forceWalkout
}) => (
  <Wrapper>
    <Col>
      {available && (
        <Checkbox
          label='cart.items.walkOut'
          onChange={() => setWalkout(itemId, quantity, !walkout)}
          checked={walkout || forceWalkout}
          disabled={forceWalkout}
        />
      )}
    </Col>
    <Col>
      <div>
        <FormattedMessageWithLoader id='cart.items.availability' />
        {available ? (
          <FormattedMessageWithLoader id='cart.items.inStore' />
        ) : (
          <FormattedMessageWithLoader id='cart.items.online' />
        )}
      </div>
    </Col>
  </Wrapper>
)

ItemPOS.propTypes = {
  available: PropTypes.bool,
  itemId: PropTypes.number,
  walkout: PropTypes.bool,
  forceWalkout: PropTypes.bool,
  quantity: PropTypes.number,
  setWalkout: PropTypes.func
}

export default ItemPOS
