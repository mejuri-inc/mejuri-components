import React from 'react'
import PropType from 'prop-types'
import getCurrentSession from './session'
import api from './api'
import get from 'lodash.get'

export const ClientStateContext = React.createContext({})

function calculateCartItemsCount(lineItems = []) {
  return lineItems.reduce((count, item) => count + item.quantity, 0)
}

const currencies = {
  USD: '$',
  CAD: 'C$',
  AUD: 'AU$',
  GBP: '£'
}

const toNumber = (number) => Math.round(+number * 100) / 100

const toCurrency = (amount, currency = 'USD', whenZero) => {
  const prefix = amount < 0 ? '-' : ''
  const symbol = currencies[currency] || ''
  const formattedAmount = toNumber(Math.abs(+amount))

  if (formattedAmount === 0 && whenZero !== undefined) return whenZero

  const withCents =
    formattedAmount % 1 ? formattedAmount.toFixed(2) : formattedAmount
  return `${prefix}${symbol}${withCents}`
}

function calculateEstimates(order) {
  return get(order, 'estimates', []).map((e) => ({
    ...e,
    displayAmount: toCurrency(e.amount, order.currency, null)
  }))
}

function calculateAdjustments(order) {
  const adjustments = get(order, 'adjustments', []).map((a) => ({
    ...a,
    displayAmount: toCurrency(a.amount, order.currency, null)
  }))
  const lineItemAdjustments = get(order, 'lineItemAdjustments', []).map(
    (a) => ({
      ...a,
      displayAmount: toCurrency(a.amount, order.currency, null)
    })
  )
  return [...adjustments, ...lineItemAdjustments]
}

export class ClientStateProvider extends React.Component {
  constructor(props) {
    super(props)

    this.setPickup = () => this.setPickup.bind(this)
    this.cartToggle = () => this.cartToggle.bind(this)
    this.removeItem = () => this.removeItem.bind(this)
    this.setCouponCode = () => this.setCouponCode.bind(this)
    this.addSuggestionItem = () => this.addSuggestionItem.bind(this)
    this.updateItemQuantity = () => this.updateItemQuantity.bind(this)
    this.dismissCouponError = () => this.dismissCouponError.bind(this)
    this.mobileMenuToggle = () => this.mobileMenuToggle.bind(this)

    this.state = {
      session: {},
      cartOpened: false,
      couponError: false,
      mobileMenuOpened: false,
      mobileMenuToggle: this.mobileMenuToggle,
      cartActions: {
        toggle: this.cartToggle,
        removeItem: this.removeItem,
        updateItemQuantity: this.updateItemQuantity,
        setPickup: this.setPickup,
        dismissCouponError: this.dismissCouponError,
        setCouponCode: this.setCouponCode,
        addSuggestionItem: this.addSuggestionItem,
        onContinue: () => {
          window.location = `${props.apiHost}/checkout`
        }
      },
      cartItemsCount: 0,
      searchIsOpen: false,
      searchActions: {
        close: () => this.setState({ searchIsOpen: false }),
        toggle: () => this.setState({ searchIsOpen: !this.state.searchIsOpen })
      },
      onboardingIsOpen: false,
      onboardingActions: {
        close: () => this.setState({ onboardingIsOpen: false }),
        open: () => this.setState({ onboardingIsOpen: true })
      },
      products: props.products || []
    }
  }

  componentDidMount() {
    // setup state.
    // 1. session_current
    // 2. get order
    // 3. get extras
    this.getSession()
  }

  async getSession() {
    try {
      const sessionResponse = await getCurrentSession(
        this.state,
        this.props.apiHost
      )

      this.setState(
        {
          session: sessionResponse.current
        },
        () => this.getOrder() && this.loadSuggestions()
      )
    } catch (e) {
      console.error('Error getting session', e)
    }
  }

  async getOrder() {
    try {
      const orderResponse = await api.cart.fetchOrder(
        this.state,
        this.props.apiHost
      )

      this.setState({
        order: orderResponse,
        cartItemsCount: calculateCartItemsCount(
          get(orderResponse, 'lineItems')
        ),
        estimates: calculateEstimates(orderResponse),
        adjustments: calculateAdjustments(orderResponse)
      })
    } catch (e) {
      console.error('Error getting order', e)
    }
  }

  async loadSuggestions() {
    try {
      const response = await api.cart.fetchSuggestions(
        this.state,
        this.props.apiHost
      )

      this.setState({ suggestions: response.products })
    } catch (e) {
      console.error('Error getting product suggestions', e)
    }
  }

  cartToggle() {
    this.setState({ cartOpened: !this.state.cartOpened })
  }

  mobileMenuToggle() {
    const { mobileMenuOpened } = this.state
    this.setState({ mobileMenuOpened: !mobileMenuOpened })
  }

  async removeItem(itemId) {
    try {
      this.setState({ isLoading: true })

      await api.cart.removeItem(
        this.state,
        this.state.order.number,
        itemId,
        this.props.apiHost
      )

      await this.getOrder()
    } catch (e) {
      console.error('Error removing item', e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  async updateItemQuantity(itemId, quantity) {
    try {
      this.setState({ isLoading: true })

      await api.cart.updateItem(
        this.state,
        this.state.order.number,
        itemId,
        this.props.apiHost,
        quantity
      )

      await this.getOrder()
    } catch (e) {
      console.error('Error removing item', e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  async setPickup(itemId, quantity, pickUp) {
    try {
      this.setState({ isLoading: true })

      await api.cart.updateItem(
        this.state,
        this.state.order.number,
        itemId,
        this.props.apiHost,
        quantity,
        pickUp
      )

      await this.getOrder()
    } catch (e) {
      console.error('Error removing item', e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  dismissCouponError() {
    this.setState({ couponError: false })
  }

  async setCouponCode(code) {
    try {
      this.setState({ isLoading: true })

      await api.couponCodes.applyCoupon(
        this.state,
        this.state.order.number,
        code,
        this.props.apiHost
      )

      await this.getOrder()
    } catch (e) {
      this.setState({ couponError: true })
      console.error('Error applying coupon', e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  async addSuggestionItem(itemId) {
    try {
      this.setState({ isLoading: true })

      await api.cart.addItem(
        this.state,
        this.state.order.number,
        itemId,
        this.props.apiHost
      )

      await this.getOrder()
    } catch (e) {
      console.error('Error adding item', e)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { children } = this.props

    return (
      <ClientStateContext.Provider value={this.state}>
        {children}
      </ClientStateContext.Provider>
    )
  }
}

ClientStateProvider.propTypes = {
  apiHost: PropType.string.isRequired
}
