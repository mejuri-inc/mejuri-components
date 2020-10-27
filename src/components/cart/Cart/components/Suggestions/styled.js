import styled from 'styled-components'

export const Legend = styled.h5`
  font-size: 14px;
  font-weight: ${(p) => p.theme.fontWeight.light};
  margin: 0;
  margin-top: 8px;
  padding: 0;
  text-transform: none;
`
Legend.displayName = 'SuggestedProductsLegend'

export const Title = styled.h4`
  font-size: 14px;
  font-weight: ${(p) => p.theme.fontWeight.regular};
  margin: 0;
  padding: 0;
  text-transform: none;
`
Title.displayName = 'SuggestedProductsTitle'

export const Wrapper = styled.div`
  background: ${(p) => p.theme.colors.lightGray3};
  display: block;
  padding: 20px 0;
  width: 100%;
`
Wrapper.displayName = 'SuggestedProductsWrapper'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
List.displayName = 'SuggestedProductsList'

export const Item = styled.li`
  align-items: center;
  display: flex;
  height: 120px;
  padding-right: 30px;
  width: 100%;
`
Item.displayName = 'SuggestedProductsItem'
export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
Columns.displayName = 'SuggestedColumnsProductsItem'

export const Image = styled.img`
  height: 120px;
  width: 120px;
  margin: 0 20px;
`

export const Texts = styled.span`
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
`

export const AddButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${(p) =>
    p.isFetching ? (p) => p.theme.colors.lightGray3 : 'transparent'};
  border: 1px solid ${(p) => p.theme.colors.black};
  border-color: ${(p) =>
    p.isFetching ? p.theme.colors.lightGray3 : p.theme.colors.black};
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 35px;
  font-size: 14px;
  font-weight: ${(p) => p.theme.fontWeight.regular};
  text-transform: uppercase;
  transition: all 0.25s ease;
  margin-top: 16px;

  &:hover {
    background-color: ${(p) =>
      p.isFetching ? 'transparent' : p.theme.colors.black};
    color: ${(p) => p.theme.colors.white};
  }
`

export const Link = styled.a`
  position: relative;
  color: black;
  font-size: 16px;
  font-weight: ${(p) => p.theme.fontWeight.regular};
  text-decoration: none;
  transition: all 0.25s ease;
  &::after {
    content: '';
    position: absolute;
    height: 0.2px;
    width: 100%;
    background: #000;
    left: 0;
    bottom: 3px;
    background: ${(p) => p.theme.colors.black};
  }
  &:hover {
    color: ${(p) => p.theme.colors.darkGray1};
  }
  &::after:after {
    background: ${(p) => p.theme.colors.darkGray1};
  }
`

export const Price = styled.p`
  font-size: 12px;
  font-weight: ${(p) => p.theme.fontWeight.light};
`

export const Header = styled.div`
  padding: 0 30px;
  margin-bottom: 15px;
`
