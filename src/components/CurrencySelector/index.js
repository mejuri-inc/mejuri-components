import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Selector, Label } from './styled'
import AUFlag from 'resources/icons/AUFlag'
import GBFlag from 'resources/icons/GBFlag'
import CAFlag from 'resources/icons/CAFlag'
import USFlag from 'resources/icons/USFlag'

function CurrencySelector({
  setCurrency,
  orderCurrency,
  availableCurrencies,
  isPos
}) {
  const renderFlag = () => {
    switch (orderCurrency) {
      case 'AUD':
        return <AUFlag />
      case 'GBP':
        return <GBFlag />
      case 'CAD':
        return <CAFlag />
      default:
        return <USFlag />
    }
  }

  return (
    <Wrapper>
      {renderFlag()}
      {availableCurrencies.length > 1 ? (
        <Selector
          value={orderCurrency}
          onChange={(e) => setCurrency(e.target.value)}
          disabled={isPos}
          data-h='currency-selector'
        >
          {availableCurrencies.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </Selector>
      ) : (
        <Label>
          {availableCurrencies.length ? availableCurrencies[0] : ''}
        </Label>
      )}
    </Wrapper>
  )
}

CurrencySelector.propTypes = {
  setCurrency: PropTypes.func,
  orderCurrency: PropTypes.string,
  availableCurrencies: PropTypes.arrayOf(PropTypes.string),
  isPos: PropTypes.bool
}

export default CurrencySelector
