import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Grid } from './styled'
import ProductCard from '../ProductCard'

export const ProductGrid = ({ products, children }) => {
  return (
    <Wrapper className='productGrid'>
      <Grid>
        {products.map(p => <ProductCard key={p.id} {...p} />)}
      </Grid>
      {children}
    </Wrapper>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  children: PropTypes.node
}

export default ProductGrid
