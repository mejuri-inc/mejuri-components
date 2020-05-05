import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Logo, Menu, Content, Overlay, Item } from './styled'
import Navigation from '../Navigation'
import CartIcon from '../../../cart/CartIcon'
import SearchButton from '../SearchButton'
import MejuriLogo  from '../../../../../resources/svg/logo.svg'
import MagniGlass from '../../../../../resources/svg/loupe.svg'

import UserSection from '../UserSection'
import ScrollBreakpoint from '../../../ScrollBreakpoint'
import { FormattedMessage } from 'react-intl'

// TODO: To be replaced by a config.
import menuItems from './mock'

export default class HeaderDesktop extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      activeSection: null
    }

    this.layersMountingPoint = React.createRef()
  }

  setActive = activeSection => {
    this.setState({
      activeSection
    })
  }

  render () {
    const { cartToggle, menuItems, cartItemsCount, user, onLogin } = this.props
    const { activeSection } = this.state

    return (
      <ScrollBreakpoint top={120}>{(shrinkPointReached) => (
        <Wrapper>
          <Overlay onMouseEnter={() => this.setActive(null)} isVisible={!!activeSection} />
          <Content shrinked={shrinkPointReached}>
            <Navigation
              sections={menuItems.sections}
              setActive={this.setActive}
              activeSection={activeSection}
              layersMountingPoint={this.layersMountingPoint}
            />
            <Logo href='/'><img src={MejuriLogo} alt="Mejuri" /></Logo>
            <Menu>
              <Item>
                <SearchButton>
                  <img src={MagniGlass} alt="Mejuri" />
                  <FormattedMessage id='header.search' />
                </SearchButton>
              </Item>
              <Item>
                <UserSection isGuest={user.isGuest} nameOrEmail={user.nameOrEmail} onLogin={onLogin} />
              </Item>
              <Item>
                <CartIcon onClick={() => cartToggle()} itemsCount={cartItemsCount}>Cart Icon</CartIcon>
              </Item>
            </Menu>
          </Content>
          <div ref={this.layersMountingPoint} />
        </Wrapper>
      )}
      </ScrollBreakpoint>
    )
  }
}

HeaderDesktop.defaultProps = {
  menuItems: menuItems
}

HeaderDesktop.propTypes = {
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  }),
  onLogin: PropTypes.func,
  menuItems: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string
        }))
      }))
    }))
  })
}
