import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Logo, Menu } from './styled'
import Navigation from '../NavigationMobile'
import CartIcon from 'components/cart/CartIcon'
import SearchButton from '../SearchButton'
import MejuriLogo from 'resources/icons/Logo'
import MagniGlass from 'resources/icons/MagniGlass'

const HeaderMobile = ({ cartItemsCount, cartToggle, toggleMobileMenu }) => {
  return (
    <Wrapper>
      <Navigation toggleMobileMenu={toggleMobileMenu} />
      <Logo href='/'>
        <MejuriLogo />
      </Logo>
      <Menu>
        <SearchButton>
          <MagniGlass />
        </SearchButton>
        <CartIcon onClick={() => cartToggle()} itemsCount={cartItemsCount}>
          Cart Icon
        </CartIcon>
      </Menu>
    </Wrapper>
  )
}

HeaderMobile.propTypes = {
  cartItemsCount: PropTypes.number,
  cartToggle: PropTypes.func,
  toggleMobileMenu: PropTypes.func
}

HeaderMobile.defaultProps = {
  cartToggle: () => {},
  toggleMobileMenu: () => {},
  cartItemsCount: 1
}

// const mapDispatchToProps = (dispatch) => ({
//   cartToggle: (opened) => dispatch(toggle(opened))
// })
//
// export default connect(null, mapDispatchToProps)(HeaderMobile)

export default HeaderMobile
