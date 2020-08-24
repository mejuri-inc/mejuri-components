import get from 'lodash.get'

export const selectCsrf = (state) => get(state, 'session.csrf')

export const selectUserToken = (state) => get(state, 'session.user.token')

export const selectPos = (state) => get(state, 'session.pos')

export const isPos = (state) => !!selectPos(state)

export const selectUser = (state) => get(state, 'session.user')

export const selectUserName = (state) => get(state, 'session.user.name')

export const selectUserEmail = (state) => get(state, 'session.user.email')

export const selectSessionId = (state) => get(state, 'session.sessionId')

export const isGuest = (state) => !selectUser(state)

export const selectTestsConfig = (state) => get(state, 'session.testsConfig')

export const selectOrderToken = (state) => get(state, 'session.order.token')

export const selectOrderNumber = (state) => get(state, 'session.order.number')

export const selectSegmentAnonymousId = (state) =>
  get(state, 'session.segmentAnonymousId')

export const selectAnalyticsClientId = (state) =>
  get(state, 'session.analyticsClientId')

export const selectGaCookie = (state) => get(state, 'session.gaCookie')

export const selectOrderTokenHeader = (state) => ({
  'X-Spree-Order-Token': selectOrderToken(state)
})

export const selectTokenHeaders = (state) => {
  const userToken = selectUserToken(state)
  const orderToken = selectOrderToken(state)
  const anonymousId = selectSegmentAnonymousId(state)
  const analyticsClientId = selectAnalyticsClientId(state)
  const csrfToken = selectCsrf(state)

  return {
    ...(!!userToken && { 'X-Spree-Token': userToken }),
    ...(!!orderToken && { 'X-Spree-Order-Token': orderToken }),
    ...(!!anonymousId && { 'X-Segment-Anonymous-Id': anonymousId }),
    ...(!!analyticsClientId && { 'X-Analytics-Client-Id': analyticsClientId }),
    ...(!!csrfToken && { 'X-CSRF-Token': csrfToken })
  }
}
