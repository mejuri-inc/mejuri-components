import styled from 'styled-components/macro'
import colors from 'styles/colors'

const md = '768px'

export const Wrapper = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 22px 8.33%;
  background-color: ${colors.lightGray3};
  @media only screen and (min-width: ${md}) {
    display: flex;
    width: unset;
  }
`
Wrapper.displayName = 'FooterSubFooter'

export const CurrencySelectorContainer = styled.div`
  margin-right: auto;
`
Wrapper.displayName = 'CurrencySelectorContainer'
