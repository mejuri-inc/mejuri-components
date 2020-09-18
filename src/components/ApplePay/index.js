import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ApplePayButton from 'components/cart/Cart/components/ApplePayButton'

const fetchSettings = (orderToken, orderId) => {
  return axios(`/api/v2/settings`, {
    auth: false,
    headers: { 'X-Spree-Order-Token': orderToken },
    params: { order_number: orderId },
    withCredentials: true
  })
}

const makeApplePayPayment = (orderNumber, orderToken, orderData) => {
  return axios(
    `/api/v2/orders/apple_pay_payments`,
    {
      method: 'POST',
      headers: { 'X-Spree-Order-Token': orderToken },
      data: {
        order_number: orderNumber,
        order: orderData
      },
      withCredentials: true
    },
    false
  )
}

const payment = async (
  orderNumber,
  orderToken,
  orderData,
  callback,
  onError
) => {
  try {
    await makeApplePayPayment(orderNumber, orderToken, orderData)
    callback()
    window.location.href =
      '/shop/orders/' + orderNumber + '?token=' + orderToken
  } catch (error) {
    onError(error)
  }
}

const calculateTaxes = (orderToken) => (orderNumber, orderData) => {
  return axios(`/api/v2/orders/calculate_taxes`, {
    method: 'POST',
    headers: { 'X-Spree-Order-Token': orderToken },
    data: {
      order_number: orderNumber,
      order: orderData
    }
  })
}

export default function ApplePay({ orderToken, order, trackEvent }) {
  const [settings, setSettings] = useState({})
  useEffect(() => {
    async function fetchData() {
      const response = await fetchSettings(orderToken, order.number)
      return response.data
    }
    const data = fetchData()
    setSettings(data)
  }, [])
  return (
    <ApplePayButton
      order={order}
      lineItems={order.line_items}
      applePayKey={settings.apple_pay}
      trackEvent={trackEvent}
      calculateTaxes={calculateTaxes(orderToken)}
      makeApplePayPayment={payment}
      data-h='cart-apple-pay-btn'
    />
  )
}
