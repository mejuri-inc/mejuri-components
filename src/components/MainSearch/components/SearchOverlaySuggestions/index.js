import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Suggestion, Wrapper } from './styled'

export const SearchOverlaySuggestions = ({ search, suggestions }) => {
  return (
    <Wrapper>
      <Suggestion>
        <FormattedMessage id='header.search.suggestedProductsTitle' />
      </Suggestion>

      {suggestions.map((s) => (
        <Suggestion key={s}>
          <button onClick={() => search(s)}>{s}</button>
        </Suggestion>
      ))}
    </Wrapper>
  )
}

SearchOverlaySuggestions.propTypes = {
  search: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string)
}

export default SearchOverlaySuggestions
