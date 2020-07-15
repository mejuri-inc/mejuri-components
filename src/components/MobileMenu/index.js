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
  Wrapper
} from './styled'
import get from 'lodash.get'

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

  handleFooterClick = (option) => {
    const isAccount = get(option, 'fields.extraFields.account', null)
    const id = option.sys.id
    if (isAccount) {
      this.handleAccountClick(id)
    } else {
      this.openSubPage(id)
    }
  }

  getBottomOptionText(option) {
    const { isLoggedIn } = this.props
    return !option.fields.extraFields.account
      ? option.fields.text
      : isLoggedIn
      ? option.fields.text
      : 'Sign In / Sign Up'
  }

  getBottomOptionChild(option, stylingHelp) {
    const isAccount = get(option, 'fields.extraFields.account', null)
    return isAccount ? (
      <MobileMenuSignOut />
    ) : (
      <MobileMenuStylingHelp
        label={get(stylingHelp, 'fields.text', null)}
        caption={get(stylingHelp, 'fields.extraFields.caption', null)}
        linkText={get(stylingHelp, 'fields.extraFields.linkText', null)}
        url={get(stylingHelp, 'fields.url', null)}
      />
    )
  }

  filterOptions = (options, pos) => {
    if (!pos) return options
    return options.filter(function (o) {
      const isAccount = get(o, 'fields.extraFields.account', false)
      return isAccount
    })
  }

  render() {
    const {
      menuOptions,
      itemQuantity,
      searchEnabled,
      isOpen,
      currencySelector,
      pos
    } = this.props
    const { subPageOpen } = this.state
    if (!menuOptions) return null
    const bottomMenus = menuOptions.children.filter((x) =>
      x.fields.extraFields ? x.fields.extraFields.bottom : false
    )
    const topMenus = menuOptions.children.filter((x) =>
      x.fields.extraFields
        ? !x.fields.extraFields.bottom && !x.fields.extraFields.stylingHelp
        : true
    )
    const stylingHelp = menuOptions.children.find((x) =>
      x.fields.type ? x.fields.type === 'menu footer section' : false
    )
    return (
      <Wrapper>
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
                {topMenus.map((o) => (
                  <MobileMenuDrawer
                    key={o.sys.id}
                    toggle={() => this.setOpenDrawer(o.sys.id)}
                    label={o.fields.text}
                    isOpen={this.state.openDrawer === o.sys.id}
                    options={o.fields.children}
                    glassClick={this.handleSearchClick}
                    pos={pos}
                  />
                ))}
                <Footer>
                  {this.filterOptions(bottomMenus, pos).map((o) => (
                    <FooterItem
                      onClick={() => this.handleFooterClick(o)}
                      key={o.sys.id}
                    >
                      {this.getBottomOptionText(o)}
                    </FooterItem>
                  ))}
                  <FooterItem>
                    {currencySelector && currencySelector}
                  </FooterItem>
                </Footer>
              </Options>
            </Page>
            {bottomMenus.map((o) => (
              <MobileMenuSubPage
                title={o.fields.text}
                options={o.fields.children}
                active={this.state.subPageIndex === o.sys.id}
                key={o.sys.id}
              >
                {this.getBottomOptionChild(o, stylingHelp)}
              </MobileMenuSubPage>
            ))}
          </Pages>
        </NavigationPanel>
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
