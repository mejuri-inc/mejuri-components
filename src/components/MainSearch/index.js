import React, { PureComponent } from 'react'
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
  LoadMore
} from './styled'
import debounce from 'lodash.debounce'
import IsOnScreen from 'components/common/IsOnScreen'
import SearchOverlaySuggestions from './components/SearchOverlaySuggestions'
import ProductGrid from './components/ProductGrid'
import CloseIcon from 'resources/icons/CloseIcon'
import Overlay from 'components/common/Overlay'
import { FormattedMessage } from 'react-intl'
import algoliaService from './service'

const typingDelay = 1000

export class MainSearch extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: false,
      isFetchingPage: false,
      searchString: '',
      results: [],
      count: 0
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
  }

  componentDidMount() {
    algoliaService.init()
  }

  setSearch(query) {
    this.setState({ searchString: query })
    this.query(query)
  }

  query(query, config = {}) {
    algoliaService
      .search(query, config)
      .then((response) => {
        this.setState((state) => ({
          count: response.count,
          results: state.results.concat(response.results),
          isFetching: false,
          isFetchingPage: false
        }))
      })
      .catch((e) => console.log('Error in search:', e)) // eslint-disable-line no-console
  }

  addPage() {
    this.setState({ isFetchingPage: true })
    const { searchString, results } = this.state

    this.query(searchString, { offset: results.length })
  }

  close() {
    const { close } = this.props
    this.setState(
      {
        searchString: '',
        results: [],
        isFetching: false
      },
      () => close()
    )
  }

  handleSearchChange(e) {
    e.persist()
    const { onSearchTracking } = this.props
    const searchString = e.target.value

    this.setState({ isFetching: true, searchString })
    onSearchTracking({ query: searchString })

    this.debouncedSearch(e)
  }

  render() {
    const { isOpened } = this.props
    const {
      isFetching,
      isFetchingPage,
      searchString,
      results,
      count
    } = this.state

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
              {!!results.length && (
                <NumberOfResults>
                  {count} <FormattedMessage id='header.search.results' />
                </NumberOfResults>
              )}
              {results.length ? (
                <ProductGrid products={results}>
                  {results.length < count && (
                    <IsOnScreen onVisible={() => this.addPage()}>
                      <LoadMore isFetching={isFetchingPage} />
                    </IsOnScreen>
                  )}
                </ProductGrid>
              ) : (
                <SearchOverlaySuggestions search={this.setSearch} />
              )}
            </Scrollable>
          </Content>
        </Wrapper>
        {isOpened && <Overlay />}
      </Position>
    )
  }
}

MainSearch.propTypes = {
  isOpened: PropTypes.bool,
  close: PropTypes.func,
  onSearchTracking: PropTypes.func
}

MainSearch.defaultProps = {
  close: () => {
    console.error('close prop missing in <MainSearch />')
  },
  onSearchTracking: () => {
    console.error('onSearchTracking prop missing in <MainSearch />')
  }
}

export default MainSearch
