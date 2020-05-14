import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
`
Wrapper.displayName = 'UserSelectionWrapper'

export const SignUpLink = styled.a`
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.darkGray1};
  }
`
SignUpLink.displayName = 'UserSelectionSignUp'
