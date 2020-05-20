import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from '../Thumbnail'
import { ElementWrapper, List, ListElement, RemoveButton } from './styled'
import CloseIcon from 'resources/icons/CloseIcon'
import ItemProperties from '../ItemProperties'
import ItemPOS from '../ItemPOS'
import get from 'lodash/get'

export const ItemsList = ({
  currency,
  items = [],
  remove,
  isPos,
  updateQuantity,
  setPickup
}) => {
  if (!items || !items.length) return null
  return (
    <List>
      {items.map((i) => {
        const imageUrl = get(i, 'variant.images[0].attachmentUrl')
        const alt = get(i, 'variant.images[0].alt')
        const href = get(i, 'variant.slug')
        return (
          <ListElement key={i.id}>
            <ElementWrapper>
              <RemoveButton onClick={() => remove(i.id)}>
                <CloseIcon />
              </RemoveButton>
              {imageUrl && <Thumbnail href={href} src={imageUrl} alt={alt} />}
              <ItemProperties
                item={i}
                currency={currency}
                updateQuantity={updateQuantity}
              />
            </ElementWrapper>
            {isPos && (
              <ItemPOS
                available={i.availableForPickUp}
                itemId={i.id}
                pickUp={i.pickUp}
                quantity={i.quantity}
                setPickUp={setPickup}
              />
            )}
          </ListElement>
        )
      })}
    </List>
  )
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.shape({
        slug: PropTypes.string,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            attachmentUrl: PropTypes.string,
            alt: PropTypes.string
          })
        )
      })
    })
  ),
  remove: PropTypes.func,
  currency: PropTypes.string,
  isPos: PropTypes.bool,
  updateQuantity: PropTypes.func
}

ItemsList.defaultProps = {
  items: []
}

export default ItemsList
