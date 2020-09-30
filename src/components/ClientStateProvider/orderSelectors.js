import get from 'lodash.get'

export const isCartEmpty = (state) => {
  const lineItems = get(state, 'order.lineItems')
  return lineItems && lineItems.length
}
