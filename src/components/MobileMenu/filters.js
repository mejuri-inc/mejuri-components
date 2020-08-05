export const posFilter = (pos) => (o) =>
  // PDP handles no pos as null, CMS does it as undefined
  pos === o.pos || typeof o.pos === 'undefined' || pos === null

export const loggedInFilter = (loggedIn) => (o) =>
  loggedIn === o.loggedIn || typeof o.loggedIn === 'undefined'
