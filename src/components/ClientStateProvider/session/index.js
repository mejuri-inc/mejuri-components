import { fetchSession } from '../connector'

export default function (state, apiHost) {
  return fetchSession(state, `${apiHost}/session_current`)
}
