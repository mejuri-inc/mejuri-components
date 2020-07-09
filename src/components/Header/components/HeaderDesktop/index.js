import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

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
  toggleSearch,
  onClickTracking,
  pos,
  trackOpenCart,
  trackSearchOpen
}) {
  const [activeSection, setActiveSection] = useState(null)
  const layersMountingPoint = useRef(null)

  const leftMenu = config.filter(
    (item) => get(item, 'fields.type') !== 'right-link'
  )
  const rightMenu = config.filter(
    (item) => get(item, 'fields.type') === 'right-link'
  )

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
              config={leftMenu}
              setActive={setActiveSection}
              activeSection={activeSection}
              layersMountingPoint={layersMountingPoint}
              onClickTracking={onClickTracking}
              pos={pos}
            />
            <Logo href='/'>
              <MejuriLogo />
            </Logo>
            <Menu>
              <Button
                onClick={() => {
                  toggleSearch()
                  trackSearchOpen()
                }}
              >
                <MagniGlass />
                <FormattedMessage id='header.search' />
              </Button>
              {rightMenu.length > 0 &&
                rightMenu.map((item) => (
                  <ButtonLink key={item.sys.id} href={item.fields.url}>
                    {item.fields.text}
                  </ButtonLink>
                ))}
              <UserSection
                isGuest={!user.email}
                nameOrEmail={user.name || user.email}
                onLogin={onLogin}
                pos={pos}
              />
              <CartIcon
                onClick={() => {
                  cartToggle()
                  trackOpenCart()
                }}
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
  toggleSearch: PropTypes.func,
  onClickTracking: PropTypes.func,
  pos: PropTypes.object,
  trackOpenCart: PropTypes.func,
  trackSearchOpen: PropTypes.func
}

HeaderDesktop.defaultProps = {
  user: {
    isGuest: true
  },
  toggleSearch: () =>
    console.error('toggleSearch missing in <HeaderDesktop />'),
  trackOpenCart: () =>
    console.log('trackOpenCart callback function missing in <HeaderDesktop />'),
  trackSearchOpen: () =>
    console.log('trackSearchOpen prop missing in <MainSearch />'),
  pos: null,
  config: []
}

export default HeaderDesktop
