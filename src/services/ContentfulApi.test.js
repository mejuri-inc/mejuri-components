import { ContentfulAPI } from './ContentfulApi'
import { looks, queryOptions, credentials } from './ContentfulAPI.mock'

const mockedContentfulClient = { getEntries: async (query) => looks }

describe('ContentfulAPI', () => {
  it('Response is formatted properly', async () => {
    const instance = new ContentfulAPI(credentials)
    const formattedResponse = instance.formatResponse(looks)
    expect(formattedResponse).toMatchSnapshot()
  })

  it('Query Options are formatted properly', async () => {
    const instance = new ContentfulAPI(credentials)
    const formattedQuery = instance.formatQuery(queryOptions)
    expect(formattedQuery).toMatchSnapshot()
  })

  it('It fetches lookbook pages', async () => {
    const instance = new ContentfulAPI(credentials)
    const response = await instance.getLookBookPages({
      slug: 'chain-reaction',
      client: mockedContentfulClient
    })
    expect(response).toMatchSnapshot()
  })

  it('Send preview mode requests when preview mode is selected', async () => {
    const previewApi = new ContentfulAPI(credentials)
    previewApi.setPreviewMode()
    const response = await previewApi.getLookBookPages({
      slug: 'chain-reaction',
      client: mockedContentfulClient
    })
    expect(response).toMatchSnapshot()
    expect(previewApi.host === 'preview.contentful.com')
  })
})
