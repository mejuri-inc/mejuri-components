import { fetchApi } from '../../connector'
import get from 'lodash.get'

export const fetchOrder = (state, apiHost) => {
  const orderNumber = get(state, 'session.order.number')

  return fetchApi(state, `${apiHost}/shop/api/orders/${orderNumber}`)
}

export const removeItem = (state, number, itemId, apiHost) =>
  fetchApi(state, `${apiHost}/shop/api/orders/${number}/line_items/${itemId}`, {
    method: 'DELETE',
    data: {
      order_token: get(state, 'session.order.token')
    }
  })

export const updateItem = (
  state,
  number,
  itemId,
  apiHost,
  quantity = 1,
  pickUp = null
) => {
  if (quantity === 0) return removeItem(state, number, itemId)

  const lineItem = {
    quantity
  }
  if (pickUp) lineItem.pickUp = pickUp

  return fetchApi(
    state,
    `${apiHost}/shop/api/orders/${number}/line_items/${itemId}`,
    {
      method: 'PUT',
      data: {
        lineItem
      }
    }
  )
}

export const addItem = (state, orderNumber, itemId, apiHost) =>
  fetchApi(state, `${apiHost}/shop/api/orders/${orderNumber}/line_items`, {
    method: 'POST',
    data: {
      lineItem: {
        variantId: itemId,
        quantity: 1
      }
    }
  })

export const setCurrency = (state, currency, apiHost) =>
  fetchApi(state, `${apiHost}/shop/currency/set`, {
    method: 'POST',
    data: {
      currency: currency
    }
  })

export const fetchSuggestions = (state, apiHost) =>
  fetchApi(state, `${apiHost}/api/v1/cart/sample-cart-products`)
