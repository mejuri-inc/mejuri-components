import styled from 'styled-components/macro'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

export const Wrapper = styled.ul`
  border-top: 1px solid ${colors.lightGray1};
  list-style: none;
  margin: 0;
  padding: 15px 30px;
  width: 100%;
`
Wrapper.displayName = 'CartSummaryWrapper'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Row = styled.li`
  width: 100%;
  display: flex;
  font-size: 14px;
  font-weight: ${fontWeight.light};
  letter-spacing: 1px;
  line-height: 1.5;
  justify-content: space-between;
  margin-bottom: 0.35rem;
`
Row.displayName = 'CartSummaryRow'

Wrapper.displayName = 'CartSummaryWrapper'

export const Total = styled.li`
  display: flex;
  font-size: 16px;
  font-weight: ${fontWeight.regular};
  letter-spacing: 0.03rem;
  line-height: 1.5;
  justify-content: space-between;
`
Total.displayName = 'CartSummaryTotal'
