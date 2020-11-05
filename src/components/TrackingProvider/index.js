/* global analytics */
/* global Sailthru */
import {
  mapLineItems,
  mapLineItem,
  parseLineItemToSailthruSchema
} from './mappings'
import { lists } from './sailthru'

function getAnalytics() {
  return typeof analytics !== 'undefined'
    ? analytics
    : {
        track: (eventName) =>
          console.log(
            `Trying to track: ${eventName} but analytics does not exist.`
          ),
        identify: () =>
          console.log('Trying to identify but analytics does not exist.')
      }
}

function sailthruInScope() {
  return typeof window !== 'undefined' && window.Sailthru
}

const tracking = {
  // Header.
  headerClick: (context) =>
    getAnalytics().track('Top Nav Clicked', {
      target: context.target,
      category: 'Top Nav'
    }),

  // Search bar.
  searchMade: (context) =>
    getAnalytics().track('Products Searched', {
      query: context.query,
      category: 'Products'
    }),
  searchOpen: () =>
    getAnalytics().track('Products Search Opened', { category: 'Search' }),
  searchClose: () =>
    getAnalytics().track('Products Search Closed', { category: 'Search' }),

  // User sign up / sign in
  userSignIn: (user) =>
    getAnalytics().identify(user.uuid, {
      name: user.name,
      email: user.email
    }),
  userSignUp: (user) => {
    getAnalytics().identify(user.uuid, {
      name: user.name,
      email: user.email
    })
  },
  identify: (user) =>
    getAnalytics().identify(null, {
      name: user.name,
      email: user.email
    }),

  // Register form.
  signUp: (user, subscribe = false) =>
    sailthruInScope() &&
    Sailthru.integration('userSignUp', {
      email: user && user.email,
      name: user && user.name,
      lists: subscribe ? lists : {},
      vars: {
        sign_up_date: new Date(Date.now()).toISOString().split('T')[0],
        first_name: user && user.name && user.name.split(' ')[0]
      },
      source: 'web'
    }),

  // Footer Newsleter.
  subscribeNewsletter: (context) => {
    if (!context || !context.email) return
    getAnalytics().track('Add To Newsletter', {
      email: context.email,
      category: 'Footer'
    })
  },

  // Cart.
  cartView: (order) =>
    order &&
    getAnalytics().track('Cart Viewed', {
      cart_id: order.number,
      products: mapLineItems(order.lineItems),
      category: 'Cart'
    }),

  cartAddProduct: (order, context, user) => {
    if (!order) return
    // Segment.
    getAnalytics().track('Product Added', {
      ...mapLineItem(context.lineItem),
      quantity: context.quantity
    })

    // Sailthru.
    const itemsInCart = order.lineItems.map((i) =>
      parseLineItemToSailthruSchema(i, context)
    )
    const values = {
      email: user?.email || null,
      items: itemsInCart.filter((i) => i.qty > 0)
    }
    user &&
      order &&
      sailthruInScope() &&
      Sailthru.integration('addToCart', values)
  },

  cartDecrementProduct(order, context, user) {
    if (!order) return

    // Segment.
    getAnalytics().track('Product Removed', {
      ...mapLineItem(context.lineItem),
      quantity: context.quantity
    })

    // Sailthru
    const itemsInCart = order.lineItems.map((i) =>
      parseLineItemToSailthruSchema(i, context)
    )

    const values = {
      email: user?.email || null,
      items: itemsInCart.filter((i) => i.qty > 0)
    }
    user &&
      order &&
      sailthruInScope() &&
      Sailthru.integration('addToCart', values)
  },

  cartGoToCheckout(orderNumber) {
    if (!orderNumber) return
    analytics.track('Cart Redirected to Checkout', {
      order_number: orderNumber,
      category: 'Cart'
    })
  },

  // ApplePay.
  applePayEnabled(orderNumber) {
    getAnalytics().track('Apple Pay Enabled', {
      category: 'Apple Pay',
      action: 'Enabled',
      label: 'Order: ' + orderNumber,
      properties: {
        nonInteraction: 1
      }
    })
  },

  applePayClick(orderNumber) {
    getAnalytics().track('Apple Pay Clicked', {
      category: 'Apple Pay',
      action: 'Click',
      label: 'Order: ' + orderNumber
    })
  },

  applePayPaymentError(orderNumber, context) {
    getAnalytics().track('Apple Pay Error', {
      category: 'Apple Pay',
      action: 'Payment Error',
      label: 'Order: ' + orderNumber + ' , error: ' + context.error
    })
  },

  applePayTaxesError(orderNumber, context) {
    getAnalytics().track('Apple Pay Error', {
      category: 'Apple Pay',
      action: 'Calculate Taxes Error',
      label: 'Order: ' + orderNumber + ' , error: ' + context.error
    })
  }
}

// To keep compatibility with TrackerHub.
// Prefer to use simple functions passed as props for new implementations instead of this function.
function selectTrackingByName(name, ...args) {
  if (!tracking[name]) {
    console.log(
      'Trying to track an unnexistent event in TrackingProvider',
      name
    )
  }
  tracking[name](...args)
}

function TrackingProvider({ children }) {
  return children({
    selectTrackingByName,
    ...tracking
  })
}

export { default as UserIdentifier } from './UserIdentifier'
export default TrackingProvider
