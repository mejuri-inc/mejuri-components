import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'components/common/Spinner'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'

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
    const products = items.filter(
      (p) => p.inStock && !lineItems.find((li) => li.master.id === p.masterId)
    )

    if (!products.length) return null

    if (isFetching) return <Spinner />

    return (
      <Wrapper>
        <List>
          {products.map((i) => (
            <Item key={i.id}>
              {i.image && i.image.small && <Image src={i.image.small} />}
              <Columns>
                <Texts>
                  <Link href={i.path}>{i.displayName}</Link>
                  <FormattedMessageWithLoader
                    id='cart.suggestions.price'
                    values={{ price: i.price }}
                  />
                </Texts>
                <AddButton
                  onClick={() => addSuggestion(i.masterId)}
                  isFetching={i.isFetching}
                  disabled={i.isFetching}
                  data-h='cart-add-suggestion-icon'
                >
                  <FormattedMessageWithLoader id='cart.suggestions.add' />
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
