import styled from 'styled-components'
import ButtonLink from 'components/common/ButtonLink'
import colors from 'styles/colors'

export const UnderlinedButtonLink = styled(ButtonLink)`
  padding: 15px 0 0 0;
  text-decoration: none;
  border-bottom: 0.2px solid ${colors.black};
  &:hover {
    border-bottom: 0.2px solid ${colors.darkGray1};
  }
`
UnderlinedButtonLink.displayName = 'CartCouponUnderlinedButtonLink'

export const Wrapper = styled.div`
  min-height: 53px;
`
