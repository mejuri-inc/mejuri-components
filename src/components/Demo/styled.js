import styled from 'styled-components'

export const Button = styled.button`
  background: #fafafa;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  text-transform: uppercase;
  ${p => p.upsideDown && 'transform: rotate(180deg)'};
`
