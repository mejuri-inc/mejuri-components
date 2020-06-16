import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  Content,
  Logo,
  Menu,
  Overlay,
  Wrapper,
  Button,
  ButtonLink
} from './styled'
import Navigation from '../Navigation'
import CartIcon from 'components/cart/CartIcon'
import MejuriLogo from 'resources/icons/Logo'
import MagniGlass from 'resources/icons/MagniGlass'

import UserSection from '../UserSection'
import { FormattedMessage } from 'react-intl'
import ScrollBreakpoint from 'components/ScrollBreakpoint'

function HeaderDesktop({
  cartToggle,
  cartItemsCount,
  user,
  onLogin,
  config,
  toggleSearch
}) {
  const [activeSection, setActiveSection] = useState(null)
  const layersMountingPoint = useRef(null)

  return (
    <ScrollBreakpoint top={120}>
      {(shrinkPointReached) => (
        <Wrapper>
          <Overlay
            onMouseEnter={() => setActiveSection(null)}
            isVisible={!!activeSection}
          />
          <Content shrinked={shrinkPointReached}>
            <Navigation
              config={config}
              setActive={setActiveSection}
              activeSection={activeSection}
              layersMountingPoint={layersMountingPoint}
            />
            <Logo href='/'>
              <MejuriLogo />
            </Logo>
            <Menu>
              <Button onClick={() => toggleSearch()}>
                <MagniGlass />
                <FormattedMessage id='header.search' />
              </Button>
              <ButtonLink href='/locations'>
                <FormattedMessage id='header.visitUs' />
              </ButtonLink>
              <UserSection
                isGuest={user.isGuest}
                nameOrEmail={user.name || user.email}
                onLogin={onLogin}
              />
              <CartIcon
                onClick={() => cartToggle()}
                itemsCount={cartItemsCount}
              />
            </Menu>
          </Content>
          <div ref={layersMountingPoint} />
        </Wrapper>
      )}
    </ScrollBreakpoint>
  )
}

HeaderDesktop.propTypes = {
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  }),
  onLogin: PropTypes.func,
  toggleSearch: PropTypes.func
}

HeaderDesktop.defaultProps = {
  user: {
    isGuest: true
  },
  toggleSearch: function () {
    console.error('toggleSearch missing in <HeaderDesktop />')
  }
}

export default HeaderDesktop
