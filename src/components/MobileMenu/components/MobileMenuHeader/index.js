import React from 'react'
import PropTypes from 'prop-types'

// import { ReactComponent as CloseIcon } from 'app/resources/svg/close-icon.svg'
// import { ReactComponent as Back } from 'app/resources/svg/arrow-long-left.svg'
// import { ReactComponent as MagniGlass } from 'app/resources/svg/loupe.svg'
// import CartIcon from 'app/components/cart/CartIcon'

import { Header, GoBack, Close, Arrow, Glass } from './styled'

export const MobileMenuHeader = ({ toggleNavigation, isGoBackEnabled, itemQuantity, bagClick, glassClick }) => {
  return (
    <Header>
      <GoBack onClick={toggleNavigation}>
        {isGoBackEnabled
          ? <Arrow>Back</Arrow>
          : <Close>CloseIcon</Close>
        }
      </GoBack>
      <Glass onClick={() => glassClick()}>MagniGlass</Glass>
      {/* <CartIcon onClick={() => bagClick()} itemsCount={itemQuantity} /> */}
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
