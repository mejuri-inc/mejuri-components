import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import humps from 'humps'
import ApplePayButton from 'components/cart/Cart/components/ApplePayButton'

const fetchSettings = (orderToken, orderId) => {
  return axios(`/api/v2/settings`, {
    auth: false,
    headers: { 'X-Spree-Order-Token': orderToken },
    params: { order_number: orderId },
    withCredentials: true
  })
}

const makeApplePayPayment = (orderNumber, orderToken, orderData, csrfToken) => {
  return axios(`/api/v2/orders/apple_pay_payments`, {
    method: 'POST',
    headers: { 'X-Spree-Order-Token': orderToken, 'X-CSRF-Token': csrfToken },
    data: {
      order_number: orderNumber,
      order: orderData
    },
    withCredentials: true
  })
}

const payment = (orderToken, csrfToken) =>
  function (orderNumber, orderData, callback, onError) {
    makeApplePayPayment(orderNumber, orderToken, orderData, csrfToken)
      .then(() => {
        callback()
        window.location.href =
          '/shop/orders/' + orderNumber + '?token=' + orderToken
      })
      .catch((e) => onError(e))
  }

const calculateTaxes = (orderToken) =>
  function calculateTaxes(orderNumber, orderData, callback, onError) {
    return axios(`/api/v2/orders/calculate_taxes`, {
      method: 'POST',
      headers: { 'X-Spree-Order-Token': orderToken },
      data: {
        order_number: orderNumber,
        order: orderData
      }
    })
      .then((d) => {
        callback(humps.camelizeKeys(d.data))
      })
      .catch((e) => onError(e))
  }

export default function ApplePay({
  orderToken,
  csrfToken,
  order,
  trackEvent,
  settings
}) {
  const [settingsData, setSettingsData] = useState(settings)
  useEffect(() => {
    if (!settingsData) {
      fetchSettings(orderToken, order.number).then((r) =>
        setSettingsData(r.status === 200 ? r.data : {})
      )
    }
  }, [])

  if (!settingsData) return null

  return (
    <ApplePayButton
      order={order}
      lineItems={order.lineItems}
      applePayKey={settingsData.apple_pay}
      trackEvent={trackEvent}
      calculateTaxes={calculateTaxes(orderToken)}
      makeApplePayPayment={payment(orderToken, csrfToken)}
      data-h='cart-apple-pay-btn'
    />
  )
}

ApplePay.defaultProps = {
  settings: null
}

ApplePay.propTypes = {
  orderToken: PropTypes.string,
  csrfToken: PropTypes.string,
  order: PropTypes.object,
  trackEvent: PropTypes.func,
  settings: PropTypes.object
}
