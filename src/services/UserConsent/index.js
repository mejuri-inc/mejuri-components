
const CONSENT_CATEGORIES_DICTIONARY = {
  'C0001' : 'Strictly Necessary',
  'C0002' : 'Performance',
  'C0003' : 'Functional',
  'C0004' : 'Targeting',
  'C0005' : 'Social Media'
}

/*
  Map services with the cookie categories that corresponds
*/
const SERVICES_CATEGORIES = {
  'Sailthru'                :['Targeting','Functional','Performance'],
  'Google Analytics'        :['Performance'],
  'Pinterest Tag'           :['Targeting'],
  'Facebook Pixel'          :['Targeting'],
  'Twitter Ads'             :['Targeting'],
  'Google Tag Manager'      :['Strictly Necessary','Targeting','Functional','Performance','Social Media'],
  'Mouseflow'               :['Performance'],
  'Vimeo'                   :['Performance'],
  'AdRoll'                  :['Performance','Targeting'],
  'Google Ads (Gtag)'       :['Performance','Targeting'],
  'Podsights'               :['Performance','Targeting'],
  'Heap'                    :['Performance'],
  'ShareASale'              :['Performance','Targeting'],
  'The Trade Desk (Mejuri)' :['Performance','Targeting'],
  'Privy'                   :['Performance','Functional']
}


class UserConsent{


  // IF THIS FLAG IS PRESENT ALWAYS ENABLE ALL CATEGORIES
  BYPASS_PRIVACY_PREFERENCES = false

  consentCategories   = []
  activeCategories    = []
  servicesList        = []
  availableServices   = []
  unavailableServices = []
  callbacks           = []
  scripts             = []

  constructor(){
    this.onUpdate()
    if(typeof window !== 'undefined'){
      window.addEventListener('consent.onetrust',this._onConsentChange.bind(this))
      window.addEventListener('load',this._init.bind(this))
    }
  }

  onConsentChange(callback){
    this.callbacks.push(callback)
  }

  removeOnConsentChange(callback){
      this.callbacks = this.callbacks.filter( c => callback != c )
  }

  _onConsentChange(e){
    this.onUpdate()
    this.callbacks.forEach( cb => cb(this,e))
  }

  onUpdate(){
    this.consentCategories    = this.getConsentCategories()
    this.activeCategories     = this.getActiveCategories()
    this.servicesList         = this.getServicesList()
    this.availableServices    = this.getAvailableServices()
    this.unavailableServices  = this.getUnavailableServices()
    this._injectCode()
  }

  getActiveCategories(){
    return this.OtActiveGroups.map( id => CONSENT_CATEGORIES_DICTIONARY[id] || id )
  }

  get OtActiveGroups(){
    let activeGroups = [], OnetrustActiveGroups
    if(typeof window !== 'undefined') OnetrustActiveGroups = window.OnetrustActiveGroups
    if(this.BYPASS_PRIVACY_PREFERENCES){
      activeGroups = Object.keys(CONSENT_CATEGORIES_DICTIONARY)
    }else if(OnetrustActiveGroups){
      activeGroups = OnetrustActiveGroups.split(",").filter( id => id )
    }
    return activeGroups
  }

  getConsentCategories(){
    let categories = CONSENT_CATEGORIES_DICTIONARY
    return Object.keys(categories).map(key => categories[key])
  }

  isServiceAvailable(service){
    let available = false
    for(let category of SERVICES_CATEGORIES[service]){
      available = this.activeCategories.includes(category)
      if(!available) return
    }
    return available
  }

  getServicesList(){
    return Object.keys(SERVICES_CATEGORIES)
  }

  getServiceCategoriesId(service){
    const dictionary = CONSENT_CATEGORIES_DICTIONARY
    const serviceCategories = SERVICES_CATEGORIES[service]
    return serviceCategories.map(
      categoryName => {
        let categoryId
        for(let id in dictionary){
          if(dictionary[id] == categoryName){
            return categoryId = id
          }
        }
        return categoryId
      }
    )
  }

  getAvailableServices(){
    return this.servicesList.filter(this.isServiceAvailable.bind(this))
  }

  getUnavailableServices(){
    return this.servicesList.filter((service)=> !this.isServiceAvailable(service))
  }

  registerScript(service, code, parentNode){
    this._registerScript({ service, code, parentNode })
    /*
      Right after the script is registered,
      we'll try to inject it in case user already gave consent
    */
    this._injectCode()
  }

  _registerScript(service, code, parentNode = 'head'){
    this.scripts.push({ service, code, parentNode })
  }

  insertScriptTag({ code , parentNode }){
    const tag = document.createElement('script')
    tag.type  = 'text/javascript'
    document.querySelector(parentNode).appendChild(tag)
    tag.src   = code
  }

  _injectCode(){
    this.scripts.filter( script =>{
      let keep = true
      if(this.availableServices.includes(script.service)){
        switch(typeof script.code){
          case 'function':
            script.code()
            keep = false
            break
          case 'string':
            this.insertScriptTag(script)
            keep = false
            break
        }
      }
      return keep
    })
  }

  _init(){
    if(this.OtActiveGroups.length < 1 && !this.BYPASS_PRIVACY_PREFERENCES){
      setTimeout(this._init.bind(self),500)
    }else{
      this._onConsentChange()
    }
  }

}

const singleton = new UserConsent()

export default singleton
