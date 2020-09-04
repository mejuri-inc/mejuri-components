import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.86px;
  line-height: 18px;
  margin: 0 0 12px;
  text-transform: uppercase;
`
Title.displayName = 'RecommendedTitle'

export const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-gap: 16px;
  margin: 0%;
`
List.displayName = 'RecommendedList'

export const Product = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`
Product.displayName = 'RecommendedProduct'

export const Image = styled.a`
  display: block;
  position: relative;
  padding-top: 100%;
  background: #fafafa;
  cursor: pointer;
  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
`
Image.displayName = 'RecommendedProductImage'

export const Name = styled.a`
  display: block;
  color: ${(p) => p.theme.colors.black};
  min-height: 22px;
  font-weight: 700;
  text-decoration: none;
  line-height: 22px;
  margin-top: 10px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
`
Name.displayName = 'RecommendedProductName'

export const Details = styled.span`
  font-weight: 300;
  display: block;
  text-decoration: none;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
`
Details.displayName = 'RecommendedDetails'
