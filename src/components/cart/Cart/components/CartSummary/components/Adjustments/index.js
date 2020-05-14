import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { List, Row } from '../../styled'
import { toCurrencyWithCode } from 'helpers/currency'

export const Adjustments = ({ adjustments, currency }) => {
  if (!adjustments || !adjustments.length) return null

  return (
    <List>
      {adjustments.map((adjustment) => {
        const { amount } = adjustment
        const formattedPrice = toCurrencyWithCode(amount, currency)
        return (
          <Row key={adjustment.label}>
            <span>{adjustment.label}</span>
            <span>
              {formattedPrice || <FormattedMessage id='displayFreeAmount' />}
            </span>
          </Row>
        )
      })}
    </List>
  )
}

Adjustments.propTypes = {
  adjustments: PropTypes.array,
  currency: PropTypes.string
}

export default Adjustments
