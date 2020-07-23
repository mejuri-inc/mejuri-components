import styled from 'styled-components/macro'
import colors from 'styles/colors'

const md = '768px'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 8.33vw;
  background-color: ${colors.lightGray3};

  @media only screen and (min-width: ${md}) {
    display: none;
  }
`
Wrapper.displayName = 'MobileWrapperFooter'

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin-top: 30px;
  }
`
Row.displayName = 'RowFooter'

export const CurrencySelector = styled.div`
  margin-right: auto;
`
CurrencySelector.displayName = 'MobileCurrencySelectorFooter'

export const SocialLinksContainer = styled.div`
  margin-left: auto;
`
SocialLinksContainer.displayName = 'MobileSocialLinksContainer'
