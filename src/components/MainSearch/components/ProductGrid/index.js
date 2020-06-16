import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Grid, Children } from './styled'
import ProductCard from '../ProductCard'

export const ProductGrid = ({ products, children }) => {
  return (
    <Wrapper className='productGrid'>
      <Grid>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </Grid>
      <Children>{children}</Children>
    </Wrapper>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  children: PropTypes.node
}

export default ProductGrid
