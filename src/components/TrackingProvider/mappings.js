import get from 'lodash.get'

export function mapLineItems(lineItems) {
  if (!lineItems || !lineItems.length) return []

  try {
    return lineItems.map((li, i) => {
      const parsedLineItem = mapLineItem(li)
      return {
        ...parsedLineItem,
        position: i + 1
      }
    })
  } catch (e) {
    console.error('Segment: Unable to map lineItems.', e)
    return []
  }
}

export function mapLineItem(lineItem) {
  const imageUrl = get(lineItem, 'variant.images[0].attachmentUrl')

  var master = lineItem.master
  var variant = lineItem.variant
  var options = variant.optionsText

  return {
    product_id: master.sku,
    sku: variant.sku,
    name: lineItem.accurateName,
    brand: 'Mejuri',
    variant: variant.material + (options ? ' - ' + options : ''),
    material: variant.material,
    price: +lineItem.price,
    quantity: +lineItem.quantity,
    url: `${window.location.origin}/shop/products/${variant.slug}`,
    image_url: imageUrl
  }
}

export function parseLineItemToSailthruSchema(lineItem, context) {
  const urlPrefix = `${window.location.origin}/shop/products/`
  const defaultImage = {
    attachment_url: '/assets/placeholders/product_image.png',
    attachment_large_url: '/assets/placeholders/product_image.png'
  }

  const images = lineItem.variant.images[0] || defaultImage
  return {
    url: `${urlPrefix}${lineItem.variant.slug}`,
    title: lineItem.variant.name,
    sku: lineItem.variant.sku,
    price: parseInt(lineItem.price * 100), // in cents
    qty:
      lineItem.id === context?.lineItem?.id
        ? context.quantity
        : lineItem.quantity,
    vars: { display_price: lineItem.displayAmount },
    images: {
      full: { url: images.attachmentLargeUrl },
      thumb: { url: images.attachmentUrl }
    }
  }
}
