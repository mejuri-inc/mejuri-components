import React from 'react'
import PropTypes from 'prop-types'
import { Suggestion, Suggestions } from './styled'

// TODO: this has to come from somewhere.
const suggestions = [
  'Hoop Earrings',
  'Diamond Necklace',
  'Zodiac Necklace',
  'Gold Bracelet',
  'Gold Necklace'
]

export const SearchOverlaySuggestions = ({ search, loading, suggestions }) => {
  return (
    <Suggestions loading={loading}>
      <Suggestion>Top Search:</Suggestion>
      {suggestions.map((s) => (
        <Suggestion key={s}>
          <button onClick={() => search(s)}>{s}</button>
        </Suggestion>
      ))}
    </Suggestions>
  )
}

SearchOverlaySuggestions.propTypes = {
  search: PropTypes.func,
  loading: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.string)
}

SearchOverlaySuggestions.defaultProps = {
  suggestions: suggestions
}

export default SearchOverlaySuggestions
