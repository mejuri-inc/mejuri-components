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
  toggleSearch,
  trackSearchOpen,
  trackOpenCart
}) => {
  return (
    <Wrapper data-h='site-header'>
      <Navigation toggleMobileMenu={toggleMobileMenu} />
      <Logo href='/'>
        <MejuriLogo />
      </Logo>
      <Menu>
        <Button
          onClick={() => {
            toggleSearch()
            trackSearchOpen()
          }}
          data-h='header-mobile-search-btn'
        >
          <MagniGlass />
        </Button>
        <CartIcon
          onClick={() => {
            cartToggle()
            trackOpenCart()
          }}
          itemsCount={cartItemsCount}
          data-h='header-mobile-cart-btn'
        />
      </Menu>
    </Wrapper>
  )
}

HeaderMobile.propTypes = {
  cartItemsCount: PropTypes.number,
  cartToggle: PropTypes.func,
  toggleMobileMenu: PropTypes.func,
  toggleSearch: PropTypes.func,
  trackOpenCart: PropTypes.func
}

HeaderMobile.defaultProps = {
  cartToggle: () => {},
  toggleMobileMenu: () => {},
  cartItemsCount: 0,
  toggleSearch: () => {},
  trackSearchOpen: () => {},
  trackOpenCart: () => {}
}

export default HeaderMobile
