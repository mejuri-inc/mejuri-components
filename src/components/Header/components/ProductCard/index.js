import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Name, Detail } from './styled'

export const ProductCard = ({ image, path, name, materialName }) => {
  return (
    <Card href={path}>
      <Image src={image.small || image.large} />
      <Name href={path}>{name}</Name>
      <Detail>{materialName}</Detail>
    </Card>
  )
}

ProductCard.propTypes = {
  image: PropTypes.shape({
    small: PropTypes.string,
    large: PropTypes.string
  }),
  path: PropTypes.string,
  name: PropTypes.string,
  materialName: PropTypes.string
}

export default ProductCard
