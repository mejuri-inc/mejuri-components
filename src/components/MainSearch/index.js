import React, { PureComponent, createRef } from 'react'
import PropTypes from 'prop-types'
import {
  Content,
  Header,
  Hint,
  NumberOfResults,
  Position,
  SearchBox,
  Scrollable,
  Wrapper,
  Close,
  LoadMore,
  NoResults,
  LoadingSpinner
} from './styled'
import debounce from 'lodash.debounce'
import IsOnScreen from 'components/common/IsOnScreen'
import SearchOverlaySuggestions from './components/SearchOverlaySuggestions'
import ProductGrid from './components/ProductGrid'
import CloseIcon from 'resources/icons/CloseIcon'
import Overlay from 'components/common/Overlay'
import RecommendedProducts from './components/RecommendedProducts'
import { FormattedMessage } from 'react-intl'
import AlgoliaService from './service'

const TYPING_DELAY = 1000
const START_SEARCH_THRESHOLD = 3

export class MainSearch extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: false,
      isFetchingPage: false,
      searchString: '',
      results: [],
      count: 0,
      recommendedProducts: []
    }

    this.client = null
    this.debouncedSearch = debounce(
      function (e) {
        const searchString = e.target.value
        this.query(searchString)
      }.bind(this),
      TYPING_DELAY
    )
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.setSearch = this.setSearch.bind(this)
    this.input = createRef()
    this.scroll = createRef()

    this.service = null
  }

  componentDidMount() {
    const { appId, appKey, index } = this.props
    this.service = new AlgoliaService(appId, appKey, index)
  }

  componentDidUpdate(prevProps) {
    // Focus on the input when opening.
    const { current } = this.input
    const { recommendedProducts } = this.state
    const { isOpened, mightAlsoLikeProducts } = this.props

    if (isOpened && !prevProps.isOpened) {
      current && current.focus() && current.scrollIntoView()

      !recommendedProducts.length > 0 &&
        this.getProducts(mightAlsoLikeProducts.productSlugs)
    }
  }

  async getProducts(productSlugs) {
    try {
      const { apiHost } = this.props
      const { recommendedProducts } = this.state
      const response = await fetch(
        `${apiHost}/api/v1/products/get/${productSlugs}`
      )
      const result = await response.json()

      result &&
        this.setState({
          recommendedProducts: [...recommendedProducts, ...result.products]
        })
    } catch (e) {
      console.log(e)
    }
  }

  setSearch(query) {
    this.setState({ searchString: query })
    this.query(query)
  }

  query(query, config = {}) {
    const { trackSearch } = this.props
    this.service &&
      this.service
        .search(query, config)
        .then((response) => {
          this.setState(
            (state) => ({
              count: response.count,
              results: state.results.concat(response.results),
              isFetching: false,
              isFetchingPage: false
            }),
            () => trackSearch({ query: query })
          )
        })
        .catch((e) => console.log('Error in search:', e)) // eslint-disable-line no-console
  }

  addPage() {
    this.setState({ isFetchingPage: true })
    const { searchString, results } = this.state

    this.query(searchString, { offset: results.length })
  }

  close() {
    const { close, trackSearchClose } = this.props
    this.setState(
      {
        searchString: '',
        results: [],
        isFetching: false
      },
      () => {
        close()
        trackSearchClose()
      }
    )
  }

  handleSearchChange(e) {
    e.persist()
    const searchString = e.target.value
    const startSearching = searchString.length >= START_SEARCH_THRESHOLD

    this.setState({ isFetching: startSearching, searchString, results: [] })

    startSearching && this.debouncedSearch(e)
  }

  renderContent() {
    const {
      isFetchingPage,
      results,
      searchString,
      count,
      recommendedProducts
    } = this.state
    const { topSearchSuggestions, apiHost } = this.props

    // If user has not entered a product to search
    // show Suggestion products name list
    if (
      searchString.length < START_SEARCH_THRESHOLD &&
      topSearchSuggestions &&
      topSearchSuggestions.productSlugs
    ) {
      return (
        <SearchOverlaySuggestions
          suggestions={topSearchSuggestions.productSlugs}
          search={this.setSearch}
        />
      )
    }

    // If user did entered a product name
    // show a grid of products that match that name
    if (results.length) {
      return (
        <ProductGrid products={results} innerRef={this.scroll}>
          {results.length < count && (
            <IsOnScreen
              onVisible={() => this.addPage()}
              root={this.scroll.current}
              offset={400}
            >
              <LoadMore isFetching={isFetchingPage} />
            </IsOnScreen>
          )}
        </ProductGrid>
      )
    }

    // If none of the above then user entered a unknown product
    // Show a list of recomended products
    return (
      <>
        <NoResults>
          <FormattedMessage id='header.search.noResults' />
        </NoResults>
        {!!recommendedProducts && (
          <RecommendedProducts
            apiHost={apiHost}
            products={recommendedProducts}
          />
        )}
      </>
    )
  }

  render() {
    const { isOpened, appId, appKey, index } = this.props
    const { isFetching, searchString, results, count } = this.state

    if (!appId || !appKey || !index) {
      return null
    }

    return (
      <Position>
        <Wrapper isOpened={isOpened}>
          <Content>
            <Header>
              <SearchBox>
                <FormattedMessage id='header.search.placeholder'>
                  {(placeholderMsj) => (
                    <input
                      placeholder={placeholderMsj}
                      value={searchString}
                      onChange={this.handleSearchChange}
                      ref={this.input}
                    />
                  )}
                </FormattedMessage>
                <Close onClick={() => this.close()}>
                  {' '}
                  <CloseIcon />
                </Close>
              </SearchBox>
              <Hint>
                <FormattedMessage id='header.search.hint' />
              </Hint>
            </Header>
            <Scrollable>
              <LoadingSpinner isFetching={isFetching} />

              {searchString.length >= START_SEARCH_THRESHOLD &&
                !!results.length && (
                  <NumberOfResults>
                    {count} <FormattedMessage id='header.search.results' />
                  </NumberOfResults>
                )}

              {this.renderContent()}
            </Scrollable>
          </Content>
        </Wrapper>
        {isOpened && (
          <Overlay onClickHandler={() => this.close()} opacity={0} />
        )}
      </Position>
    )
  }
}

MainSearch.propTypes = {
  isOpened: PropTypes.bool,
  close: PropTypes.func,
  trackSearch: PropTypes.func,
  trackSearchClose: PropTypes.func,
  appId: PropTypes.string,
  appKey: PropTypes.string,
  index: PropTypes.string,
  apiHost: PropTypes.string,
  mightAlsoLikeProducts: PropTypes.shape({
    productSlugs: PropTypes.array
  }),
  topSearchSuggestions: PropTypes.shape({
    productSlugs: PropTypes.array
  })
}

MainSearch.defaultProps = {
  apiHost: typeof window !== 'undefined' ? window.location.origin : '',
  close: () => {
    console.error('close prop missing in <MainSearch />')
  },
  trackSearch: () => {},
  trackSearchClose: () => {},
  mightAlsoLikeProducts: { productSlugs: [] },
  topSearchSuggestions: {
    productSlugs: [
      'Hoop Earrings',
      'Diamond Necklace',
      'Zodiac Necklace',
      'Gold Bracelet',
      'Gold Necklace'
    ]
  }
}

export default MainSearch
