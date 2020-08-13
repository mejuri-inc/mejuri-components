/* eslint-disable no-useless-catch */
import * as contentful from 'contentful'

export class ContentfulAPI {
  constructor({
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT,
    contentfulApiHost,
    contentfulPreviewApiHost,
    locale
  }) {
    this.querySysAttributes = ['id']
    this.queryRootAttributes = ['locale', 'include', 'limit', 'order', 'skip']
    this.excludedAttributes = [/^_/]
    this.includedAttributes = ['_id', '_locale', '_contentType']
    this.spaceId = CONTENTFUL_SPACE_ID
    this.host = contentfulApiHost
    this.accessToken = CONTENTFUL_ACCESS_TOKEN
    this.environment = CONTENTFUL_ENVIRONMENT || 'master'
    this.locale = locale || 'en-US'

    this.previewAccessToken = CONTENTFUL_PREVIEW_ACCESS_TOKEN
    this.contentfulPreviewApiHost = contentfulPreviewApiHost
  }

  setPreviewMode() {
    // previewMode should never change in the context of a request
    this.host = this.contentfulPreviewApiHost
    this.accessToken = this.previewAccessToken
    return this
  }

  setLocale(locale) {
    this.locale = locale
    return this
  }

  getClient(options = {}) {
    const {
      space = this.spaceId,
      host = this.host,
      accessToken = this.accessToken,
      environment = this.environment,
      ...rest
    } = options
    return contentful.createClient({
      space,
      accessToken,
      host,
      environment,
      ...rest
    })
  }

  async getLookBookPages(queryOptions) {
    try {
      const looks = await this.getContentType('lookPage', queryOptions)
      return looks
    } catch (e) {
      throw e
    }
  }

  async getPage(slug, queryOptions = {}) {
    try {
      const looks = await this.getContentType('modularPage', {
        slug,
        ...queryOptions
      })
      return looks
    } catch (e) {
      throw e
    }
  }

  async getLocales() {
    try {
      return await this.getClient().getLocales()
    } catch (e) {
      throw e
    }
  }

  async getContentType(type, queryOptions = {}) {
    const { client = this.getClient(), ...rest } = queryOptions
    const currentLocale = this.locale
    const query = this.formatQuery(rest)
    try {
      const args = { content_type: type, locale: currentLocale, ...query }
      if (!process.browser)
        console.log('[Contentful] Request:', JSON.stringify(args))
      const response = await client.getEntries(args)
      return this.formatResponse(response)
    } catch (e) {
      throw e
    }
  }

  formatQuery(queryOptions = {}) {
    const formatted = {}
    for (const key in queryOptions) {
      let prefix = 'fields.'
      if (this.querySysAttributes.includes(key)) {
        prefix = 'sys.'
      } else if (this.queryRootAttributes.includes(key)) {
        prefix = ''
      }

      formatted[`${prefix}${key}`] = queryOptions[key]
    }

    return formatted
  }

  formatResponse(response = {}) {
    const { items = [] } = response
    const formattedResponse = items.map((item) =>
      this.formatResponseLevel(item)
    )
    return formattedResponse
  }

  matchesPattern(patterns, str) {
    let matches = false
    if (patterns && patterns.length) {
      for (const pattern of patterns) {
        if (pattern instanceof RegExp) {
          matches = pattern.test(str)
        } else {
          matches = str === pattern
        }
        if (matches) break
      }
    }
    return matches
  }

  isValidAttribute(key) {
    const excluded = this.matchesPattern(this.excludedAttributes, key)
    const included = this.matchesPattern(this.includedAttributes, key)
    return !(excluded && !included)
  }

  // isValidAttributeForType(key,type){
  //   return true
  // }

  // PARSE CONTENTFUL RESPONSE ITEM
  formatResponseLevel(item = {}) {
    if (typeof item !== 'object') return item
    if (!item.sys && !item.fields) return item
    const { sys = {}, fields = {} } = item

    const formatted = {}

    // Ugly solution for circular relation in related relatedEdits
    // Needs a refactor
    if (
      sys &&
      sys.contentType &&
      sys.contentType.sys &&
      sys.contentType.sys.id === 'relatedEdits'
    ) {
      if (fields && fields.styles && Array.isArray(fields.styles)) {
        fields.styles = fields.styles.map((el) => {
          if (el && el.fields && el.fields.modules) {
            delete el.fields.modules
          }
          return el
        })
      }
    }

    // COPY SYS ATTRIBUTES
    for (const key in sys) {
      const prefixedKey = `_${key}`
      if (this.isValidAttribute(prefixedKey)) {
        const value = sys[key]
        formatted[prefixedKey] = this.formatResponseValue(value)
      }
    }

    // COPY FIELDS ATTRIBUTES
    for (const key in fields) {
      if (this.isValidAttribute(key)) {
        const value = fields[key]
        formatted[`${key}`] = this.formatResponseValue(value)
      }
    }

    return formatted
  }

  // IF VALUE IS AN ARRAY OR OBJECT
  // PARSE THE NEXT LEVEL
  formatResponseValue(value) {
    let formatted = value
    if (Array.isArray(value)) {
      formatted = value.map((item) => this.formatResponseLevel(item))
    } else if (typeof value === 'object') {
      // AVOID FORMATTING RICH TEXT
      if (!(value.nodeType && value.nodeType === 'document')) {
        formatted = this.formatResponseLevel(value)
      }
    }
    return formatted
  }

  async getNotificationBars(localeCode) {
    try {
      const client = this.getClient()
      const result = await client.getEntries({
        content_type: 'notificationBar',
        locale: localeCode || this.locale
      })
      const filtered = result.items.filter(
        (n) =>
          !n.fields.exclusiveLocales ||
          (n.fields.exclusiveLocales &&
            n.fields.exclusiveLocales.find((l) => l === localeCode))
      )
      return filtered
    } catch (e) {
      console.log(e)
    }
  }

  async getMobileMenu(localeCode) {
    try {
      const client = this.getClient()
      const response = await client.getEntries({
        content_type: 'menuConfiguration',
        'fields.text': 'global-mobile-menu',
        include: 3,
        locale: localeCode || this.locale
      })
      return this.formatResponse(response)
    } catch (e) {
      console.log(e)
    }
  }
}

// const singleton = new ContentfulAPI()
// export function getSingleton()
