import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 5px;
`

export const OrderNumber = styled.p.attrs({
  'data-h': 'order-number',
  'data-testid': 'order-number'
})`
  display: inline-block;
  margin: 0;
  padding: 5px;
  font-weight: bold;
  background: ${colors.beige};
  color: ${colors.white};
`
