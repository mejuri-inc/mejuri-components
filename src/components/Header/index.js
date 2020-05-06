import React from 'react'
import PropTypes from 'prop-types'
import { Content, Wrapper } from './styled'
import HeaderDesktop from './components/HeaderDesktop'
import HeaderMobile from './components/HeaderMobile'

const Header = ({ isDesktop, cartItemsCount, user, onLogin, cartToggle, children}) => (
  <Wrapper isDesktop={isDesktop()}>
    <Content>
      {/*<HeaderDesktop cartItemsCount={cartItemsCount} user={user} onLogin={onLogin} cartToggle={cartToggle}/>*/}
      {isDesktop() ?
        <HeaderDesktop cartItemsCount={cartItemsCount} user={user} onLogin={onLogin} cartToggle={cartToggle} />
        :
        <HeaderMobile cartItemsCount={cartItemsCount} cartToggle={cartToggle} />
      }
      {children}
    </Content>
  </Wrapper>
)

Header.propTypes = {
  isDesktop: PropTypes.func,
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  }),
}

Header.defaultProps = {
  isDesktop: () => true,
  cartItemsCount: 1,
  onLogin: () => {},
  cartToggle: () => {}
}

export default Header