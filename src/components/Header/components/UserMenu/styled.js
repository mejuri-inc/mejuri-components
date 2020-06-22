import styled from 'styled-components'
import colors from 'styles/colors'
import { fadeIn } from 'styles/effects'
import { fontWeight } from 'styles/settings'

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
  z-index: 5;
`
Panel.displayName = 'UserMenuPanel'

export const Wrapper = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 40px;
  position: relative;
  text-transform: uppercase;

  & > svg {
    width: 15px;
    height: 6px;
    margin-left: 3px;
    transform: rotate(180deg);
  }

  &:hover ${Panel} {
    display: block;
  }
`
Wrapper.displayName = 'WrapperUserMenu'

export const LabelChevron = styled.span`
  letter-spacing: 1px;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
