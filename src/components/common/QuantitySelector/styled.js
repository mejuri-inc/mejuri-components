import styled from 'styled-components'
import colors from '../../../styles/colors'
import { fontWeight } from '../../../styles/settings'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`
Wrapper.displayName = 'QuantitySelectorWrapper'

export const Btn = styled.button`
  background: transparent;
  border: none;
  color: ${colors.black};
  cursor: pointer;
  font-size: 20px;
  font-weight: ${fontWeight.regular};

  &:disabled {
    color: ${colors.darkGray2};
  }
`
Btn.displayName = 'QuantitySelectorBtn'

export const Quantity = styled.div`
  font-weight: ${fontWeight.light};
  min-width: 50px;
  text-align: center;
`
Quantity.displayName = 'QuantitySelectorQuantity'
