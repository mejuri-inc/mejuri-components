import fetchApi from '../connector'
import get from 'lodash.get'

export const fetchOrder = (state, number) => {
  const orderNumber = number || get(state, 'session.order.number')
  return fetchApi(state, `/shop/api/orders/${orderNumber}`)
}
