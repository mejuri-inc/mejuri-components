import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Logo, Menu, Button } from './styled'
import Navigation from '../NavigationMobile'
import CartIcon from 'components/cart/CartIcon'
import MejuriLogo from 'resources/icons/Logo'
import MagniGlass from 'resources/icons/MagniGlass'

const HeaderMobile = ({
  cartItemsCount,
  cartToggle,
  toggleMobileMenu,
  toggleSearch
}) => {
  return (
    <Wrapper>
      <Navigation toggleMobileMenu={toggleMobileMenu} />
      <Logo href='/'>
        <MejuriLogo />
      </Logo>
      <Menu>
        <Button onClick={() => toggleSearch()}>
          <MagniGlass />
        </Button>
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
  toggleMobileMenu: PropTypes.func,
  toggleSearch: PropTypes.func
}

HeaderMobile.defaultProps = {
  cartToggle: () => {},
  toggleMobileMenu: () => {},
  cartItemsCount: 1,
  toggleSearch: function () {
    console.error('toggleSearch prop missing in <HeaderMobile />')
  }
}

export default HeaderMobile
