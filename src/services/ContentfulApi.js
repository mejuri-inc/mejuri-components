/* eslint-disable no-useless-catch */
// Dependencies
import * as contentful from 'contentful'
import { Cloudinary } from 'cloudinary-core'

/**
@class ContentfulAPI
*/

export class ContentfulAPI {
  constructor({
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT,
    contentfulApiHost,
    contentfulPreviewApiHost,
    locale,
    cloudinaryCloudName
  }) {
    this.querySysAttributes = ['id']
    this.queryRootAttributes = ['locale', 'include', 'limit', 'order', 'skip']
    this.excludedAttributes = [/^_/]
    this.includedAttributes = ['_id', '_locale', '_contentType']
    this.spaceId = CONTENTFUL_SPACE_ID
    this.host = contentfulApiHost
    this.accessToken = CONTENTFUL_ACCESS_TOKEN
    this.environment = CONTENTFUL_ENVIRONMENT || 'master'
    this.localeCode = locale || 'en-US'
    this.cloudinaryCloudName = cloudinaryCloudName || 'mejuri-com'
    this.previewAccessToken = CONTENTFUL_PREVIEW_ACCESS_TOKEN
    this.contentfulPreviewApiHost = contentfulPreviewApiHost
    this.cloudinaryImagesOptions = {}
    this.defaultQuery = {
      include: 10
    }
  }

  setPreviewMode() {
    // previewMode should never change in the context of a request
    this.host = this.contentfulPreviewApiHost
    this.accessToken = this.previewAccessToken
    return this
  }

