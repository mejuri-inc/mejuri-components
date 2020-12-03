import React from 'react'
import PropTypes from 'prop-types'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import { toCurrencyWithCode } from 'helpers/currency'
import { Row } from '../../styled'

export const Shipping = ({ amount, currency }) => (
  <Row>
    <FormattedMessageWithLoader id='checkout.orderSummary.shipping.estimated' />
    {amount ? (
      <span>{toCurrencyWithCode(amount, currency)}</span>
    ) : (
      <FormattedMessageWithLoader id='displayFreeAmount' />
    )}
  </Row>
)

Shipping.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string
}

export default Shipping
