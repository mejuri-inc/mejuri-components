import React from 'react'
import PropTypes from 'prop-types'
import MobileMenuHeader from './components/MobileMenuHeader'
import MobileMenuDrawer from './components/MobileMenuDrawer'
import MobileMenuSubPage from './components/MobileMenuSubPage'
import MobileMenuStylingHelp from './components/MobileMenuStylingHelp'
import MobileMenuSignOut from './components/MobileMenuSignOut'

import {
  Overlay,
  NavigationPanel,
  Page,
  Pages,
  Options,
  Footer,
  FooterItem,
  Account
} from './styled'

import menuOptions from './mock.js'

export class MobileMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openDrawer: null,
      subPageOpen: false,
      subPageIndex: null
    }

    this.refOptions = null
  }

  toggleMenuState = () => {
    const { toggleMenu } = this.props
    if (this.state.subPageOpen) {
      return this.setState({
        subPageOpen: false
      })
    }

    toggleMenu()
  }

  setOpenDrawer = (drawerSlug) => {
    if (drawerSlug === this.state.openDrawer) {
      return this.setState({
        openDrawer: null
      })
    }
    this.setState({
      openDrawer: drawerSlug
    })

    if (this.refOptions) this.refOptions.scrollTop = 0
  }

  transition = (e) => {
    !this.state.subPageOpen &&
      this.setState({
        subPageIndex: null
      })
  }

  handleAccountClick = () => {
    const { isLoggedIn, openOnboarding } = this.props
    if (isLoggedIn) {
      return this.openSubPage(1)
    }

    openOnboarding()
    this.toggleMenuState()
  }

  handleBagClick = (e) => {
    const { toggleCart } = this.props
    toggleCart(true)
    setTimeout(() => this.toggleMenuState(), 300)
  }

  handleSearchClick = () => {
    // TODO: reimplement.
    this.toggleMenuState()
  }

  openSubPage = (id) => {
    this.setState({ subPageIndex: id, subPageOpen: true })
  }

  render() {
    const {
      menuOptions,
      itemQuantity,
      searchEnabled,
      isLoggedIn,
      isOpen
    } = this.props
    const { subPageOpen } = this.state
    if (!menuOptions) return null

    return (
      <div>
        <Overlay isOpen={isOpen} onClick={this.toggleMenuState} />
        <NavigationPanel isOpen={isOpen}>
          <MobileMenuHeader
            toggleNavigation={this.toggleMenuState}
            isGoBackEnabled={this.state.subPageOpen}
            itemQuantity={itemQuantity}
            bagClick={this.handleBagClick}
            glassClick={this.handleSearchClick}
            searchEnabled={searchEnabled}
          />
          <Pages
            isOpen={subPageOpen}
            onTransitionEnd={
              this.state.subPage === null ? this.transition : () => {}
            }
          >
            <Page>
              <Options
                ref={(r) => {
                  this.refOptions = r
                }}
              >
                {menuOptions.main.map((o) => (
                  <MobileMenuDrawer
                    key={o.slug}
                    toggle={() => this.setOpenDrawer(o.slug)}
                    label={o.label}
                    isOpen={this.state.openDrawer === o.slug}
                    options={o.children}
                    glassClick={this.handleSearchClick}
                  />
                ))}
                <Footer>
                  <FooterItem onClick={() => this.openSubPage(0)}>
                    Support
                  </FooterItem>
                  <Account onClick={this.handleAccountClick}>
                    {isLoggedIn ? 'Account' : 'Sign In / Sign Up'}
                  </Account>
                  <FooterItem>
                    {/* <CurrencySelector readonly={isPos} /> */}
                  </FooterItem>
                </Footer>
              </Options>
            </Page>
            <MobileMenuSubPage
              title={this.props.menuOptions.support.label}
              options={this.props.menuOptions.support.children}
              active={this.state.subPageIndex === 0}
            >
              <MobileMenuStylingHelp {...this.props.menuOptions.stylingHelp} />
            </MobileMenuSubPage>
            <MobileMenuSubPage
              title={this.props.menuOptions.account.label}
              options={this.props.menuOptions.account.children}
              active={this.state.subPageIndex === 1}
            >
              <MobileMenuSignOut />
            </MobileMenuSubPage>
          </Pages>
        </NavigationPanel>
      </div>
    )
  }
}

MobileMenu.propTypes = {
  menuOptions: PropTypes.shape({
    main: PropTypes.array,
    support: PropTypes.object,
    account: PropTypes.object,
    stylingHelp: PropTypes.object
  }),
  itemQuantity: PropTypes.number,
  searchEnabled: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  isPos: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  toggleCart: PropTypes.func,
  openOnboarding: PropTypes.func
}

MobileMenu.defaultProps = {
  menuOptions: menuOptions
}

export default MobileMenu
