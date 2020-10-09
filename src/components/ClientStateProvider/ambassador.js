export function buildAmbassadorParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const mbsy = urlParams.get('mbsy')
  const mbsySource = urlParams.has('mbsy_source')

  return mbsy && mbsySource
    ? {
        method: 'PUT',
        data: { order: { mbsy } }
      }
    : {}
}
