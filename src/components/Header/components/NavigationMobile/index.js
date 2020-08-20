import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Hamburguer } from './styled'
import HamburguerIcon from 'resources/icons/Hamburguer'

import MobileMenu from 'components/MobileMenu'

export default class NavigationMobile extends PureComponent {
  static propTypes = {
    toggleMobileMenu: PropTypes.func
  }

  static defaultProps = {
    toggleMobileMenu: () => {}
  }

  handleClick = () => {
    const { toggleMobileMenu } = this.props
    toggleMobileMenu()
  }

  render() {
    return (
      <Wrapper>
        <Hamburguer
          onClick={this.handleClick}
          data-h='header-mobile-hamburguer-btn'
        >
          <HamburguerIcon />
        </Hamburguer>
        <MobileMenu />
      </Wrapper>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   toggleMobileMenu: (opened) => dispatch(toggleMobileMenu(opened))
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(NavigationMobile)
