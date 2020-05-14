import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Logo, Menu } from './styled'
import Navigation from '../NavigationMobile'
import CartIcon from 'components/cart/CartIcon'
import SearchButton from '../SearchButton'
import MejuriLogo from 'resources/svg/logo.svg'
import MagniGlass from 'resources/svg/loupe.svg'

const HeaderMobile = ({ cartItemsCount, cartToggle }) => {
  return (
    <Wrapper>
      <Navigation />
      <Logo href='/'>
        <img src={MejuriLogo} alt='Mejuri' />
      </Logo>
      <Menu>
        <SearchButton>
          <img src={MagniGlass} alt='search' />
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
  cartToggle: PropTypes.func
}

HeaderMobile.defaultProps = {
  cartToggle: () => {},
  cartItemsCount: 1
}

// const mapDispatchToProps = (dispatch) => ({
//   cartToggle: (opened) => dispatch(toggle(opened))
// })
//
// export default connect(null, mapDispatchToProps)(HeaderMobile)

export default HeaderMobile
