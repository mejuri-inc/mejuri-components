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
  Also,
  AlsoList,
  Item,
  ItemLink,
  LinkName,
  Details
} from './styled'
import debounce from 'lodash.debounce'
import IsOnScreen from 'components/common/IsOnScreen'
import SearchOverlaySuggestions from './components/SearchOverlaySuggestions'
import ProductGrid from './components/ProductGrid'
import CloseIcon from 'resources/icons/CloseIcon'
import Overlay from 'components/common/Overlay'
import { FormattedMessage } from 'react-intl'
import AlgoliaService from './service'

const typingDelay = 1000

export class MainSearch extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: false,
      isFetchingPage: false,
      searchString: '',
      results: [],
      count: 0,
      alsoProducts: []
    }

    this.client = null
    this.debouncedSearch = debounce(
      function (e) {
        const searchString = e.target.value
        this.query(searchString)
      }.bind(this),
      typingDelay
    )
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.setSearch = this.setSearch.bind(this)
    this.input = createRef()
    this.scroll = createRef()

    this.service = null

    this.getProduct = async (slug) => {
      try {
        // there is a CORS problem so you can't use prod request url to test
        const response = await fetch(
          // `https://staging.mejuri.com/shop/api/products/${slug}`
          `https://mejuri.com/shop/api/products/${slug}`
        )
        const result = await response.json()
        result &&
          this.setState({
            alsoProducts: [...this.state.alsoProducts, result]
          })
      } catch (e) {
        console.log(e)
      }
    }

    this.getProducts = (productSlugs) => {
      productSlugs.map((s) => {
        this.getProduct(s)
      })
    }
  }

  componentDidMount() {
    const { appId, appKey, index } = this.props
    this.service = new AlgoliaService(appId, appKey, index)
  }

  componentDidUpdate(prevProps) {
    // Focus on the input when opening.
    const { current } = this.input
    if (this.props.isOpened && !prevProps.isOpened) {
      current && current.focus() && current.scrollIntoView()

      !this.state.alsoProducts.length > 0 &&
        this.getProducts(this.props.mightAlsoLikeProducts.productSlugs)
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

    this.setState({ isFetching: true, searchString, results: [] })

    this.debouncedSearch(e)
  }

  render() {
    const { isOpened, appId, appKey, index } = this.props
    const {
      isFetching,
      isFetchingPage,
      searchString,
      results,
      count
    } = this.state

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
            <Scrollable isFetching={isFetching}>
              {!!results.length && this.state.searchString !== '' && (
                <NumberOfResults>
                  {count} <FormattedMessage id='header.search.results' />
                </NumberOfResults>
              )}
              {this.state.searchString === '' ? (
                <SearchOverlaySuggestions
                  suggestions={this.props.topSearchSuggestions.productSlugs}
                  search={this.setSearch}
                />
              ) : results.length ? (
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
              ) : (
                !isFetching && (
                  <React.Fragment>
                    <NoResults>Sorry no results found</NoResults>
                    {this.state.alsoProducts.length > 0 && (
                      <React.Fragment>
                        <Also>OH, YOU MIGHT ALSO LIKE</Also>
                        <AlsoList>
                          {this.state.alsoProducts.map((item) => {
                            return (
                              <Item key={item.id}>
                                <ItemLink
                                  href={`https://mejuri.com/shop/products/${item.slug}`}
                                >
                                  <img
                                    src={
                                      item.images_versions[0]
                                        .attachment_url_small
                                    }
                                    alt={item.name}
                                  />
                                </ItemLink>
                                <LinkName
                                  href={`https://mejuri.com/shop/products/${item.slug}`}
                                >
                                  {item.name}
                                </LinkName>

                                <Details>{item.material_name}</Details>
                              </Item>
                            )
                          })}
                        </AlsoList>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )
              )}
            </Scrollable>
          </Content>
        </Wrapper>
        {isOpened && <Overlay />}
      </Position>
    )
  }
}

MainSearch.defaultProps = {
  close: () => {
    console.error('close prop missing in <MainSearch />')
  },
  trackSearch: () => {},
  trackSearchClose: () => {}
}

export default MainSearch
