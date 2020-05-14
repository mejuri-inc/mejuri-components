import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggle } from 'app/store/searchOverlay/actions'
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
import { ReactComponent as CloseIcon } from 'app/resources/svg/close-icon.svg'
import debounce from 'lodash/debounce'
import TrackVisible from 'app/components/common/TrackVisible'
import SearchOverlaySuggestions from '../SearchOverlaySuggestions'
import ProductGrid from '../ProductGrid'
import { isOpened } from 'app/store/searchOverlay/selectors'
import { FormattedMessage } from 'react-intl'
import { searchHitsPerPage } from 'app/constants'
import { bp } from 'app/store/breakpoints/selectors'
import algoliaService from 'app/services/externals/algolia'

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
    this.index = null

    this.debouncedSearch = debounce(this.search.bind(this), this.debounceDelay)
  }

  componentDidMount() {
    const { bp } = this.props
    algoliaService.init({
      hitsPerPage: bp('lg')
        ? searchHitsPerPage.desktop
        : searchHitsPerPage.mobile
    })
  }

  get debounceDelay() {
    const { searchString } = this.state
    if (searchString.length <= 2) return 1000
    if (searchString.length <= 4) return 800
    return 600
  }

  setSearch = (query) => this.setState({ searchString: query })

  query = (query, config = {}) => {
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

  search = (e) => {
    const searchString = e.target.value
    this.query(searchString)
  }

  addPage = () => {
    this.setState({ isFetchingPage: true })
    const { searchString, results } = this.state

    this.query(searchString, { offset: results.length })
  }

  handleSearchChange = (e) => {
    e.persist()
    const searchString = e.target.value

    this.setState({ isFetching: true, searchString })
    this.debouncedSearch(e)
  }

  render() {
    const { isOpened, close } = this.props
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
                <Close onClick={() => close()}>
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
                    <TrackVisible onVisible={() => this.addPage()}>
                      <LoadMore isFetching={isFetchingPage} />
                    </TrackVisible>
                  )}
                </ProductGrid>
              ) : (
                <SearchOverlaySuggestions search={this.setSearch} />
              )}
            </Scrollable>
          </Content>
        </Wrapper>
      </Position>
    )
  }
}

MainSearch.propTypes = {
  isOpened: PropTypes.bool,
  close: PropTypes.func,
  bp: PropTypes.func
}

const mapStateToProps = (state) => ({
  isOpened: isOpened(state),
  bp: (name) => bp(state, name)
})

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(toggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)
