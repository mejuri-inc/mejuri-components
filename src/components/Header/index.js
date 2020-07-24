import React from 'react'
import PropTypes from 'prop-types'
import { Content, Wrapper, Sticky } from './styled'
import HeaderDesktop from './components/HeaderDesktop'
import HeaderMobile from './components/HeaderMobile'

const Header = ({
  cartItemsCount,
  user,
  onLogin,
  cartToggle,
  toggleMobileMenu,
  config,
  toggleSearch,
  children,
  pos,
  trackOpenCart,
  trackSearchOpen
}) => (
  <Sticky>
    <Wrapper>
      <Content>
        <HeaderDesktop
          cartItemsCount={cartItemsCount}
          user={user}
          onLogin={onLogin}
          cartToggle={cartToggle}
          config={config}
          toggleSearch={toggleSearch}
          pos={pos}
          trackOpenCart={trackOpenCart}
          trackSearchOpen={trackSearchOpen}
        />
        <HeaderMobile
          cartItemsCount={cartItemsCount}
          cartToggle={cartToggle}
          toggleMobileMenu={toggleMobileMenu}
          toggleSearch={toggleSearch}
          trackSearchOpen={trackSearchOpen}
          trackOpenCart={trackOpenCart}
        />
        {children}
      </Content>
    </Wrapper>
  </Sticky>
)

Header.propTypes = {
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  toggleMobileMenu: PropTypes.func,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  }),
  pos: PropTypes.object,
  trackOpenCart: PropTypes.func,
  trackSearchOpen: PropTypes.func
}

Header.defaultProps = {
  cartItemsCount: 0,
  onLogin: () => {},
  cartToggle: () => {},
  toggleMobileMenu: () => {},
  user: {},
  pos: null
}

export default Header
