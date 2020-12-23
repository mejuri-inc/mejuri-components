import styled from 'styled-components'
import colors from 'styles/colors'

const md = '768px'

export const Wrapper = styled.div`
  padding: 40px 8.33vw 70px;
  background-color: ${colors.lightGray3};

  @media only screen and (min-width: ${md}) {
    display: none;
  }
`
Wrapper.displayName = 'MobileWrapperFooter'

export const Row = styled.div`
  display: grid;
  grid-template-columns: ${p => p.cols};
  grid-template-rows: 1fr;
  gap: 0px 5px;
  grid-gap: 0px 5px;

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
