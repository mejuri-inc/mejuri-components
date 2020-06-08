import styled from 'styled-components'

export const Wrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
`
Wrapper.displayName = 'UserSelectionWrapper'

export const SignUpLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  text-transform: uppercase;
`
SignUpLink.displayName = 'UserSelectionSignUp'
