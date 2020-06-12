import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Body } from './styled'
import FooterLinks from 'components/Footer/Components/FooterLinks'
import FooterNewsletterSubscribe from 'components/Footer/Components/FooterNewsletterSubscribe'
import DesktopSubFooter from 'components/Footer/Components/DesktopSubfooter'
import MobileSubFooter from 'components/Footer/Components/MobileSubFooter'

const Footer = ({
  isEnabled,
  track,
  desktopLinks,
  mobileLinks,
  socialLinks,
  currencySelector
}) => (
  <Wrapper>
    <Body>
      <FooterLinks desktopLinks={desktopLinks} mobileLinks={mobileLinks} />
      <FooterNewsletterSubscribe track={track} isEnabled={isEnabled} />
    </Body>
    <DesktopSubFooter
      currencySelector={currencySelector}
      socialLinks={socialLinks}
    />
    <MobileSubFooter
      currencySelector={currencySelector}
      socialLinks={socialLinks}
    />
  </Wrapper>
)

Footer.propTypes = {
  isEnabled: PropTypes.bool,
  track: PropTypes.func,
  desktopLinks: PropTypes.object,
  mobileLinks: PropTypes.object,
  socialLinks: PropTypes.array,
  currencySelector: PropTypes.element
}

Footer.defaultProps = {
  track: () => {},
  currencySelector: null
}

export default Footer
