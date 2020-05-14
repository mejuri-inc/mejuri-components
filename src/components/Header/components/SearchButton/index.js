import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styled'

const SearchButton = ({ toggle, children }) => (
  <Button onClick={() => toggle()}>{children}</Button>
)

SearchButton.propTypes = {
  toggle: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

SearchButton.propTypes = {
  toggle: PropTypes.func
}

SearchButton.defaultProps = {
  toggle: () => {}
}
//
// const mapDispatchToProps = dispatch => ({
//   toggle: () => dispatch(toggle())
// })
//
// export default connect(null, mapDispatchToProps)(SearchButton)

export default SearchButton
