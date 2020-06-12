import React from 'react'
import { Wrapper, Row, SocialLinksContainer } from './styled'
import LegalLinks from '../LegalLinks'
import SocialLinks from '../SocialLinks'
import PropTypes from 'prop-types'

function MobileSubFooter({ socialLinks, currencySelector }) {
  return (
    <Wrapper>
      <Row>
        {currencySelector && currencySelector}
        <SocialLinksContainer>
          <SocialLinks socialLinks={socialLinks} />
        </SocialLinksContainer>
      </Row>
      <Row>
        <LegalLinks />
      </Row>
    </Wrapper>
  )
}

MobileSubFooter.propTypes = {
  socialLinks: PropTypes.array
}

export default MobileSubFooter
