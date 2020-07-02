import React from 'react'
import { Wrapper, CurrencySelectorContainer } from './styled'
import LegalLinks from '../LegalLinks'
import SocialLinks from '../SocialLinks'
import PropTypes from 'prop-types'
import get from 'lodash.get'

function DesktopSubFooter({ socialLinks, currencySelector, config }) {
  const legalLinks = config.children.find(function (x) {
    const isLegal = get(x, 'fields.extraFields.legal', false)
    return isLegal
  })
  return (
    <Wrapper>
      <CurrencySelectorContainer>
        {currencySelector && currencySelector}
      </CurrencySelectorContainer>
      <LegalLinks legalLinks={legalLinks} />
      <SocialLinks socialLinks={socialLinks} />
    </Wrapper>
  )
}

DesktopSubFooter.propTypes = {
  socialLinks: PropTypes.array,
  config: PropTypes.object
}

export default DesktopSubFooter
