import styled from 'styled-components'
import colors from 'styles/colors'

export const Wrapper = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  height: 40px;
  padding: 8px 9px 10px;
  position: relative;
  width: 40px;
`
Wrapper.displayName = 'CartIconWrapper'

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${colors.lightGray1};
  font-size: 12px;
`
Badge.displayName = 'CartIconBadge'
