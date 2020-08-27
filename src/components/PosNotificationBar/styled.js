import styled from 'styled-components'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

export const Wrapper = styled.div`
  background-color: ${colors.black};
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${colors.white};
  font-weight: ${fontWeight.light};
  letter-spacing: 1px;
  line-height: 18px;
  font-size: 14px;
  align-items: center;
  @media (min-width: 768px) {
    padding: 10px;
    font-size: 15px;
  }
`
Wrapper.displayName = 'POSNotificationWrapper'

export const POSName = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
`
POSName.displayName = 'POSName'

export const Buyer = styled.div`
  & > a {
    color: ${colors.white};
    white-space: nowrap;

    &:focus {
      outline: none;
    }
  }
`
Buyer.displayName = 'POSBuyer'
