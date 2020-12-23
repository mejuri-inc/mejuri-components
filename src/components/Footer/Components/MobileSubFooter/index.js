import React from 'react'
import { Wrapper, Row, SocialLinksContainer } from './styled'
import LegalLinks from '../LegalLinks'
import SocialLinks from '../SocialLinks'
import PropTypes from 'prop-types'
import get from 'lodash.get'

function MobileSubFooter({ socialLinks, currencySelector, config }) {
  const legalLinks = config.children.find(function (x) {
    const isLegal = get(x, 'extraFields.legal', false)
    return isLegal
  })
  return (
    <Wrapper>
      <Row>
        {currencySelector && currencySelector}
        <SocialLinksContainer>
          <SocialLinks socialLinks={socialLinks} />
        </SocialLinksContainer>
      </Row>
      <Row>
        <LegalLinks legalLinks={legalLinks} />
      </Row>
    </Wrapper>
  )
}

MobileSubFooter.propTypes = {
  socialLinks: PropTypes.array,
  config: PropTypes.object
}

export default MobileSubFooter
