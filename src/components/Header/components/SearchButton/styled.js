import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  font-weight: 300;
  height: 40px;
  justify-content: center;
  letter-spacing: inherit;
  padding: 0;
  text-transform: uppercase;

  & > span {
    margin-top: 1px;
  }

  & > img {
    margin-right: 5px;
    width: 18px;
  }
`
