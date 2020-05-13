import styled from 'styled-components'
import colors from '../../../../../styles/colors'
import { fontWeight } from '../../../../../styles/settings'

export const Legend = styled.h5`
  font-size: 14px;
  font-weight: ${fontWeight.light};
  margin: 0;
  margin-top: 8px;
  padding: 0;
  text-transform: none;
`
Legend.displayName = 'SuggestedProductsLegend'

export const Title = styled.h4`
  font-size: 14px;
  font-weight: ${fontWeight.regular};
  margin: 0;
  padding: 0;
  text-transform: none;
`
Title.displayName = 'SuggestedProductsTitle'

export const Wrapper = styled.div`
  background: ${colors.lightGray3};
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
  justify-content: space-between;
  padding-right: 30px;
  width: 100%;
`
Item.displayName = 'SuggestedProductsItem'

export const Image = styled.img`
  height: 120px;
  width: 120px;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`

export const AddButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${p => p.isFetching ? colors.lightGray3 : 'transparent'};
  border: 1px solid ${colors.black};
  border-color: ${p => p.isFetching ? colors.lightGray3 : colors.black};
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 35px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.25s ease;
  width: 85px;

  &:hover {
    background-color: ${p => p.isFetching ? 'transparent' : colors.black};
    color: ${colors.white};
  }
`

export const Link = styled.a`
  color: black;
  font-size: 16px;
  font-weight: ${fontWeight.light};
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    color: ${colors.grayLinkHover};
    text-decoration: none;
  }
`

export const Price = styled.span`
  font-size: 12px;
  font-weight: ${fontWeight.light};
  margin-top: 10px;
`

export const Header = styled.div`
  padding: 0 30px;
  margin-bottom: 15px;
`
