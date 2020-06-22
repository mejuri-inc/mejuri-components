import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'components/common/Spinner'
import { FormattedMessage } from 'react-intl'

import {
  AddButton,
  Image,
  Item,
  Link,
  List,
  Texts,
  Wrapper,
  Columns
} from './styled'

export class Suggestions extends React.PureComponent {
  render() {
    const { items, isFetching, addSuggestion, lineItems } = this.props

    if (!items || !items.length) return null
    const products = items.filter(p => p.inStock && !lineItems.find(li => li.master.id === p.masterId))

    if (!products.length) return null

    if (isFetching) return <Spinner />

    return (
      <Wrapper>
        {/*<Header>*/}
        {/*  <Title>*/}
        {/*    <FormattedMessage id='cart.suggestions.title' />*/}
        {/*  </Title>*/}
        {/*  <Legend>*/}
        {/*    <FormattedMessage id='cart.suggestions.legend' />*/}
        {/*  </Legend>*/}
        {/*</Header>*/}
        <List>
          {products.map((i) => (
            <Item key={i.id}>
              {i.image && i.image.small && <Image src={i.image.small} />}
              <Columns>
                <Texts>
                  <Link href={i.path}>{i.displayName}</Link>
                  <FormattedMessage id='cart.suggestions.price' values={ { price: i.price } }/>
                </Texts>
                <AddButton
                  onClick={() => addSuggestion(i.masterId)}
                  isFetching={i.isFetching}
                  disabled={i.isFetching}
                >
                  <FormattedMessage id='cart.suggestions.add' />
                </AddButton>
              </Columns>
            </Item>
          ))}
        </List>
      </Wrapper>
    )
  }
}

Suggestions.propTypes = {
  lineItems: PropTypes.array,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      masterId: PropTypes.number.isRequired,
      isFetching: PropTypes.bool,
      image: PropTypes.shape({
        small: PropTypes.string
      }).isRequired
    })
  ),
  isFetching: PropTypes.bool,
  addSuggestion: PropTypes.func
}

export default Suggestions

// const mapStateToProps = state => ({
//   isFetching: isFetching(state),
//   items: getDedupeSuggestions(state)
// })
//
// const mapDispatchToProps = dispatch => ({
//   addSuggestion: itemId => dispatch(addSuggestedItemToOrder(itemId))
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Suggestions)