  setLocale(localeCode) {
    this.localeCode = localeCode
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

  async getComponents(queryOptions) {
    try {
      const { referenceId, ...query } = queryOptions
      let components = await this.getContentType('componentGeneric', query)
      if (referenceId && components && components.length > 0) {
        components = [this.findComponentNode(components[0], referenceId)]
      }
      return components
    } catch (e) {
      throw e
    }
  }

  async getPage(slug, queryOptions = {}) {
    try {
      const looks = await this.getContentType('modularPage', {
        slug,
        include: 4,
        ...queryOptions
      })
      return looks
    } catch (e) {
      throw e
    }
  }

  async getPageGeneric(queryOptions = {}) {
    try {
      const pages = await this.getContentType('pageGeneric', queryOptions)
      return pages
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

  /*
    Use this method for fetching specific content types.
    It will parse query options and contentful response.
  */
  async getContentType(type, queryOptions = {}) {
    const { client = this.getClient(), ...rest } = queryOptions
    const currentLocale = this.localeCode
    const query = this.formatQuery({ ...this.defaultQuery, ...rest })
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
    const formattedResponse = items.map((item) => {
      const formatted = this.formatResponseLevel(item)
      return formatted
    })
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

    let formatted = {}

    // Ugly fix start ------------------------------------------------------------
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
    // Ugly fix end -------------------------------------------------------------

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

    // PARSE COMPONENT GENERIC DATA
    if (
      formatted._contentType &&
      formatted._contentType._id === 'componentGeneric'
    ) {
      formatted = this.formatComponentData(formatted)
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

  /*
    Format "componentGeneric" content type.
    Linking data and formatting data from types as "imageGeneric"
  */
  formatComponentData({ data: component, linkedEntries = [] }) {
    const components = component.data.components
    const componentGroups = component.data.componentGroups

    // Go down one level
    if (components && Array.isArray(components)) {
      component.data.components = components.map((component) =>
        this.formatComponentData({ data: component, linkedEntries })
      )
    }

    // Go down one level from grid
    if (componentGroups && Array.isArray(componentGroups)) {
      component.data.componentGroups = componentGroups.map((group) => {
        group.components = group.components.map((component) =>
          this.formatComponentData({ data: component, linkedEntries })
        )
        return group
      })
    }

    // Parse linked data
    if (component.data.entryId) {
      component.data = linkedEntries.find((entry) => {
        return entry._id === component.data.entryId
      })
    }

    // Parse cloudinary data
    if (component.type === 'image') {
      component.data = this.formatCloudinaryData(component.data)
    }

    return component
  }

  formatCloudinaryData(data) {
    const cloudinary = Cloudinary.new({ cloud_name: this.cloudinaryCloudName })
    const asset = data?.file?.[0]
    if (!asset) return { defaultSrc: '', sources: [] }
    const id = asset.public_id
    const version = asset.version

    const imageSizes = [80, 320, 640, 1200, 1980, 2400]

    const options = {
      secure: true, // Use https
      version: version,
      quality: 'auto:best',
      fetchFormat: 'auto',
      crop: 'scale',
      ...this.cloudinaryImagesOptions
    }

    const output = {
      asBackground: !!data.asBackground,
      fitType: data.fitType || 'cover',
      horizontalAlignment: data.horizontalAlignment || 'center',
      verticalAlignment: data.verticalAlignment || 'center',
      defaultSrc: cloudinary.url(id, { ...options, width: 640 }),
      media: null,
      alt: data.alt || '',
      sources: [
        {
          type: 'image/jpeg',
          media: null,
          srcSet: imageSizes.map((width) => ({
            width,
            src: cloudinary.url(id, { ...options, width })
          }))
        },
        {
          type: 'image/webp',
          media: null,
          srcSet: imageSizes.map((width) => ({
            width,
            src: cloudinary.url(id, { ...options, width })
          }))
        }
      ]
    }

    return output
  }

  findComponentNode(component, referenceId) {
    if (component.referenceId === referenceId) {
      return component
    }

    const { data } = component
    let childNodes = []

    if (data.components) {
      childNodes = [...data.components]
    }

    if (data.componentGroups) {
      data.componentGroups.forEach((group) => {
        group.components.forEach((component) => {
          childNodes.push(component)
        })
      })
    }

    if (childNodes.length > 0) {
      for (let i = 0; i < childNodes.length; i++) {
        const match = this.findComponentNode(childNodes[i], referenceId)
        if (match) {
          return match
        }
      }
    }

    return undefined
  }

  async getTopSearchSuggestions(localeCode) {
    try {
      const client = this.getClient()
      const response = await client.getEntries({
        content_type: 'productList',
        'fields.identifier': 'suggested-products',
        locale: localeCode || this.localeCode
      })
      const formatted = this.formatResponse(response)
      return formatted && formatted.length && formatted[0]
    } catch (e) {
      console.error('Could not get top search suggestions', e)
    }
  }

  async getYouMightAlsoLikeProducts(localeCode) {
    try {
      const client = this.getClient()
      const response = await client.getEntries({
        content_type: 'productList',
        'fields.identifier': 'you-might-also-like',
        locale: localeCode || this.localeCode
      })
      const formatted = this.formatResponse(response)
      return formatted && formatted.length && formatted[0]
    } catch (e) {
      console.error('Could not get you might also like', e)
    }
  }

  parseEntries(data) {
    const parsedData = this.getClient().parseEntries(data)
    const formattedData = this.formatResponse(parsedData)
    return formattedData
  }

  filterNotificationsByLocale(bars, localeCode) {
    return bars.filter(
      (n) =>
        !n.exclusiveLocales ||
        (n.exclusiveLocales && n.exclusiveLocales.find((l) => l === localeCode))
    )
  }

  async getNotificationBars(localeCode, geoLocaleCode) {
    try {
      const client = this.getClient()
      const result = await client.getEntries({
        content_type: 'notificationBar',
        locale: localeCode || this.localeCode
      })
      const formattedData = this.formatResponse(result)
      const filtered = this.filterNotificationsByLocale(
        formattedData,
        geoLocaleCode || localeCode
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
        locale: localeCode || this.localeCode
      })
      const formatted = this.formatResponse(response)
      return formatted && formatted.length && formatted[0]
    } catch (e) {
      console.log(e)
    }
  }

  async getHeaderMenu(localeCode) {
    try {
      const client = this.getClient()
      const response = await client.getEntries({
        content_type: 'menuConfiguration',
        'fields.text': 'global-header-menu',
        include: 3,
        locale: localeCode || this.localeCode
      })
      const formatted = this.formatResponse(response)
      return formatted && formatted.length && formatted[0].children
    } catch (e) {
      console.log(e)
    }
  }

  async getPageFooter(localeCode) {
    try {
      const client = this.getClient()
      const response = await client.getEntries({
        content_type: 'menuConfiguration',
        'fields.text': 'global-footer',
        include: 3,
        locale: localeCode || this.localeCode
      })
      const formatted = this.formatResponse(response)
      return formatted && formatted.length && formatted[0]
    } catch (e) {
      console.log(e)
    }
  }

  async getTranslations(localeCode) {
    try {
      const client = this.getClient()
      const response = await client.getEntries({
        content_type: 'customConfig',
        'fields.slug': 'translations',
        locale: localeCode || this.localeCode
      })
      const formatted = this.formatResponse(response)
      return formatted && formatted.length && formatted[0]
    } catch (e) {
      console.error('Could not get translations', e)
    }
  }
}
