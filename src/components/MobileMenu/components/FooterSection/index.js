import React from 'react'
import PropTypes from 'prop-types'
import { Footer, FooterItem, FooterLink, BottomWrapper, ButtonLink } from './styled'
import { loggedInFilter, posFilter } from '../../filters'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'

function FooterSection({
  options,
  openSubPage,
  pos,
  currencySelector,
  isLoggedIn,
  openOnboarding,
  accessibility
}) {
  function onClickFunction(o) {
    if (o.children) return () => openSubPage(o._id)
    if (o.url && o.url === '#login') return () => openOnboarding()
    return () => {}
  }

  return (
    <Footer>
      {options
        .filter(loggedInFilter(isLoggedIn))
        .filter(posFilter(pos))
        .map((o) => (
          <FooterItem key={o._id}>
            <FooterLink
              onClick={onClickFunction(o)}
              href={o.url || '#'}
              data-h='mobile-menu-footer-btn'
            >
              {o.text}
            </FooterLink>
          </FooterItem>
        ))}
        <FooterItem>
          <BottomWrapper>
            {currencySelector && currencySelector}
            {accessibility && 
              <ButtonLink
                onClick={() => {enableUsableNetAssistive && enableUsableNetAssistive()}}
                data-h='accessibility-btn'
              >
                <FormattedMessageWithLoader id='mobileMenu.accessibility' />
              </ButtonLink>
            }
          </BottomWrapper>
        </FooterItem>

    </Footer>
  )
}

FooterSection.defaultProps = {
  options: [],
  pos: false,
  isLoggedIn: false,
  openOnboarding: () => {}
}

FooterSection.propTypes = {
  options: PropTypes.array,
  openSubPage: PropTypes.func,
  pos: PropTypes.bool,
  currencySelector: PropTypes.element,
  isLoggedIn: PropTypes.bool,
  openOnboarding: PropTypes.func
}

export default FooterSection
