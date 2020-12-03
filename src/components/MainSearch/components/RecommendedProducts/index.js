import React from 'react'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import { Title, List, Product, Image, Name, Details } from './styled'

const RecommendedProducts = ({ products, apiHost }) => (
  <>
    <Title>
      <FormattedMessageWithLoader id='header.search.recommendedProductsTitle' />
    </Title>
    <List>
      {products.map((item) => {
        return (
          <Product key={item.id}>
            <Image href={`${apiHost}/shop/products/${item.slug}`}>
              <img src={item.image.small} alt={item.name} />
            </Image>

            <Name href={`${apiHost}/shop/products/${item.slug}`}>
              {item.name}
            </Name>

            <Details>{item.material_name}</Details>
          </Product>
        )
      })}
    </List>
  </>
)

RecommendedProducts.defaultProps = {
  apiHost: ''
}

export default RecommendedProducts
