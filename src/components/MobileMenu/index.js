import React, { createRef } from 'react'
import PropTypes from 'prop-types'
import MobileMenuHeader from './components/MobileMenuHeader'
import MobileMenuDrawer from './components/MobileMenuDrawer'
import MobileMenuSubPage from './components/MobileMenuSubPage'
import FooterSection from './components/FooterSection'
import BackgroundOverlay from 'components/common/Overlay'
import get from 'lodash.get'
import {
  Overlay,
  NavigationPanel,
  Page,
  Pages,
  Options,
  Wrapper
} from './styled'

const MOBILE_MENU_TOP_SECTION = 'mobile-menu-top-section'
const MOBILE_MENU_BOTTOM_SECTION = 'mobile-menu-bottom-section'

export class MobileMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openDrawer: null,
      subPageOpen: false,
      subPageIndex: null
    }

    this.refOptions = createRef(null)
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

    if (this.refOptions) this.refOptions.current.scrollTop = 0
  }

  transition = (e) => {
    !this.state.subPageOpen &&
      this.setState({
        subPageIndex: null
      })
  }

  handleAccountClick = (id) => {
    const { isLoggedIn, openOnboarding } = this.props
    if (isLoggedIn) {
      return this.openSubPage(id)
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
    this.props.toggleSearch()
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
      isOpen,
      currencySelector,
      pos,
      isLoggedIn,
      openOnboarding
    } = this.props
    const { subPageOpen } = this.state
    if (!menuOptions) return null

    const bottom = menuOptions.children.find(
      (o) => o.text === MOBILE_MENU_BOTTOM_SECTION
    )

    const topMenus = menuOptions.children.find(
      (o) => o.text === MOBILE_MENU_TOP_SECTION
    )

    return (
      <Wrapper>
        <Overlay
          isOpen={isOpen}
          onClick={this.toggleMenuState}
          data-h='mobile-menu-btn'
        />
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
              <Options ref={this.refOptions}>
                {topMenus.children.map((o) => (
                  <MobileMenuDrawer
                    key={o._id}
                    toggle={() => this.setOpenDrawer(o._id)}
                    label={o.text}
                    isOpen={this.state.openDrawer === o._id}
                    options={o.children}
                    glassClick={this.handleSearchClick}
                    pos={pos}
                    isLoggedIn={isLoggedIn}
                  />
                ))}
                <FooterSection
                  openSubPage={this.openSubPage}
                  options={get(bottom, 'children')}
                  currencySelector={currencySelector}
                  pos={pos}
                  isLoggedIn={isLoggedIn}
                  openOnboarding={openOnboarding}
                />
              </Options>
            </Page>
            {bottom.children
              .filter((o) => !!o.children)
              .map((o) => (
                <MobileMenuSubPage
                  title={o.text}
                  options={get(o, 'children')}
                  active={this.state.subPageIndex === o._id}
                  key={o._id}
                  isLoggedIn={isLoggedIn}
                />
              ))}
          </Pages>
        </NavigationPanel>
        {isOpen && <BackgroundOverlay innerRef={this.refOptions} />}
      </Wrapper>
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
  toggleSearch: PropTypes.func,
  openOnboarding: PropTypes.func,
  currencySelector: PropTypes.element,
  pos: PropTypes.object
}

export default MobileMenu
