import fetchSession from '../connector'

export const checkEmail = (email) =>
  fetchSession(`/api/v1/user/exists/${email}`)
export const login = (data) =>
  fetchSession('/api/v1/login', { method: 'POST', data })
export const register = (data) =>
  fetchSession('/api/v1/register', { method: 'POST', data })
export const resetPassword = (email) =>
  fetchSession('/api/v1/reset-password', { method: 'POST', data: { email } })
