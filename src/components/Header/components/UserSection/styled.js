import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.a`
  height: inherit;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.black};
  border: none;
  height: 40px;
  padding: 5px;
  text-decoration: none;
  min-width: 98px;
  &:focus {
    outline: none;
  }
`
Wrapper.displayName = 'UserSelectionWrapper'

export const SignUpLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  font-weight: 300;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`
SignUpLink.displayName = 'UserSelectionSignUp'
