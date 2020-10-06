import { useEffect } from 'react'
// When user changes try to identify it.
export default function UserIdentifier({ user, sessionId, identifyFunction }) {
  const storageKey = 'mj-session-identifier'
  const short = (t) => t.slice(0, 8)
  useEffect(() => {
    if (user && sessionId) {
      const current = short(sessionId)
      const stored = localStorage.getItem(storageKey)
      if (current !== stored) {
        identifyFunction(user)
        localStorage.setItem(storageKey, current)
      }
    }
  }, [user, sessionId])

  return null
}

UserIdentifier.defaultProps = {
  user: null,
  identifyFunction: () =>
    console.log('identifyFunction prop missing in <UserIdentifier />')
}
