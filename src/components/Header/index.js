import React from 'react'
import PropTypes from 'prop-types'
import { Content, Wrapper } from './styled'
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
  onClickTracking,
  children,
  pos
}) => (
  <Wrapper>
    <Content>
      <HeaderDesktop
        cartItemsCount={cartItemsCount}
        user={user}
        onLogin={onLogin}
        cartToggle={cartToggle}
        config={config}
        toggleSearch={toggleSearch}
        onClickTracking={onClickTracking}
        pos={pos}
      />
      <HeaderMobile
        cartItemsCount={cartItemsCount}
        cartToggle={cartToggle}
        toggleMobileMenu={toggleMobileMenu}
        toggleSearch={toggleSearch}
      />
      {children}
    </Content>
  </Wrapper>
)

Header.propTypes = {
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  toggleMobileMenu: PropTypes.func,
  onClickTracking: PropTypes.func,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  }),
  pos: PropTypes.object
}

Header.defaultProps = {
  cartItemsCount: 0,
  onLogin: () => {},
  cartToggle: () => {},
  toggleMobileMenu: () => {},
  onClickTracking: (context) => {},
  user: {},
  pos: null
}

export default Header
