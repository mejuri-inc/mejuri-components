import axios from 'axios'
import humps from 'humps'
import get from 'lodash.get'

const fetchSession = async (MEJURI_API_HOST, url, config = {}, csrf) => {
  const { method = 'GET', data, ...rest } = config

  if (data) {
    data.authenticityToken = csrf
  }

  const options = {
    withCredentials: true,
    method,
    data: humps.decamelizeKeys(data),
    ...rest
  }

  try {
    return processResponse(await axios(`${MEJURI_API_HOST}${url}`, options))
  } catch (e) {
    throw humps.camelizeKeys(get(e, 'response.data')) || e
  }
}

const processResponse = (response) => {
  if (response.status > 299) throw response.data
  return humps.camelizeKeys(response.data)
}

export const checkEmail = (email, MEJURI_API_HOST, token) =>
  fetchSession(MEJURI_API_HOST, `/api/v1/user/exists/${email}`, {
    headers: { 'x-captcha-token': token }
  })

export const login = (data, MEJURI_API_HOST, token, csrf) =>
  fetchSession(
    MEJURI_API_HOST,
    `/api/v1/login`,
    {
      method: 'POST',
      data,
      headers: { 'x-captcha-token': token }
    },
    csrf
  )

export const register = (data, MEJURI_API_HOST, csrf) =>
  fetchSession(
    MEJURI_API_HOST,
    `/api/v1/register`,
    { method: 'POST', data },
    csrf
  )

export const resetPassword = (email, MEJURI_API_HOST) =>
  fetchSession(MEJURI_API_HOST, `/api/v1/reset-password`, {
    method: 'POST',
    data: { email }
  })
