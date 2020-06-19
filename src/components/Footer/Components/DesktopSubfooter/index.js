import React from 'react'
import { Wrapper } from './styled'
import LegalLinks from '../LegalLinks'
import SocialLinks from '../SocialLinks'
import PropTypes from 'prop-types'

function DesktopSubFooter({ socialLinks, currencySelector }) {
  return (
    <Wrapper>
      {currencySelector && currencySelector}
      <LegalLinks />
      <SocialLinks socialLinks={socialLinks} />
    </Wrapper>
  )
}

DesktopSubFooter.propTypes = {
  socialLinks: PropTypes.array
}

export default DesktopSubFooter
