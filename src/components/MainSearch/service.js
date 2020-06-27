import algoliasearch from 'algoliasearch'
import humps from 'humps'

export default function AlgoliaService(
  algoliaApp,
  algoliaKey,
  index,
  hitsPerPage
) {
  this.client = algoliasearch(algoliaApp, algoliaKey)
  this.index = this.client.initIndex(index)
  this.hitsPerPage = hitsPerPage || 20

  this.search = function (query, config = { offset: 0 }) {
    return new Promise((resolve, reject) => {
      this.index
        .search(query, {
          hitsPerPage: this.hitsPerPage,
          length: this.hitsPerPage, // Two different params are needed depending on offset present or not.
          ...config
        })
        .then(({ hits, nbHits }) => {
          const results = hits || []
          resolve({
            results: this.parseResults(results),
            count: nbHits
          })
        })
        .catch((e) => {
          reject(e)
        })
    })
  }.bind(this)

  this.parseResults = function (list) {
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
}
