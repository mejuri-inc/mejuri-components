export const posFilter = (pos) => (o) => {
  if ((pos && o.pos !== false) || typeof o.pos === 'undefined') return true

  return pos === o.pos
}

export const loggedInFilter = (loggedIn) => (o) =>
  loggedIn === o.loggedIn || typeof o.loggedIn === 'undefined'
