import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../../../../../components/common/Spinner'
import { FormattedMessage } from 'react-intl'

import { AddButton, Header, Image, Item, Legend, Link, List, Price, Texts, Title, Wrapper } from './styled'

export class Suggestions extends React.PureComponent {
  render () {
    const { items, isFetching, addSuggestion } = this.props

    if (!items || !items.length) return null

    if (isFetching) return <Spinner />

    return (
      <Wrapper>
        <Header>
          <Title>
            <FormattedMessage id='cart.suggestions.title' />
          </Title>
          <Legend>
            <FormattedMessage id='cart.suggestions.legend' />
          </Legend>
        </Header>
        <List>
          {items.map(i => (
            <Item key={i.id}>
              {i.image && i.image.small && <Image src={i.image.small} />}
              <Texts>
                <Link href={i.path}>{i.displayName}</Link>
                <Price>{i.price}</Price>
              </Texts>
              <AddButton
                onClick={() => addSuggestion(i.masterId)}
                isFetching={i.isFetching}
                disabled={i.isFetching}
              >
                <FormattedMessage id='cart.suggestions.add' />
              </AddButton>
            </Item>
          ))}
        </List>
      </Wrapper>
    )
  }
}

Suggestions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    masterId: PropTypes.number.isRequired,
    isFetching: PropTypes.bool,
    image: PropTypes.shape({
      small: PropTypes.string
    }).isRequired
  })),
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
