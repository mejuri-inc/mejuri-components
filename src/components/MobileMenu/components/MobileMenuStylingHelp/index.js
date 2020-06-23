import React from 'react'
import PropTypes from 'prop-types'
import { StylingHelp } from './styled'

export const MobileMenuStylingHelp = ({ label, caption, linkText, url }) => {
  if (!label || !caption || !linkText || !url) return null
  return (
    <StylingHelp>
      <h5>{label}</h5>
      <p>{caption}</p>
      <a href={url}>{linkText}</a>
    </StylingHelp>
  )
}

MobileMenuStylingHelp.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  linkText: PropTypes.string,
  url: PropTypes.string
}

export default MobileMenuStylingHelp
