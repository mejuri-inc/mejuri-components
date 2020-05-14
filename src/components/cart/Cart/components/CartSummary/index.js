import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Row, Total, Wrapper } from './styled'
import Estimates from './components/Estimates'
import Adjustments from './components/Adjustments'
import { toCurrencyWithCode } from 'helpers/currency'

export const CartSummary = ({
  subtotal,
  currency,
  estimatedTotal,
  estimates,
  adjustments
}) => {
  const subTotalMessage = subtotal ? (
    <FormattedMessage
      id='cart.balance.subtotal'
      values={{ value: toCurrencyWithCode(subtotal, currency) }}
    />
  ) : (
    <FormattedMessage id='displayFreeAmount' />
  )

  return (
    <Wrapper>
      <Row>{subTotalMessage}</Row>
      <Adjustments currency={currency} adjustments={adjustments} />
      <Estimates currency={currency} estimates={estimates} />
      <Total>
        <FormattedMessage id='cart.balance.total' />
        <span>{estimatedTotal}</span>
      </Total>
    </Wrapper>
  )
}

CartSummary.propTypes = {
  currency: PropTypes.string,
  estimatedTotal: PropTypes.string,
  subtotal: PropTypes.string,
  estimates: PropTypes.array,
  adjustments: PropTypes.array
}
export default CartSummary
