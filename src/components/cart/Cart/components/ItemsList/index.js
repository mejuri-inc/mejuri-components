import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from '../Thumbnail'
import { ElementWrapper, List, ListElement, RemoveButton } from './styled'
import CloseIcon from 'resources/icons/CloseIcon'
import ItemProperties from '../ItemProperties'
import ItemPOS from '../ItemPOS'
import get from 'lodash.get'

export const ItemsList = ({
  currency,
  items = [],
  remove,
  isPos,
  updateQuantity,
  setWalkout,
  trackIncreaseProduct,
  trackDecreaseProduct,
  trackRemoveItem,
  isBlackfriday
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
              {imageUrl && (
                <Thumbnail
                  href={`/shop/products/${href}`}
                  src={imageUrl}
                  alt={alt}
                  data-h='cart-product-link'
                />
              )}
              <ItemProperties
                item={i}
                specialMessage={
                  isBlackfriday && !i.isbundle && 'excludedFromBlackFriday'
                }
                currency={currency}
                updateQuantity={updateQuantity}
                trackIncrease={(q) =>
                  trackIncreaseProduct({ lineItem: i, quantity: q })
                }
                trackDecrease={(q) =>
                  trackDecreaseProduct({ lineItem: i, quantity: q })
                }
              />
              <RemoveButton
                onClick={() => {
                  remove(i.id)
                  trackRemoveItem({ lineItem: i, quantity: i.quantity })
                }}
                data-h='cart-remove-line-item-btn'
              >
                <CloseIcon />
              </RemoveButton>
            </ElementWrapper>
            {isPos && (
              <ItemPOS
                available={i.availableForWalkout}
                itemId={i.id}
                walkout={i.walkout}
                quantity={i.quantity}
                setWalkout={setWalkout}
                forceWalkout={i.forceWalkout}
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
  updateQuantity: PropTypes.func,
  trackIncreaseProduct: PropTypes.func,
  trackDecreaseProduct: PropTypes.func,
  trackRemoveItem: PropTypes.func
}

ItemsList.defaultProps = {
  items: []
}

export default ItemsList
