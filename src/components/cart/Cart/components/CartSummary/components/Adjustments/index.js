import React from 'react'
import PropTypes from 'prop-types'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import { List, Row } from '../../styled'
import { toCurrencyWithCode } from 'helpers/currency'

export const Adjustments = ({ adjustments, currency, highlight }) => {
  if (!adjustments || !adjustments.length) return null

  return (
    <List>
      {adjustments.map((adjustment) => {
        const { amount } = adjustment
        const formattedPrice = toCurrencyWithCode(amount, currency)
        return (
          <Row key={adjustment.label} highlight={highlight}>
            <span>{adjustment.label}</span>
            <span>
              {formattedPrice || (
                <FormattedMessageWithLoader id='displayFreeAmount' />
              )}
            </span>
          </Row>
        )
      })}
    </List>
  )
}

Adjustments.propTypes = {
  adjustments: PropTypes.array,
  currency: PropTypes.string,
  highlight: PropTypes.bool
}

Adjustments.defaultProps = {
  highlight: false
}

export default Adjustments
