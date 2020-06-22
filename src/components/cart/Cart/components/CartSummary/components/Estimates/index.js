import React from 'react'
import PropTypes from 'prop-types'
import { List, Row, Total } from '../../styled'
import { toCurrencyWithCode } from 'helpers/currency'
import Shipping from 'components/cart/Cart/components/CartSummary/components/Shipping'

export const Estimates = ({ estimates }) => {
  if (!estimates || !estimates.length) return null

  return (
    <List>
      {estimates.map((estimate) => {
        const { amount, currency } = estimate
        const formattedPrice = toCurrencyWithCode(amount, currency)

        if (estimate.type === 'shipping') {
          return <Shipping {...estimate} currency={currency} key={estimate.id} />
        }

        return (
          <Row key={estimate.id}>
            <span>{estimate.label}</span>
            <span>{formattedPrice}</span>
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
