import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { toCurrencyWithCode } from 'helpers/currency'

export const Shipping = ({ amount, currency }) => (
  <div>
    <span>
      <FormattedMessage id='checkout.orderSummary.shipping.default' />
    </span>
    <span>
      {amount ? (
        toCurrencyWithCode(amount, currency)
      ) : (
        <FormattedMessage id='displayFreeAmount' />
      )}
    </span>
  </div>
)

Shipping.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string
}

export default Shipping
