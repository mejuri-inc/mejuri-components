import styled from 'styled-components'
import colors from 'styles/colors'
import { fadeIn } from 'styles/effects'

export const Wrapper = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  height: 40px;
  padding: 5px 0px;
  position: relative;
  width: 32px;
  min-width: 32px;
  background-color: ${colors.white};
  border: none;
  &:focus {
    outline: none;
  }
  svg {
    display: block;
    height: 18px;
    margin-bottom: 4px;
    width: 18px;
  }

  &:hover {
    svg {
      fill: ${(p) => p.theme.colors.grey};
    }
  }
`
Wrapper.displayName = 'CartIconWrapper'

export const Badge = styled.div`
  ${fadeIn}
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
