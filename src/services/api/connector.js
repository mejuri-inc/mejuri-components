import axios from 'axios'
import humps from 'humps'
import { MEJURI_API_HOST } from 'config/client-env'
import { selectTokenHeaders } from 'services/session/sessionSelectors'
import get from 'lodash.get'

export const path = (url) => `${MEJURI_API_HOST}${url}`

const fetchApi = async (state, url, config = {}) => {
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
    return processResponse(await axios(path(url), options))
  } catch (e) {
    throw humps.camelizeKeys(get(e, 'response.data')) || e
  }
}

function processResponse(response) {
  if (response.status > 299) throw response.data
  return humps.camelizeKeys(response.data)
}

export default fetchApi
