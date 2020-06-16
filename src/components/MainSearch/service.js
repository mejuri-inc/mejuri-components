import algoliasearch from 'algoliasearch'
import humps from 'humps'
const ALGOLIA_APP = process.env.NEXT_PUBLIC_ALGOLIA_APP
const ALGOLIA_KEY = process.env.NEXT_PUBLIC_ALGOLIA_KEY
const ALGOLIA_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX

export default (() => {
  let client = null
  let index = null
  let hitsPerPage = 20

  const parseResults = (list) => {
    const prods = list.map((item) => {
      const prod = {
        ...item,
        path: `/shop/products/${item.slug}`,
        image: item.main_image
      }
      delete prod.main_image

      return prod
    })

    return humps.camelizeKeys(prods)
  }

  return {
    init: (config = { offset: 0 }) => {
      client = algoliasearch(ALGOLIA_APP, ALGOLIA_KEY)
      if (client) index = client.initIndex(ALGOLIA_INDEX)

      if (config.hitsPerPage) hitsPerPage = config.hitsPerPage
    },
    search: (query, config = {}) =>
      new Promise((resolve, reject) => {
        index
          .search(query, {
            hitsPerPage: hitsPerPage,
            length: hitsPerPage, // Two different params are needed depending on offset present or not.
            ...config
          })
          .then(({ hits, nbHits }) => {
            const results = hits || []
            resolve({
              results: parseResults(results),
              count: nbHits
            })
          })
          .catch((e) => {
            reject(e)
          })
      })
  }
})()
