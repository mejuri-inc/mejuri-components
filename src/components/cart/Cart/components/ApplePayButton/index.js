import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'

export class ApplePayButton extends React.PureComponent {
  state = {
    applePayEnabled: false,
    lineItems: []
  }

  constructor (props) {
    super(props)
    this.handleApplePayClicked = this.handleApplePayClicked.bind(this)
  }

  componentDidMount() {
    this.applePayInit()
  }

  applePayInit() {
    const { applePayKey, trackEvent } = this.props

    if (!applePayKey) return

    if (window.Stripe) {
      Stripe.setPublishableKey(applePayKey)
      Stripe.applePay.checkAvailability((applePayEnabled) => {
        trackEvent('applePayEnabled', { enabled: applePayEnabled })
        this.setState({ applePayEnabled })
      })
    } else {
      console.error('ApplePay: Could not initialize. Stripe service missing.')
    }
  }

  buildTotal(lineItems, taxValue) {
    let totalLineItems = this.buildLineItems(lineItems, taxValue).reduce((a, lineItem) => a + (parseFloat(lineItem.amount) || 0), 0)

    return {
      label: 'Mejuri',
      amount: totalLineItems.toFixed(2)
    }
  }

  buildLineItems(lineItems, taxValue) {
    let includedTaxLabel = this.taxesIncludedInPrice() ? '(Incl GST) ' : ''
    let lineItemsObj = lineItems.map(lineItem => (
      {
        type: 'final',
        label: `${includedTaxLabel}${lineItem.quantity} X ${lineItem.accurateName}`,
        amount: (parseFloat(lineItem.price) * parseFloat(lineItem.quantity)).toFixed(2)
      }
    ))

    let lineItemAdjustments = this.props.order.lineItemAdjustments.map(lineItemAdjustment => (
      {
        type: 'final',
        label: lineItemAdjustment.label,
        amount: lineItemAdjustment.amount
      }
    ))
    lineItemsObj.push(...lineItemAdjustments)

    let tax = {
      type: 'final',
      label: 'Tax',
      amount: taxValue
    }
    lineItemsObj.push(tax)

    return lineItemsObj
  }

  taxesIncludedInPrice() {
    return parseFloat(this.props.order.includedTaxTotal) > 0
  }

  async handleApplePayClicked () {

    const { lineItems, order, makeApplePayPayment, calculateTaxes, trackEvent } = this.props
    if (!order) {
      return;
    }

    const orderNumber = order.number
    let orderShippingMethods = []
    if (order.shipments[0]) {
      orderShippingMethods = order.shipments[0].shippingMethods.map(shippingMethod => (
        {
          label: shippingMethod.name,
          detail: `${shippingMethod.name} shipping`,
          identifier: shippingMethod.id,
          amount: order.shipments[0].shippingRates.find(r => r.shippingMethodId === shippingMethod.id).cost
        }
      ))
    }

    const paymentRequest = {
      shippingMethods: orderShippingMethods,
      shippingType: 'shipping',
      requiredShippingContactFields: ["postalAddress", "name", "phone", "email"],
      countryCode: 'US',
      currencyCode: order.currency,
      lineItems: this.buildLineItems(lineItems, this.props.order.taxTotal),
      total: this.buildTotal(lineItems, this.props.order.taxTotal)
    };

    // TrackerHub.event('cart/apple-pay/clicked')
    trackEvent('applePayClicked')

    const session = window.Stripe && Stripe.applePay.buildSession(paymentRequest, (result, completion) => {
      const orderData = {
        address: {
          addressLine: result.shippingContact.addressLines[0],
          apartment: result.shippingContact.addressLines[1],
          firstName: result.shippingContact.givenName,
          lastName: result.shippingContact.familyName,
          city: result.shippingContact.locality,
          state: result.shippingContact.administrativeArea,
          country: result.shippingContact.countryCode,
          zipcode: result.shippingContact.postalCode
        },
        shipping_method_id: parseInt(this.state.selectedShippingMethod),
        email: result.shippingContact.emailAddress,
        phone: result.shippingContact.phoneNumber,
        token: result.token.id
      }

      makeApplePayPayment(
        orderNumber,
        orderData,
        () => completion(ApplePaySession.STATUS_SUCCESS),
        (error) => {
          trackEvent('applePayPaymentError', { error })
          completion(ApplePaySession.STATUS_FAILURE)
        }
      )
    });

    session.onshippingmethodselected = (event) => {
      let lineItems = this.state.lineItems
      let shippingOptionIndex = lineItems.findIndex(item => item.label.includes('shipping'))

      lineItems[shippingOptionIndex] = {
        type: 'final',
        label: `${event.shippingMethod.label} shipping`,
        amount: event.shippingMethod.amount
      }
      let total = {
        label: 'Mejuri',
        amount: lineItems.reduce((a, lineItem) => a + (parseFloat(lineItem.amount) || 0), 0).toFixed(2)
      }
      this.setState({ lineItems: lineItems, selectedShippingMethod: event.shippingMethod.identifier })
      session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS, total, lineItems)
    }

    session.onshippingcontactselected = (event) => {
      let address = {
        country: event.shippingContact.countryCode,
        state: event.shippingContact.administrativeArea,
        city: event.shippingContact.locality,
        zipcode: event.shippingContact.postalCode,
      }

      calculateTaxes(
        orderNumber,
        { address: address },
        (data) => {
          let lineItems = data.lineItems;
          let total = {
            label: 'Mejuri',
            amount: data.lineItems.reduce((a, lineItem) => a + (parseFloat(lineItem.amount) || 0), 0).toFixed(2)
          }

          let selectedShippingMethod = null
          try {
            selectedShippingMethod = data.shippingMethods[0].identifier
          } catch(e) {}


          this.setState({ lineItems, selectedShippingMethod })

          session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, data.shippingMethods, total, lineItems)
        },
        (error) => {
          let lineItems = this.buildLineItems(this.props.lineItems, 0)
          let total = this.buildTotal(lineItems, 0)
          trackEvent('applePayTaxesError', { error })
          console.error("Uncompleted apple pay payment", error)
          session.completeShippingContactSelection(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS, [], total, lineItems)
        })
    }
    session.begin();
  }

  render() {
    const { applePayEnabled } = this.state

    if (!applePayEnabled) {
      return null
    }

    return (
      <div>
        <Wrapper  onClick={() => this.handleApplePayClicked()}>
          <div className="apple-pay-button" >
            <img />
          </div>
        </Wrapper>
      </div>
    )
  }
}

ApplePayButton.defaultProps = {
  trackEvent: (eventName, context) => { console.error("ApplePayButton: missing trackEvent property")}
}

ApplePayButton.propTypes = {
  order: PropTypes.object,
  applePayKey: PropTypes.string,
  trackEvent: PropTypes.func,
  makeApplePayPayment: PropTypes.func,
  calculateTaxes: PropTypes.func
}

export default ApplePayButton
