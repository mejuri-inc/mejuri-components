import React from 'react'
import PropTypes from 'prop-types'
import { Suggestion, Suggestions } from './styled'

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

export default SearchOverlaySuggestions
