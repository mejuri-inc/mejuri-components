import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { toCurrencyWithCode } from 'helpers/currency'
import { Row } from '../../styled'

export const Shipping = ({ amount, currency }) => (
  <Row>
    <FormattedMessage id='checkout.orderSummary.shipping.estimated' />
    {amount ? (
      <span>{toCurrencyWithCode(amount, currency)}</span>
    ) : (
      <FormattedMessage id='displayFreeAmount' />
    )}
  </Row>
)

Shipping.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string
}

export default Shipping
