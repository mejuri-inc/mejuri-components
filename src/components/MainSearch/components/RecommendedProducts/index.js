import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Title, List, Product, Image, Name, Details } from './styled'

const RecommendedProducts = ({ products, apiHost }) => (
  <>
    <Title>
      <FormattedMessage id='header.search.recommendedProductsTitle' />
    </Title>
    <List>
      {products.map((item) => {
        return (
          <Product key={item.id}>
            <Image href={`${apiHost}/shop/products/${item.slug}`}>
              <img
                src={item.images_versions[0].attachment_url_small}
                alt={item.name}
              />
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

export default RecommendedProducts
