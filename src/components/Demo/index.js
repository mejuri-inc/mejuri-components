import React from 'react'
import { Button } from './styled'
import PropTypes from 'prop-types'

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export function Demo({ text, upsideDown }) {
  return <Button upsideDown={upsideDown}>{text}</Button>
}

Demo.propTypes = {
  text: PropTypes.string,
  upsideDown: PropTypes.bool
}

Demo.defaultProps = {
  text: 'Mejuri 2020',
  upsideDown: false
}

export default Demo
