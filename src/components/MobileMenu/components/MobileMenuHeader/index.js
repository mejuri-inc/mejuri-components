import React from 'react'
import PropTypes from 'prop-types'
import CartIcon from 'components/cart/CartIcon'
import MagniGlass from 'resources/icons/MagniGlass'
import Arrow from 'resources/icons/ArrowLongLeft'
import Close from 'resources/icons/CloseIcon'

import { Header, GoBack, ArrowIcon, SearchIcon } from './styled'

export const MobileMenuHeader = ({
  toggleNavigation,
  isGoBackEnabled,
  itemQuantity,
  bagClick,
  glassClick
}) => {
  return (
    <Header>
      <GoBack onClick={toggleNavigation} data-h='mobile-menu-toggle-btn'>
        {isGoBackEnabled ? (
          <ArrowIcon>
            <Arrow />
          </ArrowIcon>
        ) : (
          <Close />
        )}
      </GoBack>
      <SearchIcon onClick={glassClick} data-h='mobile-menu-search-btn'>
        <MagniGlass />
      </SearchIcon>
      <CartIcon
        onClick={() => bagClick()}
        itemsCount={itemQuantity}
        data-h='mobile-menu-cart-btn'
      />
    </Header>
  )
}

MobileMenuHeader.propTypes = {
  toggleNavigation: PropTypes.func,
  isGoBackEnabled: PropTypes.bool,
  itemQuantity: PropTypes.number,
  bagClick: PropTypes.func,
  glassClick: PropTypes.func
}

export default MobileMenuHeader
