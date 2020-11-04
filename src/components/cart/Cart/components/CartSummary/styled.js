import styled from 'styled-components'
import colors from 'styles/colors'

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
  color: ${(p) =>
    p.highlight ? p.theme.colors.cartHighlight : p.theme.colors.black};
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  font-weight: ${(p) =>
    p.highlight ? p.theme.fontWeight.regular : p.theme.fontWeight.light};
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 0.35rem;
  width: 100%;
`
Row.displayName = 'CartSummaryRow'

Wrapper.displayName = 'CartSummaryWrapper'

export const Total = styled.li`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03rem;
  line-height: 1.5;
  justify-content: space-between;
`
Total.displayName = 'CartSummaryTotal'
