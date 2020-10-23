import styled from 'styled-components'
import { fadeIn } from 'styles/effects'

export const Panel = styled.ul`
  ${fadeIn}
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: ${(p) => {
    return p.theme.colors.white
  }};
  border: 1px solid ${(p) => p.theme.colors.lightGray1};
  margin: 0;
  padding: 30px 50px;
  position: absolute;
  right: -65px;
  text-align: left;
  top: 97%;
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
    transform: ${({ isOpen }) => (isOpen ? 'none' : 'rotate(180deg)')};
  }

  &:focus {
    outline: none;
  }
`
Wrapper.displayName = 'WrapperUserMenu'

export const LabelChevron = styled.span`
  letter-spacing: 1px;
  max-width: 57px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 300;
`
LabelChevron.displayName = 'UserMenuLabelChevron'

export const Option = styled.li`
  line-height: 20px;
  list-style-type: none;
  margin: 0;

  & > a {
    display: block;
    color: ${(p) => p.theme.colors.black};
    font-weight: ${(p) => p.theme.fontWeight.light};
    font-size: 14px;
    text-decoration: none;
    text-transform: none;
    white-space: nowrap;
    padding: 3.5px 0;
    font-weight: 300;

    &:hover {
      color: ${(p) => p.theme.colors.darkGray1};
    }
  }
`
Option.displayName = 'UserMenuOption'
