import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
`
Wrapper.displayName = 'CartHeaderWrapper'

export const Back = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 28px;
  padding: 0;
  width: 28px;
`
Back.displayName = 'CartHeaderBack'

export const Body = styled.p`
  font-size: 14px;
  line-height: 14px;
  margin: 0;
`
Body.displayName = 'CartHeaderBody'
