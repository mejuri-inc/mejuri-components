import { fetchApi } from '../../connector'

export const applyCoupon = (state, number, code, apiHost) => {
  return fetchApi(
    state,
    `${apiHost}/shop/api/orders/${number}/apply_coupon_code`,
    {
      method: 'PUT',
      data: {
        coupon_code: code
      }
    }
  )
}
