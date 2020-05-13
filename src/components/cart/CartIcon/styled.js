import styled from 'styled-components'
import colors from '../../../styles/colors'

export const Wrapper = styled.button`
  position: relative;
  background: transparent;
  padding: 0;
  appearance: none;
  outline: 0;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`
Wrapper.displayName = 'CartIconWrapper'

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${colors.lightGray1};
  font-size: 12px;
`
Badge.displayName = 'CartIconBadge'

export const Icon = styled.div`
  width: 20px;
  height: 22px;
`
Icon.displayName = 'CartIconIcon'
