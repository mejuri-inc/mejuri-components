import React from 'react'

import PropTypes from 'prop-types'
import { List, Row } from '../../styled'
import { toCurrencyWithCode } from 'helpers/currency'
import Shipping from 'components/cart/Cart/components/CartSummary/components/Shipping'

export const Estimates = ({ estimates }) => {
  if (!estimates || !estimates.length) return null

  return (
    <List>
      {estimates.map((estimate) => {
        const { amount, currency } = estimate
        const formattedPrice = toCurrencyWithCode(amount, currency)
        return (
          <Row key={estimate.id}>
            {estimate.type === 'shipping' ? (
              <Shipping {...estimate} currency={currency} />
            ) : (
              <div>
                <span>{estimate.label}</span>
                <span>{formattedPrice}</span>
              </div>
            )}
          </Row>
        )
      })}
    </List>
  )
}

Estimates.propTypes = {
  currency: PropTypes.string,
  estimates: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.number,
      label: PropTypes.string,
      currency: PropTypes.string,
      displayAmount: PropTypes.string,
      eligible: PropTypes.bool,
      id: PropTypes.string
    })
  )
}

export default Estimates
