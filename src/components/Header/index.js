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
  children
}) => (
  <Wrapper>
    <Content>
      <HeaderDesktop
        cartItemsCount={cartItemsCount}
        user={user}
        onLogin={onLogin}
        cartToggle={cartToggle}
        config={config}
      />
      <HeaderMobile
        cartItemsCount={cartItemsCount}
        cartToggle={cartToggle}
        toggleMobileMenu={toggleMobileMenu}
      />
      {children}
    </Content>
  </Wrapper>
)

Header.propTypes = {
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  toggleMobileMenu: PropTypes.func,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  })
}

Header.defaultProps = {
  cartItemsCount: 0,
  onLogin: () => {},
  cartToggle: () => {},
  toggleMobileMenu: () => {},
  user: {}
}

export default Header
