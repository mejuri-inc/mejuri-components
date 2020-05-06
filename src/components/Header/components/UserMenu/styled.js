import styled from 'styled-components'
import colors from '../../../../styles/colors'
import { fadeIn } from '../../../../styles/effects'
import { fontWeight } from '../../../../styles/settings'

export const Panel = styled.ul`
  ${fadeIn}
  display: none;
  position: absolute;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray1};
  padding: 30px 50px;
  top: 97%;
  right: -46px;
  margin: 0;
`
Panel.displayName = 'UserMenuPanel'

export const Wrapper = styled.div`
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${Panel} {
    display: block;
  }
`
Wrapper.displayName = 'WrapperUserMenu'

export const LabelChevron = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 15px;
    height: 6px;
    margin-left: 3px;
    transform: rotate(180deg);
  }
`
LabelChevron.displayName = 'UserMenuLabelChevron'

export const Option = styled.li`
  list-style-type: none;

  & > a {
    display: block;
    color: ${colors.black};
    font-weight: ${fontWeight.light};
    font-size: 14px;
    text-decoration: none;
    text-transform: none;
    white-space: nowrap;
    line-height: 20px;
    padding: 3.5px 0;

    &:hover {
      color: ${colors.darkGray1};
    }
  }
`
Option.displayName = 'UserMenuOption'
