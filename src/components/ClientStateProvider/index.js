import React from 'react'
import PropType from 'prop-types'
import getCurrentSession from './session'
import api from './api'
import get from 'lodash.get'
import { isCartEmpty } from './orderSelectors'
import { buildAmbassadorParams } from './ambassador'

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

    this.setWalkout = this.setWalkout.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.setCurrency = this.setCurrency.bind(this)
    this.setCouponCode = this.setCouponCode.bind(this)
    this.addSuggestionItem = this.addSuggestionItem.bind(this)
    this.updateItemQuantity = this.updateItemQuantity.bind(this)

    this.state = {
      session: { region: { availableCurrencies: [] } },
      cartOpened: false,
      couponError: false,
      mobileMenuOpened: false,
      mobileMenuToggle: () =>
        this.setState({ mobileMenuOpened: !this.state.mobileMenuOpened }),
      cartActions: {
        toggle: () => this.setState({ cartOpened: !this.state.cartOpened }),
        removeItem: this.removeItem,
        updateItemQuantity: this.updateItemQuantity,
        setWalkout: this.setWalkout,
        dismissCouponError: () => this.setState({ couponError: false }),
        setCouponCode: this.setCouponCode,
        addSuggestionItem: this.addSuggestionItem,
        setCurrency: this.setCurrency,
        onContinue: () => {
          if (typeof window !== 'undefined') {
            window.location = `${props.apiHost}/checkout`
          }
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
        () => this.getOrder()
      )
    } catch (e) {
      console.error('Error getting session', e)
    }
  }

  setOrder(order) {
    order &&
      this.setState(
        {
          order,
          cartItemsCount: calculateCartItemsCount(get(order, 'lineItems')),
          estimates: calculateEstimates(order),
          adjustments: calculateAdjustments(order)
        },
        () => {
          isCartEmpty(this.state) && this.loadSuggestions()
        }
      )
  }

  async getOrder() {
    let orderResponse = null
    try {
      orderResponse = await api.cart.fetchOrder(
        this.state,
        this.props.apiHost,
        buildAmbassadorParams()
      )
    } catch (e) {
      // If there was an error retry to the GET order endpoint (As if no discount).
      console.log('Error sending ambassador, retrying', e)
      try {
        orderResponse = await api.cart.fetchOrder(
          this.state,
          this.props.apiHost
        )
      } catch (e) {
        console.log('Error getting the order', e)
      }
    }

    this.setOrder(orderResponse)
  }

  async setCurrency(currency, cb) {
    try {
      this.setState({ isLoading: true })

      await api.cart.setCurrency(this.state, currency, this.props.apiHost)

      await this.getOrder()

      !!cb && cb()
    } catch (e) {
      console.error('Error setting currency', e)
    } finally {
      this.setState({ isLoading: false })
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

  async setWalkout(itemId, quantity, walkout) {
    try {
      this.setState({ isLoading: true })

      await api.cart.updateItem(
        this.state,
        this.state.order.number,
        itemId,
        this.props.apiHost,
        quantity,
        walkout
      )

      await this.getOrder()
    } catch (e) {
      console.error('Error removing item', e)
    } finally {
      this.setState({ isLoading: false })
    }
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

      const order = await api.cart.addItem(
        this.state,
        this.state.order.number,
        itemId,
        this.props.apiHost
      )

      this.setOrder(order)
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

ClientStateProvider.defaultProps = {
  apiHost: typeof window !== 'undefined' ? window.location.origin : ''
}

ClientStateProvider.propTypes = {
  apiHost: PropType.string
}
