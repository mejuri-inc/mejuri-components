import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Body } from './styled'
import FooterLinks from 'components/Footer/Components/FooterLinks'
import FooterNewsletterSubscribe from 'components/Footer/Components/FooterNewsletterSubscribe'
import DesktopSubFooter from 'components/Footer/Components/DesktopSubfooter'
import MobileSubFooter from 'components/Footer/Components/MobileSubFooter'
import { socialLinks } from './defaultProps'

const Footer = ({ track, config, socialLinks, currencySelector }) => (
  <Wrapper>
    <Body>
      <FooterLinks config={config} />
      {track && <FooterNewsletterSubscribe track={track} />}
    </Body>
    <DesktopSubFooter
      currencySelector={currencySelector}
      socialLinks={socialLinks}
      config={config}
    />
    <MobileSubFooter
      currencySelector={currencySelector}
      socialLinks={socialLinks}
      config={config}
    />
  </Wrapper>
)

Footer.propTypes = {
  track: PropTypes.func,
  config: PropTypes.object,
  socialLinks: PropTypes.array,
  currencySelector: PropTypes.element
}

Footer.defaultProps = {
  track: () => {},
  currencySelector: null,
  socialLinks
}

export default Footer
