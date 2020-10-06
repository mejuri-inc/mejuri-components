import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, SelectorContainer, Selector, Label } from './styled'
import AUFlag from 'resources/icons/AUFlag'
import GBFlag from 'resources/icons/GBFlag'
import CAFlag from 'resources/icons/CAFlag'
import USFlag from 'resources/icons/USFlag'
import ChevronIcon from 'resources/icons/Chevron'

function CurrencySelector({
  setCurrency,
  orderCurrency,
  availableCurrencies,
  isPos
}) {
  const [isOpen, setIsOpen] = useState(false)

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

  const selectRef = useRef(null)

  return (
    <Wrapper>
      {renderFlag()}
      {availableCurrencies.length > 1 ? (
        <SelectorContainer isOpen={isOpen}>
          <Selector
            ref={selectRef}
            value={orderCurrency}
            onChange={(e) => setCurrency(e.target.value)}
            onClick={() => !isOpen && setIsOpen(true)}
            onMouseLeave={() => isOpen && setIsOpen(false)}
            disabled={isPos}
            data-h='currency-selector'
          >
            {availableCurrencies.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </Selector>
          {!isPos && <ChevronIcon />}
        </SelectorContainer>
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
