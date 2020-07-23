import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
  border: none;
  height: 40px;
  padding: 5px;
  text-decoration: none;
`
Wrapper.displayName = 'UserSelectionWrapper'

export const SignUpLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }

  &:hover {
    color: ${(p) => p.theme.colors.grey};
  }
`
SignUpLink.displayName = 'UserSelectionSignUp'
