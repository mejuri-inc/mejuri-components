import axios from 'axios'
import humps from 'humps'
import { selectCsrf, selectTokenHeaders } from './sessionSelectors'
import get from 'lodash.get'

export const fetchSession = async (state, url, config = {}) => {
  const { method = 'GET', data, ...rest } = config

  if (data) {
    const csrf = selectCsrf(state)
    data.authenticityToken = csrf
  }

  const options = {
    withCredentials: true,
    method,
    data: humps.decamelizeKeys(data),
    ...rest
  }

  try {
    return processResponse(await axios(url, options))
  } catch (e) {
    throw humps.camelizeKeys(get(e, 'response.data')) || e
  }
}

export const fetchApi = async (state, url, config = {}) => {
  const tokenHeaders = selectTokenHeaders(state)

  const { headers, method = 'GET', data, ...rest } = config

  const newHeaders = {
    ...tokenHeaders,
    ...headers
  }

  const options = {
    withCredentials: true,
    method,
    headers: newHeaders,
    data: humps.decamelizeKeys(data),
    ...rest
  }

  try {
    return processResponse(await axios(url, options))
  } catch (e) {
    throw humps.camelizeKeys(get(e, 'response.data')) || e
  }
}

const processResponse = (response) => {
  if (response.status > 299) throw response.data
  return humps.camelizeKeys(response.data)
}
