import fetchSession from '../connector'

export default function (state) {
  return fetchSession(state, '/session_current')
}
