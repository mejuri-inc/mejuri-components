import fetchApi from '../connector'
import get from 'lodash.get'

export const fetchOrder = (state, number) =>
  fetchApi(state`/shop/api/orders/${number}`)

export const removeItem = (state, number, itemId) =>
  fetchApi(state, `/shop/api/orders/${number}/line_items/${itemId}`, {
    method: 'DELETE',
    data: {
      order_token: get(state, 'session.order.token')
    }
  })

export const updateItem = (
  state,
  number,
  itemId,
  quantity = 1,
  pickUp = null
) => {
  if (quantity === 0) return removeItem(state, number, itemId)

  const lineItem = {
    quantity
  }
  if (pickUp) lineItem.pickUp = pickUp

  return fetchApi(state, `/shop/api/orders/${number}/line_items/${itemId}`, {
    method: 'PUT',
    data: {
      lineItem
    }
  })
}

export const addItem = (state, orderNumber, itemId) => {
  return fetchApi(state, `/shop/api/orders/${orderNumber}/line_items`, {
    method: 'POST',
    data: {
      lineItem: {
        variantId: itemId,
        quantity: 1
      }
    }
  })
}

export const fetchSuggestions = (state) =>
  fetchApi(state, '/api/v1/cart/sample-cart-products')
