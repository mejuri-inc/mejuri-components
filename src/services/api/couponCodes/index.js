import fetchApi from '../connector'

export const applyCoupon = (state, number, code) => {
  return fetchApi(state, `/shop/api/orders/${number}/apply_coupon_code`, {
    method: 'PUT',
    data: {
      coupon_code: code
    }
  })
}
