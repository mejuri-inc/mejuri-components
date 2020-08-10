import UserConsent from './index'

describe('UserConsent', () => {

  beforeEach(()=>{
    UserConsent.BYPASS_PRIVACY_PREFERENCES = false
  })

  //-------------------------------------------------------------------------------

  it(`Available services match user preferences (Strictly necessary)`, async () => {
    window.OnetrustActiveGroups = ',C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getAvailableServices()).toMatchSnapshot()
  })

  it(`Active categories match user preferences (Strictly necessary)`, async () => {
    window.OnetrustActiveGroups = ',C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getActiveCategories()).toMatchSnapshot()
  })

  //-------------------------------------------------------------------------------

  it(`Available services match user preferences (Performance)`, async () => {
    window.OnetrustActiveGroups = ',C0002,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getAvailableServices()).toMatchSnapshot()
  })

  it(`Active categories match user preferences (Performance)`, async () => {
    window.OnetrustActiveGroups = ',C0002,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getActiveCategories()).toMatchSnapshot()
  })

  //-------------------------------------------------------------------------------

  it(`Available services match user preferences (Functional)`, async () => {
    window.OnetrustActiveGroups = ',C0003,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getAvailableServices()).toMatchSnapshot()
  })

  it(`Active categories match user preferences (Functional)`, async () => {
    window.OnetrustActiveGroups = ',C0003,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getActiveCategories()).toMatchSnapshot()
  })

  //-------------------------------------------------------------------------------

  it(`Available services match user preferences (Targeting)`, async () => {
    window.OnetrustActiveGroups = ',C0004,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getAvailableServices()).toMatchSnapshot()
  })

  it(`Active categories match user preferences (Targeting)`, async () => {
    window.OnetrustActiveGroups = ',C0004,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getActiveCategories()).toMatchSnapshot()
  })

  //-------------------------------------------------------------------------------

  it(`Available services match user preferences (Social Media)`, async () => {
    window.OnetrustActiveGroups = ',C0005,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getAvailableServices()).toMatchSnapshot()
  })

  it(`Active categories match user preferences (Social Media)`, async () => {
    window.OnetrustActiveGroups = ',C0005,C0001,'
    UserConsent.onUpdate()
    expect(UserConsent.getActiveCategories()).toMatchSnapshot()
  })

  //-------------------------------------------------------------------------------

  it(`All services are avialable when the bypass option is enabled`, async () => {
    window.OnetrustActiveGroups = ',C0001,'
    UserConsent.BYPASS_PRIVACY_PREFERENCES = true
    UserConsent.onUpdate()
    expect(UserConsent.getAvailableServices()).toMatchSnapshot()
  })

  it(`All categories are active when the bypass option is enabled`, async () => {
    window.OnetrustActiveGroups = ',C0001,'
    UserConsent.BYPASS_PRIVACY_PREFERENCES = true
    UserConsent.onUpdate()
    expect(UserConsent.getActiveCategories()).toMatchSnapshot()
  })





})
