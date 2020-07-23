import styled from 'styled-components/macro'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  display: flex;
`
Wrapper.displayName = 'SocialLinksFooter'

export const IconLink = styled.a`
  cursor: pointer;
  font-size: 18px;
  margin-left: 22px;
  line-height: 18px;

  &:hover {
    color: ${colors.grayLinkHover};
  }
`
IconLink.displayName = 'IconLinkFooter'
