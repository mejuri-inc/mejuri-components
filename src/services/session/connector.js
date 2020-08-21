import axios from 'axios'
import humps from 'humps'
import { MEJURI_API_HOST } from 'config/client-env'
import { selectCsrf } from 'services/session/sessionSelectors'
import get from 'lodash.get'

const path = (url) => `${MEJURI_API_HOST}${url}`

const fetchSession = async (state, url, config = {}) => {
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
    return processResponse(await axios(path(url), options))
  } catch (e) {
    throw humps.camelizeKeys(get(e, 'response.data')) || e
  }
}

const processResponse = (response) => {
  if (response.status > 299) throw response.data
  return humps.camelizeKeys(response.data)
}

export default fetchSession
