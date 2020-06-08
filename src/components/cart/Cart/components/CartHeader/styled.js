import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
`
Wrapper.displayName = 'CartHeaderWrapper'

export const Back = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  padding: 5px;
  transform: rotate(${(p) => (p.isOpened ? '180deg' : '0deg')});
  transition: transform 0.2s ease;
  width: 40px;
`
Back.displayName = 'CartHeaderBack'

export const Body = styled.p`
  font-size: 14px;
  line-height: 14px;
  margin: 0;
`
Body.displayName = 'CartHeaderBody'
