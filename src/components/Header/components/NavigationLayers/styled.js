import styled from 'styled-components'
import colors from '../../../../styles/colors'
import { fadeIn } from '../../../../styles/effects'
import { fontWeight } from '../../../../styles/settings'

export const Layers = styled.div`
  position: relative;
  height: 0;
  width: 100%;
`
Layers.displayName = 'HeaderDesktopLayers'

export const Layer = styled.div`
  ${fadeIn};
  background: white;
  border-bottom: 1px solid ${colors.whiteSmoke};
  display: ${p => p.active ? 'flex' : 'none'};
  min-height: 300px;
  padding: ${p => `30px 0 30px ${30 + (90 * p.order)}px`};
  position: absolute;
  top: 0%;
  width: 100%;
`
Layer.displayName = 'HeaderDesktopLayer'

export const Column = styled.div`
  min-width: 200px;
  padding-right: 40px;
`
Column.displayName = 'HeaderDesktopColumn'

export const MenuTitle = styled.div`
  padding: 8px 0;
`
MenuTitle.displayName = 'HeaderDesktopMenuTitle'

export const MenuItem = styled.a`
  color: ${colors.black};
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-weight: ${fontWeight.light};
  letter-spacing: 0.375px;
  padding: 8px 0;
  text-decoration: none;

  &:hover {
    color: ${colors.grey};
  }
`
MenuItem.displayName = 'HeaderDesktopMenuItem'
