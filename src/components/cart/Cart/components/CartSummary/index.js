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
  adjustments,
  taxes,
  taxesIncludedInPrice,
  highlight
}) => {
  const subTotalMessage = subtotal ? (
    <span>{toCurrencyWithCode(subtotal, currency)}</span>
  ) : (
    <FormattedMessage id='displayFreeAmount' />
  )
  return (
    <Wrapper>
      <Row>
        <FormattedMessage 
          id='cart.balance.subtotal' 
          values={{ taxesIncludedInPrice: taxesIncludedInPrice }}/>
        {subTotalMessage}
      </Row>
      {taxes && (
        <Row>
        <FormattedMessage id='cart.balance.taxes' />
          {taxes}
        </Row>
      )} 
      <Adjustments
        currency={currency}
        adjustments={adjustments}
        highlight={highlight}
      />
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
  adjustments: PropTypes.array,
  highlight: PropTypes.bool
}

CartSummary.defaultProps = {
  highlight: false
}

export default CartSummary
