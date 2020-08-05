import React from 'react'
import { Footer, FooterItem, FooterLink } from './styled'
import { loggedInFilter, posFilter } from '../../filters'

function FooterSection({
  options = [],
  openSubPage,
  pos = false,
  currencySelector,
  isLoggedIn = false,
  openOnboarding = () => {}
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
      {currencySelector && <FooterItem>{currencySelector}</FooterItem>}
    </Footer>
  )
}

export default FooterSection
