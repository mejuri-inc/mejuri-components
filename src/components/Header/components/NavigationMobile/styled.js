import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  padding-left: 16px;
  width: 30%;
`
Wrapper.displayName = 'WrapperNavigation'

export const Hamburguer = styled.button`
  width: 20px;
  padding: 0;
  margin: 0;
  appearance: none;
  background: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
`
Hamburguer.displayName = 'HamburguerNavigation'
