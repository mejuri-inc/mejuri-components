import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  height: 53px;
  width: 100%;
  align-items: center;
  appearance: none;
  border: 1px solid ${colors.black};
  border-color: ${(p) => (p.isFetching ? colors.lightGray3 : colors.black)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.25s ease;
  margin-top: 16px;

  img {
    background-image: -webkit-named-image(apple-pay-logo-black);
    width: 60px;
    margin: auto;
    padding: 10px;
    display: block;
  }
    
  &:active {
    background-color: #286090;
  }  

  &:focus, &:hover {
    background-color: $white;
  }
`
Wrapper.displayName = 'ApplePayButtonWrapper'


